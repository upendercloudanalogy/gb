import Petals from "@/components/Petals";
import ScrollProgress from "@/components/ScrollProgress";
import IntroGate from "@/components/IntroGate";
import Hero from "@/components/Hero";
import Opening from "@/components/Opening";
import Journey from "@/components/Journey";
import Videos from "@/components/Videos";
import Finale from "@/components/Finale";
import Letter from "@/components/Letter";
import Footer from "@/components/Footer";

import {
  hero,
  opening,
  photos,
  videosSection,
  finale,
  finalePhoto,
  letter,
  footer,
} from "@/lib/content";

export default function Page() {
  return (
    <main className="relative">
      <Petals />
      <ScrollProgress />
      <IntroGate />

      <Hero hero={hero} />
      <Opening opening={opening} />
      <Journey photos={photos} />
      <Videos data={videosSection} />
      <Finale finalePhoto={finalePhoto} finale={finale} />
      <Letter letter={letter} />
      <Footer text={footer} />
    </main>
  );
}
