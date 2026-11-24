// BYZIST brand mark (2026-11-24, replacing the old Oligarch Travel arch):
// Istanbul skyline under a gold arc, drawn from Ergin's BYZIST artwork —
// Galata Tower, a minaret, the Hagia Sophia dome, a second minaret and
// the Hippodrome obelisk over one ground line. Silhouette in currentColor
// so header/footer themes carry it; the arc keeps the brand gold.
export default function Logo({ withText = true }: { withText?: boolean }) {
  return (
    <span className="logo">
      <svg
        className="logo-mark"
        viewBox="0 0 120 74"
        width="47"
        height="29"
        aria-hidden="true"
      >
        <path
          d="M4,22 A140,140 0 0 1 116,22"
          fill="none"
          stroke="#C6A15B"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <g fill="currentColor">
          <path d="M17,62 L18.2,37 L21.8,37 L23,62 Z" />
          <rect x="15.8" y="34.5" width="8.4" height="3" rx="1" />
          <path d="M15.5,34.5 L20,25 L24.5,34.5 Z" />
          <rect x="19.55" y="21.5" width="0.9" height="3.5" />
          <rect x="35.2" y="30" width="2.2" height="32" />
          <rect x="33.9" y="39" width="4.8" height="2.4" rx="1" />
          <path d="M33.8,30 L36.3,21 L38.8,30 Z" />
          <path d="M45,62 L45,47 A15,15 0 0 1 75,47 L75,62 Z" />
          <path d="M37,62 L37,54 A6,6 0 0 1 49,54 L49,62 Z" />
          <path d="M71,62 L71,54 A6,6 0 0 1 83,54 L83,62 Z" />
          <rect x="59.5" y="26" width="1" height="6" />
          <circle cx="60" cy="24.5" r="1.6" />
          <rect x="87.5" y="30" width="2.2" height="32" />
          <rect x="86.2" y="39" width="4.8" height="2.4" rx="1" />
          <path d="M86.1,30 L88.6,21 L91.1,30 Z" />
          <path d="M100.5,62 L101.8,34 L105.2,34 L106.5,62 Z" />
          <path d="M101.8,34 L103.5,27.5 L105.2,34 Z" />
          <rect x="6" y="62" width="108" height="3" rx="1.5" />
        </g>
      </svg>
      {withText && (
        <span className="logo-text">
          BYZIST<small>ISTANBUL EXPERIENCES</small>
        </span>
      )}
    </span>
  );
}
