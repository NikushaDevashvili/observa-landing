"use client";
import Image from "next/image";
import logoImage from "@/assets/images/LogoB.png";
import Button from "@/components/Button";
import { useModal } from "@/components/ModalContext";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "Book a demo", href: "#booking" },
];

export default function Navbar() {
    const { open } = useModal();

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
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
                "footer, section:last-of-type"
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
        <section className="py-4 lg:py-4 bg-white fixed top-0 w-full z-50  border-solid border-x border-y  border-spacing-x-3 border-gray-200">
            <div className="lg:px-16">
                <div className="flex items-center justify-between rounded-full p-2 px-4 md:pr-2 h-[56px]">
                    <div>
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, "#home")}
                        >
                            <Image
                                src={logoImage}
                                alt="Layers logo"
                                className="h-9 max-h-9 md:h-auto w-auto cursor-pointer"
                            />
                        </a>
                    </div>
                    <div className="lg:flex flex-justify-center items-center hidden">
                        <nav className="flex gap-8 font-regular text-base opacity-70">
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
                    <div className="flex justify-end gap-4">
                        <Button
                            variant="primary"
                            className="md:hidden inline-flex rounded-none items-center"
                            onClick={open}
                        >
                            Join Waitlist
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
                            Join Waitlist
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
