"use client";
import { useModal } from "./ModalContext";

export default function GlobalModal() {
    const { isOpen, close } = useModal();

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={close}
        >
            <div
                className="bg-white rounded-xl max-w-md w-[90%] overflow-hidden shadow-xl animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
            >
                <iframe
                    src="https://tally.so/r/mBJdxe?hideTitle=1&transparentBackground=1"
                    width="100%"
                    height="700"
                    frameBorder="0"
                    title="Join Waitlist"
                    className="rounded-xl"
                />
            </div>
        </div>
    );
}
