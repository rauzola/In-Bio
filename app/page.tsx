import FAQ from "./components/commons/landing-page/faq";
import Pricing from "./components/commons/landing-page/pricing";
import VideoExplanation from "./components/commons/landing-page/video-explanation";
import Header from "./components/landing-page/header";
import Hero from "./components/landing-page/hero";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />

      <VideoExplanation />
      <Pricing />
      <FAQ />
    </div>
  );
}
