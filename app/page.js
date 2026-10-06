import { TopBar, MetaStrip } from "@/components/Nav";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import CVSection from "@/components/CVSection";
import PublicationsSection from "@/components/PublicationsSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import ChatWidget from "@/components/ChatWidget";
import {
  profile,
  experience,
  skills,
  publications,
  publicationsNote,
  awards,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <TopBar profile={profile} />
      <MetaStrip profile={profile} />
      <div className="layout">
        <main>
          <Hero profile={profile} />
          <SkillsSection skills={skills} />
          <CVSection experience={experience} />
          <PublicationsSection
            publications={publications}
            publicationsNote={publicationsNote}
            profile={profile}
          />
          <AwardsSection awards={awards} />
          <ContactSection profile={profile} />
        </main>
      </div>
      <footer className="site-footer">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </footer>
      <ChatWidget profile={profile} />
    </>
  );
}
