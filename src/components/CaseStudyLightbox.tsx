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

        const media = Array.from(
            contentRoot.querySelectorAll<HTMLImageElement | HTMLVideoElement>(
                "img:not(.case-study__card-icon):not(.case-study__download-badge):not(.case-study__download-img), video.case-study__content-video",
            ),
        );

        function getMediaLabel(
            item: HTMLImageElement | HTMLVideoElement,
            itemIndex: number,
        ) {
            if (item instanceof HTMLImageElement) {
                return item.alt || `${title} image ${itemIndex + 1}`;
            }

            return (
                item.getAttribute("aria-label") ||
                `${title} video ${itemIndex + 1}`
            );
        }

        media.forEach((item, itemIndex) => {
            item.dataset.contentLightboxIndex = String(itemIndex);
            item.tabIndex = 0;
            item.setAttribute("role", "button");
            item.setAttribute("aria-haspopup", "dialog");
            item.setAttribute(
                "aria-label",
                `Open ${getMediaLabel(item, itemIndex)} in fullscreen`,
            );
        });

        function openContentMedia(item: HTMLImageElement | HTMLVideoElement) {
            const itemIndex = Number(item.dataset.contentLightboxIndex);
            if (!Number.isInteger(itemIndex)) return;

            const contentSlides: Slide[] = media.map(
                (contentItem, contentIndex) => {
                    if (contentItem instanceof HTMLVideoElement) {
                        const src = contentItem.currentSrc || contentItem.src;

                        return {
                            type: "video" as const,
                            sources: [
                                {
                                    src,
                                    type: src.toLowerCase().endsWith(".mp4")
                                        ? "video/mp4"
                                        : "video/webm",
                                },
                            ],
                        };
                    }

                    return {
                        src: contentItem.currentSrc || contentItem.src,
                        alt: getMediaLabel(contentItem, contentIndex),
                        ...(contentItem.naturalWidth &&
                        contentItem.naturalHeight
                            ? {
                                  width: contentItem.naturalWidth,
                                  height: contentItem.naturalHeight,
                              }
                            : {}),
                    };
                },
            );

            triggerRef.current = item;
            setActiveSlides(contentSlides);
            setIndex(itemIndex);
            setOpen(true);
        }

        function handleClick(event: MouseEvent) {
            const target = event.target;
            if (!(target instanceof Element)) return;

            const item = target.closest<HTMLImageElement | HTMLVideoElement>(
                "img[data-content-lightbox-index], video[data-content-lightbox-index]",
            );
            if (!item || !contentRoot.contains(item)) return;

            openContentMedia(item);
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key !== "Enter" && event.key !== " ") return;

            const target = event.target;
            if (
                !(target instanceof HTMLImageElement) &&
                !(target instanceof HTMLVideoElement)
            )
                return;
            if (!target.matches("[data-content-lightbox-index]")) return;

            event.preventDefault();
            openContentMedia(target);
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
            noScroll={{ disabled: true }}
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
