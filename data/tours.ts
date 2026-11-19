// Tour content + UI strings (EN/DE/ZH) — extracted from the verified dossier data.
// Prices do NOT live here: they live in data/prices.json and are editable in /admin.
export type Locale = 'en' | 'de' | 'zh';
export const LOCALES: Locale[] = ['en', 'de', 'zh'];
export const VIDEO_URL = '/img/hero-video.webm';
export interface TourContent { name: string; tagline: string; duration: string; group: string; desc: string; included: string[]; not_included: string[]; note: string; }
export interface TourDef { img: string; meeting?: Record<Locale, string>; content: Record<Locale, TourContent>; }
export const TOUR_ORDER: string[] = ["hs-ticket", "hs-guided", "hs-private", "topkapi-private", "topkapi-night", "istanbul-day"];
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
   }
  }
 },
 "topkapi-night": {
  "img": "tour-topkapi-night.webp",
  "meeting": {
   "en": "Hürrem Sultan Hamamı Cafe, Sultanahmet",
   "de": "Hürrem Sultan Hamamı Cafe, Sultanahmet",
   "zh": "Hürrem Sultan 土耳其浴室咖啡厅，苏丹艾哈迈德区"
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
   }
  }
 },
 "istanbul-day": {
  "img": "tour-istanbul-day.webp",
  "meeting": {
   "en": "Your hotel",
   "de": "Ihr Hotel",
   "zh": "您的酒店"
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
  "hero_title": "Hagia Sophia & Topkapi Palace, with a guide who knows them best.",
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
  "hero_title": "Hagia Sophia & Topkapi-Palast — mit einem Guide, der sie am besten kennt.",
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
  "hero_title": "圣索菲亚与托普卡珀皇宫——由最了解它们的导游为您讲解。",
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
 }
};
export const TRUST: Record<Locale, [string, string][]> = {"en": [["4.7 / 5", "TripAdvisor · 58 reviews"], ["Badge of Excellence", "Viator"], ["4.86", "Airbnb · 36 reviews"], ["Licensed", "Professional tourist guide"], ["Founding Delegate", "Chamber of Turkey Guides"], ["32 years", "Guiding in Istanbul"]], "de": [["4,7 / 5", "TripAdvisor · 58 Bewertungen"], ["Badge of Excellence", "Viator"], ["4,86", "Airbnb · 36 Bewertungen"], ["Lizenziert", "Professioneller Touristenguide"], ["Gründungsdelegierter", "Kammer der türkischen Guides"], ["32 Jahre", "Führungen in Istanbul"]], "zh": [["4.7 / 5", "TripAdvisor · 58 条评价"], ["卓越徽章", "Viator"], ["4.86", "Airbnb · 36 条评价"], ["持证导游", "专业旅游导游"], ["创始代表", "土耳其导游协会"], ["32 年", "伊斯坦布尔导览经验"]]};
export const RATINGS: Record<string, any> = {
 "hs-ticket": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor"
 },
 "hs-guided": {
  "en": "5.0 (25 reviews) · Viator",
  "de": "5,0 (25 Bewertungen) · Viator",
  "zh": "5.0（25 条评价）· Viator"
 },
 "hs-private": {
  "en": "5.0 (25 reviews) · Viator",
  "de": "5,0 (25 Bewertungen) · Viator",
  "zh": "5.0（25 条评价）· Viator",
  "badge": {
   "en": "Badge of Excellence",
   "de": "Badge of Excellence",
   "zh": "卓越徽章"
  }
 },
 "topkapi-private": {
  "en": "4.86 (36 reviews) · Airbnb",
  "de": "4,86 (36 Bewertungen) · Airbnb",
  "zh": "4.86（36 条评价）· Airbnb"
 },
 "topkapi-night": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor"
 },
 "istanbul-day": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor"
 }
};
export const MEETING_DEFAULT: Record<Locale, string> = {"en": "Harem Souvenir Shop, Babı Hümayun Cd. No:8, Sultanahmet", "de": "Harem Souvenir Shop, Babı Hümayun Cd. Nr. 8, Sultanahmet", "zh": "Harem 纪念品店，Babı Hümayun Cd. No:8, Sultanahmet"};
export const MEETING_OVERRIDE: Record<string, Record<Locale, string>> = {
  'topkapi-night': {
    en: 'Hürrem Sultan Hamamı Cafe, Sultanahmet',
    de: 'Hürrem Sultan Hamamı Cafe, Sultanahmet',
    zh: 'Hürrem Sultan Hamamı 咖啡馆，Sultanahmet',
  },
};
export function meetingPoint(locale: Locale, tourId: string): string {
  const own = TOURS[tourId]?.meeting?.[locale];
  if (own) return own;
  return (MEETING_OVERRIDE[tourId] && MEETING_OVERRIDE[tourId][locale]) || MEETING_DEFAULT[locale];
}
