import Link from 'next/link';
import type { Locale } from '@/data/tours';

const TEASER: Record<
  Locale,
  {
    kicker: string;
    headline: string;
    pitch: string;
    caption: string;
    stats: [string, string][];
    cta: string;
  }
> = {
  en: {
    kicker: 'Your Licensed Guide · Est. 1994',
    headline: 'Thirty-two years behind the gates of Constantinople.',
    pitch:
      'Ergin Karakoyun is a Founding Delegate of the Chamber of Turkey Guides who leads private tours personally in English, German, and Chinese — backed by a 9-language licensed team.',
    caption: 'Ergin Karakoyun · Sultanahmet',
    stats: [
      ['32 yrs', 'Sultanahmet'],
      ['EN · DE · 中文', '9 team langs'],
      ['TÜRSAB 14988', 'Official licence'],
    ],
    cta: 'Meet Ergin & view credentials',
  },
  de: {
    kicker: 'Ihr lizenzierter Guide · Seit 1994',
    headline: 'Zweiunddreißig Jahre hinter den Toren Konstantinopels.',
    pitch:
      'Ergin Karakoyun ist Gründungsdelegierter der Kammer der türkischen Guides und führt persönlich auf Deutsch, Englisch und Chinesisch — mit einem 9-sprachigen lizenzierten Team.',
    caption: 'Ergin Karakoyun · Sultanahmet',
    stats: [
      ['32 Jahre', 'Sultanahmet'],
      ['DE · EN · 中文', '9 Team-Sprachen'],
      ['TÜRSAB 14988', 'Offizielle Lizenz'],
    ],
    cta: 'Ergin kennenlernen & Lizenz ansehen',
  },
  zh: {
    kicker: '您的持证导游 · 始于 1994',
    headline: '三十二年，走进君士坦丁堡的宫门深处。',
    pitch:
      'Ergin Karakoyun 是土耳其导游协会创始代表，亲自以中文、英语和德语带队私人导览，并拥有涵盖 9 种语言的持证团队。',
    caption: 'Ergin Karakoyun · 苏丹艾哈迈德',
    stats: [
      ['32 年', '深耕老城区'],
      ['中文 · EN · DE', '团队 9 语种'],
      ['TÜRSAB 14988', '官方牌照'],
    ],
    cta: '认识 Ergin 并查看官方资质',
  },
  tr: {
    kicker: 'Lisanslı Rehberiniz · 1994’ten Beri',
    headline: 'Konstantinopolis’in kapıları ardında otuz iki yıl.',
    pitch:
      'Türkiye Rehberler Odası Kurucu Delegesi Ergin Karakoyun, turlara İngilizce, Almanca ve Çince bizzat rehberlik eder; lisanslı ekibiyle toplam 9 dilde hizmet verir.',
    caption: 'Ergin Karakoyun · Sultanahmet',
    stats: [
      ['32 Yıl', 'Sultanahmet'],
      ['EN · DE · 中文', 'Ekipte 9 Dil'],
      ['TÜRSAB 14988', 'Resmi Belge'],
    ],
    cta: 'Ergin’i tanıyın & belgeleri görün',
  },
};

export default function GuideTeaser({ locale }: { locale: Locale }) {
  const t = TEASER[locale] ?? TEASER.en;

  return (
    <section id="about" className="gt-section">
      <div className="wrap">
        <div className="gt-card">
          <div className="gt-media">
            <div className="gt-arch-frame">
              <div className="gt-arch-window">
                <img
                  src="/img/portrait.webp"
                  alt="Ergin Karakoyun, licensed tourist guide"
                  className="gt-arch-img"
                  width={880}
                  height={1100}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="gt-caption">
                <span>{t.caption}</span>
              </div>
            </div>
          </div>

          <div className="gt-body">
            <p className="gt-kicker">
              <span className="gt-kicker-bar" aria-hidden="true" />
              <span>{t.kicker}</span>
            </p>
            <h2 className="gt-title">{t.headline}</h2>
            <p className="gt-pitch">{t.pitch}</p>

            <div className="gt-stats">
              {t.stats.map(([val, lbl]) => (
                <div className="gt-stat" key={lbl}>
                  <strong>{val}</strong>
                  <span>{lbl}</span>
                </div>
              ))}
            </div>

            <Link href={`/${locale}/guide`} className="gt-cta">
              <span>{t.cta}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
