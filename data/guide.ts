import type { Locale } from './tours';

export type PersonalLang = 'en' | 'de' | 'zh';

export interface HeritageStop {
  era: string;
  title: string;
  desc: string;
  tourSlugs: string[];
}

export interface GuideCopy {
  overline: string;
  coordPlace: string;
  metrics: {
    yearsLabel: string;
    langsLabel: string;
    empiresLabel: string;
  };
  cred: {
    frontKicker: string;
    frontRole: string;
    flipToBack: string;
    flipToFront: string;
    backTitle: string;
    rows: [string, string][];
  };
  langSection: {
    heading: string;
    teamBadge: string;
  };
  stamps: {
    caption: string;
    s1Top: string;
    s1Main: string;
    s1Bottom: string;
    s2Top: string;
    s2Main: string;
    s2Bottom: string;
    s3Top: string;
    s3Main: string;
    s3Bottom: string;
  };
  route: {
    kicker: string;
    title: string;
    stops: HeritageStop[];
  };
  video: {
    kicker: string;
    title: string;
    caption: string;
    play: string;
  };
  natgeo: {
    kicker: string;
    title: string;
    caption: string;
    play: string;
  };
}

export const PERSONAL_GREETINGS: Record<
  PersonalLang,
  { label: string; native: string; quote: string }
> = {
  en: {
    label: 'EN',
    native: 'English',
    quote:
      'Welcome to Sultanahmet. Thirty-two years walking these stones, and Hagia Sophia still rewards an unhurried eye.',
  },
  de: {
    label: 'DE',
    native: 'Deutsch',
    quote:
      'Willkommen in Sultanahmet. Zweiunddreißig Jahre auf diesen Steinen — und die Hagia Sophia belohnt noch immer jeden ruhigen Blick.',
  },
  zh: {
    label: '中文',
    native: '中文',
    quote:
      '欢迎来到苏丹艾哈迈德。三十二年行走于古城石阶之间，圣索菲亚的每一道光影依然值得细细驻足。',
  },
};

export const GUIDE_COPY: Record<Locale, GuideCopy> = {
  en: {
    overline: 'Licensed Heritage Specialist · Est. 1994',
    video: {
      kicker: 'As seen on YouTube',
      title: 'Your guide on screen — the Topkapi Night Museum film',
      caption: 'Filmed as Ergin led the first night museum tour at Topkapi Palace — produced in cooperation with the Ministry of Culture and Tourism and SICPA. Ergin appears from 0:25, so playback starts there.',
      play: 'Play the video',
    },
    natgeo: {
      kicker: 'National Geographic · 1996',
      title: 'A young Ergin on National Geographic',
      caption: 'Broadcast on the National Geographic Channel in 1996 — Ergin guiding at Topkapi Palace.',
      play: 'Play the video',
    },
    coordPlace: 'Sultanahmet, Old City',
    metrics: {
      yearsLabel: 'Years in Istanbul’s Old City',
      langsLabel: 'Personal / 9 Team Languages',
      empiresLabel: 'Empires: Byzantine & Ottoman',
    },
    cred: {
      frontKicker: 'Licensed Tourist Guide',
      frontRole: 'Founding Delegate · Chamber of Turkey Guides',
      flipToBack: 'View credentials',
      flipToFront: 'Front',
      backTitle: 'Official Credentials',
      rows: [
        ['Agency', 'Oligarch Tour · TÜRSAB No. 14988'],
        ['Chamber', 'Founding Delegate, Chamber of Turkey Guides'],
        ['Languages', 'EN · DE · 中文 (+6 licensed team)'],
        ['Daily Desk', 'Hagia Sophia Ticket Office, 09:00–17:00'],
      ],
    },
    langSection: {
      heading: 'Guided personally in',
      teamBadge: '9 languages with licensed team',
    },
    stamps: {
      caption: 'Verified credentials & field record',
      s1Top: 'ISTANBUL OLD CITY',
      s1Main: '32 YRS',
      s1Bottom: 'EST. 1994',
      s2Top: 'CHAMBER OF GUIDES',
      s2Main: 'FOUNDING',
      s2Bottom: 'DELEGATE · TURKEY',
      s3Top: 'OLIGARCH TOUR',
      s3Main: '14988',
      s3Bottom: 'TÜRSAB LICENCE',
    },
    route: {
      kicker: 'Three Empires · One Old City',
      title: 'Areas of heritage mastery',
      stops: [
        {
          era: '330–395',
          title: 'Roman Constantinople',
          desc: 'From Constantine to Theodosius — the new capital takes shape around the Hippodrome, where the Egyptian Obelisk still stands over the square today.',
          tourSlugs: ['sultanahmet-hippodrome'],
        },
        {
          era: '395–1453',
          title: 'Byzantine Constantinople',
          desc: 'Justinian’s great dome, the Upper Gallery mosaics, and the subterranean marble forest of the Basilica Cistern.',
          tourSlugs: ['hagia-sophia', 'basilica-cistern'],
        },
        {
          era: '1453–1922',
          title: 'Ottoman Imperial Core',
          desc: 'Topkapi Palace’s four courtyards, imperial statecraft, and artisan workshops thriving inside the historic bazaars.',
          tourSlugs: ['topkapi-palace', 'bazaars-tour'],
        },
        {
          era: '1994–Present',
          title: '32 Years in Sultanahmet',
          desc: 'Unhurried full-day historical walks linking the Hippodrome to the waterfront, plus private Bosphorus charters.',
          tourSlugs: ['full-day-istanbul', 'bosphorus-yacht'],
        },
      ],
    },
  },
  de: {
    overline: 'Lizenzierter Kulturerbe-Spezialist · Seit 1994',
    video: {
      kicker: 'Auf YouTube',
      title: 'Ihr Guide auf dem Bildschirm — der Topkapi-Nachtmuseum-Film',
      caption: 'Gedreht, als Ergin die erste Nachtmuseum-Tour im Topkapi-Palast führte — entstanden in Zusammenarbeit mit dem Ministerium für Kultur und Tourismus und SICPA. Ergin ist ab 0:25 zu sehen, daher startet die Wiedergabe dort.',
      play: 'Video abspielen',
    },
    natgeo: {
      kicker: 'National Geographic · 1996',
      title: 'Der junge Ergin auf National Geographic',
      caption: '1996 im National Geographic Channel ausgestrahlt — Ergin als Guide im Topkapi-Palast.',
      play: 'Video abspielen',
    },
    coordPlace: 'Sultanahmet, Altstadt',
    metrics: {
      yearsLabel: 'Jahre in der Altstadt',
      langsLabel: 'Persönlich / 9 Team-Sprachen',
      empiresLabel: 'Imperien: Byzanz & Osmanen',
    },
    cred: {
      frontKicker: 'Lizenzierter Touristenguide',
      frontRole: 'Gründungsdelegierter · Kammer der türkischen Guides',
      flipToBack: 'Ausweis drehen',
      flipToFront: 'Vorderseite',
      backTitle: 'Offizielle Zulassung',
      rows: [
        ['Agentur', 'Oligarch Tour · TÜRSAB Nr. 14988'],
        ['Kammer', 'Gründungsdelegierter der Guides-Kammer'],
        ['Sprachen', 'EN · DE · 中文 (+6 im Team)'],
        ['Täglicher Treffpunkt', 'Kasse der Hagia Sophia, 09:00–17:00'],
      ],
    },
    langSection: {
      heading: 'Persönlich geführt auf',
      teamBadge: '9 Sprachen mit lizenziertem Team',
    },
    stamps: {
      caption: 'Verifizierte Qualifikationen',
      s1Top: 'ISTANBUL ALTSTADT',
      s1Main: '32 JAHRE',
      s1Bottom: 'SEIT 1994',
      s2Top: 'GUIDES-KAMMER',
      s2Main: 'GRÜNDER',
      s2Bottom: 'DELEGIERTER · TR',
      s3Top: 'OLIGARCH TOUR',
      s3Main: '14988',
      s3Bottom: 'TÜRSAB LIZENZ',
    },
    route: {
      kicker: 'Drei Imperien · Eine Altstadt',
      title: 'Fachgebiete im historischen Zentrum',
      stops: [
        {
          era: '330–395',
          title: 'Römisches Konstantinopel',
          desc: 'Von Konstantin bis Theodosius — die neue Hauptstadt entsteht rund um das Hippodrom, wo der Ägyptische Obelisk bis heute über dem Platz steht.',
          tourSlugs: ['sultanahmet-hippodrome'],
        },
        {
          era: '395–1453',
          title: 'Byzantinisches Konstantinopel',
          desc: 'Die große Kuppel Justinians, die Mosaike der Oberen Galerie und die Säulenwälder der Cisterna Basilica.',
          tourSlugs: ['hagia-sophia', 'basilica-cistern'],
        },
        {
          era: '1453–1922',
          title: 'Osmanisches Kaiserzentrum',
          desc: 'Die vier Höfe des Topkapi-Palasts, höfische Geschichte und echte Handwerkskunst in den historischen Basaren.',
          tourSlugs: ['topkapi-palace', 'bazaars-tour'],
        },
        {
          era: '1994–Heute',
          title: '32 Jahre in Sultanahmet',
          desc: 'Durchdachte Ganztagstouren vom Hippodrom bis ans Wasser sowie private Bosporus-Yachtfahrten.',
          tourSlugs: ['full-day-istanbul', 'bosphorus-yacht'],
        },
      ],
    },
  },
  zh: {
    overline: '持证历史遗产专家 · 始于 1994',
    video: {
      kicker: 'YouTube 影片',
      title: '屏幕上的向导——托普卡帕宫夜间博物馆影片',
      caption: '本片拍摄于 Ergin 带领托普卡帕宫首个夜间博物馆之旅之时，由土耳其文化和旅游部与 SICPA 合作制作。Ergin 从 0:25 开始出现，因此将从那里开始播放。',
      play: '播放视频',
    },
    natgeo: {
      kicker: '国家地理 · 1996',
      title: '年轻的 Ergin 登上国家地理频道',
      caption: '1996 年在国家地理频道播出——Ergin 在托普卡帕宫担任导游。',
      play: '播放视频',
    },
    coordPlace: '苏丹艾哈迈德 · 老城区',
    metrics: {
      yearsLabel: '年伊斯坦布尔古城导览',
      langsLabel: '亲自导览 / 团队共 9 种语言',
      empiresLabel: '两大帝国：拜占庭与奥斯曼',
    },
    cred: {
      frontKicker: '持证专业导游',
      frontRole: '土耳其导游协会创始代表',
      flipToBack: '查看资质背面',
      flipToFront: '正面',
      backTitle: '官方资质档案',
      rows: [
        ['机构', 'Oligarch Tour · TÜRSAB 牌照 14988'],
        ['协会', '土耳其导游协会创始代表'],
        ['语言', 'EN · DE · 中文（团队共 9 语）'],
        ['每日接待点', '圣索菲亚大教堂售票处 09:00–17:00'],
      ],
    },
    langSection: {
      heading: '亲自导览语言',
      teamBadge: '持证团队共涵盖 9 种语言',
    },
    stamps: {
      caption: '官方认证与实地履历',
      s1Top: '伊斯坦布尔老城',
      s1Main: '32 年',
      s1Bottom: '始于 1994',
      s2Top: '土耳其导游协会',
      s2Main: '创始代表',
      s2Bottom: 'CHAMBER DELEGATE',
      s3Top: 'OLIGARCH TOUR',
      s3Main: '14988',
      s3Bottom: 'TÜRSAB 官方牌照',
    },
    route: {
      kicker: '三大帝国 · 一座古城',
      title: '历史遗产专长路线',
      stops: [
        {
          era: '330–395',
          title: '罗马君士坦丁堡',
          desc: '从君士坦丁到狄奥多西——新都围绕竞技场拔地而起,埃及方尖碑至今仍矗立在广场之上。',
          tourSlugs: ['sultanahmet-hippodrome'],
        },
        {
          era: '395–1453',
          title: '拜占庭帝国君士坦丁堡',
          desc: '查士丁尼穹顶、二楼珍贵马赛克壁画，以及地下水宫深处庄严的石柱森林。',
          tourSlugs: ['hagia-sophia', 'basilica-cistern'],
        },
        {
          era: '1453–1922',
          title: '奥斯曼帝国皇城核心',
          desc: '托普卡珀皇宫四重庭院、帝国政治脉络，以及百年大巴扎依然活跃的手工工坊。',
          tourSlugs: ['topkapi-palace', 'bazaars-tour'],
        },
        {
          era: '1994–至今',
          title: '深耕苏丹艾哈迈德 32 载',
          desc: '从容深入的全日老城徒步线路，衔接赛马场遗迹与博斯普鲁斯私人游艇巡游。',
          tourSlugs: ['full-day-istanbul', 'bosphorus-yacht'],
        },
      ],
    },
  },
  tr: {
    overline: 'Lisanslı Kültürel Miras Uzmanı · 1994’ten Beri',
    video: {
      kicker: "YouTube'da",
      title: 'Rehberiniz ekranda — Topkapı Gece Müzeciliği filmi',
      caption: "Ergin'in Topkapı Sarayı'ndaki ilk gece müze turunu yaparken çekildi; Kültür ve Turizm Bakanlığı ile SICPA iş birliğiyle hazırlandı. Ergin 0:25'ten itibaren görünüyor, oynatma oradan başlıyor.",
      play: 'Videoyu oynat',
    },
    natgeo: {
      kicker: 'National Geographic · 1996',
      title: "Genç Ergin National Geographic'te",
      caption: "1996'da National Geographic Kanalı'nda yayınlandı — Ergin, Topkapı Sarayı'nda rehberlik yaparken.",
      play: 'Videoyu oynat',
    },
    coordPlace: 'Sultanahmet, Tarihi Yarımada',
    metrics: {
      yearsLabel: 'Yıl Tarihi Yarımada Deneyimi',
      langsLabel: 'Kişisel / Ekipte 9 Dil',
      empiresLabel: 'İki İmparatorluk: Bizans & Osmanlı',
    },
    cred: {
      frontKicker: 'Lisanslı Turist Rehberi',
      frontRole: 'Kurucu Delege · Türkiye Rehberler Odası',
      flipToBack: 'Belgeyi çevir',
      flipToFront: 'Ön yüz',
      backTitle: 'Resmi Yetki Bilgileri',
      rows: [
        ['Acenta', 'Oligarch Tour · TÜRSAB No: 14988'],
        ['Oda', 'Türkiye Rehberler Odası Kurucu Delegesi'],
        ['Diller', 'EN · DE · 中文 (+6 ekip dili)'],
        ['Günlük Buluşma', 'Ayasofya Gişesi, 09:00–17:00'],
      ],
    },
    langSection: {
      heading: 'Bizzat rehberlik ettiği diller',
      teamBadge: 'Lisanslı ekiple toplam 9 dil',
    },
    stamps: {
      caption: 'Onaylı Yetki ve Saha Kaydı',
      s1Top: 'TARİHİ YARIMADA',
      s1Main: '32 YIL',
      s1Bottom: '1994’TEN BERİ',
      s2Top: 'REHBERLER ODASI',
      s2Main: 'KURUCU',
      s2Bottom: 'DELEGE · TÜRKİYE',
      s3Top: 'OLIGARCH TOUR',
      s3Main: '14988',
      s3Bottom: 'TÜRSAB BELGESİ',
    },
    route: {
      kicker: 'Üç İmparatorluk · Tek Yarımada',
      title: 'Uzmanlık Alanları ve Tarihi Rota',
      stops: [
        {
          era: '330–395',
          title: 'Roma Konstantinopolisi',
          desc: 'Konstantin’den Theodosius’a — yeni başkent Hipodrom çevresinde şekillenir; Mısır Dikilitaşı bugün hâlâ meydanda yükselir.',
          tourSlugs: ['sultanahmet-hippodrome'],
        },
        {
          era: '395–1453',
          title: 'Bizans Konstantinopolisi',
          desc: 'Justinianus’un büyük kubbesi, Üst Galeri mozaikleri ve Yerebatan Sarnıcı’nın yeraltı sütun ormanı.',
          tourSlugs: ['hagia-sophia', 'basilica-cistern'],
        },
        {
          era: '1453–1922',
          title: 'Osmanlı İmparatorluk Merkezi',
          desc: 'Topkapı Sarayı’nın dört avlusu, saray teşkilatı ve tarihi çarşılarda yaşayan el sanatları atölyeleri.',
          tourSlugs: ['topkapi-palace', 'bazaars-tour'],
        },
        {
          era: '1994–Günümüz',
          title: 'Sultanahmet’te 32 Yıl',
          desc: 'Hipodrom’dan kıyıya uzanan tempolu tam gün tarih yürüyüşleri ve özel Boğaz yat gezileri.',
          tourSlugs: ['full-day-istanbul', 'bosphorus-yacht'],
        },
      ],
    },
  },
};

export interface GuideBio {
  kicker: string;
  name: string;
  role: string;
  paras: string[];
  langs: string;
  tagline: string;
}

// Ergin's own bio text, sent and approved by him on 2026-11-24 (EN is his
// wording verbatim; DE/ZH/TR are faithful translations of the same text).
export const GUIDE_BIO: Record<Locale, GuideBio> = {
  en: {
    kicker: 'Your Guide',
    name: 'Ergin Karakoyun',
    role: 'Licensed Tourist Guide | Istanbul Heritage Specialist',
    paras: [
      "With over 30 years of experience, specialized in Byzantine and Ottoman history, bringing Istanbul's extraordinary cultural heritage to life.",
      'A graduate of Marmara University, with an international background shaped in Germany, I combine academic knowledge with extensive field experience.',
      "In 2010, I produced 9 documentaries on Türkiye's historical and cultural heritage, each approximately 45 minutes long and available in 16 languages, covering destinations from Istanbul and Cappadocia to Hagia Sophia, Topkapı Palace and Ephesus.",
      'Coming from a family with roots in Istanbul dating back to 1887, I offer a unique perspective shaped by generations of local heritage.',
    ],
    langs: 'Professional Guiding & Cultural Experiences in English, German, Russian and Chinese.',
    tagline: 'Beyond guiding. Discovering heritage — More than a tour. A journey through history.',
  },
  de: {
    kicker: 'Ihr Guide',
    name: 'Ergin Karakoyun',
    role: 'Lizenzierter Fremdenführer | Istanbul-Kulturerbe-Spezialist',
    paras: [
      'Mit über 30 Jahren Erfahrung, spezialisiert auf byzantinische und osmanische Geschichte, erwecke ich Istanbuls außergewöhnliches kulturelles Erbe zum Leben.',
      'Als Absolvent der Marmara-Universität, mit einem in Deutschland geprägten internationalen Hintergrund, verbinde ich akademisches Wissen mit umfangreicher Praxiserfahrung.',
      '2010 produzierte ich 9 Dokumentationen über das historische und kulturelle Erbe der Türkei, jede etwa 45 Minuten lang und in 16 Sprachen verfügbar — von Istanbul und Kappadokien bis zur Hagia Sophia, dem Topkapi-Palast und Ephesus.',
      'Aus einer Familie stammend, deren Wurzeln in Istanbul bis 1887 zurückreichen, biete ich eine einzigartige Perspektive, geprägt von Generationen lokaler Tradition.',
    ],
    langs: 'Professionelle Führungen & kulturelle Erlebnisse auf Englisch, Deutsch, Russisch und Chinesisch.',
    tagline: 'Mehr als Führung. Erbe entdecken — Mehr als eine Tour. Eine Reise durch die Geschichte.',
  },
  zh: {
    kicker: '您的导游',
    name: 'Ergin Karakoyun',
    role: '持证导游 | 伊斯坦布尔文化遗产专家',
    paras: [
      '拥有 30 多年经验，专攻拜占庭与奥斯曼历史，致力于让伊斯坦布尔非凡的文化遗产鲜活呈现。',
      '毕业于马尔马拉大学，拥有在德国塑造的国际背景，我将学术知识与丰富的实地经验相结合。',
      '2010 年，我制作了 9 部关于土耳其历史文化遗产的纪录片，每部约 45 分钟，译有 16 种语言，涵盖伊斯坦布尔、卡帕多奇亚、圣索菲亚大教堂、托普卡帕宫和以弗所等地。',
      '我的家族自 1887 年起便扎根于伊斯坦布尔，这赋予我由几代本地传承塑造的独特视角。',
    ],
    langs: '提供英语、德语、俄语和中文的专业导览与文化体验。',
    tagline: '超越导览，探索遗产——不止是一次旅行，更是一段穿越历史的旅程。',
  },
  tr: {
    kicker: 'Rehberiniz',
    name: 'Ergin Karakoyun',
    role: 'Lisanslı Turist Rehberi | İstanbul Kültürel Miras Uzmanı',
    paras: [
      "30 yılı aşkın deneyimimle, Bizans ve Osmanlı tarihi uzmanı olarak İstanbul'un olağanüstü kültürel mirasını hayata taşıyorum.",
      "Marmara Üniversitesi mezunuyum; Almanya'da şekillenen uluslararası geçmişimle akademik bilgiyi kapsamlı saha deneyimiyle birleştiriyorum.",
      "2010 yılında, Türkiye'nin tarihi ve kültürel mirasına dair, her biri yaklaşık 45 dakika ve 16 dilde mevcut 9 belgesel hazırladım; İstanbul ve Kapadokya'dan Ayasofya, Topkapı Sarayı ve Efes'e uzanan destinasyonları kapsıyordu.",
      "Kökleri İstanbul'da 1887'ye uzanan bir aileden geldiğim için, nesillerin yerel mirasıyla şekillenmiş benzersiz bir bakış açısı sunuyorum.",
    ],
    langs: 'İngilizce, Almanca, Rusça ve Çince profesyonel rehberlik ve kültürel deneyimler.',
    tagline: 'Rehberliğin ötesinde. Mirası keşfetmek — Bir turdan fazlası. Tarih içinde bir yolculuk.',
  },
};
