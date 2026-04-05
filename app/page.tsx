import Image from "next/image";
import { ContentSection } from "@/components/sections/ContentSection";
import { welcome } from "@/data/welcome";
import { about } from "@/data/about";
import { contact } from "@/data/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen gap-16 py-22">
      <aside className="w-30 shrink-0">
        {/* left column */}
        <Image src="/b4-logo.svg" alt="logo image" width={120} height={120} />
      </aside>
      <section className="flex-1">
        {/* right column */}
        <ContentSection title="welcome" as="h1" blocks={welcome} />
        <ContentSection title="about" blocks={about} />
        <ContentSection title="contact" blocks={contact} />
      </section>
    </div>
  );
}
