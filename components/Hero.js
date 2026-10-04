import Image from "next/image";
import { IconBadge } from "./IconBadges";
import { withBasePath } from "@/lib/paths";

export default function Hero({ profile }) {
  const cvHref = withBasePath(profile.cvUrl);

  return (
    <section className="section hero" id="about">
      <div className="hero-content">
        <div className="hero-badge">★ {profile.badge}</div>
        <p className="role">{profile.title}</p>
        <h1 className="bio-greeting">{profile.bioGreeting}</h1>
        <p className="bio">{profile.bio}</p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#publications">
            Explore publications ↗
          </a>
          <a className="btn btn-outline" href={cvHref}>
            Download CV ↗
          </a>
          <a className="btn btn-outline" href="#contact">
            Contact ↗
          </a>
        </div>
        <div className="icon-badges">
          <IconBadge kind="linkedin" href={profile.linkedinUrl} />
          <IconBadge kind="github" href={profile.githubUrl} />
          <IconBadge kind="scholar" href={profile.scholarUrl} />
          <IconBadge kind="orcid" href={profile.orcidUrl} />
          <IconBadge kind="resume" href={cvHref} />
        </div>
      </div>

      <div>
        <div className="portrait-frame">
          <Image
            src={withBasePath("/portrait.jpg")}
            alt={profile.name}
            fill
            sizes="(max-width: 900px) 320px, 400px"
            style={{ objectFit: "cover" }}
            priority
            unoptimized
          />
        </div>
        <div className="portrait-caption">
          <span>[ PORTRAIT ]</span>
          <span>{profile.location.toUpperCase()}</span>
        </div>
      </div>
    </section>
  );
}
