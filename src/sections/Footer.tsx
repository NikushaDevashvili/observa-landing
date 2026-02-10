import LogoCircle from "@/components/LogoCircle";

const productLinks = [
    { label: "Feature", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

const developerLinks: Array<{
    label: string;
    href: string;
    external?: boolean;
}> = [
    {
        label: "SDK Installation Manual",
        href: "https://observa-app.vercel.app/docs",
        external: true,
    },
    {
        label: "SDK on npm",
        href: "https://www.npmjs.com/package/observa",
        external: true,
    },
    {
        label: "API Reference",
        href: "https://observa-app.vercel.app/docs",
        external: true,
    },
    {
        label: "Documentation",
        href: "https://observa-app.vercel.app/docs",
        external: true,
    },
];

const resourcesLinks: Array<{
    label: string;
    href: string;
    external?: boolean;
}> = [
    {
        label: "Support",
        href: "https://observa-app.vercel.app/docs",
        external: true,
    },
    {
        label: "Blog",
        href: "https://observa-app.vercel.app/docs",
        external: true,
    },
    {
        label: "Changelog",
        href: "https://observa-app.vercel.app/docs",
        external: true,
    },
];

const legalLinks: Array<{
    label: string;
    href: string;
    external?: boolean;
}> = [
    {
        label: "Privacy Policy",
        href: "https://observa-app.vercel.app/docs",
        external: true,
    },
    {
        label: "Terms of Service",
        href: "https://observa-app.vercel.app/docs",
        external: true,
    },
];

export default function Footer() {
    return (
        <>
            <div className="border-y h-[140px] bg-background text-foreground"></div>
            <section className="bg-background text-foreground">
                <div className="container-custom border-border border-x border-solid">
                    <div className="py-16 lg:py-20 px-4 md:px-8 lg:px-16">
                        {/* Main Footer Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                            {/* Logo and Description */}
                            <div className="lg:col-span-1">
                                <div className="mb-4">
                                    <LogoCircle className="h-9 w-9" />
                                </div>
                                <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
                                    Observe every LLM request—logs, traces, and
                                    performance—in one place, so engineering
                                    teams can ship reliable AI features with
                                    confidence.
                                </p>
                            </div>

                            {/* Product Links */}
                            <div>
                                <h3 className="text-sm font-medium mb-4 text-foreground">
                                    Product
                                </h3>
                                <nav className="flex flex-col gap-3">
                                    {productLinks.map((link) => (
                                        <a
                                            href={link.href}
                                            key={link.label}
                                            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Developer Links */}
                            <div>
                                <h3 className="text-sm font-medium mb-4 text-foreground">
                                    Developer
                                </h3>
                                <nav className="flex flex-col gap-3">
                                    {developerLinks.map((link) => (
                                        <a
                                            href={link.href}
                                            key={link.label}
                                            target={
                                                link.external
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                link.external
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                                        >
                                            {link.label}
                                            {link.external && (
                                                <span className="ml-1">↗</span>
                                            )}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Resources Links */}
                            <div>
                                <h3 className="text-sm font-medium mb-4 text-foreground">
                                    Resources
                                </h3>
                                <nav className="flex flex-col gap-3">
                                    {resourcesLinks.map((link) => (
                                        <a
                                            href={link.href}
                                            key={link.label}
                                            target={
                                                link.external
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                link.external
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                                        >
                                            {link.label}
                                            {link.external && (
                                                <span className="ml-1">↗</span>
                                            )}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-border my-8 md:my-12"></div>

                        {/* Bottom Section */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
                            {/* Copyright */}
                            <p className="text-sm text-foreground/70">
                                © {new Date().getFullYear()} Observa. All rights
                                reserved.
                            </p>

                            {/* Legal Links */}
                            <div className="flex flex-wrap gap-6 text-sm text-foreground/70">
                                {legalLinks.map((link) => (
                                    <a
                                        href={link.href}
                                        key={link.label}
                                        target={
                                            link.external ? "_blank" : undefined
                                        }
                                        rel={
                                            link.external
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                        {link.external && (
                                            <span className="ml-1">↗</span>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
