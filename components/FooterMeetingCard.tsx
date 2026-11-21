'use client';

import { useEffect, useRef, useState } from 'react';
import type { Locale } from '@/data/tours';

const FULL_ADDRESS =
  'Four Seasons Hotel Istanbul At Sultanahmet, Tevkifhane Sk. No:1, Sultanahmet, Fatih, Istanbul';
const MAPS_URL = 'https://maps.app.goo.gl/vTuGMLWqoP2tgWH59';

const COPY: Record<
  Locale,
  {
    hours: string;
    landmark: string;
    directions: string;
    directionsAria: string;
    copy: string;
    copied: string;
    copyAria: string;
  }
> = {
  en: {
    hours: 'Daily · 09:00–17:00',
    landmark: 'Heart of Sultanahmet',
    directions: 'Directions',
    directionsAria: 'Open meeting point in Google Maps',
    copy: 'Copy address',
    copied: 'Copied',
    copyAria: 'Copy meeting point address',
  },
  de: {
    hours: 'Täglich · 09:00–17:00',
    landmark: 'Herz von Sultanahmet',
    directions: 'Route',
    directionsAria: 'Treffpunkt in Google Maps öffnen',
    copy: 'Kopieren',
    copied: 'Kopiert',
    copyAria: 'Treffpunkt-Adresse kopieren',
  },
  zh: {
    hours: '每日 · 09:00–17:00',
    landmark: '苏丹艾哈迈德中心',
    directions: '地图导航',
    directionsAria: '在 Google 地图中打开集合地点',
    copy: '复制地址',
    copied: '已复制',
    copyAria: '复制集合地点地址',
  },
  tr: {
    hours: 'Her gün · 09:00–17:00',
    landmark: "Sultanahmet'in kalbi",
    directions: 'Yol tarifi',
    directionsAria: 'Buluşma noktasını Google Haritalar’da aç',
    copy: 'Kopyala',
    copied: 'Kopyalandı',
    copyAria: 'Buluşma noktası adresini kopyala',
  },
};

export default function FooterMeetingCard({
  locale,
  address,
  meetingNote,
  label,
}: {
  locale: Locale;
  address: string;
  meetingNote: string;
  label: string;
}) {
  const t = COPY[locale] ?? COPY.en;
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  async function handleCopy() {
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(FULL_ADDRESS);
        ok = true;
      }
    } catch {
      ok = false;
    }

    if (!ok) {
      try {
        const el = document.createElement('textarea');
        el.value = FULL_ADDRESS;
        el.setAttribute('readonly', '');
        el.style.position = 'fixed';
        el.style.left = '-9999px';
        el.style.opacity = '0';
        document.body.appendChild(el);
        el.select();
        ok = document.execCommand('copy');
        document.body.removeChild(el);
      } catch {
        ok = false;
      }
    }

    if (ok) {
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2200);
    }
  }

  return (
    <div className="ft-place" role="group" aria-label={label}>
      <div className="ft-map">
        <iframe
          className="ft-map-frame"
          title={t.directionsAria}
          src="https://maps.google.com/maps?q=41.0065,28.9802&z=16&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <a
          className="ft-map-link"
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.directionsAria}
        />
        <span className="ft-wf-badge ft-wf-hours">{t.hours}</span>
        <span className="ft-wf-badge ft-wf-dist">{t.landmark}</span>
      </div>

      <div className="ft-place-body">
        <p className="ft-place-addr">{address}</p>
        <p className="ft-meeting-note">{meetingNote}</p>
      </div>

      <div className="ft-place-actions">
        <a
          className="ft-btn-maps"
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.directionsAria}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
          <span>{t.directions}</span>
        </a>

        <button
          type="button"
          className={copied ? 'ft-btn-copy is-copied' : 'ft-btn-copy'}
          onClick={handleCopy}
          aria-label={t.copyAria}
          aria-live="polite"
        >
          {copied ? (
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
          <span>{copied ? t.copied : t.copy}</span>
        </button>
      </div>
    </div>
  );
}
