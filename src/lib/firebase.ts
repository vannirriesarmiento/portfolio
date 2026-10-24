import { getApp, getApps, initializeApp } from "firebase/app";
import {
    browserLocalPersistence,
    getAuth,
    setPersistence,
    signInAnonymously,
    type User,
} from "firebase/auth";
import {
    getAnalytics,
    isSupported as isAnalyticsSupported,
    logEvent,
} from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvabSX1qhkjNKGC-18RZZVtQ6Gnncu-9Y",
    authDomain: "deskfolio-van.firebaseapp.com",
    projectId: "deskfolio-van",
    storageBucket: "deskfolio-van.firebasestorage.app",
    messagingSenderId: "981521530200",
    appId: "1:981521530200:web:b6584d9a6a426dfd11792d",
    measurementId: "G-837KJ9JWP8",
};

export const firebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

let anonymousUserPromise: Promise<User> | undefined;
let analyticsPromise: ReturnType<typeof createAnalytics> | undefined;

export function ensureAnonymousUser(): Promise<User> {
    if (firebaseAuth.currentUser) {
        return Promise.resolve(firebaseAuth.currentUser);
    }

    if (!anonymousUserPromise) {
        anonymousUserPromise = setPersistence(firebaseAuth, browserLocalPersistence)
            .then(() => signInAnonymously(firebaseAuth))
            .then(({ user }) => user)
            .catch((error: unknown) => {
                anonymousUserPromise = undefined;
                throw error;
            });
    }

    return anonymousUserPromise;
}

async function createAnalytics() {
    if (!(await isAnalyticsSupported())) return null;
    return getAnalytics(firebaseApp);
}

export function initializeFirebaseAnalytics() {
    analyticsPromise ??= createAnalytics();
    return analyticsPromise;
}

export async function logFreedomWallEvent(
    eventName: "freedom_wall_note_created" | "freedom_wall_note_deleted",
) {
    const analytics = await initializeFirebaseAnalytics();
    if (analytics) logEvent(analytics, eventName);
}
