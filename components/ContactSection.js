import { IconBadge } from "./IconBadges";
import { withBasePath } from "@/lib/paths";

export default function ContactSection({ profile }) {
  const cvHref = withBasePath(profile.cvUrl);

  return (
    <section className="section contact-section" id="contact">
      <h2>Contact</h2>
      <p className="lede">
        Open to collaboration, consulting, and
        research inquiries.
      </p>
      <p style={{ marginBottom: "2rem" }}>
        <a className="contact-link" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        {profile.phone && (
          <a className="contact-link" href={`tel:${profile.phone}`}>
            {profile.phone}
          </a>
        )}
      </p>
      <div className="icon-badges">
        <IconBadge kind="linkedin" href={profile.linkedinUrl} />
        <IconBadge kind="github" href={profile.githubUrl} />
        <IconBadge kind="scholar" href={profile.scholarUrl} />
        <IconBadge kind="orcid" href={profile.orcidUrl} />
        <IconBadge kind="resume" href={cvHref} />
      </div>
    </section>
  );
}
