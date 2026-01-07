"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = resolvedTheme === "dark";

    const handleToggle = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <button
            type="button"
            aria-label="Toggle color theme"
            onClick={handleToggle}
            className={cn(
                "relative inline-flex items-center justify-center overflow-hidden rounded-full border border-border bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                className
            )}
        >
            <Sun
                className={cn(
                    "h-4 w-4 rotate-0 scale-100 transition-transform duration-200",
                    isDark && "-rotate-90 scale-0"
                )}
            />
            <Moon
                className={cn(
                    "absolute h-4 w-4 rotate-90 scale-0 transition-transform duration-200",
                    isDark && "rotate-0 scale-100"
                )}
            />
            <span className="ml-6 text-xs font-semibold">
                {mounted ? (isDark ? "Dark" : "Light") : "Light"}
            </span>
        </button>
    );
}

