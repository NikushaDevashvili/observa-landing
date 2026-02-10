import monitorimg from "@/assets/images/MonitorImg.png";
import slackalertimg from "@/assets/images/Slackalerts.png";
import catchtrackers from "@/assets/images/catchtrackers.png";
import silentfailures from "@/assets/images/silentfailures.png";

export default function TrackersSection() {
    return (
        <section className="bg-background text-foreground">
            <div className="border-y h-[140px] bg-background text-foreground"></div>
            <div className="container-custom-spatial bg-background">
                <div className="grid grid-grid-cols-1 lg:grid-cols-2 gap-16 ">
                    <div className="border border-t-0 items-center border-border">
                        <div className="min-h-[40rem] sm:min-h-[20rem]">
                            <img
                                src={catchtrackers.src}
                                alt="Functional Image"
                                className="w-full h-80 md:h-96 object-cover"
                            />
                        </div>
                        <div className="border border-border border-x"></div>
                        <div className="py-8">
                            <h1 className="text-2xl px-8">Set Trackers</h1>
                        </div>
                        <div className="border border-border border-t-0"></div>
                        <div className="py-6 ">
                            <h1 className="text-md py-6 px-8">
                                Turn raw logs into clear insights that help you
                                debug faster, improve reliability, and optimize
                                models
                            </h1>
                        </div>
                    </div>
                    <div className="border border-t-0 items-center border-border">
                        <div className="">
                            <img
                                src={silentfailures.src}
                                alt="Functional Image"
                                className="w-full h-72 md:h-96 object-cover"
                            />
                        </div>
                        <div className="border border-border border-t-0"></div>
                        <div className="py-8">
                            <h1 className="text-2xl px-8">
                                Catch Silent Failures
                            </h1>
                        </div>
                        <div className="border border-border border-t-0"></div>
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
            <div className="border-y h-[140px] bg-background text-foreground"></div>
        </section>
    );
}
