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
      <a
        className="ft-wayfinder"
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.directionsAria}
      >
        <svg
          className="ft-wayfinder-svg"
          viewBox="0 0 360 124"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="ftMapGlow" cx="66%" cy="38%" r="58%">
              <stop offset="0%" stopColor="rgba(38,67,118,0.55)" />
              <stop offset="100%" stopColor="rgba(12,23,43,0)" />
            </radialGradient>
          </defs>

          <rect width="360" height="124" fill="url(#ftMapGlow)" />

          {/* Architectural Sultanahmet courtyard & historic blocks */}
          <path
            d="M42 26h78l10 38-28 24H46z"
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
          <circle
            cx="126"
            cy="70"
            r="16"
            fill="rgba(255,255,255,0.025)"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="1"
          />
          <path
            d="M168 18h128v26l-34 22h-84z"
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
          <path
            d="M188 78h118v34H172z"
            fill="rgba(255,255,255,0.025)"
            stroke="rgba(255,255,255,0.055)"
            strokeWidth="1"
          />

          {/* Fine secondary lanes */}
          <path
            d="M0 96C80 92 140 82 210 68M156 0c-6 36-18 82-34 124M276 0c-12 40-18 84-16 124"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />

          {/* Main Babı Hümayun Cd. avenue */}
          <path
            d="M64 124C122 92 178 66 244 42c34-12 72-18 116-20"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="2.2"
          />

          {/* Hagia Sophia origin & 50m walking path */}
          <path
            d="M126 70Q180 54 236 46"
            fill="none"
            stroke="rgba(255,255,255,0.34)"
            strokeWidth="1.5"
            strokeDasharray="3 4"
            strokeLinecap="round"
          />
          <circle
            cx="126"
            cy="70"
            r="7"
            fill="none"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1"
          />
          <circle cx="126" cy="70" r="3" fill="rgba(255,255,255,0.5)" />

          {/* Meeting Point graphic beacon */}
          <circle
            className="ft-pin-pulse"
            cx="236"
            cy="46"
            r="14"
            fill="rgba(255,85,51,0.28)"
          />
          <circle
            cx="236"
            cy="46"
            r="9"
            fill="rgba(255,85,51,0.18)"
            stroke="rgba(255,85,51,0.55)"
            strokeWidth="1"
          />
          <circle
            cx="236"
            cy="46"
            r="4.5"
            fill="#FF5533"
            stroke="#FFFFFF"
            strokeWidth="1.6"
          />
        </svg>

        <span className="ft-wf-badge ft-wf-hours">{t.hours}</span>
        <span className="ft-wf-coord">Tevkifhane Sk. No:1</span>
        <span className="ft-wf-badge ft-wf-dist">{t.landmark}</span>
      </a>

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
