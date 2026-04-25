import About from "@/components/About";
import ContactClose from "@/components/ContactClose";
import Experience from "@/components/Experience";
import HomepageTopZone from "@/components/homepage/HomepageTopZone";
import Speaking from "@/components/Speaking";

export default function Home() {
  return (
    <main
      className="min-h-screen overflow-x-clip bg-[color:var(--background)]"
    >
      <HomepageTopZone />

      <div className="homepage-zone homepage-zone--light">
        <About />
        <Experience />
      </div>

      <div className="homepage-zone homepage-zone--light">
        <Speaking />
        <ContactClose />
      </div>
    </main>
  );
}
