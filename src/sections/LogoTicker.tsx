import googleLogo from "@/assets/images/google-logo.svg";
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

const LangChainLogo = ({ className }: { className?: string }) => (
    <svg
        fill="currentColor"
        fillRule="evenodd"
        height="1em"
        style={{ flex: "none", lineHeight: 1 }}
        viewBox="0 0 117 24"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <title>LangChain</title>
        <path d="M99.476 0c-1.04 0-1.795.755-1.795 1.794 0 1.04.755 1.795 1.795 1.795 1.039 0 1.794-.755 1.794-1.795S100.515 0 99.476 0zM74.402 6.575c.933-.696 2.122-1.063 3.459-1.063l.001.003c3.194 0 5.257 2.008 5.257 5.117v8.373H80.32v-8c0-1.921-.842-2.855-2.575-2.855-1.61 0-3.343 1.09-3.343 3.481v7.372h-2.799V.4h2.799v6.175zM67.41 13.62c-.58 1.875-2.07 2.91-4.193 2.91-3.035 0-4.923-2.306-4.923-6.016s1.904-6.016 4.97-6.016c2.122 0 3.344.832 3.967 2.695l.29.872 2.642-1.24-.248-.699c-1.006-2.835-3.33-4.332-6.72-4.332-2.304 0-4.26.832-5.656 2.405-1.381 1.557-2.113 3.74-2.113 6.316 0 5.297 3.058 8.72 7.791 8.72 3.336 0 5.92-1.744 6.911-4.668l.253-.748-2.714-1.032-.257.832zM4.798 2.027H2v16.975h12.003v-2.704H4.798V2.027zM28.074 19.002h2.794v-.03h.037l.005-.125c.001-.036.012-.376-.04-.9V11.63c0-2.377 1.733-3.459 3.343-3.459 1.732 0 2.575.934 2.575 2.855v7.976h2.799v-8.348c0-3.171-2.015-5.142-5.257-5.142-1.377 0-2.607.392-3.572 1.135l-.026-.902h-2.658v13.257z" />
        <path
            clipRule="evenodd"
            d="M47.342 5.512c1.41 0 2.661.417 3.634 1.207h.002l.056-.974h2.588v11.86c0 2.038-.571 3.633-1.7 4.74C50.804 23.444 49.201 24 47.157 24c-3.012 0-5.083-1.321-5.542-3.535l-.024-.111 2.719-.83.025.139c.206 1.113 1.21 1.678 2.985 1.678 2.11 0 3.397-1.22 3.477-3.275-.936.69-2.124 1.052-3.455 1.052-3.773 0-6.117-2.626-6.117-6.815 0-4.188 2.344-6.79 6.117-6.79zm.163 10.949c2.064 0 3.296-1.512 3.296-4.04v-.327c-.02-2.42-1.282-3.923-3.296-3.923-2.213 0-3.482 1.492-3.482 4.133s1.269 4.157 3.482 4.157z"
        />
        <path d="M105.869 6.647c.966-.743 2.194-1.135 3.572-1.135h.003c3.242 0 5.257 1.97 5.257 5.142v8.348h-2.799v-7.976c0-1.921-.843-2.855-2.575-2.855-1.611 0-3.343 1.082-3.343 3.459v7.372h-2.799V5.745h2.657l.027.902zM100.833 5.745H98.05v6.572a7.787 7.787 0 00-2.71-1.46v-.669c0-2.928-1.922-4.676-5.142-4.676-2.615 0-4.572 1.229-5.369 3.369l-.214.577 2.243 1.654.385-1.003c.507-1.323 1.447-1.94 2.955-1.94 1.51 0 2.344.727 2.344 2.157v.075a9.34 9.34 0 00-.271-.008c-2.996-.048-5.182.653-6.496 2.08-1.345 1.46-1.228 3.1-1.21 3.28l.013.126h.012c.21 2.042 1.993 3.354 4.586 3.354 1.427 0 2.747-.398 3.744-1.124l.011.892h2.41v-4.147l-.053-.038c-.34-.25-.934-.571-1.828-.684a6.523 6.523 0 00-.403-.039 4.706 4.706 0 00-.392-.01h-.125v.382c0 .877-1.008 2.111-3.25 2.111-1.654 0-1.901-.696-1.901-1.11v-.043a1.73 1.73 0 01.502-1.066c.522-.54 1.698-1.172 4.334-1.131 1.908.03 3.373.563 4.353 1.586 1.203 1.256 1.43 2.975 1.47 3.648v.542h2.785V5.745z" />
        <path
            clipRule="evenodd"
            d="M15.466 8.823c.796-2.14 2.753-3.368 5.368-3.368 3.22 0 5.14 1.747 5.14 4.675v8.813h-2.407l-.012-.892c-.998.726-2.316 1.124-3.745 1.124-2.798 0-4.606-1.52-4.606-3.77s1.713-3.694 5.092-4.292l2.882-.508v-.337c0-1.43-.835-2.156-2.344-2.156-1.508 0-2.447.616-2.955 1.939l-.385 1.003L15.251 9.4l.215-.577zm7.712 5.585v-1.181l-2.22.406c-2.931.544-2.931 1.407-2.931 1.776 0 .415.245 1.11 1.9 1.11 2.242 0 3.25-1.234 3.25-2.11z"
        />
    </svg>
);

const platforms = [
    { name: "OpenAI", component: OpenAILogo, isSvgComponent: true },
    { name: "Anthropic", component: AnthropicLogo, isSvgComponent: true },
    { name: "Google", image: googleLogo },
    { name: "LangChain", component: LangChainLogo, isSvgComponent: true },
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
