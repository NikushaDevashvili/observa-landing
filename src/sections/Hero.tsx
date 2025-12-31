import bgImage from "@/assets/images/bgIm.png";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import heroImage from "@/assets/images/HeroDashboardLight.png";
import PixelBlast from "@/components/PixelBlast";

export default function Hero() {
    return (
        <section className="relative md:pt-14 sm:pt-8 overflow-x-clip z-40">
            {/* ✅ Background Layer */}

            {/* <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-10 blur-md"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            /> */}
            {/* <div className="absolute inset-0 z-0 bg-cover bg-center">
                <PixelBlast
                    variant="square"
                    pixelSize={1}
                    color="bg-gray-100"
                    patternScale={3}
                    patternDensity={1.2}
                    pixelSizeJitter={0.5}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.6}
                    edgeFade={0.25}
                    transparent
                />
            </div> */}

            <div className="container-custom border-x border-y  border-solid b">
                {/*  Content Layer */}
                <div className=" relative z-10">
                    {/* <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 text-neutral-950 rounded-full font-semibold">
                        ✨7.5M seed round raised
                    </div>
                </div> */}
                    <div className="py-16 lg:px-32">
                        <h1
                            className="text-5xl md:text-6xl lg:text-5xl lg:font-roman text-left mt-20 font-medium break-normal w-full tracking-custom"
                        >
                            AI failures happen.
                            <br />
                            {/* <PointerHighlight
                                rectangleClassName=" border-neutral-100 leading-loose"
                                pointerClassName="text-black h-3 w-3"
                                containerClassName="inline-block mr-"
                            > */}
                            <span>Catch them first.</span>
                            {/* </PointerHighlight> */}
                        </h1>
                        <p className="text-left text-xl text-black/50 mt-8 mx-auto">
                            Monitor hallucinations, cost overruns, and
                            performance drifts <br></br>in real time — with a
                            single, standardized dashboard.
                        </p>
                        {/* <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        size="sm"
                        className="whitespace-nowrap"
                    >
                        Sign Up
                    </Button>
                </form> */}

                        {/* <div className="mt-20 mx-4 mb-60 flex justify-center z-50 relative before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/10 before:to-purple-500/10 before:blur-2xl before:z-0">
                            <video
                                src="/videos/Chat-Animation3.mp4"
                                className="w-full sm:max-w-xl md:max-w-2xl h-auto rounded-2xl shadow-xl z-10"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div> */}
                        <div className="flex flex-row gap-3 py-6 ">
                            <Button
                                variant="default"
                                className="text-md rounded-none px-4 py-6"
                            >
                                Join Waitlist
                            </Button>
                            <Button
                                variant="ghost"
                                className="text-md rounded-none  text-black outline-dashed -outline-offset-1 outline-gray-300 px-4 py-6"
                            >
                                Request a Demo
                                <ArrowRight />
                            </Button>
                        </div>

                        <div className="mt-12 bg-slate-200 border-solid border-2">
                            <img
                                src={heroImage.src}
                                alt="Functional Image"
                                className="z-10 w-full h-2/4 md:h-2/4 sm:h-full object-cover p-8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
