export default function Logo({ withText = true }: { withText?: boolean }) {
  return (
    <span className="logo">
      <svg
        className="logo-mark"
        viewBox="0 0 72 84"
        width="24"
        height="28"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10,78 L10,44 C10,26 20,15 36,13 C52,15 62,26 62,44 L62,78 Z M24,78 L24,46 A12,12 0 0 1 48,46 L48,78 Z"
        />
        <polygon points="30.5,17 41.5,17 36,4" />
      </svg>
      {withText && (
        <span className="logo-text">
          OLIGARCH<small>TRAVEL</small>
        </span>
      )}
    </span>
  );
}
