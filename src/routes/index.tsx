import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/atomic/Navbar";
import Hero from "@/components/atomic/Hero";
import Experience from "@/components/atomic/Experience";
import Menu from "@/components/atomic/Menu";
import Veggie from "@/components/atomic/Veggie";
import Sharing from "@/components/atomic/Sharing";
import Gallery from "@/components/atomic/Gallery";
import Reviews from "@/components/atomic/Reviews";
import Events from "@/components/atomic/Events";
import Contact from "@/components/atomic/Contact";
import Footer from "@/components/atomic/Footer";
import ScrollToTop from "@/components/atomic/ScrollToTop";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Experience />
      <Menu />
      <Veggie />
      <Sharing />
      <Gallery />
      <Reviews />
      <Events />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
