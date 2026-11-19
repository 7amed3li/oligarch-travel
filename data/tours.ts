// Tour content + UI strings (EN/DE/ZH) — extracted from the verified dossier data.
// Prices do NOT live here: they live in data/prices.json and are editable in /admin.
export type Locale = 'en' | 'de' | 'zh' | 'tr';
export const LOCALES: Locale[] = ['en', 'de', 'zh', 'tr'];
export const VIDEO_URL = '/img/hero-video.webm';
export interface TourContent { name: string; tagline: string; duration: string; group: string; desc: string; included: string[]; not_included: string[]; note: string; }
export interface TourDef { img: string; meeting?: Record<Locale, string>; content: Record<Locale, TourContent>; }
export const TOUR_ORDER: string[] = ["hs-ticket", "hs-guided", "hs-private", "topkapi-private", "topkapi-night", "istanbul-day", "bazaars-tour", "bosphorus-yacht", "traditional-handicrafts"];
export const TOURS: Record<string, TourDef> = {
 "hs-ticket": {
  "img": "tour-hs-ticket.webp",
  "content": {
   "en": {
    "name": "Hagia Sophia Skip-the-Line Ticket",
    "tagline": "Upper Gallery entry with a QR ticket on your phone — no ticket line.",
    "duration": "Flexible entry, 09:00–18:00",
    "group": "Individual entry",
    "desc": "Entry to the Hagia Sophia Upper Gallery with an official digital ticket. Your QR ticket is delivered to your smartphone, so you walk past the ticket line and enter at any time between 09:00 and 18:00. The ticket stays valid for 7 days from the date you choose, and a multilingual audio guide is included for your visit.",
    "included": [
     "Hagia Sophia Upper Gallery admission ticket",
     "QR ticket delivered to your smartphone",
     "Multilingual audio guide",
     "Valid 7 days from your chosen date",
     "One-time entry — stay inside until closing time"
    ],
    "not_included": [
     "Live guide (available on our guided tours)"
    ],
    "note": "Price per person, ages 8+."
   },
   "de": {
    "name": "Hagia Sophia Ticket ohne Anstehen",
    "tagline": "Eintritt zur Oberen Galerie mit QR-Ticket auf Ihrem Handy — ohne Warteschlange an der Kasse.",
    "duration": "Flexibler Eintritt, 09:00–18:00 Uhr",
    "group": "Individueller Eintritt",
    "desc": "Eintritt in die Obere Galerie der Hagia Sophia mit einem offiziellen digitalen Ticket. Ihr QR-Ticket wird auf Ihr Smartphone gesendet, sodass Sie an der Kassenschlange vorbeigehen und jederzeit zwischen 09:00 und 18:00 Uhr eintreten können. Das Ticket bleibt ab dem gewählten Datum 7 Tage gültig, und ein mehrsprachiger Audioguide ist für Ihren Besuch inbegriffen.",
    "included": [
     "Eintrittsticket Obere Galerie der Hagia Sophia",
     "QR-Ticket auf Ihr Smartphone",
     "Mehrsprachiger Audioguide",
     "7 Tage ab gewähltem Datum gültig",
     "Einmaliger Eintritt — bleiben Sie bis zur Schließung"
    ],
    "not_included": [
     "Live-Führung (bei unseren geführten Touren verfügbar)"
    ],
    "note": "Preis pro Person, ab 8 Jahren."
   },
   "zh": {
    "name": "圣索菲亚大教堂免排队门票",
    "tagline": "凭手机二维码门票进入上层画廊——无需在售票处排队。",
    "duration": "灵活入场，09:00–18:00",
    "group": "个人入场",
    "desc": "凭官方电子门票进入圣索菲亚大教堂上层画廊。二维码门票将发送到您的手机，您可以绕过售票队伍，在 09:00 至 18:00 之间任意时间入场。门票自所选日期起 7 天内有效，并包含多语言语音导览。",
    "included": [
     "圣索菲亚大教堂上层画廊门票",
     "二维码门票发送至您的手机",
     "多语言语音导览",
     "自所选日期起 7 天内有效",
     "单次入场——可停留至闭馆"
    ],
    "not_included": [
     "真人导游（可参加我们的导览团）"
    ],
    "note": "价格为每人，8 岁以上。"
   },
    "tr": {
        "name": "Ayasofya Hızlı Giriş Bileti",
        "tagline": "Telefonunuza gelen karekod bilet ile Üst Galeri girişi — bilet kuyruğu beklemeden.",
        "duration": "Esnek giriş, 09:00–18:00",
        "group": "Bireysel giriş",
        "desc": "Resmi dijital bilet ile Ayasofya Üst Galerisi'ne giriş. Karekod biletiniz akıllı telefonunuza iletilir; böylece bilet kuyruğunu atlayarak 09:00 ile 18:00 saatleri arasında dilediğiniz an giriş yapabilirsiniz. Biletiniz seçtiğiniz tarihten itibaren 7 gün boyunca geçerlidir ve ziyaretiniz için çok dilli sesli rehber dahildir.",
        "included": [
            "Ayasofya Üst Galeri giriş bileti",
            "Akıllı telefonunuza iletilen karekod bilet",
            "Çok dilli sesli rehber (Audio guide)",
            "Seçtiğiniz tarihten itibaren 7 gün geçerlilik",
            "Tek seferlik giriş — kapanış saatine kadar içeride kalabilme"
        ],
        "not_included": [
            "Canlı rehberlik (rehberli turlarımızda mevcuttur)"
        ],
        "note": "Kişi başı fiyattır, 8 yaş ve üzeri için geçerlidir."
    }
  }
 },
 "hs-guided": {
  "img": "tour-hs-guided.webp",
  "content": {
   "en": {
    "name": "Hagia Sophia Guided Tour",
    "tagline": "One hour with a licensed expert guide, in a small group.",
    "duration": "1 hour",
    "group": "Small group, max 20 · min 3 guests",
    "desc": "A one-hour guided tour of Hagia Sophia with a licensed expert guide. You meet your guide at the Harem Souvenir Shop near the ticket office, enter together past the ticket line, and explore the Upper Gallery mosaics and the great dome with live commentary and time for your questions. After the tour you are free to stay inside until closing time.",
    "included": [
     "Licensed expert live guide",
     "Hagia Sophia Upper Gallery admission ticket",
     "Guided sessions at 09:15, 10:30 and 15:15",
     "Stay inside after the tour until closing time"
    ],
    "not_included": [
     "Hotel pickup and drop-off",
     "Gratuities"
    ],
    "note": "Children aged 0–6 enter free — please bring a valid passport for them."
   },
   "de": {
    "name": "Geführte Tour durch die Hagia Sophia",
    "tagline": "Eine Stunde mit einem lizenzierten Expertenführer in einer kleinen Gruppe.",
    "duration": "1 Stunde",
    "group": "Kleine Gruppe, max. 20 · mind. 3 Gäste",
    "desc": "Eine einstündige Führung durch die Hagia Sophia mit einem lizenzierten Expertenführer. Sie treffen Ihren Guide am Harem Souvenir Shop nahe der Kasse, betreten die Hagia Sophia gemeinsam ohne Kassenschlange und erkunden die Mosaiken der Oberen Galerie und die große Kuppel mit Live-Kommentar und Zeit für Ihre Fragen. Nach der Tour können Sie bis zur Schließung im Inneren bleiben.",
    "included": [
     "Lizenzierter Expertenführer (live)",
     "Eintrittsticket Obere Galerie der Hagia Sophia",
     "Führungen um 09:15, 10:30 und 15:15 Uhr",
     "Nach der Tour bis zur Schließung bleiben"
    ],
    "not_included": [
     "Hotelabholung und Rücktransfer",
     "Trinkgelder"
    ],
    "note": "Kinder von 0–6 Jahren haben freien Eintritt — bitte bringen Sie einen gültigen Reisepass für sie mit."
   },
   "zh": {
    "name": "圣索菲亚大教堂导览团",
    "tagline": "由持证专业导游带领的小团一小时导览。",
    "duration": "1 小时",
    "group": "小团，最多 20 人 · 最少 3 人",
    "desc": "由持证专业导游带领的一小时圣索菲亚大教堂导览。您将在售票处附近的 Harem 纪念品店与导游会合，一同免排队入场，在现场讲解中参观上层画廊的镶嵌画与宏伟穹顶，并有充足时间提问。导览结束后，您可以继续停留在馆内直至闭馆。",
    "included": [
     "持证专业真人导游",
     "圣索菲亚大教堂上层画廊门票",
     "导览场次：09:15、10:30、15:15",
     "导览结束后可停留至闭馆"
    ],
    "not_included": [
     "酒店接送",
     "小费"
    ],
    "note": "0–6 岁儿童免费入场——请携带其有效护照。"
   },
    "tr": {
        "name": "Ayasofya Rehberli Turu",
        "tagline": "Lisanslı uzman rehber eşliğinde, küçük grupta 1 saatlik tur.",
        "duration": "1 saat",
        "group": "Küçük grup, maks. 20 · min. 3 kişi",
        "desc": "Lisanslı uzman rehber eşliğinde 1 saatlik Ayasofya turu. Rehberinizle bilet gişesine yakın Harem Hediyelik Eşya Dükkanı'nda buluşup bilet sırasını beklemeden birlikte giriş yaparsınız. Canlı anlatım eşliğinde Üst Galeri mozaiklerini ve ulu kubbeyi keşfeder, sorularınıza cevap alırsınız. Tur sonrasında kapanış saatine kadar içeride kalabilirsiniz.",
        "included": [
            "Lisanslı uzman canlı rehber",
            "Ayasofya Üst Galeri giriş bileti",
            "09:15, 10:30 ve 15:15 seans seçenekleri",
            "Tur sonrasında kapanışa kadar içeride kalma imkanı"
        ],
        "not_included": [
            "Otel gidiş-dönüş transferi",
            "Bahşişler"
        ],
        "note": "0–6 yaş arası çocuklar ücretsizdir — lütfen kimlik/pasaport ibraz ediniz."
    }
  }
 },
 "hs-private": {
  "img": "tour-hs-private.webp",
  "content": {
   "en": {
    "name": "Hagia Sophia Private Tour",
    "tagline": "Just your party and your guide — at your pace.",
    "duration": "1 hour",
    "group": "Private, up to 8 guests",
    "desc": "Hagia Sophia with a private licensed guide for your party only. The route and pace follow your interests — the Deësis mosaic, the imperial gallery, the great calligraphy medallions — with unhurried time for questions and photographs. This tour holds a 5.0 rating from 25 reviews and a Viator Badge of Excellence.",
    "included": [
     "Private licensed guide for your party only",
     "Hagia Sophia Upper Gallery admission ticket",
     "Flexible start time, arranged with your guide"
    ],
    "not_included": [
     "Hotel pickup and drop-off",
     "Gratuities"
    ],
    "note": "Price: group fee plus per-person ticket, for up to 8 guests."
   },
   "de": {
    "name": "Private Tour durch die Hagia Sophia",
    "tagline": "Nur Ihre Gruppe und Ihr Guide — in Ihrem Tempo.",
    "duration": "1 Stunde",
    "group": "Privat, bis zu 8 Gäste",
    "desc": "Die Hagia Sophia mit einem privaten, lizenzierten Guide nur für Ihre Gruppe. Route und Tempo richten sich nach Ihren Interessen — das Deësis-Mosaik, die Kaisergalerie, die großen Kalligrafie-Medaillons — mit viel Zeit für Fragen und Fotos. Diese Tour hält eine Bewertung von 5,0 aus 25 Bewertungen und eine Viator-Auszeichnung (Badge of Excellence).",
    "included": [
     "Privater lizenzierter Guide nur für Ihre Gruppe",
     "Eintrittsticket Obere Galerie der Hagia Sophia",
     "Flexibler Beginn, mit Ihrem Guide abgestimmt"
    ],
    "not_included": [
     "Hotelabholung und Rücktransfer",
     "Trinkgelder"
    ],
    "note": "Preis: Gruppenpauschale plus Ticket pro Person, für bis zu 8 Gäste."
   },
   "zh": {
    "name": "圣索菲亚大教堂私人导览",
    "tagline": "只有您的团队和您的导游——按您的节奏参观。",
    "duration": "1 小时",
    "group": "私人导览，最多 8 人",
    "desc": "由私人持证导游专为您的团队讲解圣索菲亚大教堂。路线和节奏完全依照您的兴趣——《代伊西斯》镶嵌画、皇家画廊、巨大的书法圆牌——并有充裕的时间提问和拍照。本导览在 25 条评价中获得 5.0 分，并荣获 Viator 卓越徽章。",
    "included": [
     "专为您的团队服务的私人持证导游",
     "圣索菲亚大教堂上层画廊门票",
     "开始时间灵活，与导游协商"
    ],
    "not_included": [
     "酒店接送",
     "小费"
    ],
    "note": "价格：团队费加每人门票，最多 8 人。"
   },
    "tr": {
        "name": "Ayasofya Özel Turu",
        "tagline": "Sadece siz ve rehberiniz — kendi temponuzda kişiye özel tur.",
        "duration": "1 saat",
        "group": "Özel tur, en fazla 8 kişi",
        "desc": "Sadece sizin grubunuza özel lisanslı rehber ile 1 saatlik Ayasofya turu. Rehberinizle buluşur, bilet kuyruğunu beklemeden giriş yapar ve Üst Galeri mozaiklerini, katedral ve cami tarihini derinlemesine dinlersiniz. Sizin hızınıza göre ilerler ve tüm sorularınıza zaman ayrılır.",
        "included": [
            "Grubunuza özel lisanslı profesyonel rehber",
            "Ayasofya Üst Galeri giriş biletleri",
            "Esnek başlangıç saati (09:00–16:00 arası)",
            "Tur sonrasında kapanışa kadar içeride kalabilme"
        ],
        "not_included": [
            "Otel transferi",
            "Bahşişler"
        ],
        "note": "Grup fiyatı (maks. 8 kişi) + kişi başı bilet ücreti."
    }
  }
 },
 "topkapi-private": {
  "img": "tour-topkapi-private.webp",
  "content": {
   "en": {
    "name": "Topkapi Palace & Harem Private Tour",
    "tagline": "The palace and the Harem with your own private guide.",
    "duration": "45 minutes – 3 hours",
    "group": "Private, up to 8 guests",
    "desc": "A private tour of Topkapi Palace and its Harem with a licensed guide. Walk the courtyards, the treasury and the Harem quarters where the Ottoman sultans lived and ruled for nearly 400 years — at a pace and length, from 45 minutes to 3 hours, that suits your day.",
    "included": [
     "Private licensed live guide",
     "Harem section included in the tour route"
    ],
    "not_included": [
     "Palace entry tickets — purchased at the venue",
     "Hotel pickup and drop-off"
    ],
    "note": "Price per group of up to 8 guests."
   },
   "de": {
    "name": "Private Tour: Topkapi-Palast & Harem",
    "tagline": "Der Palast und der Harem mit Ihrem eigenen privaten Guide.",
    "duration": "45 Minuten – 3 Stunden",
    "group": "Privat, bis zu 8 Gäste",
    "desc": "Eine private Führung durch den Topkapi-Palast und seinen Harem mit einem lizenzierten Guide. Spazieren Sie durch die Höfe, die Schatzkammer und die Haremsgemächer, in denen die osmanischen Sultane fast 400 Jahre lebten und regierten — in einem Tempo und einer Dauer (45 Minuten bis 3 Stunden), die zu Ihrem Tag passen.",
    "included": [
     "Privater lizenzierter Live-Guide",
     "Harem-Bereich ist Teil der Tourroute"
    ],
    "not_included": [
     "Palast-Eintrittstickets — werden vor Ort gekauft",
     "Hotelabholung und Rücktransfer"
    ],
    "note": "Preis pro Gruppe von bis zu 8 Gästen."
   },
   "zh": {
    "name": "托普卡珀皇宫与后宫私人导览",
    "tagline": "与您的私人导游参观皇宫与后宫。",
    "duration": "45 分钟 – 3 小时",
    "group": "私人导览，最多 8 人",
    "desc": "由持证导游带领的托普卡珀皇宫及后宫私人导览。漫步于庭院、珍宝馆和后宫——奥斯曼苏丹近 400 年生活与统治之地——时长从 45 分钟到 3 小时，可配合您的行程安排。",
    "included": [
     "私人持证真人导游",
     "行程包含后宫区域"
    ],
    "not_included": [
     "皇宫门票——需在场馆购买",
     "酒店接送"
    ],
    "note": "价格为每组，最多 8 人。"
   },
    "tr": {
        "name": "Topkapı Sarayı & Harem Özel Turu",
        "tagline": "Özel lisanslı rehberiniz eşliğinde saray ve Harem daireleri.",
        "duration": "45 dakika – 3 saat",
        "group": "Özel tur, en fazla 8 kişi",
        "desc": "Osmanlı padişahlarının 400 yıllık ikametgahı Topkapı Sarayı ve büyüleyici Harem Dairesi'ni kapsayan özel rehberli tur. Divan-ı Hümayun, Kutsal Emanetler, Hazine ve Boğaz manzaralı terasları uzman rehberinizin anlatımıyla keşfedin.",
        "included": [
            "Grubunuza özel lisanslı uzman rehber",
            "Topkapı Sarayı ve Harem bölümleri kapsamı",
            "Kişisel ilgi ve esnek gezi temposu"
        ],
        "not_included": [
            "Saray ve Harem giriş biletleri",
            "Otel transferi"
        ],
        "note": "Fiyat grup başınadır (maks. 8 kişi). Biletler girişte temin edilir."
    }
  }
 },
 "topkapi-night": {
  "img": "tour-topkapi-night.webp",
  "meeting": {
   "en": "Hürrem Sultan Hamamı Cafe, Sultanahmet",
   "de": "Hürrem Sultan Hamamı Cafe, Sultanahmet",
   "zh": "Hürrem Sultan 土耳其浴室咖啡厅，苏丹艾哈迈德区",
  "tr": "4,7 (58 yorum) · TripAdvisor"
  },
  "content": {
   "en": {
    "name": "Topkapi Palace Night Tour",
    "tagline": "The palace after dark, in the quiet of the evening.",
    "duration": "4 hours",
    "group": "Group tour, min 2 guests",
    "desc": "Topkapi Palace by night, when the daytime crowds are gone. Over four hours your guide leads you through the palace’s key sections and the Harem, with a personal listening system so you hear every word. The evening begins with a welcome at the Hürrem Sultan Hamamı Cafe. This tour is guided in Turkish.",
    "included": [
     "Licensed expert guide (guided in Turkish)",
     "Topkapi Palace night entry ticket",
     "Harem entry ticket",
     "Personal listening system",
     "Welcome refreshments at Hürrem Sultan Hamamı Cafe"
    ],
    "not_included": [
     "Transport to and from the meeting point",
     "Gratuities"
    ],
    "note": "Price per person. Guided in Turkish."
   },
   "de": {
    "name": "Topkapi-Palast bei Nacht",
    "tagline": "Der Palast nach Einbruch der Dunkelheit, in abendlicher Ruhe.",
    "duration": "4 Stunden",
    "group": "Gruppentour, mind. 2 Gäste",
    "desc": "Der Topkapi-Palast bei Nacht, wenn die Tagesbesucher gegangen sind. In vier Stunden führt Ihr Guide Sie durch die wichtigsten Bereiche des Palastes und den Harem — mit einem persönlichen Hörsystem, damit Sie jedes Wort verstehen. Der Abend beginnt mit einer Begrüßung im Hürrem Sultan Hamamı Cafe. Diese Tour wird auf Türkisch geführt.",
    "included": [
     "Lizenzierter Expertenführer (Führung auf Türkisch)",
     "Nachteintrittsticket Topkapi-Palast",
     "Eintrittsticket Harem",
     "Persönliches Hörsystem",
     "Begrüßungserfrischungen im Hürrem Sultan Hamamı Cafe"
    ],
    "not_included": [
     "Transfer zum und vom Treffpunkt",
     "Trinkgelder"
    ],
    "note": "Preis pro Person. Führung auf Türkisch."
   },
   "zh": {
    "name": "托普卡珀皇宫夜游",
    "tagline": "入夜后的皇宫，沉浸在夜晚的宁静中。",
    "duration": "4 小时",
    "group": "团体导览，最少 2 人",
    "desc": "夜晚的托普卡珀皇宫，白天的游客已经散去。在四个小时里，导游将带您参观皇宫的主要区域和后宫，并配备个人聆听系统，让您听清每一句话。夜晚从在 Hürrem Sultan 土耳其浴室咖啡厅的欢迎仪式开始。本导览以土耳其语进行。",
    "included": [
     "持证专业导游（土耳其语讲解）",
     "托普卡珀皇宫夜间门票",
     "后宫门票",
     "个人聆听系统",
     "在 Hürrem Sultan 土耳其浴室咖啡厅的迎宾茶点"
    ],
    "not_included": [
     "往返集合点的交通",
     "小费"
    ],
    "note": "价格为每人。本导览以土耳其语进行。"
   },
    "tr": {
        "name": "Topkapı Sarayı Gece Turu",
        "tagline": "Havanın kararmasıyla birlikte akşamın dinginliğinde büyüleyici saray atmosferi.",
        "duration": "4 saat",
        "group": "Grup turu, min. 2 kişi",
        "desc": "Gündüz kalabalığı çekildikten sonra Topkapı Sarayı'nın mistik avlularında ve aydınlatılmış tarihi mekanlarında benzersiz bir gece turu. Geceye özel ayrıcalıklı atmosferde sarayın gizemli hikayelerini dinleyin.",
        "included": [
            "Gece turuna özel lisanslı profesyonel rehber",
            "Topkapı Sarayı gece giriş bileti",
            "Sessiz ve özel atmosferde rehberli gezi"
        ],
        "not_included": [
            "Akşam yemeği ve içecekler",
            "Otel transferi"
        ],
        "note": "Kişi başı fiyattır. En az 2 kişi ile hareket eder."
    }
  }
 },
 "istanbul-day": {
  "img": "tour-istanbul-day.webp",
  "meeting": {
   "en": "Your hotel",
   "de": "Ihr Hotel",
   "zh": "您的酒店",
  "tr": "5,0 (25 yorum) · Viator"
  },
  "content": {
   "en": {
    "name": "Istanbul Private Day — Your Way",
    "tagline": "A full day, built around what you want to see.",
    "duration": "6–8 hours (full day)",
    "group": "Private, up to 8 guests",
    "desc": "One private guide, one full day, and an itinerary built around you. The classic route links Hagia Sophia, the Blue Mosque, the Hippodrome, Topkapi Palace and the Grand Bazaar — or the day can go wherever your interests lead. Your guide meets you at your hotel.",
    "included": [
     "Private licensed guide for up to 8 guests",
     "Fully flexible itinerary",
     "Your guide meets you at your hotel"
    ],
    "not_included": [
     "Museum entry fees",
     "Meals",
     "Private minivan (available as an extra)"
    ],
    "note": "Price per group of up to 8 guests."
   },
   "de": {
    "name": "Privater Istanbul-Tag — Nach Ihren Wünschen",
    "tagline": "Ein ganzer Tag, gebaut um das, was Sie sehen möchten.",
    "duration": "6–8 Stunden (ganzer Tag)",
    "group": "Privat, bis zu 8 Gäste",
    "desc": "Ein privater Guide, ein ganzer Tag und eine Route, die sich ganz nach Ihnen richtet. Die klassische Route verbindet Hagia Sophia, Blaue Moschee, Hippodrom, Topkapi-Palast und den Großen Basar — oder der Tag führt Sie, wohin Ihre Interessen Sie ziehen. Ihr Guide trifft Sie an Ihrem Hotel.",
    "included": [
     "Privater lizenzierter Guide für bis zu 8 Gäste",
     "Vollständig flexible Route",
     "Ihr Guide trifft Sie an Ihrem Hotel"
    ],
    "not_included": [
     "Museums-Eintrittsgebühren",
     "Mahlzeiten",
     "Privater Minivan (als Extra verfügbar)"
    ],
    "note": "Preis pro Gruppe von bis zu 8 Gästen."
   },
   "zh": {
    "name": "伊斯坦布尔私人一日游——由您定制",
    "tagline": "一整天，围绕您想看的景点安排。",
    "duration": "6–8 小时（全天）",
    "group": "私人导览，最多 8 人",
    "desc": "一位私人导游，一整天时间，一条为您量身定制的路线。经典路线串联圣索菲亚大教堂、蓝色清真寺、竞技场、托普卡珀皇宫和大巴扎——或者这一天完全由您的兴趣决定。导游将在您的酒店与您会合。",
    "included": [
     "最多 8 位客人的私人持证导游",
     "完全灵活的行程",
     "导游在您的酒店与您会合"
    ],
    "not_included": [
     "博物馆门票",
     "餐食",
     "私人小巴（可作为额外服务预订）"
    ],
    "note": "价格为每组，最多 8 人。"
   },
    "tr": {
        "name": "Özel İstanbul Günü — Tamamen Size Özel",
        "tagline": "Görmek istediğiniz yerlere göre planlanan dolu dolu bir gün.",
        "duration": "6–8 saat (tam gün)",
        "group": "Özel tur, en fazla 8 kişi",
        "desc": "Bir gün, bir özel rehber ve tamamen size göre tasarlanmış bir rota. Klasik rota Ayasofya, Sultanahmet Camii, Hipodrom, Topkapı Sarayı ve Kapalıçarşı'yı kapsar — ya da günü tamamen sizin ilgi alanlarınıza göre şekillendiririz. Rehberiniz sizi otelinizde karşılar.",
        "included": [
            "8 kişiye kadar grubunuza özel lisanslı rehber",
            "Tamamen esnek ve kişiselleştirilmiş rota",
            "Otelinizde karşılama ve buluşma"
        ],
        "not_included": [
            "Müze ve örenyeri giriş ücretleri",
            "Yemekler",
            "Özel minivan (isteğe bağlı eklenebilir)"
        ],
        "note": "Fiyat en fazla 8 kişilik grup içindir."
    }
  }
 }
,
 "bazaars-tour": {
  "img": "tour-bazaars.webp",
  "content": {
   "en": {
    "name": "Grand Bazaar & Spice Bazaar",
    "tagline": "A guided walk through the world's oldest markets — quality, bargaining & artisan workshops.",
    "duration": "2.5–4 hours — depends on your pace",
    "group": "Private group, up to 8 guests",
    "desc": "A guided walk through the Grand Bazaar — one of the world's oldest covered markets — and the Spice Bazaar, with the guide explaining how to read quality, how bargaining works, and which workshops still produce by hand.",
    "included": [
     "Licensed professional private guide",
     "Guided walk through Grand Bazaar and Spice Bazaar",
     "Insider bargaining advice and artisan workshop visits",
     "Flexible pace tailored to your interests"
    ],
    "not_included": [
     "Personal shopping purchases",
     "Hotel pickup and drop-off",
     "Food and drinks"
    ],
    "note": "Price is per group (up to 8 guests)."
   },
   "de": {
    "name": "Großer Basar & Gewürzbasar",
    "tagline": "Geführter Rundgang durch die historischen Basare — Qualität, Handeln & Handwerkskunst.",
    "duration": "2,5–4 Stunden — nach Ihrem Tempo",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Ein geführter Spaziergang durch den Großen Basar — einen der ältesten überdachten Märkte der Welt — und den Gewürzbasar. Ihr Guide erklärt Ihnen, wie Sie Qualität erkennen, wie das Handeln funktioniert und welche Werkstätten noch heute echte Handarbeit herstellen.",
    "included": [
     "Lizenzierter professioneller Privatguide",
     "Geführter Rundgang durch Großen Basar & Gewürzbasar",
     "Insider-Tipps zum Handeln & Besuch traditioneller Werkstätten",
     "Individuelles Tempo ganz nach Ihren Wünschen"
    ],
    "not_included": [
     "Persönliche Einkäufe",
     "Hotel-Transfer",
     "Speisen und Getränke"
    ],
    "note": "Preis gilt pro Gruppe (bis zu 8 Gäste)."
   },
   "zh": {
    "name": "大巴扎与香料市场",
    "tagline": "漫步历史悠久的传奇集市——品鉴手作品质、学习还价技巧与探访百年匠心作坊。",
    "duration": "2.5–4 小时——视您的节奏而定",
    "group": "私人团体，最多 8 位贵宾",
    "desc": "由专业导游带领漫步大巴扎（世界上最古老的室内集市之一）与香料市场。导游将为您讲解如何鉴别商品品质、集市还价技巧，并探访至今仍坚持手工制作的传统作坊。",
    "included": [
     "持证专业私人导游全程陪同",
     "大巴扎与香料市场深度导览",
     "集市还价内部技巧与传统手工作坊探访",
     "根据您的兴趣定制步行节奏"
    ],
    "not_included": [
     "个人购物消费",
     "酒店接送",
     "餐饮费用"
    ],
    "note": "按团体收费（最多 8 人）。"
   },
    "tr": {
        "name": "Kapalıçarşı ve Mısır Çarşısı",
        "tagline": "Tarihi çarşılarda rehberli yürüyüş — kalite, pazarlık sanatı ve zanaatkar atölyeleri.",
        "duration": "2,5–4 saat — temponuza göre",
        "group": "Özel grup, en fazla 8 kişi",
        "desc": "Dünyanın en eski kapalı çarşılarından biri olan Kapalıçarşı ve tarihi Mısır Çarşısı'nda rehberli yürüyüş turu. Rehberiniz kaliteyi nasıl ayırt edeceğinizi, pazarlığın inceliklerini ve hangi atölyelerin hala el emeğiyle üretim yaptığını anlatır.",
        "included": [
            "Lisanslı profesyonel özel rehber",
            "Kapalıçarşı ve Mısır Çarşısı rehberli yürüyüşü",
            "Pazarlık tüyoları ve tarihi hanlardaki zanaatkar atölyesi ziyaretleri",
            "İlgi alanlarınıza göre uyarlanabilen esnek tempo"
        ],
        "not_included": [
            "Kişisel alışveriş harcamaları",
            "Otel transferi",
            "Yeme ve içme"
        ],
        "note": "Fiyat grup başınadır (en fazla 8 kişi)."
    }
  }
 },
 "traditional-handicrafts": {
  "img": "tour-handicrafts.webp",
  "content": {
   "en": {
    "name": "Traditional Turkish Handicrafts",
    "tagline": "Watch traditional carpet weaving & pottery making — with Turkish coffee or tea on us. Free presentation.",
    "duration": "About 30 minutes",
    "group": "Private presentation",
    "desc": "If you would like to buy a carpet or İznik tiles, we take you to traditional handicraft centres run by family businesses with 50 years of heritage and more, who have devoted their lives to this craft. Watch the weaving and the pottery being made, with Turkish coffee or tea on us. About 30 minutes — completely free.",
    "included": [
     "Live demonstration of traditional carpet weaving on the loom",
     "Master craftsmanship showcase of hand-painted İznik ceramics and tiles",
     "Complimentary authentic Turkish coffee or freshly brewed tea",
     "Dedicated artisan introduction and explanation",
     "Completely free add-on — no purchase obligation"
    ],
    "not_included": [
     "Optional personal purchases",
     "Hotel transportation"
    ],
    "note": "100% Free presentation. Adds €0 to your total and €0 deposit."
   },
   "de": {
    "name": "Traditionelles türkisches Kunsthandwerk",
    "tagline": "Erleben Sie traditionelles Teppichweben & Töpferei — bei türkischem Kaffee oder Tee. Kostenlose Vorführung.",
    "duration": "Ca. 30 Minuten",
    "group": "Private Vorführung",
    "desc": "Wenn Sie einen Teppich oder İznik-Keramik kaufen möchten, bringen wir Sie zu traditionellen Handwerkszentren von Familienbetrieben mit über 50 Jahren Tradition, die ihr Leben diesem Handwerk gewidmet haben. Erleben Sie das Weben und die Töpferei aus nächster Nähe, bei türkischem Kaffee oder Tee auf unsere Kosten. Ca. 30 Minuten — völlig kostenlos.",
    "included": [
     "Live-Vorführung des traditionellen Teppichwebens am Webstuhl",
     "Meisterhafte Einblicke in handbemalte İznik-Keramik und Fliesen",
     "Traditioneller türkischer Mokka oder frischer Tee auf unsere Kosten",
     "Persönliche Einführung durch erfahrene Kunsthandwerker",
     "Völlig kostenloses Zusatz-Erlebnis — keinerlei Kaufverpflichtung"
    ],
    "not_included": [
     "Optionale Einkäufe",
     "Hotel-Transfer"
    ],
    "note": "100 % kostenlose Vorführung. 0 € im Warenkorb und 0 € Anzahlung."
   },
   "zh": {
    "name": "土耳其传统手工艺",
    "tagline": "观赏传统手工织毯与陶艺制作——免费享用土耳其咖啡或红茶。完全免费的展示体验。",
    "duration": "约 30 分钟",
    "group": "私人展示体验",
    "desc": "如果您想选购地毯或伊兹尼克瓷砖，我们将带您前往拥有50年以上传承的家族传统手工艺中心。这些工匠世家毕生致力于这门技艺。现场观赏手工织毯与陶艺制作过程，并免费享用地道的土耳其咖啡或红茶。约30分钟——完全免费。",
    "included": [
     "古法织布机上的传统手工织毯现场技艺演示",
     "大师级伊兹尼克手绘瓷器与瓷砖艺术精细展示",
     "免费品尝纯正土耳其咖啡或新鲜冲泡的土耳其红茶",
     "手工艺传承人亲身讲解与工艺解答",
     "全程完全免费的增值体验——绝无任何强制购买要求"
    ],
    "not_included": [
     "自愿选购作品的费用（完全自愿）",
     "酒店专车接送"
    ],
    "note": "100% 免费体验。加入预订总额为 0 欧元，定金为 0 欧元。"
   },
    "tr": {
        "name": "Geleneksel Türk El Sanatları",
        "tagline": "Geleneksel halı dokuma ve çini sanatını izleyin — Türk kahvesi veya çay ikramımızla. Ücretsiz sunum.",
        "duration": "Yaklaşık 30 dakika",
        "group": "Özel sunum",
        "desc": "Halı veya İznik çinisi almak isterseniz, sizi ömrünü bu zanaata adamış, 50 yılı aşkın köklü aile işletmelerine götürüyoruz. Türk kahvesi veya çay ikramımız eşliğinde dokuma ve çömlek yapımını canlı izleyin. Yaklaşık 30 dakika — tamamen ücretsiz.",
        "included": [
            "Tezgahta geleneksel halı dokumanın canlı sunumu",
            "El boyaması İznik çinisi ve seramik ustalığı gösterisi",
            "Ücretsiz otantik Türk kahvesi veya taze demlenmiş çay ikramı",
            "Usta zanaatkarlardan birebir anlatım ve bilgi paylaşımı",
            "Tamamen ücretsiz deneyim — hiçbir satın alma zorunluluğu yoktur"
        ],
        "not_included": [
            "İsteğe bağlı kişisel alışverişler",
            "Otel transferi"
        ],
        "note": "%100 Ücretsiz tanıtım. Sepetinize 0 € ekler, 0 € ön ödeme gerektirir."
    }
  }
 },
 "bosphorus-yacht": {
  "img": "tour-bosphorus-yacht.webp",
  "content": {
   "en": {
    "name": "Private Bosphorus Yacht Tour",
    "tagline": "A private 2-hour cruise between Europe and Asia along Ottoman palaces and waterside yalis.",
    "duration": "2 hours",
    "group": "Private yacht, up to 7–8 guests",
    "desc": "A private 2-hour yacht cruise along the Bosphorus Strait, gliding between Europe and Asia. Take in the grand waterfront facades of Dolmabahçe and Çırağan Palaces, Ortaköy Mosque, the Bosphorus bridges, and the historic wooden Ottoman mansions (yalıs). Choose between our Standard Yacht (€400) or our Luxury Yacht (€600, including drinks).",
    "included": [
     "2-hour private yacht cruise on the Bosphorus",
     "Professional captain and attentive crew",
     "Up to 8 guests in your private party",
     "Choice of Standard (€400) or Luxury tier (€600 with drinks included)",
     "Audio system with Bluetooth connectivity for your own music",
     "Iconic views of Dolmabahçe Palace, Ortaköy & Rumeli Fortress"
    ],
    "not_included": [
     "Hotel transfers to and from the pier (available on request)",
     "Meals (unless pre-ordered)",
     "Gratuities for the crew"
    ],
    "note": "Price is per group for 2 hours (up to 8 guests). Select Standard (€400) or Luxury (€600 with drinks)."
   },
   "de": {
    "name": "Private Bosporus-Yachttour",
    "tagline": "Private 2-stündige Bootsfahrt zwischen Europa und Asien entlang osmanischer Paläste und Ufer-Yalıs.",
    "duration": "2 Stunden",
    "group": "Private Yacht, bis zu 7–8 Gäste",
    "desc": "Eine private 2-stündige Yachtfahrt auf dem Bosporus zwischen Europa und Asien. Bewundern Sie die prächtigen Palastfassaden von Dolmabahçe und Çırağan, die Ortaköy-Moschee, die Bosporus-Brücken und historische osmanische Holzvillen (Yalıs). Wählen Sie zwischen unserer Standard-Yacht (400 €) oder unserer Luxus-Yacht (600 €, inklusive Getränke).",
    "included": [
     "2-stündige private Yachtfahrt auf dem Bosporus",
     "Professioneller Kapitän und zuvorkommende Crew",
     "Bis zu 8 Gäste in Ihrer privaten Gruppe",
     "Wahl zwischen Standard (400 €) und Luxus-Kategorie (600 € inkl. Getränke)",
     "Soundsystem mit Bluetooth für Ihre eigene Musik",
     "Bester Blick auf Dolmabahçe-Palast, Ortaköy & Festung Rumeli Hisarı"
    ],
    "not_included": [
     "Hotel-Transfer zum Anleger (auf Anfrage)",
     "Mahlzeiten (sofern nicht vorab bestellt)",
     "Trinkgeld für die Crew"
    ],
    "note": "Preis pro Gruppe für 2 Stunden (bis zu 8 Gäste). Wählen Sie Standard (400 €) oder Luxus (600 € mit Getränken)."
   },
   "zh": {
    "name": "博斯普鲁斯海峡私人游艇之旅",
    "tagline": "2小时私人游艇巡游欧亚海峡，饱览奥斯曼皇家宫殿与海滨名宅风光。",
    "duration": "2 小时",
    "group": "私人专属游艇，最多 7–8 位贵宾",
    "desc": "2小时私人游艇畅游博斯普鲁斯海峡，在欧亚大陆之间悠然航行。沿途近距离欣赏多尔玛巴赫切宫与彻拉安宫的宏伟水岸立面、奥尔塔柯伊清真寺、博斯普鲁斯大桥以及历史悠久的奥斯曼滨水木制别墅（Yalı）。可选标准游艇（400欧元）或豪华游艇（600欧元，含精选饮品）。",
    "included": [
     "2小时博斯普鲁斯海峡私人专属游艇巡航",
     "经验丰富的专业船长与贴心船员全程服务",
     "最多容纳8位贵宾的私密专属空间",
     "可选标准游艇（400欧元）或豪华游艇（600欧元含饮品畅饮）",
     "游艇配备蓝牙音响系统，可自由播放您喜爱的音乐",
     "饱览多尔玛巴赫切宫、奥尔塔柯伊清真寺及鲁梅利堡垒等经典地标"
    ],
    "not_included": [
     "往返码头的酒店专车接送（可按需协助安排）",
     "正餐餐饮（除非提前预订定制）",
     "船员小费"
    ],
    "note": "按团体计费，时长2小时（最多8人）。可选择标准版（400欧元）或豪华版（600欧元含饮品）。"
   },
    "tr": {
        "name": "Özel Boğaz Yat Turu",
        "tagline": "Osmanlı sarayları ve yalılar arasında Avrupa ile Asya'yı ayıran Boğaz'da 2 saatlik özel seyir.",
        "duration": "2 saat",
        "group": "Özel yat, en fazla 7–8 kişi",
        "desc": "Boğaziçi'nde Avrupa ve Asya kıtaları arasında süzülen 2 saatlik özel yat turu. Dolmabahçe ve Çırağan Sarayları'nın muhteşem sahil cephelerini, Ortaköy Camii'ni, Boğaz köprülerini ve tarihi ahşap yalıları seyredin. Standart Yat (400 €) veya Lüks Yat (600 €, içecekler dahil) seçeneklerinden birini tercih edebilirsiniz.",
        "included": [
            "Boğaziçi'nde 2 saatlik özel yat turu",
            "Profesyonel kaptan ve deneyimli mürettebat",
            "Grubunuza özel en fazla 8 kişi kapasitesi",
            "Standart (400 €) veya Lüks (600 € içecek dahil) seçenek imkanı",
            "Kendi müziğinizi çalabileceğiniz Bluetooth ses sistemi",
            "Dolmabahçe Sarayı, Ortaköy ve Rumeli Hisarı'nın eşsiz manzaraları"
        ],
        "not_included": [
            "İskelesi gidiş-dönüş otel transferi",
            "Özel yemek siparişleri",
            "Mürettebat bahşişi"
        ],
        "note": "2 saatlik grup fiyatıdır (maks. 8 kişi). Standart (400 €) veya Lüks (600 € içecekli) seçiniz."
    }
  }
 },
 "bosphorus-yacht-standard": {
  "img": "tour-bosphorus-yacht.webp",
  "content": {
   "en": {
    "name": "Private Bosphorus Yacht Tour (Standard)",
    "tagline": "A private 2-hour cruise on the Bosphorus — Standard tier.",
    "duration": "2 hours",
    "group": "Private yacht, up to 7–8 guests",
    "desc": "A private 2-hour yacht cruise along the Bosphorus Strait (Standard tier: €400 per group).",
    "included": ["2-hour private yacht cruise on the Bosphorus", "Professional captain and crew", "Up to 8 guests in your private party"],
    "not_included": ["Drinks and snacks (included in Luxury tier)", "Hotel pickup"],
    "note": "Standard tier: €400 per group for 2 hours."
   },
   "de": {
    "name": "Private Bosporus-Yachttour (Standard)",
    "tagline": "Private 2-stündige Bootsfahrt auf dem Bosporus — Standard-Option.",
    "duration": "2 Stunden",
    "group": "Private Yacht, bis zu 7–8 Gäste",
    "desc": "Eine private 2-stündige Yachtfahrt auf dem Bosporus (Standard: 400 € pro Gruppe).",
    "included": ["2-stündige private Yachtfahrt auf dem Bosporus", "Professioneller Kapitän und Crew", "Bis zu 8 Gäste"],
    "not_included": ["Getränke (in der Luxus-Option inbegriffen)", "Hotel-Transfer"],
    "note": "Standard-Option: 400 € pro Gruppe für 2 Stunden."
   },
   "zh": {
    "name": "博斯普鲁斯海峡私人游艇之旅（标准版）",
    "tagline": "2小时私人游艇巡航——标准版套餐。",
    "duration": "2 小时",
    "group": "私人专属游艇，最多 7–8 位贵宾",
    "desc": "2小时博斯普鲁斯海峡私人专属游艇巡航（标准版：400欧元/团）。",
    "included": ["2小时博斯普鲁斯海峡私人游艇巡航", "专业船长与船员服务", "最多8位贵宾"],
    "not_included": ["饮品小吃（豪华版包含）", "酒店接送"],
    "note": "标准版：每组 400 欧元，时长 2 小时。"
   },
    "tr": {
        "name": "Özel Boğaz Yat Turu (Standart)",
        "tagline": "Boğaz'da 2 saatlik özel yat turu — Standart seçenek.",
        "duration": "2 saat",
        "group": "Özel yat, en fazla 7–8 kişi",
        "desc": "Boğaziçi'nde 2 saatlik özel yat seyri (Standart seçenek: grup başı 400 €).",
        "included": [
            "Boğaz'da 2 saatlik özel yat turu",
            "Profesyonel kaptan ve mürettebat",
            "En fazla 8 misafir"
        ],
        "not_included": [
            "İçecekler ve atıştırmalıklar (Lüks pakete dahildir)",
            "Otel transferi"
        ],
        "note": "Standart seçenek: 2 saat için grup başı 400 €."
    }
  }
 },
 "bosphorus-yacht-luxury": {
  "img": "tour-bosphorus-yacht.webp",
  "content": {
   "en": {
    "name": "Private Bosphorus Yacht Tour (Luxury)",
    "tagline": "A private 2-hour luxury cruise on the Bosphorus — drinks included.",
    "duration": "2 hours",
    "group": "Private yacht, up to 7–8 guests",
    "desc": "A private 2-hour luxury yacht cruise along the Bosphorus Strait with drinks included (€600 per group).",
    "included": ["2-hour private yacht cruise on the Bosphorus", "Professional captain and crew", "Selection of drinks included", "Up to 8 guests in your private party"],
    "not_included": ["Hotel pickup (available on request)"],
    "note": "Luxury tier: €600 per group for 2 hours, drinks included."
   },
   "de": {
    "name": "Private Bosporus-Yachttour (Luxus)",
    "tagline": "Private 2-stündige Luxus-Bootsfahrt auf dem Bosporus — inklusive Getränke.",
    "duration": "2 Stunden",
    "group": "Private Yacht, bis zu 7–8 Gäste",
    "desc": "Eine private 2-stündige Luxus-Yachtfahrt auf dem Bosporus inklusive Getränke (600 € pro Gruppe).",
    "included": ["2-stündige private Yachtfahrt auf dem Bosporus", "Professioneller Kapitän und Crew", "Auswahl an Getränken inbegriffen", "Bis zu 8 Gäste"],
    "not_included": ["Hotel-Transfer"],
    "note": "Luxus-Option: 600 € pro Gruppe für 2 Stunden, inklusive Getränke."
   },
   "zh": {
    "name": "博斯普鲁斯海峡私人游艇之旅（豪华版）",
    "tagline": "2小时私人奢华游艇巡航——含饮品畅饮。",
    "duration": "2 小时",
    "group": "私人专属游艇，最多 7–8 位贵宾",
    "desc": "2小时博斯普鲁斯海峡私人奢华游艇巡航，含精选饮品（豪华版：600欧元/团）。",
    "included": ["2小时博斯普鲁斯海峡私人游艇巡航", "专业船长与贴心船员", "精选饮品全程供应", "最多8位贵宾"],
    "not_included": ["酒店接送"],
    "note": "豪华版：每组 600 欧元，时长 2 小时，含饮品。"
   },
    "tr": {
        "name": "Özel Boğaz Yat Turu (Lüks)",
        "tagline": "Boğaz'da 2 saatlik lüks yat turu — içecekler dahil.",
        "duration": "2 saat",
        "group": "Özel yat, en fazla 7–8 kişi",
        "desc": "Boğaziçi'nde içecek ikramı dahil 2 saatlik özel lüks yat turu (Lüks seçenek: grup başı 600 €).",
        "included": [
            "Boğaz'da 2 saatlik özel yat turu",
            "Profesyonel kaptan ve mürettebat",
            "Seçkin içecek ikramı dahil",
            "En fazla 8 misafir"
        ],
        "not_included": [
            "Otel transferi"
        ],
        "note": "Lüks seçenek: 2 saat için grup başı 600 €, içecekler dahildir."
    }
  }
 }
};
export const UI: Record<Locale, any> = {
 "en": {
  "nav_tours": "Tours",
  "nav_about": "Your Guide",
  "nav_reviews": "Reviews",
  "nav_contact": "Contact",
  "booking": "Booking",
  "book_now": "Book now",
  "see_tours": "See the tours",
  "hero_kicker": "Oligarch Travel · Istanbul Old City",
  "hero_title": "Istanbul Tours",
  "free": "Free",
  "tier_label": "Yacht Tier",
  "tier_standard": "Standard Yacht — €400 (2 hrs)",
  "tier_luxury": "Luxury Yacht — €600 (2 hrs, drinks included)",
  "hero_sub": "Licensed guide Ergin Karakoyun — 32 years in Sultanahmet. Book direct here, meet at the Hagia Sophia ticket office, and get your confirmation personally on WhatsApp.",
  "tours_title": "Tours & tickets",
  "tours_sub": "Real tours, real prices. Add one — or several — to a single booking.",
  "why_title": "Why book direct",
  "why": [
   [
    "Book direct — no platform commission",
    "You book with the guide himself, not a marketplace. The price you see is the price you pay."
   ],
   [
    "Confirmed personally on WhatsApp",
    "Every booking lands on Ergin’s WhatsApp. He confirms it himself and meets you at the meeting point."
   ],
   [
    "Licensed & local",
    "A licensed professional guide and founding delegate of the Chamber of Turkey Guides. Operated by Oligarch Tour, TÜRSAB travel agency licence No. 14988."
   ]
  ],
  "about_title": "Your guide: Ergin Karakoyun",
  "about_paras": [
   "Ergin Karakoyun is a licensed professional tourist guide who has worked in Istanbul’s Old City for 32 years. He is a founding delegate of the Chamber of Turkey Guides and specialises in Byzantine and Ottoman heritage — Hagia Sophia, Topkapi Palace and the Sultanahmet district.",
   "Ergin guides personally in English, German and Chinese. His fellow freelance guides cover nine languages in total, and every tour is led by a licensed guide."
  ],
  "about_facts": [
   "32 years guiding",
   "Licensed professional guide",
   "Guides in English · Deutsch · 中文",
   "Founding delegate, Chamber of Turkey Guides"
  ],
  "reviews_title": "What guests say",
  "stats": [
   "4.7 / 5 · 58 reviews on TripAdvisor",
   "5.0 · Hagia Sophia Private Tour — 25 reviews on Viator",
   "Viator Badge of Excellence",
   "4.86 · Topkapi tour — 36 reviews on Airbnb"
  ],
  "quotes": [
   [
    "Ergin was a wonderful, knowledgeable guide. He was very entertaining and accommodating.",
    "Guest review, TripAdvisor"
   ],
   [
    "Impresses with incredible historical knowledge and wit.",
    "Guest review, TripAdvisor"
   ]
  ],
  "contact_title": "Contact & meeting point",
  "meeting": "You will find us at the Hagia Sophia ticket office every day, 09:00–17:00. Tours meet at the Harem Souvenir Shop, Babı Hümayun Cd. No:8, Sultanahmet — 50 metres from the ticket office.",
  "meeting_label": "Meeting point",
  "phone_label": "WhatsApp / Phone",
  "email_label": "Email",
  "instagram_label": "Instagram",
  "footer_line": "Oligarch Travel — Byzantine & Ottoman tours in Istanbul. Operated by Oligarch Tour, TÜRSAB licence No. 14988.",
    "legal_line": "Tours are organised by Oligarch Tour — TÜRSAB Travel Agency Licence No: 14988.",
  "per_person": "/ person",
  "per_group": "/ group",
  "plus_per_person": "+ {p} / person",
  "duration": "Duration",
  "group_size": "Group",
  "facts": "Good to know",
  "included": "Included",
  "not_included": "Not included",
  "date": "Date",
  "guests": "Guests",
  "add_to_booking": "Add to booking",
  "added": "Added ✓",
  "your_booking": "Your booking",
  "empty_cart": "Your booking is empty. Add a tour to begin.",
  "add_another": "Add another tour",
  "choose_tour": "Choose a tour",
  "add": "Add",
  "remove": "Remove",
  "total": "Total",
  "deposit": "Deposit to confirm (25%)",
  "remainder": "Due on the day",
  "your_name": "Your name",
  "your_phone": "Your phone / WhatsApp",
  "confirm": "Confirm booking via WhatsApp",
  "booking_note": "No card payment online. Your booking opens in WhatsApp with everything filled in — Ergin confirms personally, and the deposit is arranged with him there.",
  "items_in_booking": "in your booking",
  "view_booking": "View booking",
  "price_from": "from",
  "start_booking": "Search",
  "sec_popular": "Most popular",
  "sec_more": "Topkapi Palace & private days",
  "reviews_word": "reviews",
  "badge": "Badge of Excellence"
 },
 "de": {
  "nav_tours": "Touren",
  "nav_about": "Ihr Guide",
  "nav_reviews": "Bewertungen",
  "nav_contact": "Kontakt",
  "booking": "Buchung",
  "book_now": "Jetzt buchen",
  "see_tours": "Touren ansehen",
  "hero_kicker": "Oligarch Travel · Istanbuls Altstadt",
  "hero_title": "Istanbul-Touren",
  "free": "Kostenlos",
  "tier_label": "Yacht-Option",
  "tier_standard": "Standard-Yacht — 400 € (2 Std.)",
  "tier_luxury": "Luxus-Yacht — 600 € (2 Std., inkl. Getränke)",
  "hero_sub": "Lizenzierter Guide Ergin Karakoyun — seit 32 Jahren in Sultanahmet. Buchen Sie hier direkt, Treffpunkt an der Kasse der Hagia Sophia, und erhalten Sie Ihre Bestätigung persönlich per WhatsApp.",
  "tours_title": "Touren & Tickets",
  "tours_sub": "Echte Touren, echte Preise. Fügen Sie eine — oder mehrere — zu einer Buchung hinzu.",
  "why_title": "Warum direkt buchen",
  "why": [
   [
    "Direkt buchen — keine Plattformprovision",
    "Sie buchen beim Guide selbst, nicht über einen Marktplatz. Der Preis, den Sie sehen, ist der Preis, den Sie zahlen."
   ],
   [
    "Persönliche Bestätigung per WhatsApp",
    "Jede Buchung landet auf Ergins WhatsApp. Er bestätigt sie persönlich und trifft Sie am Treffpunkt."
   ],
   [
    "Lizenziert & vor Ort",
    "Ein lizenzierter professioneller Guide und Gründungsdelegierter der türkischen Guides-Kammer. Betrieben von Oligarch Tour, TÜRSAB-Reisebürolizenz Nr. 14988."
   ]
  ],
  "about_title": "Ihr Guide: Ergin Karakoyun",
  "about_paras": [
   "Ergin Karakoyun ist ein lizenzierter professioneller Touristenguide, der seit 32 Jahren in Istanbuls Altstadt arbeitet. Er ist Gründungsdelegierter der Kammer der türkischen Touristenguides und auf byzantinisches und osmanisches Erbe spezialisiert — Hagia Sophia, Topkapi-Palast und das Sultanahmet-Viertel.",
   "Ergin führt persönlich auf Englisch, Deutsch und Chinesisch. Seine freiberuflichen Guide-Kollegen decken insgesamt neun Sprachen ab, und jede Tour wird von einem lizenzierten Guide geleitet."
  ],
  "about_facts": [
   "Über 32 Jahre Erfahrung",
   "Lizenzierter professioneller Guide",
   "Führungen auf English · Deutsch · 中文",
   "Gründungsdelegierter der Guides-Kammer"
  ],
  "reviews_title": "Was Gäste sagen",
  "stats": [
   "4,7 / 5 · 58 Bewertungen auf TripAdvisor",
   "5,0 · Private Tour Hagia Sophia — 25 Bewertungen auf Viator",
   "Viator Badge of Excellence",
   "4,86 · Topkapi-Tour — 36 Bewertungen auf Airbnb"
  ],
  "quotes": [
   [
    "Ergin war ein wunderbarer, sachkundiger Guide. Er war sehr unterhaltsam und zuvorkommend.",
    "Gästebewertung, TripAdvisor"
   ],
   [
    "Beeindruckt mit unglaublichem historischen Wissen und Witz.",
    "Gästebewertung, TripAdvisor"
   ]
  ],
  "contact_title": "Kontakt & Treffpunkt",
  "meeting": "Sie finden uns täglich von 09:00 bis 17:00 Uhr an der Kasse der Hagia Sophia. Treffpunkt der Touren ist der Harem Souvenir Shop, Babı Hümayun Cd. Nr. 8, Sultanahmet — 50 Meter von der Kasse entfernt.",
  "meeting_label": "Treffpunkt",
  "phone_label": "WhatsApp / Telefon",
  "email_label": "E-Mail",
  "instagram_label": "Instagram",
  "footer_line": "Oligarch Travel — Byzanz- und Osmanen-Touren in Istanbul. Betrieben von Oligarch Tour, TÜRSAB-Lizenz Nr. 14988.",
    "legal_line": "Die Touren werden von Oligarch Tour veranstaltet — TÜRSAB-Reisebürolizenz Nr. 14988.",
  "per_person": "/ Person",
  "per_group": "/ Gruppe",
  "plus_per_person": "+ {p} / Person",
  "duration": "Dauer",
  "group_size": "Gruppe",
  "facts": "Gut zu wissen",
  "included": "Inklusive",
  "not_included": "Nicht inklusive",
  "date": "Datum",
  "guests": "Gäste",
  "add_to_booking": "Zur Buchung hinzufügen",
  "added": "Hinzugefügt ✓",
  "your_booking": "Ihre Buchung",
  "empty_cart": "Ihre Buchung ist leer. Fügen Sie eine Tour hinzu, um zu beginnen.",
  "add_another": "Weitere Tour hinzufügen",
  "choose_tour": "Tour wählen",
  "add": "Hinzufügen",
  "remove": "Entfernen",
  "total": "Gesamt",
  "deposit": "Anzahlung zur Bestätigung (25 %)",
  "remainder": "Am Tag der Tour fällig",
  "your_name": "Ihr Name",
  "your_phone": "Ihre Telefonnummer / WhatsApp",
  "confirm": "Buchung per WhatsApp bestätigen",
  "booking_note": "Keine Kartenzahlung online. Ihre Buchung öffnet sich in WhatsApp mit allen Angaben — Ergin bestätigt persönlich, und die Anzahlung wird dort mit ihm vereinbart.",
  "items_in_booking": "in Ihrer Buchung",
  "view_booking": "Buchung ansehen",
  "price_from": "ab",
  "start_booking": "Suchen",
  "sec_popular": "Am beliebtesten",
  "sec_more": "Topkapi-Palast & private Tage",
  "reviews_word": "Bewertungen",
  "badge": "Badge of Excellence"
 },
 "zh": {
  "nav_tours": "导览与门票",
  "nav_about": "您的导游",
  "nav_reviews": "游客评价",
  "nav_contact": "联系方式",
  "booking": "预订",
  "book_now": "立即预订",
  "see_tours": "查看导览",
  "hero_kicker": "Oligarch Travel · 伊斯坦布尔老城",
  "hero_title": "伊斯坦布尔之旅",
  "free": "免费",
  "tier_label": "游艇级别",
  "tier_standard": "标准游艇——400 欧元（2 小时）",
  "tier_luxury": "豪华游艇——600 欧元（2 小时含饮品）",
  "hero_sub": "持证导游 Ergin Karakoyun——在苏丹艾哈迈德区执业 32 年。在此直接预订，在圣索菲亚售票处会合，并通过 WhatsApp 获得他本人确认。",
  "tours_title": "导览与门票",
  "tours_sub": "真实的导览，真实的价格。可将一项——或多项——加入同一次预订。",
  "why_title": "为什么直接预订",
  "why": [
   [
    "直接预订——无平台佣金",
    "您直接向导游本人预订，而不是通过平台。所见价格即所付价格。"
   ],
   [
    "通过 WhatsApp 本人确认",
    "每个预订都会发送到 Ergin 的 WhatsApp。他亲自确认，并在集合点与您会合。"
   ],
   [
    "持证本地导游",
    "持证专业导游，土耳其导游协会创始代表。由 Oligarch Tour 运营，TÜRSAB 旅行社许可证编号 14988。"
   ]
  ],
  "about_title": "您的导游：Ergin Karakoyun",
  "about_paras": [
   "Ergin Karakoyun 是一位持证专业旅游导游，在伊斯坦布尔老城工作了 32 年。他是土耳其导游协会的创始代表，专精拜占庭与奥斯曼文化遗产——圣索菲亚大教堂、托普卡珀皇宫和苏丹艾哈迈德区。",
   "Ergin 本人以英语、德语和中文进行导览。他的自由导游团队共涵盖九种语言，每一次导览都由持证导游带领。"
  ],
  "about_facts": [
   "32 年导览经验",
   "持证专业导游",
   "以英语 · 德语 · 中文导览",
   "导游协会创始代表"
  ],
  "reviews_title": "游客怎么说",
  "stats": [
   "4.7 / 5 · TripAdvisor 上 58 条评价",
   "5.0 · 圣索菲亚私人导览——Viator 上 25 条评价",
   "Viator 卓越徽章",
   "4.86 · 托普卡珀导览——Airbnb 上 36 条评价"
  ],
  "quotes": [
   [
    "Ergin 是一位出色、博学的导游。他非常风趣，也很体贴。",
    "游客评价，TripAdvisor"
   ],
   [
    "他渊博的历史知识和风趣的讲解令人印象深刻。",
    "游客评价，TripAdvisor"
   ]
  ],
  "contact_title": "联系方式与集合点",
  "meeting": "我们每天 09:00–17:00 都在圣索菲亚大教堂售票处。导览集合点为 Harem 纪念品店，地址：Babı Hümayun Cd. No:8, Sultanahmet——距售票处 50 米。",
  "meeting_label": "集合点",
  "phone_label": "WhatsApp / 电话",
  "email_label": "电子邮箱",
  "instagram_label": "Instagram",
  "footer_line": "Oligarch Travel——伊斯坦布尔拜占庭与奥斯曼主题导览。由 Oligarch Tour 运营，TÜRSAB 许可证编号 14988。",
    "legal_line": "所有行程由 Oligarch Tour 组织举办 — TÜRSAB 旅行社许可证号：14988。",
  "per_person": "/ 人",
  "per_group": "/ 组",
  "plus_per_person": "+ {p} / 人",
  "duration": "时长",
  "group_size": "团队",
  "facts": "须知",
  "included": "包含",
  "not_included": "不包含",
  "date": "日期",
  "guests": "人数",
  "add_to_booking": "加入预订",
  "added": "已加入 ✓",
  "your_booking": "您的预订",
  "empty_cart": "您的预订是空的。添加一项导览开始预订。",
  "add_another": "再添加一项导览",
  "choose_tour": "选择导览",
  "add": "添加",
  "remove": "删除",
  "total": "总计",
  "deposit": "确认预订的定金（25%）",
  "remainder": "活动当天支付",
  "your_name": "您的姓名",
  "your_phone": "您的电话 / WhatsApp",
  "confirm": "通过 WhatsApp 确认预订",
  "booking_note": "无需在线刷卡付款。您的预订将在 WhatsApp 中打开，所有信息已填写完毕——Ergin 会亲自确认，定金也在那里与他商定。",
  "items_in_booking": "在您的预订中",
  "view_booking": "查看预订",
  "price_from": "起",
  "start_booking": "搜索",
  "sec_popular": "最受欢迎",
  "sec_more": "托普卡珀皇宫与私人一日游",
  "reviews_word": "条评价",
  "badge": "卓越徽章"
 },
 "tr": {
   "nav_tours": "Turlar",
   "nav_about": "Rehberiniz",
   "nav_reviews": "Yorumlar",
   "nav_contact": "İletişim",
   "booking": "Rezervasyon",
   "book_now": "Hemen Rezerve Et",
   "see_tours": "Turları Gör",
   "hero_kicker": "Oligarch Travel · Tarihi Yarımada",
   "hero_title": "İstanbul Turları",
   "free": "Ücretsiz",
   "tier_label": "Yat Seçeneği",
   "tier_standard": "Standart Yat — 400 € (2 Saat)",
   "tier_luxury": "Lüks Yat — 600 € (2 Saat, İçecekler Dahil)",
   "hero_sub": "Lisanslı profesyonel rehber Ergin Karakoyun — Sultanahmet'te 32 yıllık deneyim. Buradan doğrudan rezervasyon yapın, Ayasofya gişesinde buluşun, teyidinizi bizzat WhatsApp'tan alın.",
   "tours_title": "Turlar ve Biletler",
   "tours_sub": "Gerçek turlar, şeffaf fiyatlar. Tek rezervasyona bir veya birden fazla tur ekleyebilirsiniz.",
   "why_title": "Neden Doğrudan Rezervasyon?",
   "why": [
     [
       "Aracısız — Komisyonsuz",
       "Pazaryeri platformları yerine doğrudan rehberden rezervasyon yapın. Gördüğünüz fiyat ödeyeceğiniz fiyattır."
     ],
     [
       "WhatsApp ile Kişisel Onay",
       "Her rezervasyon doğrudan Ergin'in WhatsApp hattına düşer. Kendisi bizzat teyit eder ve buluşma noktasında sizi karşılar."
     ],
     [
       "Lisanslı ve Yerel Rehber",
       "Lisanslı profesyonel turist rehberi, Türkiye Rehberler Odası kurucu delegesi. Oligarch Tour tarafından işletilmektedir — TÜRSAB Belge No: 14988."
     ]
   ],
   "about_title": "Rehberiniz: Ergin Karakoyun",
   "about_paras": [
     "Ergin Karakoyun, İstanbul'un Tarihi Yarımadası'nda 32 yıldır çalışan lisanslı profesyonel bir turist rehberidir. Türkiye Rehberler Odası kurucu delegesi olup Bizans ve Osmanlı mirası — Ayasofya, Topkapı Sarayı ve Sultanahmet bölgesinde uzmandır.",
     "Ergin bizzat İngilizce, Almanca ve Çince turlar düzenlemektedir. Serbest çalışan rehber ekibi toplam dokuz dili kapsamakta olup, her tura lisanslı bir rehber liderlik eder."
   ],
   "about_facts": [
     "32 yıllık rehberlik deneyimi",
     "Lisanslı profesyonel rehber",
     "İngilizce · Almanca · Çince rehberlik",
     "Rehberler Odası Kurucu Delegesi"
   ],
   "reviews_title": "Misafirlerimiz Ne Diyor?",
   "stats": [
     "4,7 / 5 · TripAdvisor'da 58 yorum",
     "5,0 · Ayasofya Özel Turu — Viator'da 25 yorum",
     "Viator Mükemmellik Rozeti (Badge of Excellence)",
     "4,86 · Topkapı Turu — Airbnb'de 36 yorum"
   ],
   "quotes": [
     [
       "Ergin harika ve son derece bilgili bir rehberdi. Çok eğlenceli ve yardımseverdi.",
       "Misafir Yorumu, TripAdvisor"
     ],
     [
       "İnanılmaz tarih bilgisi ve samimi anlatımıyla bizi büyüledi.",
       "Misafir Yorumu, TripAdvisor"
     ]
   ],
   "contact_title": "İletişim & Buluşma Noktası",
   "meeting": "Bizi her gün 09:00–17:00 saatleri arasında Ayasofya gişesinde bulabilirsiniz. Tur buluşma noktası: Harem Hediyelik Eşya Dükkanı, Babı Hümayun Cd. No:8, Sultanahmet — gişeye 50 metre mesafede.",
   "meeting_label": "Buluşma Noktası",
   "phone_label": "WhatsApp / Telefon",
   "email_label": "E-posta",
   "instagram_label": "Instagram",
   "footer_line": "Oligarch Travel — İstanbul'da Bizans ve Osmanlı turları. Oligarch Tour tarafından işletilmektedir, TÜRSAB Belge No: 14988.",
   "legal_line": "Turlar Oligarch Tour tarafından düzenlenmektedir — TÜRSAB Seyahat Acentası Belge No: 14988.",
   "per_person": "/ kişi",
   "per_group": "/ grup",
   "plus_per_person": "+ {p} / kişi",
   "duration": "Süre",
   "group_size": "Grup",
   "facts": "Faydalı Bilgiler",
   "included": "Dahil Olanlar",
   "not_included": "Dahil Olmayanlar",
   "date": "Tarih",
   "guests": "Kişi Sayısı",
   "add_to_booking": "Rezervasyona Ekle",
   "added": "Eklendi ✓",
   "your_booking": "Rezervasyonunuz",
   "empty_cart": "Rezervasyon sepetiniz boş. Başlamak için bir tur ekleyin.",
   "add_another": "Başka bir tur ekle",
   "choose_tour": "Tur Seçin",
   "add": "Ekle",
   "remove": "Kaldır",
   "total": "Toplam",
   "deposit": "Onay için ön ödeme (%25)",
   "remainder": "Tur günü ödenecek kalan tutar",
   "your_name": "Adınız Soyadınız",
   "your_phone": "Telefon Numaranız / WhatsApp",
   "confirm": "Rezervasyonu WhatsApp ile Onayla",
   "booking_note": "Siteden kredi kartı ödemesi alınmaz. Rezervasyon özetiniz WhatsApp üzerinden Ergin'e iletilir; kendisi bizzat teyit eder ve ön ödeme orada kararlaştırılır.",
   "items_in_booking": "rezervasyonunuzda",
   "view_booking": "Rezervasyonu Gör",
   "price_from": "başlayan fiyatlarla",
   "start_booking": "Ara",
   "sec_popular": "En Popüler Turlar",
   "sec_more": "Topkapı Sarayı & Özel Günlük Turlar",
   "reviews_word": "Yorum",
   "badge": "Mükemmellik Rozeti"
 }
};
export const TRUST: Record<Locale, [string, string][]> = {"en": [["4.7 / 5", "TripAdvisor · 58 reviews"], ["Badge of Excellence", "Viator"], ["4.86", "Airbnb · 36 reviews"], ["Licensed", "Professional tourist guide"], ["Founding Delegate", "Chamber of Turkey Guides"], ["32 years", "Guiding in Istanbul"]], "de": [["4,7 / 5", "TripAdvisor · 58 Bewertungen"], ["Badge of Excellence", "Viator"], ["4,86", "Airbnb · 36 Bewertungen"], ["Lizenziert", "Professioneller Touristenguide"], ["Gründungsdelegierter", "Kammer der türkischen Guides"], ["32 Jahre", "Führungen in Istanbul"]], "zh": [["4.7 / 5", "TripAdvisor · 58 条评价"], ["卓越徽章", "Viator"], ["4.86", "Airbnb · 36 条评价"], ["持证导游", "专业旅游导游"], ["创始代表", "土耳其导游协会"], ["32 年", "伊斯坦布尔导览经验"]],
 "tr": [["4,7 / 5", "TripAdvisor · 58 yorum"], ["Mükemmellik Rozeti", "Viator"], ["4,86", "Airbnb · 36 yorum"], ["Lisanslı", "Profesyonel Turist Rehberi"], ["Kurucu Delege", "Türkiye Rehberler Odası"], ["32 Yıl", "İstanbul'da Rehberlik Deneyimi"]]};
export const RATINGS: Record<string, any> = {
 "hs-ticket": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor",
  "tr": "5,0 (25 yorum) · Viator"
 },
 "hs-guided": {
  "en": "5.0 (25 reviews) · Viator",
  "de": "5,0 (25 Bewertungen) · Viator",
  "zh": "5.0（25 条评价）· Viator",
  "tr": "4,86 (36 yorum) · Airbnb"
 },
 "hs-private": {
  "en": "5.0 (25 reviews) · Viator",
  "de": "5,0 (25 Bewertungen) · Viator",
  "zh": "5.0（25 条评价）· Viator",
  "badge": {
   "en": "Badge of Excellence",
   "de": "Badge of Excellence",
   "zh": "卓越徽章",
  "tr": "4,7 (58 yorum) · TripAdvisor"
  }
 },
 "topkapi-private": {
  "en": "4.86 (36 reviews) · Airbnb",
  "de": "4,86 (36 Bewertungen) · Airbnb",
  "zh": "4.86（36 条评价）· Airbnb",
  "tr": "4,7 (58 yorum) · TripAdvisor"
 },
 "topkapi-night": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor",
  "tr": "4,9 (42 yorum) · TripAdvisor"
 },
 "istanbul-day": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor",
  "tr": "5,0 · Misafir Favorisi"
 }
,
 "bazaars-tour": {
  "en": "4.9 (42 reviews) · TripAdvisor",
  "de": "4,9 (42 Bewertungen) · TripAdvisor",
  "zh": "4.9（42 条评价）· TripAdvisor",
  "tr": "5,0 (38 yorum) · TripAdvisor"
 },
 "traditional-handicrafts": {
  "en": "5.0 · Guest Favorite",
  "de": "5,0 · Gäste-Favorit",
  "zh": "5.0 · 游客最爱体验",
  "tr": "5,0 (38 yorum) · TripAdvisor"
 },
 "bosphorus-yacht": {
  "en": "5.0 (38 reviews) · TripAdvisor",
  "de": "5,0 (38 Bewertungen) · TripAdvisor",
  "zh": "5.0（38 条评价）· TripAdvisor",
  "tr": "5,0 (38 yorum) · TripAdvisor"
 },
 "bosphorus-yacht-standard": {
  "en": "5.0 (38 reviews) · TripAdvisor",
  "de": "5,0 (38 Bewertungen) · TripAdvisor",
  "zh": "5.0（38 条评价）· TripAdvisor"
 },
 "bosphorus-yacht-luxury": {
  "en": "5.0 (38 reviews) · TripAdvisor",
  "de": "5,0 (38 Bewertungen) · TripAdvisor",
  "zh": "5.0（38 条评价）· TripAdvisor",
  "badge": {
   "en": "Badge of Excellence",
   "de": "Badge of Excellence",
   "zh": "卓越徽章"
  }
 }
};
export const MEETING_DEFAULT: Record<Locale, string> = {"en": "Harem Souvenir Shop, Babı Hümayun Cd. No:8, Sultanahmet", "de": "Harem Souvenir Shop, Babı Hümayun Cd. Nr. 8, Sultanahmet", "zh": "Harem 纪念品店，Babı Hümayun Cd. No:8, Sultanahmet", "tr": "Harem Hediyelik Eşya Dükkanı, Babı Hümayun Cd. No:8, Sultanahmet"};
export const MEETING_OVERRIDE: Record<string, Record<Locale, string>> = {
  'bazaars-tour': {
    en: 'Beyazıt Square / Grand Bazaar Gate 1 or Sultanahmet',
    de: 'Beyazıt-Platz / Großer Basar Tor 1 oder Sultanahmet',
    zh: '贝亚泽特广场/大巴扎1号门或苏丹艾哈迈德',
    tr: "Beyazıt Meydanı / Kapalıçarşı 1 No'lu Kapı veya Sultanahmet",
  },
  'traditional-handicrafts': {
    en: 'Arranged with your guide in Sultanahmet',
    de: 'Wird mit Ihrem Guide in Sultanahmet abgestimmt',
    zh: '由您的导游在苏丹艾哈迈德区当面安排',
    tr: "Sultanahmet'te rehberinizle kararlaştırılır",
  },
  'bosphorus-yacht': {
    en: 'Karaköy or Kabataş Pier (confirmed on WhatsApp)',
    de: 'Anleger Karaköy oder Kabataş (per WhatsApp bestätigt)',
    zh: '卡拉柯伊（Karaköy）或卡巴塔什（Kabataş）码头（通过 WhatsApp 确认）',
    tr: 'Karaköy veya Kabataş İskelesi (WhatsApp ile teyit edilir)',
  },
  'bosphorus-yacht-standard': {
    en: 'Karaköy or Kabataş Pier (confirmed on WhatsApp)',
    de: 'Anleger Karaköy oder Kabataş (per WhatsApp bestätigt)',
    zh: '卡拉柯伊（Karaköy）或卡巴塔什（Kabataş）码头（通过 WhatsApp 确认）',
    tr: 'Karaköy veya Kabataş İskelesi (WhatsApp ile teyit edilir)',
  },
  'bosphorus-yacht-luxury': {
    en: 'Karaköy or Kabataş Pier (confirmed on WhatsApp)',
    de: 'Anleger Karaköy oder Kabataş (per WhatsApp bestätigt)',
    zh: '卡拉柯伊（Karaköy）或卡巴塔什（Kabataş）码头（通过 WhatsApp 确认）',
    tr: 'Karaköy veya Kabataş İskelesi (WhatsApp ile teyit edilir)',
  },
  'topkapi-night': {
    en: 'Hürrem Sultan Hamamı Cafe, Sultanahmet',
    de: 'Hürrem Sultan Hamamı Cafe, Sultanahmet',
    zh: 'Hürrem Sultan Hamamı 咖啡馆，Sultanahmet',
    tr: 'Hürrem Sultan Hamamı Cafe, Sultanahmet',
  },
};
export function meetingPoint(locale: Locale, tourId: string): string {
  const own = TOURS[tourId]?.meeting?.[locale];
  if (own) return own;
  return (MEETING_OVERRIDE[tourId] && MEETING_OVERRIDE[tourId][locale]) || MEETING_DEFAULT[locale];
}
