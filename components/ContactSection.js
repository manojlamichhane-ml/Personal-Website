"use client";

import { useState } from "react";
import { IconBadge } from "./IconBadges";
import { withBasePath } from "@/lib/paths";

export default function ContactSection({ profile }) {
  const cvHref = withBasePath(profile.cvUrl);

  const [subject, setSubject] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const body = senderEmail ? `${message}\n\nFrom: ${senderEmail}` : message;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || "Message from your website"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <section className="section contact-section" id="contact">
      <h2>Contact</h2>
      <p className="lede">Open to collaboration, consulting, and research inquiries.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="contact-input"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <input
          type="email"
          className="contact-input"
          placeholder="Your email"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          required
        />
        <textarea
          className="contact-textarea"
          placeholder="Your message..."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary contact-send-btn">
          Send ↗
        </button>
      </form>

      <p className="contact-fallback">
        Prefer email directly?{" "}
        <a className="contact-link" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        {profile.phone && (
          <>
            {" "}
            ·{" "}
            <a className="contact-link" href={`tel:${profile.phone}`}>
              {profile.phone}
            </a>
          </>
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
