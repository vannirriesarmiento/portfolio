import { after, before, beforeEach, test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
    assertFails,
    assertSucceeds,
    initializeTestEnvironment,
} from "@firebase/rules-unit-testing";
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    serverTimestamp,
    setDoc,
    Timestamp,
    updateDoc,
} from "firebase/firestore";

const PROJECT_ID = "demo-deskfolio-van";
const COLLECTION = "freedomWallNotes";

let testEnvironment;

function validNote(authorUid, overrides = {}) {
    return {
        name: "Visitor",
        message: "A note for the Freedom Wall.",
        authorUid,
        createdAt: serverTimestamp(),
        ...overrides,
    };
}

async function seedNote(id, authorUid) {
    await testEnvironment.withSecurityRulesDisabled(async (context) => {
        await setDoc(doc(context.firestore(), COLLECTION, id), {
            name: "Visitor",
            message: "An existing note.",
            authorUid,
            createdAt: Timestamp.now(),
        });
    });
}

before(async () => {
    testEnvironment = await initializeTestEnvironment({
        projectId: PROJECT_ID,
        firestore: {
            rules: await readFile(new URL("../firestore.rules", import.meta.url), "utf8"),
        },
    });
});

beforeEach(async () => {
    await testEnvironment.clearFirestore();
});

after(async () => {
    await testEnvironment.cleanup();
});

test("any visitor can read Freedom Wall notes", async () => {
    await seedNote("public-note", "owner-a");
    const database = testEnvironment.unauthenticatedContext().firestore();
    const result = await assertSucceeds(getDocs(collection(database, COLLECTION)));
    assert.equal(result.size, 1);
});

test("an authenticated anonymous user can create a valid note", async () => {
    const database = testEnvironment.authenticatedContext("owner-a").firestore();
    await assertSucceeds(
        setDoc(doc(database, COLLECTION, "valid-note"), validNote("owner-a")),
    );
});

test("an unauthenticated visitor cannot create a note", async () => {
    const database = testEnvironment.unauthenticatedContext().firestore();
    await assertFails(
        setDoc(doc(database, COLLECTION, "unauthenticated"), validNote("owner-a")),
    );
});

test("a visitor cannot spoof another author's UID", async () => {
    const database = testEnvironment.authenticatedContext("owner-a").firestore();
    await assertFails(
        setDoc(doc(database, COLLECTION, "spoofed"), validNote("owner-b")),
    );
});

test("creates reject missing fields, extra fields, and oversized values", async () => {
    const database = testEnvironment.authenticatedContext("owner-a").firestore();

    const missingName = validNote("owner-a");
    delete missingName.name;

    await assertFails(setDoc(doc(database, COLLECTION, "missing"), missingName));
    await assertFails(
        setDoc(
            doc(database, COLLECTION, "extra"),
            validNote("owner-a", { isAdmin: true }),
        ),
    );
    await assertFails(
        setDoc(
            doc(database, COLLECTION, "long-name"),
            validNote("owner-a", { name: "n".repeat(41) }),
        ),
    );
    await assertFails(
        setDoc(
            doc(database, COLLECTION, "long-message"),
            validNote("owner-a", { message: "m".repeat(281) }),
        ),
    );
});

test("the original author can delete their note", async () => {
    await seedNote("owned-note", "owner-a");
    const database = testEnvironment.authenticatedContext("owner-a").firestore();
    await assertSucceeds(deleteDoc(doc(database, COLLECTION, "owned-note")));
});

test("another visitor cannot delete someone else's note", async () => {
    await seedNote("someone-elses-note", "owner-a");
    const database = testEnvironment.authenticatedContext("owner-b").firestore();
    await assertFails(deleteDoc(doc(database, COLLECTION, "someone-elses-note")));
});

test("note updates are denied, including for the original author", async () => {
    await seedNote("immutable-note", "owner-a");
    const database = testEnvironment.authenticatedContext("owner-a").firestore();
    await assertFails(
        updateDoc(doc(database, COLLECTION, "immutable-note"), {
            message: "Edited message",
        }),
    );
});
