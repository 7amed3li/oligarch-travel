import Link from 'next/link';

export default function NotFound() {
  return (
    <section style={{ padding: '80px 20px', textAlign: 'center' }}>
      <div className="wrap">
        <h1 style={{ fontSize: 48, marginBottom: 16 }}>404</h1>
        <p style={{ fontSize: 18, marginBottom: 24, color: '#4A5568' }}>
          Page not found — the requested page does not exist.
        </p>
        <Link href="/" className="btn accent" style={{ display: 'inline-block' }}>
          Back to Istanbul Tours
        </Link>
      </div>
    </section>
  );
}

