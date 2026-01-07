"use client";

import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question:
            "How is this different from tools like GA4, Clarity, or Hotjar?",
        answer: "Most tools show you data—they don’t tell you what to do with it. We plug into GA4 and Clarity to act as your AI teammate: surfacing UX issues, explaining causes, and saving your team hours of manual analysis. No dashboards. No tagging. Just answers.",
    },
    {
        question: "Do we still need a data or research team?",
        answer: "Absolutely. We’re here to amplify—not replace—your team’s impact. Think of us as a frontline scout: flagging UX problems, surfacing patterns, and giving your team a head start on deeper analysis and action.",
    },
    {
        question: "How long does it take to see value?",
        answer: "Most users connect their tools in under 2 minutes and get their first actionable insight within 90 seconds. No setup, no learning curve—just signal over noise from day one.",
    },
    {
        question: "How accurate are the AI insights?",
        answer: "Every insight is rooted in real GA4 events and Clarity sessions. Our AI agents don’t guess—they correlate patterns across your existing tools and explain them with evidence. You can trace every suggestion back to real user behavior.",
    },
    {
        question: "Is our data secure?",
        answer: "Yes. We never access or store PII. All analysis runs on anonymized event data through secure, read-only connections. We’re committed to full SOC 2 compliance as we scale.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>();
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>FAQs</Tag>
                </div>
                <h2 className="text-5xl font-iowan font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We have <span>answers</span>
                </h2>
                <div className="mt-12 flex flex-col gap-6 items-center">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-100 rounded-2xl border-black/10 p-6 w-full max-w-2xl"
                        >
                            <button
                                className="flex justify-between items-center w-full text-left"
                                onClick={() =>
                                    setSelectedIndex(
                                        selectedIndex === faqIndex
                                            ? undefined
                                            : faqIndex
                                    )
                                }
                            >
                                <h3 className="font-medium">{faq.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={twMerge(
                                        "feather feather-plus transition duration-300",
                                        selectedIndex === faqIndex &&
                                            "rotate-45"
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>
                            <AnimatePresence initial={false}>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{ height: 0, marginTop: 0 }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{ height: 0, marginTop: 0 }}
                                        className={twMerge("overflow-hidden")}
                                    >
                                        <p className="text-black/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
