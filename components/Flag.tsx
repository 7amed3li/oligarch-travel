// Inline SVG flags for the language menu. Emoji flags do not render on
// Windows (they fall back to the country-code letters, which produced a
// doubled "DE DE" in the header pill), so the four flags are drawn as
// small vector graphics that look identical on every platform.
const STAR =
  'M0,-1 L0.235,-0.324 L0.951,-0.309 L0.38,0.124 L0.588,0.809 L0,0.4 L-0.588,0.809 L-0.38,0.124 L-0.951,-0.309 L-0.235,-0.324 Z';

export default function Flag({ code }: { code: string }) {
  return (
    <span className="flag-ic" aria-hidden="true">
      <svg viewBox="0 0 20 15" focusable="false">
        {code === 'de' && (
          <>
            <rect width="20" height="5" fill="#000000" />
            <rect y="5" width="20" height="5" fill="#DD0000" />
            <rect y="10" width="20" height="5" fill="#FFCC00" />
          </>
        )}
        {code === 'tr' && (
          <>
            <rect width="20" height="15" fill="#E30A17" />
            <circle cx="8" cy="7.5" r="3.75" fill="#FFFFFF" />
            <circle cx="8.8" cy="7.5" r="3" fill="#E30A17" />
            <path d={STAR} fill="#FFFFFF" transform="translate(13.9 7.5) rotate(-90) scale(2.1)" />
          </>
        )}
        {code === 'zh' && (
          <>
            <rect width="20" height="15" fill="#DE2910" />
            <path d={STAR} fill="#FFDE00" transform="translate(4.6 3.8) scale(2.3)" />
            <path d={STAR} fill="#FFDE00" transform="translate(9.6 1.9) scale(0.95)" />
            <path d={STAR} fill="#FFDE00" transform="translate(10.8 4.6) scale(0.95)" />
            <path d={STAR} fill="#FFDE00" transform="translate(10.8 7.4) scale(0.95)" />
            <path d={STAR} fill="#FFDE00" transform="translate(9.6 10) scale(0.95)" />
          </>
        )}
        {code === 'en' && (
          <>
            <rect width="20" height="15" fill="#012169" />
            <path d="M0,0 L20,15 M20,0 L0,15" stroke="#FFFFFF" strokeWidth="3" />
            <path d="M0,0 L20,15 M20,0 L0,15" stroke="#C8102E" strokeWidth="1.1" />
            <rect x="8.4" width="3.2" height="15" fill="#FFFFFF" />
            <rect y="5.9" width="20" height="3.2" fill="#FFFFFF" />
            <rect x="9.2" width="1.6" height="15" fill="#C8102E" />
            <rect y="6.7" width="20" height="1.6" fill="#C8102E" />
          </>
        )}
      </svg>
    </span>
  );
}
