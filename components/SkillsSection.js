"use client";

import { useState } from "react";
import { withBasePath } from "@/lib/paths";

function SkillTile({ item }) {
  const [active, setActive] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const showIcon = Boolean(item.icon) && !imageFailed;

  function toggle() {
    setActive((v) => !v);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  }

  return (
    <div
      className={`skill-tile${active ? " is-active" : ""}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={active}
      aria-label={`${item.name}: ${item.story}`}
    >
      <div className="skill-tile-face skill-tile-front">
        {showIcon ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBasePath(`/skills/${item.icon}`)}
              alt=""
              className="skill-icon"
              onError={() => setImageFailed(true)}
            />
            <span className="skill-tile-name">{item.name}</span>
          </>
        ) : (
          <span className="skill-tile-name skill-tile-name-only">{item.name}</span>
        )}
      </div>
      <div className="skill-tile-face skill-tile-back">
        <p>{item.story}</p>
      </div>
    </div>
  );
}

export default function SkillsSection({ skills }) {
  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      <p className="lede">Hover (or tap) a tile to see how I actually use it.</p>
      {skills.map((group) => (
        <div key={group.category} style={{ marginBottom: "2.5rem" }}>
          <p className="subheading">{group.category.toUpperCase()}</p>
          <div className="skill-grid">
            {group.items.map((item) => (
              <SkillTile key={item.name} item={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
