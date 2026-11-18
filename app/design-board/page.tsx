import Logo from '@/components/Logo';

const PALETTE: [string, string, string][] = [
  ['Paper White', '#FFFFFF', 'Page base — clean marketplace canvas'],
  ['Navy Ink', '#1A2B49', 'Text, headings, footer — dark navy, never black. 14.13:1 on white (AAA)'],
  ['Action Orange', '#FF5533', 'Graphic accent ONLY — rating stars, large non-text marks. Never behind or as text (3.18:1)'],
  ['Action Orange Deep', '#C93A1B', 'Every filled button, badge chip & accent text — white on it 5.12:1 (AA)'],
  ['Action Orange Deep · Hover', '#A93213', 'Hover state of filled actions — white on it 6.66:1'],
  ['Mist', '#F5F7FA', 'Alternating section background'],
  ['Line Grey', '#E3E8EF', 'Card borders and dividers — never used for text'],
  ['Ink Soft', '#5D6B82', 'Secondary text, durations, labels — 5.40:1 on white, 5.03:1 on Mist (AA)'],
];

const boardCss = `
.board{font-family:'Inter',system-ui,sans-serif;color:#1A2B49;background:#F5F7FA;min-height:100vh}
.board .wrap{max-width:1160px;margin:0 auto;padding:0 20px}
.board section{padding:44px 0}
.board h1{font-size:34px;font-weight:900;margin:0 0 8px}
.board h2{font-size:22px;font-weight:800;margin:0 0 14px}
.board p.lead{font-size:17px;color:#5D6B82;max-width:760px;margin:0}
.swatches{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:14px}
.swatch{border:1px solid #E3E8EF;border-radius:12px;overflow:hidden;background:#fff}
.swatch .chip{height:74px}
.swatch .meta{padding:10px 12px}
.swatch .meta strong{display:block;font-size:14px}
.swatch .meta code{font-size:13px;color:#5D6B82}
.swatch .meta p{font-size:12.5px;color:#5D6B82;margin:4px 0 0}
.logo-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.logo-panel{border-radius:12px;padding:34px;display:flex;justify-content:center;border:1px solid #E3E8EF}
.logo-panel.light{background:#fff;color:#1A2B49}
.logo-panel.dark{background:#1A2B49;color:#fff}
.logo-panel .logo-text small{color:inherit;opacity:.65}
.typebox{background:#fff;border:1px solid #E3E8EF;border-radius:12px;padding:22px}
.spec{width:100%;border-collapse:collapse;font-size:14.5px;margin-top:14px}
.spec td{padding:7px 10px;border-bottom:1px solid #E3E8EF;vertical-align:top}
.spec tr:last-child td{border-bottom:none}
.spec td:first-child{font-weight:700;white-space:nowrap;width:190px}
.spec td:last-child{color:#5D6B82}
.rules{margin:0;padding-left:18px}
.rules li{margin:6px 0}
.frame{border:1px solid #E3E8EF;border-radius:12px;overflow:hidden;background:#fff}
.frame iframe{width:100%;height:920px;border:0;display:block}
@media(max-width:700px){.logo-grid{grid-template-columns:1fr}}
`;

export default function DesignBoard() {
  return (
    <main className="board">
      <style>{boardCss}</style>
      <section style={{ background: '#fff', borderBottom: '1px solid #E3E8EF' }}>
        <div className="wrap">
          <h1>Oligarch Travel — Website Design</h1>
          <p className="lead">
            <strong>Vision:</strong> a booking page as clear as the big marketplaces — a visitor
            lands, searches, and books in under a minute. One dominant search bar over the Hagia
            Sophia hero, tour cards that show photo, rating and price at a glance, and proof (real
            TripAdvisor / Viator / Airbnb numbers) printed on the cards themselves. Clarity first;
            everything else is quiet.
          </p>
          <p className="lead" style={{ marginTop: 10 }}>
            <strong>Why this palette:</strong> clean white and dark navy read as trustworthy and
            scannable on a phone in bright sunlight. There is one orange family with two shades by
            role: the bright #FF5533 is a graphic accent (stars, large non-text marks), while every
            surface that carries text — the search button, booking buttons, badge chips — uses the
            deep shade #C93A1B, so every label passes WCAG AA (5.12:1) and the eye still always
            knows the next step.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Colour palette</h2>
          <div className="swatches">
            {PALETTE.map(([name, hex, note]) => (
              <div className="swatch" key={hex}>
                <div className="chip" style={{ background: hex }}></div>
                <div className="meta">
                  <strong>{name}</strong>
                  <code>{hex}</code>
                  <p>{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Typography</h2>
          <div className="typebox">
            <div style={{ fontSize: 30, fontWeight: 900 }}>
              Inter — bold, friendly, marketplace-clear
            </div>
            <p style={{ color: '#5D6B82', margin: '8px 0 0' }}>
              One sans-serif family for everything: heavy weights for headlines and prices, regular
              for body text. Identical rendering in English, German and Chinese (system CJK
              fallbacks).
            </p>
            <table className="spec">
              <tbody>
                <tr><td>Hero headline</td><td>clamp(34px → 58px) · weight 900 · line-height 1.15</td></tr>
                <tr><td>Section headline</td><td>29px · weight 800</td></tr>
                <tr><td>Card title</td><td>17.5px · weight 800 · line-height 1.3</td></tr>
                <tr><td>Price (in card)</td><td>19px · weight 800 · Navy Ink</td></tr>
                <tr><td>Body</td><td>16px · weight 400 · line-height 1.55</td></tr>
                <tr><td>Meta / small</td><td>13–13.5px · Ink Soft</td></tr>
                <tr><td>Field labels</td><td>11px · weight 700 · uppercase · letter-spacing 0.07em</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Usage rules</h2>
          <div className="typebox">
            <ul className="rules">
              <li><strong>Orange means action.</strong> It appears only on the search button, booking and cart buttons, the Badge-of-Excellence chip, rating stars and interactive hover/focus states — never as decoration (no orange borders, dividers or section backgrounds).</li>
              <li><strong>Bright orange never carries text.</strong> #FF5533 is 3.18:1 on white, so it is graphics-only; any orange surface with text, and any orange text, uses Deep #C93A1B (5.12:1, AA). Hover deepens to #A93213 (6.66:1).</li>
              <li><strong>Cards scan in one fixed order:</strong> photo → title → ★ rating → duration / meta → price. Same order on every card, in every language.</li>
              <li><strong>One geometry:</strong> 12px radius on cards and panels, 9px on buttons, one resting shadow (0 2px 10px, navy 8%) and one lifted shadow (0 14px 34px, navy 18%) for hover and the hero search bar.</li>
              <li><strong>Contrast floor:</strong> every text/background pair is ≥ 4.5:1 (WCAG AA) — Ink on White 14.13:1, Ink Soft on White 5.40:1, Ink Soft on Mist 5.03:1, White on Deep Orange 5.12:1.</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Logo — two variants</h2>
          <div className="logo-grid">
            <div className="logo-panel light">
              <Logo />
            </div>
            <div className="logo-panel dark">
              <Logo />
            </div>
          </div>
          <p style={{ color: '#5D6B82', fontSize: 14 }}>
            A single line-mark: the Hagia Sophia dome. One colour, works at any size, on light or
            dark.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Homepage — the design to approve</h2>
          <p style={{ color: '#5D6B82', marginTop: 0 }}>
            Live preview of the real homepage (English). The search bar, tour cards, ratings and
            prices below are the actual site, not a mockup.
          </p>
          <div className="frame">
            <iframe src="/en" title="Oligarch Travel homepage preview" />
          </div>
          <p style={{ marginTop: 14 }}>
            <a href="/en" target="_blank" rel="noopener" style={{ fontWeight: 700 }}>
              Open the homepage full-screen →
            </a>{' '}
            · <a href="/de">Deutsch</a> · <a href="/zh">中文</a>
          </p>
        </div>
      </section>
    </main>
  );
}
