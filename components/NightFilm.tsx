'use client';

import { useState } from 'react';

// The official film of the first Topkapi Palace night tour (Ministry of
// Culture and Tourism + SICPA, Ergin appears from 0:25). Same click-to-play
// facade pattern as the guide page, so no YouTube iframe loads until the
// visitor chooses to watch.
export default function NightFilm({
  title,
  play,
  caption,
}: {
  title?: string;
  play: string;
  caption: string;
}) {
  const [on, setOn] = useState(false);
  return (
    <div className="td-night-film">
      {title ? <h4 className="td-night-subtitle">{title}</h4> : null}
      <div className="gs-video-frame">
        {on ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/F_U0Zlypl54?start=25&autoplay=1&rel=0"
            title="Topkapi Palace — the first night museum tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="gs-video-facade"
            onClick={() => setOn(true)}
            aria-label={play}
          >
            <img
              src="https://i.ytimg.com/vi/F_U0Zlypl54/maxresdefault.jpg"
              alt=""
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget;
                if (!img.src.includes('hqdefault')) {
                  img.src = 'https://i.ytimg.com/vi/F_U0Zlypl54/hqdefault.jpg';
                }
              }}
            />
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
