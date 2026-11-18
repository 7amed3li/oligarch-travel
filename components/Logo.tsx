export default function Logo({ withText = true }: { withText?: boolean }) {
  return (
    <span className="logo">
      <svg
        className="logo-mark"
        viewBox="0 0 48 34"
        width="40"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M9 27a15 15 0 0 1 30 0" />
        <line x1="4" y1="27" x2="44" y2="27" />
        <line x1="24" y1="10.5" x2="24" y2="6" />
        <circle cx="24" cy="4.4" r="1.5" fill="currentColor" stroke="none" />
        <line x1="13" y1="27" x2="13" y2="22.5" />
        <line x1="35" y1="27" x2="35" y2="22.5" />
      </svg>
      {withText && (
        <span className="logo-text">
          OLIGARCH<small>TRAVEL</small>
        </span>
      )}
    </span>
  );
}
