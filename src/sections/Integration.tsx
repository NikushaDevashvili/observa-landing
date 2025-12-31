import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Activity,
    BarChart3,
    Bell,
    DollarSign,
    Plug,
    ShieldCheck,
} from "lucide-react";

export default function Integration() {
    return (
        <>
            <section>
                <div className="container-custom border-blue-50 border-[41px] border-solid ">
                    <div className=" border-gray-200 bg-white border-x border-l-0 border-r-0  border-solid p-0">
                        <div className="min-h-[24rem]">
                            <div className="flex flex-col items-center gap-4 mt-24 mx-20">
                                <h1
                                    className="text-4xl md:text-6xl lg:text-5xl text-center mt8 font-medium break-normal mx-auto tracking-custom 
"
                                >
                                    Best practice monitoring <br />{" "}
                                    <span className="text-slate-600">
                                        with easy SDK installation{" "}
                                    </span>
                                </h1>
                                <div className="flex items-center justify-center ">
                                    <div className="max-w-(--breakpoint-lg) w-full py-24 px-6">
                                        <div className="mt-6 md:mt-10 w-full mx-auto grid md:grid-cols-2 gap-12">
                                            <div className="">
                                                <Accordion
                                                    defaultValue="item-0"
                                                    type="single"
                                                    className="w-full"
                                                >
                                                    {features.map(
                                                        (
                                                            {
                                                                title,
                                                                description,
                                                                icon: Icon,
                                                            },
                                                            index
                                                        ) => (
                                                            <AccordionItem
                                                                key={index}
                                                                value={`item-${index}`}
                                                                className="group/accordion-item data-[state=open]:border-b-1 data-[state=open]:border-slate-500"
                                                            >
                                                                <AccordionTrigger className="text-lg [&>svg]:hidden group-first/accordion-item:pt-0">
                                                                    <div className="flex items-center gap-4">
                                                                        <Icon />
                                                                        {title}
                                                                    </div>
                                                                </AccordionTrigger>
                                                                <AccordionContent className="text-[17px] leading-relaxed text-muted-foreground">
                                                                    {
                                                                        description
                                                                    }
                                                                    <div className="mt-6 mb-2 md:hidden aspect-video w-full bg-muted rounded-xl" />
                                                                </AccordionContent>
                                                            </AccordionItem>
                                                        )
                                                    )}
                                                </Accordion>
                                            </div>
                                            {/* Media */}
                                            <div className="hidden md:block w-full h-full bg-muted rounded-xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const features = [
    {
        icon: Activity,
        title: "Monitor AI Performance",
        description:
            "Track errors, drifts, and response quality in real time so you always know how your AI is performing.",
    },
    {
        icon: DollarSign,
        title: "Control Costs",
        description:
            "See exactly where your AI spend is going, catch runaway usage, and stay on top of your budget.",
    },
    {
        icon: BarChart3,
        title: "Actionable Insights",
        description:
            "Turn raw logs into clear insights that help you debug faster, improve reliability, and optimize models.",
    },
    {
        icon: Bell,
        title: "Instant Alerts",
        description:
            "Get notified in Slack or email the moment something goes wrong, so you can act before users notice.",
    },
    {
        icon: Plug,
        title: "Seamless Integration",
        description:
            "Drop in a simple SDK or API and start monitoring immediately — no complex setup required.",
    },
    {
        icon: ShieldCheck,
        title: "Protect User Trust",
        description:
            "Deliver reliable AI experiences that keep customers confident and engaged with your product.",
    },
];
