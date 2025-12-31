import Image from "next/image";
import logoImage from "@/assets/images/LogoB.png";

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
    { label: "SDK Installation Manual", href: "#sdk-installation" },
    {
        label: "SDK on npm",
        href: "https://www.npmjs.com/package/observa",
        external: true,
    },
    { label: "API Reference", href: "#api-reference" },
    { label: "Documentation", href: "#documentation" },
];

const resourcesLinks = [
    { label: "Support", href: "#support" },
    { label: "Blog", href: "#blog" },
    { label: "Changelog", href: "#changelog" },
];

const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
];

export default function Footer() {
    return (
        <>
            <div className="border-y h-[140px] bg-white text-white"></div>
            <section className="bg-white">
                <div className="container-custom border-gray-200 border-x border-solid">
                    <div className="py-16 lg:py-20 px-4 md:px-8 lg:px-16">
                        {/* Main Footer Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                            {/* Logo and Description */}
                            <div className="lg:col-span-1">
                                <div className="mb-4">
                                    <Image
                                        src={logoImage}
                                        alt="Observa logo"
                                        className="h-9 max-h-9 md:h-auto w-auto"
                                    />
                                </div>
                                <p className="text-sm text-black/50 leading-relaxed max-w-xs">
                                    Monitor hallucinations, cost overruns, and
                                    performance drifts in real time — with a
                                    single, standardized dashboard.
                                </p>
                            </div>

                            {/* Product Links */}
                            <div>
                                <h3 className="text-sm font-medium mb-4 text-black">
                                    Product
                                </h3>
                                <nav className="flex flex-col gap-3">
                                    {productLinks.map((link) => (
                                        <a
                                            href={link.href}
                                            key={link.label}
                                            className="text-sm text-black/50 hover:text-black/70 transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Developer Links */}
                            <div>
                                <h3 className="text-sm font-medium mb-4 text-black">
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
                                            className="text-sm text-black/50 hover:text-black/70 transition-colors"
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
                                <h3 className="text-sm font-medium mb-4 text-black">
                                    Resources
                                </h3>
                                <nav className="flex flex-col gap-3">
                                    {resourcesLinks.map((link) => (
                                        <a
                                            href={link.href}
                                            key={link.label}
                                            className="text-sm text-black/50 hover:text-black/70 transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-200 my-8 md:my-12"></div>

                        {/* Bottom Section */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
                            {/* Copyright */}
                            <p className="text-sm text-black/50">
                                © {new Date().getFullYear()} Observa. All rights
                                reserved.
                            </p>

                            {/* Legal Links */}
                            <div className="flex flex-wrap gap-6 text-sm text-black/50">
                                {legalLinks.map((link) => (
                                    <a
                                        href={link.href}
                                        key={link.label}
                                        className="hover:text-black/70 transition-colors"
                                    >
                                        {link.label}
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
