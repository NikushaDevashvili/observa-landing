"use client";
import Tag from "@/components/Tag";
import Image from "next/image";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import feature11img from "@/assets/images/Feature111.png";
import feature2img from "@/assets/images/Feature2.jpg";
import feature3img from "@/assets/images/Feature3.png";
import { FollowerPointerCard } from "@/components/ui/following-poineter";

export default function Features() {
    const imageRef1 = useRef<HTMLDivElement>(null);
    const isInView1 = useInView(imageRef1, { amount: 0.2 });

    const imageRef2 = useRef<HTMLDivElement>(null);
    const isInView2 = useInView(imageRef2, { amount: 0.2 });

    const imageRef3 = useRef<HTMLDivElement>(null);
    const isInView3 = useInView(imageRef3, { amount: 0.2 });

    return (
        <section className="bg-background text-foreground">
            <div className="container-custom  border-border border-x border-y  border-solid">
                {/* Section 2 moved to the top */}
                <motion.div
                    ref={imageRef1}
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                        isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center mt-16"
                >
                    <h2 className="md:text-5xl sm:text-3xl lg:text-5xl ">
                        Monitor your analytics{" "}
                        <span className="text-amber-950">24/7</span>
                    </h2>
                    <p className="mt-4 sm:max-w-md md:max-w-2xl lg:max-w-2xl m-auto text-foreground/70">
                        Ask any question, get answer that combines Google
                        Analytics, MS Clarity, Hotjar and other analytical data
                        into one actionable insight
                    </p>
                </motion.div>
                <FollowerPointerCard>
                    <div className="mt-12 ">
                        <motion.div
                            ref={imageRef1}
                            initial={{ opacity: 0, y: 40 }}
                            animate={
                                isInView1
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 40 }
                            }
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <Image
                                src={feature2img}
                                alt="Feature 2"
                                width={1280}
                                height={1020}
                                className="rounded-3xl w-full object-cover md:aspect-[3/2] sm:aspect-[16/14]"
                            />
                        </motion.div>
                    </div>
                </FollowerPointerCard>

                {/* Section 3 moved to second position */}
                <div className="mt-12 ">
                    <motion.div
                        ref={imageRef2}
                        initial={{ opacity: 0, y: 40 }}
                        animate={
                            isInView2
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 40 }
                        }
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center mt-56"
                    >
                        <h2 className="md:text-5xl sm:text-3xl lg:text-5xl font-roman font-iowan">
                            Get Instant{" "}
                            <span className="text-amber-950">Answers</span>
                        </h2>
                        <p className="mt-4 sm:max-w-md md:max-w-2xl lg:max-w-2xl m-auto text-foreground/70">
                            Ask any question, get answer that combines Google
                            Analytics, MS Clarity, Hotjar and other analytical
                            data into one actionable insight
                        </p>
                    </motion.div>
                </div>

                <div className="mt-12 ">
                    <motion.div
                        ref={imageRef2}
                        initial={{ opacity: 0, y: 40 }}
                        animate={
                            isInView2
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 40 }
                        }
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Image
                            src={feature11img}
                            alt="Feature 1"
                            width={1280}
                            height={1020}
                            className="rounded-3xl w-full object-cover md:aspect-[3/2] sm:aspect-[16/14]"
                        />
                    </motion.div>
                </div>

                {/* Section 1 moved to last position */}
                <motion.div
                    ref={imageRef3}
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                        isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mt-56"
                >
                    <h2 className="md:text-5xl sm:text-3xl lg:text-5xl font-roman font-iowan">
                        Identify Critical{" "}
                        <span className="text-amber-950">Drop-Offs</span>
                    </h2>
                    <p className="mt-4 sm:max-w-md md:max-w-2xl lg:max-w-2xl m-auto text-foreground/70">
                        Discover where users abandon the journey — with data
                        synthesized across all your tracking tools in one visual
                        snapshot.
                    </p>
                </motion.div>
                <div className="mt-12">
                    <motion.div
                        ref={imageRef3}
                        initial={{ opacity: 0, y: 40 }}
                        animate={
                            isInView3
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 40 }
                        }
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Image
                            src={feature3img}
                            alt="Feature 3"
                            width={1280}
                            height={1020}
                            className="rounded-3xl w-full object-cover md:aspect-[3/2] sm:aspect-[16/14]"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
