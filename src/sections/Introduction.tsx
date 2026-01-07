/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Tag from "@/components/Tag";
import ga4Img from "@/assets/images/GA4img.png";
import clarityImg from "@/assets/images/Clarityimg.png";
import hotjarImg from "@/assets/images/Hotjarimg.png";
import intercomImg from "@/assets/images/Intercomimg.png";

// --- Content ---
const paragraph1: (string | { type: "img"; src: string; alt: string })[] = [
    "We",
    "found",
    "a",
    "46%",
    "drop",
    "in",
    "Sign-ups",
    "in",
    { type: "img", src: ga4Img.src, alt: "GA4" },
    "spotted",
    "rage",
    "clicks",
    "on",
    "the",
    "CTA",
    "in",
    { type: "img", src: clarityImg.src, alt: "Clarity" },
    { type: "img", src: hotjarImg.src, alt: "Hotjar" },
    "And",
    "found",
    "feedback",
    "pattern",
    "in",
    { type: "img", src: intercomImg.src, alt: "Intercom" },
    `"I`,
    "keep",
    "tapping",
    "the",
    "sign-up",
    "button",
    "but",
    "nothing",
    "happens.",
];

const paragraph2: (string | { type: "img"; src: string; alt: string })[] = [
    "We",
    "found",
    "the",
    "issue.",
    "You",
    "fixed",
    "it.",
    "Acquisition",
    "recovered.",
    "No",
    "growth",
    "lost.",
];

// --- Reusable Word-by-Word Scroll Animation Component ---
function ScrollAnimatedWords({
    content,
    scrollYProgress,
    offsetStart = 0,
    className = "",
}: {
    content: (string | { type: "img"; src: string; alt: string })[];
    scrollYProgress: MotionValue<number>;
    offsetStart?: number;
    className?: string;
}) {
    const opacityArray = Array.from({ length: content.length }, (_, index) => {
        const i = index + offsetStart;
        const start = i * 0.01;
        const end = start + 0.25;
        return useTransform(scrollYProgress, [start, end], [0, 1]);
    });

    const translateYArray = Array.from(
        { length: content.length },
        (_, index) => {
            const i = index + offsetStart;
            const start = i * 0.01;
            const end = start + 0.25;
            return useTransform(scrollYProgress, [start, end], [20, 0]);
        }
    );

    return (
        <div className={`flex flex-wrap justify-center ${className}`}>
            {content.map((item, index) => {
                const opacity = opacityArray[index];
                const y = translateYArray[index];

                if (typeof item === "string") {
                    return (
                        <motion.span
                            key={`text-${index + offsetStart}`}
                            style={{ opacity, y }}
                            className="inline-block"
                        >
                            {item}
                        </motion.span>
                    );
                }

                return (
                    <motion.img
                        key={`img-${index + offsetStart}`}
                        src={item.src}
                        alt={item.alt}
                        style={{ opacity, y }}
                        className="relative md:top-[0.15em] sm:top-[0.3em] inline-block align-baseline max-h-[0.8em] w-auto mx-1"
                    />
                );
            })}
        </div>
    );
}

// --- Main Component ---
export default function Introduction() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"],
    });

    return (
        <section className="py-28 lg:py-52 bg-background text-foreground">
            <div className="container">
                <div className="sticky sm:top-32 lg:top-56">
                    <div className="flex justify-center">
                        <Tag>Causal Reasoning</Tag>
                    </div>
                    <p className="text-sm text-center text-foreground/70 mt-4 font-light">
                        Scroll to read ↓
                    </p>
                    <motion.div
                        style={{ scaleX: scrollYProgress }}
                        className="mx-auto flex justify-center mt-6 h-1 w-64 bg-muted origin-left rounded-full"
                    />

                    {/* Paragraph 1 */}
                    <ScrollAnimatedWords
                        content={paragraph1}
                        scrollYProgress={scrollYProgress}
                        className="text-4xl md:text-4xl text-center font-roman mt-10 font-iowan leading-snug gap-x-2 gap-y-1"
                    />

                    {/* Paragraph 2 */}
                    <ScrollAnimatedWords
                        content={paragraph2}
                        scrollYProgress={scrollYProgress}
                        offsetStart={paragraph1.length}
                        className="text-2xl text-center font-roman font-light mt-24 text-foreground/60 gap-x-2"
                    />
                </div>

                {/* Scroll Trigger Zone */}
                <div className="h-[150vh]" ref={scrollRef}></div>
            </div>
        </section>
    );
}
