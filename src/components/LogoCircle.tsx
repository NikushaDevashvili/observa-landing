import { cn } from "@/lib/utils";

export default function LogoCircle({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("text-foreground", className)}
        >
            <circle cx="20" cy="20" r="20" fill="currentColor" />
        </svg>
    );
}

