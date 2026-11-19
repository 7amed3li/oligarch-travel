'use client';
import { useState, useEffect } from 'react';

const WA_NUMBER = '905553255565';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Gentle fade in after page loads
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    'Hello Ergin! I am visiting your website and have a question about Istanbul tours.',
  )}`;

  return (
    <aside
      className={`wa-float-wrap ${visible ? 'wa-visible' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Contact Ergin on WhatsApp"
    >
      <div className={`wa-float-tooltip ${hovered ? 'wa-tooltip-open' : ''}`}>
        <span className="wa-dot-online" />
        <div className="wa-tooltip-text">
          <strong>Ergin Karakoyun</strong>
          <small>Online · Licensed Istanbul Guide</small>
        </div>
      </div>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float-btn"
        aria-label="Chat with Ergin Karakoyun on WhatsApp"
      >
        <span className="wa-pulse-ring" />
        <svg
          className="wa-icon"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.65 7.89 8.02 8.49 8.02 9.71C8.02 10.93 8.91 12.11 9.03 12.28C9.15 12.44 10.74 15 13.25 16C15.34 16.83 15.77 16.66 16.22 16.62C16.67 16.58 17.67 16.02 17.88 15.44C18.09 14.85 18.09 14.35 18.03 14.24C17.96 14.14 17.8 14.08 17.55 13.96C17.3 13.83 16.08 13.23 15.85 13.15C15.63 13.06 15.46 13.02 15.3 13.27C15.13 13.51 14.66 14.08 14.51 14.24C14.37 14.41 14.22 14.43 13.97 14.31C13.73 14.18 12.93 13.92 11.99 13.08C11.26 12.42 10.76 11.61 10.62 11.37C10.47 11.12 10.6 11 10.73 10.87C10.84 10.76 10.98 10.58 11.1 10.44C11.23 10.3 11.27 10.19 11.35 10.03C11.43 9.86 11.39 9.72 11.33 9.6C11.27 9.47 10.78 8.27 10.58 7.78C10.38 7.3 10.18 7.36 10.03 7.35C9.88 7.34 9.71 7.34 9.53 7.34Z" />
        </svg>
        <span className="wa-float-label">WhatsApp</span>
      </a>
    </aside>
  );
}
