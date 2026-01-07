import openaiLogo from "@/assets/images/openai-logo.svg";
import anthropicLogo from "@/assets/images/anthropic-logo.svg";
import googleLogo from "@/assets/images/google-logo.svg";
import langchainLogo from "@/assets/images/langchain-logo.svg";
import nodejsLogo from "@/assets/images/nodejs-logo.png";
import pythonLogo from "@/assets/images/python-logo.png";
import typescriptLogo from "@/assets/images/typescript-logo.svg";
import slackLogo from "@/assets/images/slacklogo.png";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const platforms = [
    { name: "OpenAI", image: openaiLogo },
    { name: "Anthropic", image: anthropicLogo },
    { name: "Google", image: googleLogo },
    { name: "LangChain", image: langchainLogo },
    { name: "Node.js", image: nodejsLogo },
    { name: "Python", image: pythonLogo },
    { name: "TypeScript", image: typescriptLogo },
    { name: "Slack", image: slackLogo },
];

type LogoCardProps = {
    logo: { name: string; image: any };
    className?: string;
    children?: React.ReactNode;
};

function LogoCard({ logo, className, children }: LogoCardProps) {
    // PNG files in Next.js import as string paths
    const imageSrc =
        typeof logo.image === "string"
            ? logo.image
            : logo.image?.src || logo.image?.default || logo.image;

    return (
        <div
            className={cn(
                "flex items-center justify-center bg-background px-4 py-8 md:p-8 border-border",
                className
            )}
        >
            <img
                src={imageSrc}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain max-w-[140px]"
            />
            {children}
        </div>
    );
}

export default function LogoTicker() {
    return (
        <section className="py-0 bg-background text-foreground">
            <div className="container-custom-spatial">
                {/* <h3 className="text-center text-black/50 text-xl mb-6 md:text-2xl font-medium tracking-tight">
                    Works with your favorite{" "}
                    <span className="font-semibold text-black">platforms</span>
                </h3> */}

                <div className="relative grid grid-cols-2 border-x border-border md:grid-cols-4  mx-auto">
                    <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-border" />

                    <LogoCard
                        className="relative border-r border-b bg-muted"
                        logo={platforms[0]}
                    >
                        <Plus
                            className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-gray-300"
                            strokeWidth={1}
                        />
                    </LogoCard>

                    <LogoCard
                        className="border-b md:border-r"
                        logo={platforms[1]}
                    />

                    <LogoCard
                        className="relative border-r border-b md:bg-muted"
                        logo={platforms[2]}
                    >
                        <Plus
                            className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-gray-300"
                            strokeWidth={1}
                        />
                        <Plus
                            className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 text-gray-300 md:block"
                            strokeWidth={1}
                        />
                    </LogoCard>

                    <LogoCard
                        className="relative border-b bg-muted md:bg-background"
                        logo={platforms[3]}
                    />

                    <LogoCard
                        className="relative border-r border-b bg-muted md:border-b-0 md:bg-background"
                        logo={platforms[4]}
                    >
                        <Plus
                            className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 text-gray-300 md:hidden"
                            strokeWidth={1}
                        />
                    </LogoCard>

                    <LogoCard
                        className="border-b bg-background md:border-r md:border-b-0 md:bg-muted"
                        logo={platforms[5]}
                    />

                    <LogoCard className="border-r" logo={platforms[6]} />

                    <LogoCard className="bg-muted" logo={platforms[7]} />

                    <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-border" />
                </div>
            </div>
        </section>
    );
}
