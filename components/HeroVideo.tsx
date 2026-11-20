'use client';

import { useEffect, useState } from 'react';

export default function HeroVideo({
  poster,
  webmSrc,
  mp4Src,
  alt,
}: {
  poster: string;
  webmSrc: string;
  mp4Src: string;
  alt: string;
}) {
  const [mountVideo, setMountVideo] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const conn = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType === 'slow-2g' || conn?.effectiveType === '2g') return;

    setMountVideo(true);
  }, []);

  return (
    <>
      <img
        className="poster"
        src={poster}
        alt={alt}
        width={1280}
        height={720}
        fetchPriority="high"
        decoding="async"
      />
      {mountVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
          className={ready ? 'hero-vid is-ready' : 'hero-vid'}
          onCanPlay={() => setReady(true)}
        >
          <source src={webmSrc} type="video/webm" />
          <source src={mp4Src} type="video/mp4" />
        </video>
      ) : null}
    </>
  );
}
