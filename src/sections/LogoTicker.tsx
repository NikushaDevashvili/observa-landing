import googleLogo from "@/assets/images/google-logo.svg";
import langchainLogo from "@/assets/images/langchain-logo.svg";
import nodejsLogo from "@/assets/images/nodejs-logo.png";
import pythonLogo from "@/assets/images/python-logo.png";
import typescriptLogo from "@/assets/images/typescript-logo.svg";
import slackLogo from "@/assets/images/slacklogo.png";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

// Inline SVG components that use currentColor for theme support
const OpenAILogo = ({ className }: { className?: string }) => (
    <svg
        fill="currentColor"
        fillRule="evenodd"
        height="1em"
        style={{ flex: "none", lineHeight: 1 }}
        viewBox="0 0 84 24"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <title>OpenAI</title>
        <path d="M2 10.955c0 5.276 3.376 8.955 8.054 8.955 4.678 0 8.054-3.679 8.054-8.955S14.732 2 10.054 2C5.423 2 2.068 5.606 2 10.797L2 10.955zm13.021 0c0 3.775-2.05 6.22-4.967 6.22-2.918 0-4.968-2.445-4.968-6.22 0-3.776 2.05-6.22 4.968-6.22 2.917 0 4.967 2.444 4.967 6.22zm11.778 8.955c3.545 0 5.57-3.001 5.57-6.607 0-3.607-2.025-6.608-5.57-6.608-1.64 0-2.845.654-3.64 1.598V6.937h-2.894V24h2.893v-5.688c.796.944 2.002 1.598 3.641 1.598zm-3.713-6.97c0-2.397 1.35-3.703 3.135-3.703 2.097 0 3.23 1.645 3.23 4.066 0 2.42-1.133 4.066-3.23 4.066-1.785 0-3.135-1.332-3.135-3.68v-.75zM40.2 19.91c2.532 0 4.533-1.331 5.425-3.558l-2.483-.944c-.386 1.307-1.52 2.033-2.942 2.033-1.857 0-3.159-1.331-3.376-3.51h8.874v-.967c0-3.485-1.953-6.269-5.619-6.269-3.665 0-6.028 2.88-6.028 6.608 0 3.92 2.532 6.607 6.15 6.607zm-.145-10.77c1.833 0 2.701 1.21 2.725 2.614H36.97c.434-1.719 1.591-2.614 3.086-2.614zm7.814 10.504h2.894v-7.455c0-1.815 1.326-2.783 2.628-2.783 1.591 0 2.218 1.137 2.218 2.71v7.528h2.894V11.27c0-2.735-1.592-4.575-4.244-4.575-1.64 0-2.773.75-3.496 1.598V6.937h-2.894v12.707zM66.978 2.266l-6.56 17.378h3.063l1.471-3.97h7.475l1.495 3.97h3.11L70.475 2.266h-3.496zm1.687 3.437l2.75 7.26h-5.45l2.7-7.26zM82 2.317h-3.086v17.377H82V2.317z" />
    </svg>
);

const AnthropicLogo = ({ className }: { className?: string }) => (
    <svg
        fill="currentColor"
        fillRule="evenodd"
        height="1em"
        style={{ flex: "none", lineHeight: 1 }}
        viewBox="0 0 182 24"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <title>Anthropic</title>
        <path d="M38.247 15.874L29.553 2.338H24.86v19.337h4.002V8.139l8.694 13.536h4.693V2.338h-4.003v13.536zm7.313-9.807h6.487v15.608h4.14V6.067h6.487v-3.73H45.56v3.73zm33.686 3.978h-9.109V2.338h-4.14v19.337h4.14v-7.9h9.109v7.9h4.14V2.338h-4.14v7.707zm13.39-3.978h5.108c2.043 0 3.12.746 3.12 2.155 0 1.408-1.077 2.154-3.12 2.154h-5.107v-4.31zm12.37 2.155c0-3.647-2.679-5.884-7.068-5.884h-9.443v19.337h4.142v-7.57h4.61l4.142 7.57h4.583l-4.586-8.146c2.302-.885 3.62-2.75 3.62-5.307zm12.686 9.91c-3.257 0-5.244-2.32-5.244-6.104 0-3.84 1.987-6.16 5.244-6.16 3.23 0 5.189 2.32 5.189 6.16 0 3.784-1.96 6.105-5.189 6.105zm0-16.132c-5.575 0-9.522 4.144-9.522 10.028 0 5.828 3.947 9.972 9.522 9.972 5.547 0 9.466-4.144 9.466-9.972C127.158 6.144 123.24 2 117.692 2zm22.59 8.929h-5.109V6.067h5.11c2.043 0 3.12.829 3.12 2.43 0 1.603-1.077 2.432-3.12 2.432zm.194-8.591h-9.445v19.337h4.142v-7.017h5.303c4.39 0 7.07-2.32 7.07-6.16 0-3.84-2.68-6.16-7.07-6.16zm35.108 12.839c-.718 1.878-2.153 2.956-4.113 2.956-3.257 0-5.244-2.32-5.244-6.105 0-3.84 1.987-6.16 5.244-6.16 1.96 0 3.395 1.077 4.113 2.955h4.388C178.896 4.68 175.667 2 171.472 2c-5.576 0-9.523 4.144-9.523 10.028 0 5.828 3.947 9.972 9.522 9.972 4.223 0 7.453-2.707 8.529-6.823h-4.416zm-26.39-12.84l7.705 19.338h4.225L153.42 2.338h-4.225zM9.277 14.024l2.636-6.796 2.637 6.796H9.276zm.428-11.685L2 21.675h4.307l1.576-4.06h8.06l1.575 4.06h4.307L14.121 2.338H9.704z" />
    </svg>
);

const platforms = [
    { name: "OpenAI", component: OpenAILogo, isSvgComponent: true },
    { name: "Anthropic", component: AnthropicLogo, isSvgComponent: true },
    { name: "Google", image: googleLogo },
    { name: "LangChain", image: langchainLogo },
    { name: "Node.js", image: nodejsLogo },
    { name: "Python", image: pythonLogo },
    { name: "TypeScript", image: typescriptLogo },
    { name: "Slack", image: slackLogo },
];

type LogoCardProps = {
    logo: {
        name: string;
        image?: any;
        component?: React.ComponentType<{ className?: string }>;
        isSvgComponent?: boolean;
    };
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
            {logo.isSvgComponent && logo.component ? (
                <div className="h-8 md:h-10 flex items-center text-foreground">
                    <logo.component className="h-full w-auto max-w-[140px]" />
                </div>
            ) : (
                <img
                    src={imageSrc}
                    alt={logo.name}
                    className="h-8 md:h-10 w-auto object-contain max-w-[140px]"
                />
            )}
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
