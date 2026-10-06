import ThemeToggle from "./ThemeToggle";
import ChatNavLink from "./ChatNavLink";

const links = [
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#timeline", label: "TIMELINE" },
  { href: "#publications", label: "PUBLICATIONS" },
  { href: "#awards", label: "AWARDS" },
  { href: "#contact", label: "CONTACT" },
];

export function TopBar({ profile }) {
  return (
    <div className="top-bar">
      <a className="brand" href="#about">
        {profile.initials}
      </a>
      <nav>
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <ChatNavLink />
      </nav>
      <div className="top-bar-right">
        <ThemeToggle />
        <a className="contact-pill" href="#contact">
          Get in touch
        </a>
      </div>
    </div>
  );
}

export function MetaStrip({ profile }) {
  return (
    <div className="meta-strip">
      <span>[ PORTFOLIO · EDITION {new Date().getFullYear()} ]</span>
      <span>{profile.location.toUpperCase()}</span>
      <span>[ {profile.credentials.toUpperCase()} ]</span>
    </div>
  );
}
