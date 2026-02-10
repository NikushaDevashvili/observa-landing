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
import Image from "next/image";
import sdkimage from "@/assets/images/sdkimage.png";
import traceview from "@/assets/images/trace-view.png";
export default function Integration() {
    return (
        <>
            <section
                id="integrations"
                className="bg-background text-foreground"
            >
                <div className="container-custom-spatial border-x border-border">
                    <div className=" border-border bg-background border-x border-l-0 border-r-0  border-solid p-0">
                        <div className="min-h-[24rem]">
                            <div className="flex flex-col items-center gap-4  mx-1 md:mx-20">
                                <h1 className="text-4xl md:text-6xl lg:text-5xl text-center mt-36 font-medium break-normal mx-auto tracking-custom">
                                    Best-practice LLM monitoring{" "}
                                    <span className="text-foreground/70">
                                        with a few lines of code
                                    </span>
                                </h1>
                                <div className="flex items-center justify-center ">
                                    <div className="max-w-(--breakpoint-lg) w-full pt-24 pb-36 px-6">
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
                                                            index,
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
                                                                </AccordionContent>
                                                            </AccordionItem>
                                                        ),
                                                    )}
                                                </Accordion>
                                            </div>
                                            {/* Media */}
                                            <div className="hidden md:flex w-full h-full rounded-xl overflow-hidden items-center justify-center border border-border/70 bg-muted/50">
                                                <img
                                                    src={sdkimage.src}
                                                    alt="Observa trace interface showing error monitoring, spans, tool calls, and LLM interactions"
                                                    className="w-full h-full object-fill rounded-xl"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-y h-[140px] bg-background text-foreground"></div>
            </section>
        </>
    );
}

const features = [
    {
        icon: Activity,
        title: "Full traces for every LLM and tool call.",
        description:
            "Monitor AI performance with complete visibility into each request.",
    },
    {
        icon: DollarSign,
        title: "Per-endpoint and per-model cost tracking with budgets and alerts.",
        description:
            "Control costs with granular spend visibility and guardrails.",
    },
    {
        icon: BarChart3,
        title: "Query traces by user, route, model, or tag to find broken flows fast.",
        description:
            "Actionable insights to debug faster and improve reliability.",
    },
    {
        icon: Bell,
        title: "Slack alerts wired to the same signals your SREs care about: error rate, latency, and anomaly trackers.",
        description: "Instant alerts so you can act before users notice.",
    },
    {
        icon: Plug,
        title: "Drop-in SDKs for Node.js, Python, and TypeScript; works with OpenAI, Anthropic, Google, and LangChain.",
        description: "Seamless integration with a few lines of code.",
    },
    {
        icon: ShieldCheck,
        title: "Fix failures before they become support tickets and churn.",
        description: "Protect user trust with reliable AI experiences.",
    },
];
