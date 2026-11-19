import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import type { Slide } from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

interface Props {
    galleryId: string;
    title: string;
    slides: Slide[];
    contentRootId?: string;
}

interface OpenLightboxDetail {
    galleryId: string;
    index: number;
    trigger?: HTMLElement;
}

export default function CaseStudyLightbox({
    galleryId,
    title,
    slides,
    contentRootId,
}: Props) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [activeSlides, setActiveSlides] = useState(slides);
    const triggerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        function handleOpen(event: Event) {
            const detail = (event as CustomEvent<OpenLightboxDetail>).detail;

            if (!detail || detail.galleryId !== galleryId) return;

            triggerRef.current = detail.trigger ?? null;
            setActiveSlides(slides);
            setIndex(detail.index);
            setOpen(true);
        }

        window.addEventListener("case-study-lightbox:open", handleOpen);

        return () => {
            window.removeEventListener("case-study-lightbox:open", handleOpen);
        };
    }, [galleryId, slides]);

    useEffect(() => {
        if (!contentRootId) return;

        const root = document.querySelector<HTMLElement>(
            `[data-content-lightbox-id="${CSS.escape(contentRootId)}"]`,
        );
        if (!root) return;
        const contentRoot = root;

        const images = Array.from(
            contentRoot.querySelectorAll<HTMLImageElement>(
                "img:not(.case-study__card-icon)",
            ),
        );

        images.forEach((image, imageIndex) => {
            image.dataset.contentLightboxIndex = String(imageIndex);
            image.tabIndex = 0;
            image.setAttribute("role", "button");
            image.setAttribute("aria-haspopup", "dialog");
            image.setAttribute(
                "aria-label",
                `Open ${image.alt || `${title} image ${imageIndex + 1}`} in fullscreen`,
            );
        });

        function openContentImage(image: HTMLImageElement) {
            const imageIndex = Number(image.dataset.contentLightboxIndex);
            if (!Number.isInteger(imageIndex)) return;

            const contentSlides: Slide[] = images.map(
                (contentImage, contentIndex) => ({
                    src: contentImage.currentSrc || contentImage.src,
                    alt:
                        contentImage.alt ||
                        `${title} image ${contentIndex + 1}`,
                    ...(contentImage.naturalWidth && contentImage.naturalHeight
                        ? {
                              width: contentImage.naturalWidth,
                              height: contentImage.naturalHeight,
                          }
                        : {}),
                }),
            );

            triggerRef.current = image;
            setActiveSlides(contentSlides);
            setIndex(imageIndex);
            setOpen(true);
        }

        function handleClick(event: MouseEvent) {
            const target = event.target;
            if (!(target instanceof Element)) return;

            const image = target.closest<HTMLImageElement>(
                "img[data-content-lightbox-index]",
            );
            if (!image || !contentRoot.contains(image)) return;

            openContentImage(image);
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key !== "Enter" && event.key !== " ") return;

            const target = event.target;
            if (!(target instanceof HTMLImageElement)) return;
            if (!target.matches("img[data-content-lightbox-index]")) return;

            event.preventDefault();
            openContentImage(target);
        }

        contentRoot.addEventListener("click", handleClick);
        contentRoot.addEventListener("keydown", handleKeyDown);

        return () => {
            contentRoot.removeEventListener("click", handleClick);
            contentRoot.removeEventListener("keydown", handleKeyDown);
        };
    }, [contentRootId, title]);

    return (
        <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={activeSlides}
            plugins={[Counter, Video, Zoom]}
            carousel={{
                finite: activeSlides.length <= 1,
                imageFit: "contain",
                padding: 24,
            }}
            controller={{
                closeOnBackdropClick: true,
                closeOnPullDown: true,
            }}
            zoom={{
                maxZoomPixelRatio: 3,
                pinchZoomV4: true,
                scrollToZoom: true,
            }}
            video={{
                autoPlay: true,
                controls: false,
                loop: true,
                muted: true,
                playsInline: true,
                preload: "metadata",
                disablePictureInPicture: true,
                disableRemotePlayback: true,
            }}
            animation={{ fade: 200, swipe: 350 }}
            labels={{
                Lightbox: `${title} fullscreen gallery`,
                "Photo gallery": `${title} gallery`,
            }}
            on={{
                view: ({ index: nextIndex }) => setIndex(nextIndex),
                exited: () => {
                    triggerRef.current?.focus({ preventScroll: true });
                    triggerRef.current = null;
                },
            }}
            styles={{
                container: { backgroundColor: "rgba(8, 8, 10, 0.96)" },
            }}
        />
    );
}
