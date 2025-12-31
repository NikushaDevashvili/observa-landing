import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import Features from "@/sections/Features";
import Faqs from "@/sections/Faqs";
import Functional from "@/sections/Functional";
import Integration from "@/sections/Integration";
import LogoTicker from "@/sections/LogoTicker";
import TrackersSection from "@/sections/TrackersSection";
import Summaries from "@/sections/Summaries";
import Footer from "@/sections/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Functional />
            <Summaries />
            <TrackersSection />
            <Integration />
            {/* <LogoTicker /> */}
            <Footer />
        </>
    );
}
