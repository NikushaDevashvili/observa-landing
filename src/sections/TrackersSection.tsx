import monitorimg from "@/assets/images/MonitorImg.png";
import slackalertimg from "@/assets/images/Slackalerts.png";

export default function TrackersSection() {
    return (
        <section className="bg-white">
            <div className="border-y h-[140px] bg-white text-white"></div>
            <div className="container-custom-spatial border border-0 bg-white">
                <div className="grid grid-grid-cols-1 lg:grid-cols-2 gap-16 ">
                    <div className="border border-t-0 items-center">
                        <div className="min-h-[40rem] sm:min-h-[20rem]">
                            <img
                                src={monitorimg.src}
                                alt="Functional Image"
                                className="w-full h-96 md:h-96 object-cover"
                            />
                        </div>
                        <div className="border border-gray-200 border-x"></div>
                        <div className="py-8">
                            <h1 className="text-2xl px-8">Set Trackers</h1>
                        </div>
                        <div className="border border-gray-200 border-t-0"></div>
                        <div className="py-6 ">
                            <h1 className="text-md py-6 px-8">
                                Turn raw logs into clear insights that help you
                                debug faster, improve reliability, and optimize
                                models
                            </h1>
                        </div>
                    </div>
                    <div className="border border-t-0 borde items-center">
                        <div className="">
                            <img
                                src={slackalertimg.src}
                                alt="Functional Image"
                                className="w-full h-72 md:h-69 object-cover"
                            />
                        </div>
                        <div className="border border-gray-200 border-t-0"></div>
                        <div className="py-8">
                            <h1 className="text-2xl px-8">
                                Catch Silent Failures
                            </h1>
                        </div>
                        <div className="border border-gray-200 border-t-0"></div>
                        <div className="py-6 ">
                            <h1 className="text-md py-6 px-8">
                                Don&apos;t wait for user complaints.
                                Automatically detect &quot;silent&quot; errors
                                like context drops and logic failures, and get
                                the diagnostic data you need to fix them
                                immediately.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-y h-[140px] bg-white text-white"></div>
        </section>
    );
}
