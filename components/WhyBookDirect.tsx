import type { Locale } from '@/data/tours';

const WBD_META: Record<
  Locale,
  {
    overline: string;
    badges: [string, string, string];
    directLabel: string;
    otaLabel: string;
    rows: [string, string, string][];
  }
> = {
  en: {
    overline: 'Direct Booking Advantage',
    badges: ['0% Fee', 'Direct WhatsApp', 'TÜRSAB 14988'],
    directLabel: 'Oligarch Direct',
    otaLabel: 'Booking Platforms',
    rows: [
      ['Platform commission', '0% — guide’s direct price', '20–30% platform markup'],
      ['Who leads your tour', 'Ergin confirms personally', 'Assigned randomly on the day'],
      ['Payment at booking', '€0 card online · WhatsApp confirm', '100% charged upfront online'],
    ],
  },
  de: {
    overline: 'Direktbuchungsvorteil',
    badges: ['0 % Provision', 'Direkt per WhatsApp', 'TÜRSAB 14988'],
    directLabel: 'Direkt bei Oligarch',
    otaLabel: 'Buchungsplattformen',
    rows: [
      ['Plattformprovision', '0 % — Direktpreis vom Guide', '20–30 % Plattform-Aufschlag'],
      ['Wer führt Ihre Tour', 'Ergin bestätigt persönlich', 'Zufällige Zuteilung vor Ort'],
      ['Zahlung bei Buchung', '0 € online · WhatsApp-Zusage', '100 % Vorauszahlung online'],
    ],
  },
  zh: {
    overline: '直订专属优势',
    badges: ['0% 平台佣金', 'WhatsApp 直连', 'TÜRSAB 14988'],
    directLabel: 'Oligarch 直订',
    otaLabel: '第三方平台 (OTA)',
    rows: [
      ['平台抽佣', '0% —— 导游本人直报价', '通常含 20–30% 平台加价'],
      ['带队导游', 'Ergin 本人亲自确认接待', '当天随机指派导游'],
      ['预订付款', '无需在线刷卡 · WhatsApp 确认', '下单即全额线上预付'],
    ],
  },
  tr: {
    overline: 'Doğrudan Rezervasyon Avantajı',
    badges: ['%0 Komisyon', 'Doğrudan WhatsApp', 'TÜRSAB 14988'],
    directLabel: 'Doğrudan Oligarch',
    otaLabel: 'Aracı Platformlar',
    rows: [
      ['Platform komisyonu', '%0 — doğrudan rehber fiyatı', '%20–30 platform ek ücreti'],
      ['Turu kim yönetir', 'Ergin bizzat onaylar', 'Tur günü rastgele atanır'],
      ['Rezervasyonda ödeme', 'Online kart yok · WhatsApp teyit', '%100 peşin online tahsilat'],
    ],
  },
};

export default function WhyBookDirect({
  locale,
  title,
  items,
}: {
  locale: Locale;
  title: string;
  items: [string, string][];
}) {
  const t = WBD_META[locale] ?? WBD_META.en;

  return (
    <section className="wbd-section alt">
      <div className="wrap">
        <div className="wbd-head">
          <p className="wbd-overline">{t.overline}</p>
          <h2 className="sec">{title}</h2>
        </div>

        <div className="wbd-grid">
          {items.map(([heading, desc], idx) => (
            <div className="wbd-card" key={heading}>
              <div className="wbd-card-top">
                <span className="wbd-num">
                  <span className="wbd-num-dot" aria-hidden="true" />
                  <span>{`0${idx + 1}`}</span>
                </span>
                <span className="wbd-badge">{t.badges[idx] || 'TÜRSAB 14988'}</span>
              </div>
              <h3>{heading}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className="wbd-compare" aria-label={title}>
          <div className="wbd-cmp-head">
            <div className="wbd-cmp-spacer" />
            <div className="wbd-cmp-col-title is-direct">{t.directLabel}</div>
            <div className="wbd-cmp-col-title is-ota">{t.otaLabel}</div>
          </div>

          {t.rows.map(([label, directVal, otaVal]) => (
            <div className="wbd-cmp-row" key={label}>
              <div className="wbd-cmp-label">{label}</div>
              <div className="wbd-cmp-cell is-direct">
                <span className="wbd-cmp-tag">{t.directLabel}</span>
                <div className="wbd-cmp-val">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C93A1B"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{directVal}</span>
                </div>
              </div>
              <div className="wbd-cmp-cell is-ota">
                <span className="wbd-cmp-tag">{t.otaLabel}</span>
                <div className="wbd-cmp-val">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <line x1="6" y1="12" x2="18" y2="12" />
                  </svg>
                  <span>{otaVal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
