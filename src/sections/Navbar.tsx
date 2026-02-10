"use client";
import Button from "@/components/Button";
import { useModal } from "@/components/ModalContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import LogoCircle from "@/components/LogoCircle";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "See it on real traffic", href: "#booking" },
];

export default function Navbar() {
    const { open } = useModal();

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const offset = 80; // Account for fixed navbar height

        if (targetId === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const target = document.getElementById(targetId);
        if (target) {
            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                offset;
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
        } else if (targetId === "faqs") {
            // If FAQs section doesn't exist, scroll to footer
            const footer = document.querySelector(
                "footer, section:last-of-type",
            );
            if (footer) {
                const footerPosition =
                    (footer as HTMLElement).getBoundingClientRect().top +
                    window.pageYOffset -
                    offset;
                window.scrollTo({ top: footerPosition, behavior: "smooth" });
            }
        } else {
            window.location.hash = href;
        }
    };

    return (
        <section className="py-4 lg:py-4 bg-background/90 backdrop-blur fixed top-0 w-full z-50 border border-x-0 border-border">
            <div className="lg:px-16">
                <div className="flex items-center justify-between rounded-full p-2 px-4 md:pr-2 h-[56px]">
                    <div>
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, "#home")}
                        >
                            <LogoCircle className="h-9 w-9 cursor-pointer" />
                        </a>
                    </div>
                    <div className="lg:flex flex-justify-center items-center hidden">
                        <nav className="flex gap-8 font-regular text-base opacity-70 text-foreground">
                            {navLinks.map((link) => (
                                <a
                                    href={link.href}
                                    key={link.label}
                                    onClick={(e) =>
                                        handleNavClick(e, link.href)
                                    }
                                    className="hover:opacity-100 transition-opacity cursor-pointer"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-end gap-8 items-center">
                        <ThemeToggle className=" md:inline-flex" />
                        <Button
                            variant="primary"
                            className="md:hidden inline-flex rounded-none items-center"
                            onClick={open}
                        >
                            Join waitlist (developer preview)
                        </Button>
                        {/* <Button
                            variant="secondary"
                            className="hidden md:inline-flex items-center"
                        >
                            Log In
                        </Button> */}
                        <Button
                            variant="primary"
                            className="hidden rounded-none md:inline-flex items-center"
                            onClick={open}
                        >
                            Join waitlist (developer preview)
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
