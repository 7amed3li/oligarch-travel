'use client';

import { useState } from 'react';

// Ergin's own 1996 National Geographic clip (self-hosted), behind the same
// click-to-play facade pattern — nothing heavy loads until clicked.
export default function NatGeoFilm({
  title,
  play,
  caption,
}: {
  title: string;
  play: string;
  caption: string;
}) {
  const [on, setOn] = useState(false);
  return (
    <div className="td-night-film">
      <h4 className="td-night-subtitle">{title}</h4>
      <div className="gs-video-frame natgeo">
        {on ? (
          <video
            src="/img/natgeo-1996.mp4"
            poster="/img/natgeo-1996-poster.jpg"
            controls
            autoPlay
            playsInline
          />
        ) : (
          <button
            type="button"
            className="gs-video-facade"
            onClick={() => setOn(true)}
            aria-label={play}
          >
            <img src="/img/natgeo-1996-poster.jpg" alt="" loading="lazy" />
            <span className="gs-video-play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="30" height="30">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <p className="gs-video-caption">{caption}</p>
    </div>
  );
}
