// Tour content + UI strings (EN/DE/ZH) — extracted from the verified dossier data.
// Prices do NOT live here: they live in data/prices.json and are editable in /admin.
export type Locale = 'en' | 'de' | 'zh' | 'tr';
export const LOCALES: Locale[] = ['en', 'de', 'zh', 'tr'];
export const VIDEO_URL = '/img/hero-video.webm';
export interface TourContent { name: string; tagline: string; intro: string; duration: string; group: string; desc: string; included: string[]; not_included: string[]; note: string; }
export interface TourDef { img: string; meeting?: Record<Locale, string>; content: Record<Locale, TourContent>; }
export const TOUR_ORDER: string[] = ["full-day-istanbul", "half-day-istanbul", "hagia-sophia", "topkapi-palace", "basilica-cistern", "sultanahmet-hippodrome", "bazaars-tour", "bosphorus-yacht", "topkapi-night", "traditional-handicrafts"];
// Seasonal tours: shown in the menu and on their own page, but NOT bookable
// and shown without a price (badge + note instead). Never offered in the
// hero SearchBar options or as a second tour in AddToBooking.
export const SEASONAL_TOURS: string[] = ['topkapi-night'];
export const TOURS: Record<string, TourDef> = {
 "hagia-sophia": {
  "img": "tour-hs-guided.webp",
  "content": {
   "en": {
    "name": "Hagia Sophia Tour",
    "tagline": "One hour inside the great church-mosque, with the guide who knows it best.",
    "intro": "Built in 537 as the world's greatest cathedral, Hagia Sophia was the spiritual heart of Byzantium for nearly a thousand years before becoming an Ottoman imperial mosque. Its vast dome and golden mosaics still leave visitors speechless.",
    "duration": "1 hour",
    "group": "Private group, up to 8 guests",
    "desc": "Hagia Sophia with a private licensed guide for your party only — the great dome, the Upper Gallery mosaics and the Deësis, explained by a Byzantine and Ottoman specialist with 32 years in Sultanahmet. Add the skip-the-line entrance ticket below with one click, or bring your own. After the tour you are free to stay inside until closing time.",
    "included": [
     "Private licensed guide for your party only",
     "Flexible start time, arranged with your guide",
     "Stay inside after the tour until closing time"
    ],
    "not_included": [
     "Entrance ticket — add it below, or buy your own",
     "Hotel pickup and drop-off",
     "Gratuities"
    ],
    "note": "One price per group of up to 8 guests. Children aged 0–6 enter free — please bring a valid passport for them."
   },
   "de": {
    "name": "Hagia-Sophia-Tour",
    "tagline": "Eine Stunde in der großen Kirchenmoschee — mit dem Guide, der sie am besten kennt.",
    "intro": "537 als größte Kathedrale der Welt erbaut, war die Hagia Sophia fast tausend Jahre das geistige Herz von Byzanz, bevor sie zur osmanischen Kaisermoschee wurde. Ihre gewaltige Kuppel und die goldenen Mosaike lassen Besucher bis heute staunen.",
    "duration": "1 Stunde",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Die Hagia Sophia mit einem privaten, lizenzierten Guide nur für Ihre Gruppe — die große Kuppel, die Mosaiken der Oberen Galerie und die Deësis, erklärt von einem Byzanz- und Osmanen-Spezialisten mit 32 Jahren Erfahrung in Sultanahmet. Fügen Sie unten mit einem Klick das Eintrittsticket ohne Anstehen hinzu oder bringen Sie Ihr eigenes mit. Nach der Tour können Sie bis zur Schließung im Inneren bleiben.",
    "included": [
     "Privater lizenzierter Guide nur für Ihre Gruppe",
     "Flexibler Beginn, mit Ihrem Guide abgestimmt",
     "Nach der Tour bis zur Schließung bleiben"
    ],
    "not_included": [
     "Eintrittsticket — unten hinzufügen oder selbst kaufen",
     "Hotelabholung und Rücktransfer",
     "Trinkgelder"
    ],
    "note": "Ein Preis pro Gruppe von bis zu 8 Gästen. Kinder von 0–6 Jahren haben freien Eintritt — bitte bringen Sie einen gültigen Reisepass für sie mit."
   },
   "zh": {
    "name": "圣索菲亚大教堂之旅",
    "tagline": "在这座伟大的教堂-清真寺内参观一小时，由最了解它的导游为您讲解。",
    "intro": "圣索菲亚大教堂建于 537 年，曾是世界上最大的教堂，近千年间一直是拜占庭的精神中心，后来成为奥斯曼帝国清真寺。它宏伟的穹顶和金色镶嵌画至今仍令游客叹为观止。",
    "duration": "1 小时",
    "group": "私人团，最多 8 人",
    "desc": "由私人持证导游专为您的团队讲解圣索菲亚大教堂——宏伟的穹顶、上层画廊的镶嵌画与《代伊西斯》，由一位在苏丹艾哈迈德区执业 32 年的拜占庭与奥斯曼文化专家为您解读。在下方一键添加免排队门票，或自备门票。导览结束后，您可以继续停留在馆内直至闭馆。",
    "included": [
     "专为您的团队服务的私人持证导游",
     "开始时间灵活，与导游协商",
     "导览结束后可停留至闭馆"
    ],
    "not_included": [
     "门票——可在下方添加，或自行购买",
     "酒店接送",
     "小费"
    ],
    "note": "每组一个价格，最多 8 人。0–6 岁儿童免费入场——请携带其有效护照。"
   },
   "tr": {
    "name": "Ayasofya Turu",
    "tagline": "Lisanslı rehberinizle Üst Galeri'de bir saat — tüm hikâyesiyle.",
    "intro": "537 yılında dünyanın en büyük katedrali olarak inşa edilen Ayasofya, yaklaşık bin yıl Bizans'ın ruhani kalbi oldu, sonra Osmanlı'nın en önemli camisine dönüştü. Devasa kubbesi ve altın mozaikleri bugün hâlâ görenleri büyülüyor.",
    "duration": "1 saat",
    "group": "Özel grup, en fazla 8 kişi",
    "desc": "Rehberiniz sizi bilet gişesinin yanındaki buluşma noktasında karşılar ve Üst Galeri'ye götürür: İmparator Locası, VI. Leon mozaiği, Viking grafitisi ve kubbenin 55 metreden süzülen ışığı. Turdan sonra kapanış saatine kadar içeride kalabilirsiniz.",
    "included": [
     "Lisanslı uzman rehber",
     "Özel grup — en fazla 8 kişi",
     "Tur sonrası kapanışa kadar içeride kalma"
    ],
    "not_included": [
     "Giriş bileti (isterseniz aşağıdan ekleyin)",
     "Otelden alma ve bırakma",
     "Bahşişler"
    ],
    "note": "Turu rezerve edin; biletlerinizi de isterseniz ekleyin — hızlı giriş bileti kişi başı normal fiyat + €2,50'dir."
   }
  }
 },
 "topkapi-palace": {
  "img": "tour-topkapi-private.webp",
  "content": {
   "en": {
    "name": "Topkapi Palace Tour",
    "tagline": "The palace and the Harem with your own private guide.",
    "intro": "For nearly 400 years Topkapi Palace was the home of the Ottoman sultans and the seat of their government. Behind its gates lie the Imperial Treasury, the sacred relics, and the Harem — a small city of courtyards, kiosks and secrets above the Bosphorus.",
    "duration": "2 hours",
    "group": "Private group, up to 8 guests",
    "desc": "A private tour of Topkapi Palace and its Harem with a licensed guide. Walk the courtyards, the treasury and the Harem quarters where the Ottoman sultans lived and ruled for nearly 400 years. Add the skip-the-line entrance ticket below with one click, or bring your own.",
    "included": [
     "Private licensed live guide",
     "Harem section included in the tour route"
    ],
    "not_included": [
     "Entrance ticket — add it below, or buy your own",
     "Hotel pickup and drop-off",
     "Gratuities"
    ],
    "note": "One price per group of up to 8 guests."
   },
   "de": {
    "name": "Topkapi-Palast-Tour",
    "tagline": "Der Palast und der Harem mit Ihrem eigenen privaten Guide.",
    "intro": "Fast 400 Jahre war der Topkapi-Palast Wohnsitz der osmanischen Sultane und Sitz der Regierung. Hinter seinen Toren warten die Schatzkammer, die heiligen Reliquien und der Harem — eine kleine Stadt aus Höfen, Kiosken und Geheimnissen über dem Bosporus.",
    "duration": "2 Stunden",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Eine private Führung durch den Topkapi-Palast und seinen Harem mit einem lizenzierten Guide. Spazieren Sie durch die Höfe, die Schatzkammer und die Haremsgemächer, in denen die osmanischen Sultane fast 400 Jahre lebten und regierten. Fügen Sie unten mit einem Klick das Eintrittsticket ohne Anstehen hinzu oder bringen Sie Ihr eigenes mit.",
    "included": [
     "Privater lizenzierter Live-Guide",
     "Harem-Bereich ist Teil der Tourroute"
    ],
    "not_included": [
     "Eintrittsticket — unten hinzufügen oder selbst kaufen",
     "Hotelabholung und Rücktransfer",
     "Trinkgelder"
    ],
    "note": "Ein Preis pro Gruppe von bis zu 8 Gästen."
   },
   "zh": {
    "name": "托普卡珀皇宫之旅",
    "tagline": "与您的私人导游参观皇宫与后宫。",
    "intro": "近 400 年来，托普卡帕宫一直是奥斯曼苏丹的居所和帝国政府的所在地。宫门之内有帝国宝库、神圣遗物和后宫——一座位于博斯普鲁斯海峡之上的庭院与秘密之城。",
    "duration": "2 小时",
    "group": "私人团，最多 8 人",
    "desc": "由持证导游带领的托普卡珀皇宫及后宫私人导览。漫步于庭院、珍宝馆和后宫——奥斯曼苏丹近 400 年生活与统治之地。在下方一键添加免排队门票，或自备门票。",
    "included": [
     "私人持证真人导游",
     "行程包含后宫区域"
    ],
    "not_included": [
     "门票——可在下方添加，或自行购买",
     "酒店接送",
     "小费"
    ],
    "note": "每组一个价格，最多 8 人。"
   },
   "tr": {
    "name": "Topkapı Sarayı Turu",
    "tagline": "İki saat boyunca saray avluları, Harem ve hazine daireleri.",
    "intro": "Topkapı Sarayı, yaklaşık 400 yıl boyunca Osmanlı sultanlarının evi ve devletin yönetim merkeziydi. Kapılarının ardında Hazine, kutsal emanetler ve sırlarla dolu Harem sizi bekliyor.",
    "duration": "2 saat",
    "group": "Özel grup, en fazla 8 kişi",
    "desc": "Rehberinizle sarayın dört avlusunu gezin: Bab-ı Hümayun, mutfaklar ve porselenler, Silahlar Bölümü, Hazine ve Harem (ana bilet dahilse). Kalabalığı atlatmak için en sakin giriş saatini seçiyoruz.",
    "included": [
     "Lisanslı uzman rehber",
     "Özel grup — en fazla 8 kişi",
     "Sizin temponuza göre esnek rota"
    ],
    "not_included": [
     "Giriş bileti (isterseniz aşağıdan ekleyin)",
     "Otelden alma ve bırakma",
     "Bahşişler"
    ],
    "note": "Turu rezerve edin; biletlerinizi de isterseniz ekleyin — hızlı giriş bileti kişi başı normal fiyat + €2,50'dir."
   }
  }
 },
 "basilica-cistern": {
  "img": "tour-cistern.webp",
  "content": {
   "en": {
    "name": "Basilica Cistern Tour",
    "tagline": "The underground palace of columns, Medusa heads and still water.",
    "intro": "Hidden beneath the streets of Sultanahmet, this vast underground water palace was built by Emperor Justinian in the 6th century. Walk between 336 marble columns rising from the water — and find the two mysterious Medusa heads.",
    "duration": "45 minutes",
    "group": "Private group, up to 8 guests",
    "desc": "Descend into Justinian's great underground cistern — 336 marble columns rising from the water, the famous Medusa heads, and one of the most atmospheric places in Istanbul. Your private guide brings the Byzantine engineering and the legends to life in 45 minutes. Add the skip-the-line entrance ticket below with one click, or bring your own.",
    "included": [
     "Private licensed live guide"
    ],
    "not_included": [
     "Entrance ticket — add it below, or buy your own",
     "Hotel pickup and drop-off",
     "Gratuities"
    ],
    "note": "One price per group of up to 8 guests."
   },
   "de": {
    "name": "Basilika-Zisterne-Tour (Yerebatan)",
    "tagline": "Der unterirdische Palast aus Säulen, Medusenhäuptern und stillem Wasser.",
    "intro": "Verborgen unter den Straßen von Sultanahmet liegt diese riesige unterirdische Wasserkathedrale, erbaut im 6. Jahrhundert von Kaiser Justinian. Gehen Sie zwischen 336 Marmorsäulen, die aus dem Wasser ragen — und finden Sie die zwei geheimnisvollen Medusenhäupter.",
    "duration": "45 Minuten",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Steigen Sie hinab in Justinians große unterirdische Zisterne — 336 Marmorsäulen, die aus dem Wasser ragen, die berühmten Medusenhäupter und einer der stimmungsvollsten Orte Istanbuls. Ihr privater Guide erweckt die byzantinische Ingenieurskunst und die Legenden in 45 Minuten zum Leben. Fügen Sie unten mit einem Klick das Eintrittsticket ohne Anstehen hinzu oder bringen Sie Ihr eigenes mit.",
    "included": [
     "Privater lizenzierter Live-Guide"
    ],
    "not_included": [
     "Eintrittsticket — unten hinzufügen oder selbst kaufen",
     "Hotelabholung und Rücktransfer",
     "Trinkgelder"
    ],
    "note": "Ein Preis pro Gruppe von bis zu 8 Gästen."
   },
   "zh": {
    "name": "地下水宫之旅",
    "tagline": "由石柱、美杜莎头像与静水组成的地下宫殿。",
    "intro": "这座巨大的地下蓄水池隐藏在苏丹艾哈迈德的街道之下，由查士丁尼皇帝于 6 世纪建造。在 336 根从水中升起的大理石柱之间漫步，寻找两颗神秘的美杜莎头像。",
    "duration": "45 分钟",
    "group": "私人团，最多 8 人",
    "desc": "走进查士丁尼大帝的地下蓄水池——336 根大理石柱从水中升起，著名的美杜莎头像，这里是伊斯坦布尔最具氛围感的地方之一。您的私人导游将在 45 分钟内为您讲述拜占庭工程与传说。在下方一键添加免排队门票，或自备门票。",
    "included": [
     "私人持证真人导游"
    ],
    "not_included": [
     "门票——可在下方添加，或自行购买",
     "酒店接送",
     "小费"
    ],
    "note": "每组一个价格，最多 8 人。"
   },
   "tr": {
    "name": "Yerebatan Sarnıcı Turu",
    "tagline": "Medusa başlarının ve yeraltı sarayının 45 dakikalık hikâyesi.",
    "intro": "Sultanahmet'in sokaklarının altında saklı bu dev yeraltı sarnıcı, 6. yüzyılda İmparator Justinianus tarafından yaptırıldı. Suyun içinden yükselen 336 mermer sütunun arasında yürüyün ve iki gizemli Medusa başını bulun.",
    "duration": "45 dakika",
    "group": "Özel grup, en fazla 8 kişi",
    "desc": "Bizans'ın en büyük sarnıcına inin: 336 sütun, iki Medusa başı ve suda yüzen balıkların sessizliği. Rehberiniz sarnıcın neden ve nasıl yapıldığını ve hangi filmlerde göründüğünü anlatır.",
    "included": [
     "Lisanslı uzman rehber",
     "Özel grup — en fazla 8 kişi"
    ],
    "not_included": [
     "Giriş bileti (isterseniz aşağıdan ekleyin)",
     "Otelden alma ve bırakma"
    ],
    "note": "Turu rezerve edin; biletlerinizi de isterseniz ekleyin — hızlı giriş bileti kişi başı normal fiyat + €2,50'dir."
   }
  }
 },
 "sultanahmet-hippodrome": {
  "img": "tour-bluemosque.webp",
  "meeting": {
   "en": "In front of the Four Seasons Hotel, Sultanahmet",
   "de": "Vor dem Four Seasons Hotel, Sultanahmet",
   "zh": "苏丹艾哈迈德区四季酒店门前",
   "tr": "Sultanahmet'teki Four Seasons Oteli önü"
  },
  "content": {
   "en": {
    "name": "Sultanahmet & Hippodrome Tour",
    "tagline": "The Blue Mosque and the ancient Hippodrome, where the city began.",
    "intro": "The Hippodrome was the beating heart of Byzantine Constantinople, where emperors watched chariot races with 100,000 spectators. Today the Egyptian Obelisk, the Serpent Column and the German Fountain still stand in the square beside the Blue Mosque.",
    "duration": "About 45 minutes",
    "group": "Private group, up to 8 guests",
    "desc": "A short, rich walk through the heart of old Constantinople: the Sultanahmet (Blue) Mosque with its six minarets and İznik tiles, and the Hippodrome — the Egyptian Obelisk, the Serpent Column and the German Fountain — with the stories of the empire that built them. There is no entrance ticket for this tour; the mosque entry is free. We meet in front of the Four Seasons Hotel in Sultanahmet.",
    "included": [
     "Private licensed live guide",
     "Blue Mosque entry — free"
    ],
    "not_included": [
     "Hotel pickup and drop-off",
     "Gratuities"
    ],
    "note": "Modest dress is required for the mosque. Meeting point: in front of the Four Seasons Hotel, Sultanahmet."
   },
   "de": {
    "name": "Sultanahmet & Hippodrom-Tour",
    "tagline": "Die Blaue Moschee und das antike Hippodrom — wo die Stadt begann.",
    "intro": "Das Hippodrom war das schlagende Herz des byzantinischen Konstantinopel, wo Kaiser vor 100.000 Zuschauern Wagenrennen sahen. Heute stehen der Ägyptische Obelisk, die Schlangensäule und der Deutsche Brunnen noch immer auf dem Platz neben der Blauen Moschee.",
    "duration": "Etwa 45 Minuten",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Ein kurzer, reicher Spaziergang durch das Herz des alten Konstantinopel: die Sultanahmet-Moschee (Blaue Moschee) mit ihren sechs Minaretten und İznik-Fliesen und das Hippodrom — der Ägyptische Obelisk, die Schlangensäule und der Deutsche Brunnen — mit den Geschichten des Reiches, das sie erbaute. Für diese Tour gibt es kein Eintrittsticket; der Moscheeeintritt ist frei. Treffpunkt ist vor dem Four Seasons Hotel in Sultanahmet.",
    "included": [
     "Privater lizenzierter Live-Guide",
     "Eintritt in die Blaue Moschee — kostenlos"
    ],
    "not_included": [
     "Hotelabholung und Rücktransfer",
     "Trinkgelder"
    ],
    "note": "Für die Moschee ist angemessene Kleidung erforderlich. Treffpunkt: vor dem Four Seasons Hotel, Sultanahmet."
   },
   "zh": {
    "name": "苏丹艾哈迈德与竞技场之旅",
    "tagline": "蓝色清真寺与古竞技场——这座城市开始的地方。",
    "intro": "竞技场曾是拜占庭君士坦丁堡的心脏，皇帝们曾在此与十万名观众一起观看战车比赛。如今，埃及方尖碑、蛇柱和德国喷泉仍矗立在蓝色清真寺旁的广场上。",
    "duration": "约 45 分钟",
    "group": "私人团，最多 8 人",
    "desc": "一次短暂而丰富的漫步，穿越古君士坦丁堡的心脏：拥有六座宣礼塔与伊兹尼克瓷砖的苏丹艾哈迈德清真寺（蓝色清真寺），以及竞技场——埃及方尖碑、蛇柱与德国喷泉——并聆听建造它们的帝国的故事。本行程无需门票；清真寺免费入场。我们在苏丹艾哈迈德区四季酒店门前集合。",
    "included": [
     "私人持证真人导游",
     "蓝色清真寺入场——免费"
    ],
    "not_included": [
     "酒店接送",
     "小费"
    ],
    "note": "进入清真寺需着装得体。集合点：苏丹艾哈迈德区四季酒店门前。"
   },
   "tr": {
    "name": "Sultanahmet ve Hipodrom Turu",
    "tagline": "Sultanahmet Camii ve antik Hipodrom — meydanın tamamı 45 dakikada.",
    "intro": "Hippodrom, Bizans Konstantinopolis'inin kalbiydi; imparatorlar burada 100.000 seyirciyle araba yarışlarını izlerdi. Bugün Mısır Dikilitaşı, Yılanlı Sütun ve Alman Çeşmesi, Sultanahmet Camii'nin yanında hâlâ ayakta.",
    "duration": "Yaklaşık 45 dakika",
    "group": "Özel grup, en fazla 8 kişi",
    "desc": "Buluşma: Sultanahmet'teki Four Seasons Oteli'nin önü. Oradan Sultanahmet Camii'ne (altı minare, 20.000'den fazla İznik çinisi) ve antik Hipodrom'a yürüyoruz: Dikilitaş, Yılanlı Sütun ve Alman Çeşmesi. Bu tur için bilet gerekmez.",
    "included": [
     "Lisanslı uzman rehber",
     "Özel grup — en fazla 8 kişi",
     "Bilet gerekmez — tüm duraklar ücretsiz"
    ],
    "not_included": [
     "Otelden alma ve bırakma",
     "Bahşişler"
    ],
    "note": "Buluşma noktası: Sultanahmet Four Seasons Oteli önü."
   }
  }
 },
 "full-day-istanbul": {
  "img": "tour-istanbul-day.webp",
  "meeting": {
   "en": "Arranged with your guide when you book",
   "de": "Wird bei der Buchung mit Ihrem Guide vereinbart",
   "zh": "预订时与导游商定",
   "tr": "Rezervasyonda rehberinizle kararlaştırılır"
  },
  "content": {
   "en": {
    "name": "Full-Day Istanbul City Tour",
    "tagline": "A full day, built around what you want to see.",
    "intro": "One day, the whole story of Istanbul: from Byzantium to the Ottomans, at your pace with your private guide. Hagia Sophia, Topkapi, the Cistern and the Hippodrome — the city's greatest sights woven into a single route.",
    "duration": "Up to 6 hours (full day)",
    "group": "Private group, up to 8 guests",
    "desc": "One private guide for a full day, and an itinerary built around you. The classic route links Hagia Sophia, the Blue Mosque, the Hippodrome, Topkapi Palace and the Grand Bazaar — or the day goes wherever your interests lead. You decide the route together with your guide when you meet and during the day.",
    "included": [
     "Private licensed guide for up to 6 hours",
     "Fully flexible itinerary, decided with your guide on the day"
    ],
    "not_included": [
     "Entrance tickets",
     "Food and drinks",
     "Transport",
     "Personal expenses"
    ],
    "note": "One price per group of up to 8 guests."
   },
   "de": {
    "name": "Ganztägige Istanbul-Stadttour",
    "tagline": "Ein ganzer Tag, gebaut um das, was Sie sehen möchten.",
    "intro": "Ein Tag, die ganze Geschichte Istanbuls: von Byzanz zu den Osmanen, in Ihrem Tempo mit Ihrem privaten Guide. Hagia Sophia, Topkapi, die Zisterne und das Hippodrom — die größten Sehenswürdigkeiten der Stadt auf einer Route.",
    "duration": "Bis zu 6 Stunden (ganzer Tag)",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Ein privater Guide für einen ganzen Tag und eine Route, die sich ganz nach Ihnen richtet. Die klassische Route verbindet Hagia Sophia, Blaue Moschee, Hippodrom, Topkapi-Palast und den Großen Basar — oder der Tag führt Sie, wohin Ihre Interessen Sie ziehen. Die Route entscheiden Sie gemeinsam mit Ihrem Guide beim Treffen und im Laufe des Tages.",
    "included": [
     "Privater lizenzierter Guide für bis zu 6 Stunden",
     "Vollständig flexible Route, am Tag selbst mit Ihrem Guide entschieden"
    ],
    "not_included": [
     "Eintrittstickets",
     "Essen und Getränke",
     "Transport",
     "Persönliche Ausgaben"
    ],
    "note": "Ein Preis pro Gruppe von bis zu 8 Gästen."
   },
   "zh": {
    "name": "伊斯坦布尔全日城市之旅",
    "tagline": "一整天，围绕您想看的景点安排。",
    "intro": "一天读完伊斯坦布尔的全部故事：从拜占庭到奥斯曼，由您的私人导游把握节奏。圣索菲亚、托普卡帕宫、地下水宫和竞技场——这座城市最伟大的景点，一条路线全部串联。",
    "duration": "最长 6 小时（全天）",
    "group": "私人团，最多 8 人",
    "desc": "一位私人导游陪伴一整天，行程围绕您而定。经典路线串联圣索菲亚大教堂、蓝色清真寺、竞技场、托普卡珀皇宫和大巴扎——或者这一天完全由您的兴趣决定。见面时以及当天行程中，您都可以与导游一起决定路线。",
    "included": [
     "最长 6 小时的私人持证导游",
     "完全灵活的行程，当天与导游共同决定"
    ],
    "not_included": [
     "门票",
     "餐饮",
     "交通",
     "个人开支"
    ],
    "note": "每组一个价格，最多 8 人。"
   },
   "tr": {
    "name": "Tam Gün İstanbul Turu",
    "tagline": "Altı saate kadar özel gününüz — rota aynı gün rehberinizle birlikte belirlenir.",
    "intro": "Bir günde İstanbul'un bütün hikâyesi: Bizans'tan Osmanlı'ya, temponuzu özel rehberiniz belirler. Ayasofya, Topkapı, Yerebatan ve Hippodrom — şehrin en büyük eserleri tek bir rotada.",
    "duration": "En fazla 6 saat",
    "group": "Özel grup, en fazla 8 kişi",
    "desc": "Şehri kendi temponuzda gezin: rehberiniz günün rotasını sizinle birlikte çizer — Ayasofya, Topkapı, Yerebatan, Kapalıçarşı ve Boğaz kıyısı arasından seçim sizin. Biletler, yemek, içecek, ulaşım ve kişisel harcamalar dahil değildir; rehberiniz her durakta en hızlı girişi ve en doğru sırayı ayarlar.",
    "included": [
     "6 saate kadar lisanslı uzman rehber",
     "Özel grup — en fazla 8 kişi",
     "Günün akışına göre esnek rota"
    ],
    "not_included": [
     "Giriş biletleri",
     "Yemek ve içecekler",
     "Ulaşım",
     "Kişisel harcamalar"
    ],
    "note": "Biletler dahil değildir — hangi duraklarda bilet gerektiğini rehberiniz gün içinde söyler; isterseniz biletleri diğer turlarımızdan da ekleyebilirsiniz."
   }
  }
 },
 "half-day-istanbul": {
  "img": "tour-hs-private.webp",
  "meeting": {
   "en": "Arranged with your guide when you book",
   "de": "Wird bei der Buchung mit Ihrem Guide vereinbart",
   "zh": "预订时与导游商定",
   "tr": "Rezervasyonda rehberinizle kararlaştırılır"
  },
  "content": {
   "en": {
    "name": "Half-Day Istanbul City Tour",
    "tagline": "The Old City essentials in three hours.",
    "intro": "Three hours in the heart of the Old City: Hagia Sophia, the Blue Mosque and the Hippodrome with your private guide — Istanbul's essential route at an easy pace.",
    "duration": "3 hours (half day)",
    "group": "Private group, up to 8 guests",
    "desc": "A private guide for three hours in the Sultanahmet district. The classic route links Hagia Sophia, the Blue Mosque and the Hippodrome, and the route can flex around what you want to see most. You decide the details together with your guide when you meet.",
    "included": [
     "Private licensed guide for 3 hours",
     "Flexible Old City route, decided with your guide on the day"
    ],
    "not_included": [
     "Entrance tickets",
     "Food and drinks",
     "Transport",
     "Personal expenses"
    ],
    "note": "One price per group of up to 8 guests."
   },
   "de": {
    "name": "Halbtägige Istanbul-Stadttour",
    "tagline": "Die Höhepunkte der Altstadt in drei Stunden.",
    "intro": "Drei Stunden im Herzen der Altstadt: Hagia Sophia, Blaue Moschee und Hippodrom mit Ihrem privaten Guide — Istanbuls wichtigste Route in entspanntem Tempo.",
    "duration": "3 Stunden (halber Tag)",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Ein privater Guide für drei Stunden im Sultanahmet-Viertel. Die klassische Route verbindet Hagia Sophia, Blaue Moschee und Hippodrom, und die Route richtet sich flexibel nach dem, was Sie am meisten sehen möchten. Die Details entscheiden Sie gemeinsam mit Ihrem Guide beim Treffen.",
    "included": [
     "Privater lizenzierter Guide für 3 Stunden",
     "Flexible Altstadt-Route, am Tag selbst mit Ihrem Guide entschieden"
    ],
    "not_included": [
     "Eintrittstickets",
     "Essen und Getränke",
     "Transport",
     "Persönliche Ausgaben"
    ],
    "note": "Ein Preis pro Gruppe von bis zu 8 Gästen."
   },
   "zh": {
    "name": "伊斯坦布尔半日城市之旅",
    "tagline": "三小时走完老城精华。",
    "intro": "三小时，老城核心：圣索菲亚、蓝色清真寺和竞技场，由您的私人导游陪同——伊斯坦布尔最经典的路线，节奏轻松。",
    "duration": "3 小时（半天）",
    "group": "私人团，最多 8 人",
    "desc": "一位私人导游，在苏丹艾哈迈德区陪伴您三小时。经典路线串联圣索菲亚大教堂、蓝色清真寺和竞技场，行程也可根据您最想看的景点灵活调整。见面时，您与导游一起决定细节。",
    "included": [
     "3 小时的私人持证导游",
     "灵活的老城行程，当天与导游共同决定"
    ],
    "not_included": [
     "门票",
     "餐饮",
     "交通",
     "个人开支"
    ],
    "note": "每组一个价格，最多 8 人。"
   },
   "tr": {
    "name": "Yarım Gün İstanbul Turu",
    "tagline": "Tarihi Yarımada'nın özü üç saatte.",
    "intro": "Üç saat, Tarihi Yarımada'nın kalbi: Ayasofya, Sultanahmet Camii ve Hippodrom özel rehberinizle — İstanbul'un en temel rotası, rahat bir tempoda.",
    "duration": "3 saat (yarım gün)",
    "group": "Özel grup, en fazla 8 kişi",
    "desc": "Sultanahmet'te üç saat boyunca özel rehber. Klasik rota Ayasofya, Sultanahmet Camii ve Hippodrom'u birbirine bağlar; rota, en çok görmek istediklerinize göre esneyebilir. Ayrıntıları buluştuğunuzda rehberinizle birlikte kararlaştırırsınız.",
    "included": [
     "3 saat özel lisanslı rehber",
     "Esnek Tarihi Yarımada rotası, aynı gün rehberinizle belirlenir"
    ],
    "not_included": [
     "Giriş biletleri",
     "Yiyecek ve içecekler",
     "Ulaşım",
     "Kişisel harcamalar"
    ],
    "note": "En fazla 8 kişilik grup için tek fiyat."
   }
  }
 },
 "bazaars-tour": {
  "img": "tour-bazaars.webp",
  "content": {
   "en": {
    "name": "Grand Bazaar & Spice Bazaar",
    "tagline": "Two legendary markets, with a guide who knows how they work.",
    "intro": "The Grand Bazaar is one of the oldest covered markets on earth — 61 streets and more than 4,000 shops, trading since 1461. A few minutes away, the Spice Bazaar fills the air with saffron, Turkish delight and freshly ground coffee.",
    "duration": "2.5–4 hours, depending on your pace",
    "group": "Private group, up to 8 guests",
    "desc": "A guided walk through the Grand Bazaar — one of the world's oldest covered markets — and the Spice Bazaar, with your guide explaining how to read quality, how bargaining works, and which workshops still produce by hand.",
    "included": [
     "Private licensed live guide"
    ],
    "not_included": [
     "Personal shopping",
     "Food and drinks",
     "Hotel pickup and drop-off"
    ],
    "note": "One price per group of up to 8 guests. Duration depends on your pace and shopping."
   },
   "de": {
    "name": "Großer Basar & Gewürzbasar",
    "tagline": "Zwei legendäre Märkte — mit einem Guide, der weiß, wie sie funktionieren.",
    "intro": "Der Große Basar ist einer der ältesten überdachten Märkte der Welt — 61 Straßen und über 4.000 Geschäfte, Handel seit 1461. Wenige Minuten entfernt füllt der Gewürzbasar die Luft mit Safran, Lokum und frisch gemahlenem Kaffee.",
    "duration": "2,5–4 Stunden, je nach Ihrem Tempo",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Ein geführter Spaziergang durch den Großen Basar — einen der ältesten überdachten Märkte der Welt — und den Gewürzbasar. Ihr Guide erklärt Ihnen, wie man Qualität erkennt, wie das Handeln funktioniert und welche Werkstätten noch von Hand produzieren.",
    "included": [
     "Privater lizenzierter Live-Guide"
    ],
    "not_included": [
     "Persönliche Einkäufe",
     "Essen und Getränke",
     "Hotelabholung und Rücktransfer"
    ],
    "note": "Ein Preis pro Gruppe von bis zu 8 Gästen. Die Dauer hängt von Ihrem Tempo und Ihren Einkäufen ab."
   },
   "zh": {
    "name": "大巴扎与香料市场",
    "tagline": "两个传奇市场，由一位深谙其道的导游为您讲解。",
    "intro": "大巴扎是世界上最古老的有顶市场之一——61 条街道、4000 多家店铺，自 1461 年以来贸易不断。几分钟外的香料巴扎则弥漫着藏红花、土耳其软糖和现磨咖啡的香气。",
    "duration": "2.5–4 小时，取决于您的节奏",
    "group": "私人团，最多 8 人",
    "desc": "在导游带领下漫步大巴扎——世界上最古老的有顶市场之一——以及香料市场。导游会为您讲解如何辨别品质、如何讨价还价，以及哪些作坊仍在手工制作。",
    "included": [
     "私人持证真人导游"
    ],
    "not_included": [
     "个人购物",
     "餐饮",
     "酒店接送"
    ],
    "note": "每组一个价格，最多 8 人。时长取决于您的节奏与购物时间。"
   },
   "tr": {
    "name": "Kapalıçarşı ve Mısır Çarşısı Turu",
    "tagline": "İki tarihi çarşı, tek tur — 2,5 ila 4 saat arasında pazarlık ve keşif.",
    "intro": "Kapalıçarşı, 1461'den beri ticaretin sürdüğü, dünyanın en eski kapalı çarşılarından biri: 61 sokak, 4.000'den fazla dükkân. Birkaç dakika ötede Mısır Çarşısı; safran, lokum ve taze kahve kokularıyla dolu.",
    "duration": "2,5–4 saat",
    "group": "Özel grup, en fazla 8 kişi",
    "desc": "Dünyanın en eski kapalı çarşısından başlayın: kuyumcular, halıcılar, antikacılar ve 4.000 dükkân. Sonra Mısır Çarşısı'na inin — baharatlar, lokumlar ve 17. yüzyıldan kalan kokular. Rehberiniz sizi gerçek ustaların dükkânlarına götürür, pazarlıkta yanınızda olur.",
    "included": [
     "Lisanslı uzman rehber",
     "Özel grup — en fazla 8 kişi",
     "Güvenilir usta dükkânlarına yönlendirme"
    ],
    "not_included": [
     "Alışveriş harcamalarınız",
     "Otelden alma ve bırakma"
    ],
    "note": "Süre, grubun temposuna göre 2,5–4 saat arasında değişir."
   }
  }
 },
 "bosphorus-yacht": {
  "img": "tour-bosphorus-yacht.webp",
  "content": {
   "en": {
    "name": "Private Bosphorus Yacht Tour",
    "tagline": "Two hours on the water between two continents — for your group only.",
    "intro": "The Bosphorus is Istanbul's true main street — palaces, fortresses and wooden mansions line its shores where two continents meet. From the water you see the city the way sultans did: domes and minarets sliding past, bridge to bridge.",
    "duration": "2 hours",
    "group": "Private group, up to 8 guests",
    "desc": "Your own private yacht on the Bosphorus for two hours: palaces, waterfront mansions and the bridges between Europe and Asia, with your licensed guide on board. Choose the standard yacht, or the luxury yacht with drinks included.",
    "included": [
     "Private yacht for 2 hours",
     "Captain and crew",
     "Luxury class: drinks included"
    ],
    "not_included": [
     "Transport to and from the pier",
     "Gratuities"
    ],
    "note": "Choose your yacht class when you book: standard or luxury (drinks included)."
   },
   "de": {
    "name": "Private Bosporus-Yachttour",
    "tagline": "Zwei Stunden auf dem Wasser zwischen zwei Kontinenten — nur für Ihre Gruppe.",
    "intro": "Der Bosporus ist Istanbuls eigentliche Hauptstraße — Paläste, Festungen und Holzvillen säumen seine Ufer, wo zwei Kontinente sich treffen. Sehen Sie die Stadt wie die Sultane: Kuppeln und Minarette, die Brücke für Brücke vorüberziehen.",
    "duration": "2 Stunden",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Ihre eigene private Yacht auf dem Bosporus für zwei Stunden: Paläste, Ufervillen und die Brücken zwischen Europa und Asien — mit Ihrem lizenzierten Guide an Bord. Wählen Sie die Standard-Yacht oder die Luxus-Yacht mit inklusive Getränken.",
    "included": [
     "Private Yacht für 2 Stunden",
     "Kapitän und Crew",
     "Luxus-Klasse: Getränke inklusive"
    ],
    "not_included": [
     "Transfer zum und vom Anleger",
     "Trinkgelder"
    ],
    "note": "Wählen Sie Ihre Yacht-Klasse bei der Buchung: Standard oder Luxus (Getränke inklusive)."
   },
   "zh": {
    "name": "博斯普鲁斯海峡私人游艇之旅",
    "tagline": "在两大洲之间的水面上航行两小时——专属您的团队。",
    "intro": "博斯普鲁斯海峡是伊斯坦布尔真正的主街——两大洲在此交汇，宫殿、城堡和木制大宅沿岸排列。从水上看这座城市，就像苏丹们曾经看到的那样：一座座穹顶和宣礼塔从桥边滑过。",
    "duration": "2 小时",
    "group": "私人团，最多 8 人",
    "desc": "专属您的私人游艇，在博斯普鲁斯海峡航行两小时：宫殿、滨水豪宅与连接欧亚的桥梁，持证导游随船同行。您可以选择标准游艇，或含饮品的豪华游艇。",
    "included": [
     "2 小时私人游艇",
     "船长与船员",
     "豪华级：包含饮品"
    ],
    "not_included": [
     "往返码头的交通",
     "小费"
    ],
    "note": "预订时请选择游艇等级：标准或豪华（含饮品）。"
   },
   "tr": {
    "name": "Özel Boğaz Yat Turu",
    "tagline": "İki saatlik özel yat — standart veya içecekler dahil lüks seçenek.",
    "intro": "Boğaz, İstanbul'un asıl caddesidir; iki kıtanın buluştuğu kıyılarında saraylar, kaleler ve yalılar sıralanır. Şehri sultanların gördüğü gibi görün: köprüden köprüye kubbeler ve minareler.",
    "duration": "2 saat",
    "group": "Özel yat, en fazla 7–8 kişi",
    "desc": "Boğaz'ı kendi yatınızdan görün: Dolmabahçe, Çırağan, Ortaköy Camii, Rumeli Hisarı ve köprülerin altından geçiş. Standart yat €400; lüks yat €600 ve içecekler dahildir. Kalkış noktası rezervasyonda teyit edilir.",
    "included": [
     "2 saat özel yat",
     "Kaptan ve mürettebat",
     "Lüks seçenekte içecekler"
    ],
    "not_included": [
     "Standart seçenekte yiyecek ve içecekler",
     "Otele transfer"
    ],
    "note": "Fiyat yatın tamamı içindir (en fazla 7–8 kişi). Kalkış noktası rezervasyonda teyit edilir."
   }
  }
 },
 "topkapi-night": {
  "img": "tour-topkapi-night.webp",
  "content": {
   "en": {
    "name": "Topkapi Palace Night Tour",
    "tagline": "The palace after dark, in the silence of history",
    "intro": "When the crowds leave and the lights come on, Topkapi Palace changes completely. Ergin Karakoyun led the palace's very first Night Museum programme — and three years ago he started this night tour, the first of its kind.",
    "duration": "Evening",
    "group": "Guided group",
    "desc": "After we meet, we take a short walk through the Historic Peninsula so the palace's setting makes sense: the Hippodrome, the Blue Mosque and Hagia Sophia from outside, the German Fountain, the Hürrem Sultan Hamam and the Fountain of Ahmed III, all with expert narration. Then we enter Topkapi Palace and visit its most important sections, including the Harem, under the night lights — the world of the Ottoman dynasty, its government and Istanbul's unique history, told by a specialist.",
    "included": [
     "Guiding by Ergin Karakoyun, professional tourist guide and Byzantium–Ottoman history expert",
     "Personal audio-guide listening system for the tour",
     "Topkapi Palace Night Museum entrance ticket + Harem entrance ticket",
     "Reservation and entry organisation handled for you",
     "Welcome and treats at the Hürrem Sultan Hamamı Cafe as part of the welcome programme"
    ],
    "not_included": [
     "Transport to the meeting point",
     "Personal expenses"
    ],
    "note": "Seasonal programme: June to September. Bookings cannot be made yet — the season starts in June and the price will be announced then."
   },
   "de": {
    "name": "Topkapi-Palast Nachttour",
    "tagline": "Der Palast bei Nacht — in der Stille der Geschichte",
    "intro": "Wenn die Menschenmengen gehen und die Lichter angehen, verwandelt sich der Topkapi-Palast vollständig. Ergin Karakoyun führte das allererste Nachtmuseum-Programm des Palastes — und startete vor drei Jahren diese Nachttour, die erste ihrer Art.",
    "duration": "Abends",
    "group": "Geführte Gruppe",
    "desc": "Nach dem Treffen unternehmen wir einen kurzen Spaziergang über die Historische Halbinsel, damit die Lage des Palastes verständlich wird: das Hippodrom, die Blaue Moschee und die Hagia Sophia von außen, der Deutsche Brunnen, das Hürrem-Sultan-Hamam und der Ahmed-III.-Brunnen, alles mit fachkundiger Erklärung. Danach betreten wir den Topkapi-Palast und besuchen seine wichtigsten Bereiche einschließlich des Harems im Nachtlicht — die Welt der osmanischen Dynastie, ihrer Staatsführung und Istanbuls einzigartige Geschichte, erzählt von einem Spezialisten.",
    "included": [
     "Führung durch Ergin Karakoyun, professioneller Reiseleiter und Experte für byzantinisch-osmanische Geschichte",
     "Persönliches Audio-Guide-Hörsystem für die Tour",
     "Eintrittsticket Topkapi-Palast Nachtmuseum + Eintritt Harem",
     "Reservierung und Einlass werden für Sie organisiert",
     "Begrüßung und Bewirtung im Hürrem Sultan Hamamı Cafe im Rahmen des Begrüßungsprogramms"
    ],
    "not_included": [
     "Anfahrt zum Treffpunkt",
     "Persönliche Ausgaben"
    ],
    "note": "Saisonprogramm: Juni bis September. Eine Buchung ist noch nicht möglich — die Saison beginnt im Juni, der Preis wird dann bekannt gegeben."
   },
   "zh": {
    "name": "托普卡帕宫夜游",
    "tagline": "夜幕下的宫殿——在历史的寂静中",
    "intro": "当人群散去、灯光亮起，托普卡帕宫会完全变一个模样。Ergin Karakoyun 曾为宫殿首个夜间博物馆项目担任导览，并在三年前首创了这条夜游路线。",
    "duration": "夜间",
    "group": "导览团",
    "desc": "集合后，我们先在历史半岛短途步行，帮助您理解宫殿的历史与地理位置：竞技场、蓝色清真寺（外观）、圣索菲亚大教堂（外观）、德国喷泉、许蕾姆苏丹浴场和艾哈迈德三世喷泉，全程由专家讲解。随后进入托普卡帕宫，在夜色灯光下参观包括后宫在内的最重要区域——由专家为您讲述奥斯曼王朝的生活、国家治理和伊斯坦布尔独特的历史。",
    "included": [
     "由专业导游、拜占庭—奥斯曼历史专家 Ergin Karakoyun 全程导览",
     "全程个人导览收听系统（语音导览设备）",
     "托普卡帕宫夜间博物馆门票 + 后宫门票",
     "代为办理预约与入场手续",
     "在许蕾姆苏丹浴场咖啡厅举行的欢迎仪式及茶点招待"
    ],
    "not_included": [
     "前往集合点的交通",
     "个人消费"
    ],
    "note": "季节性项目：6 月至 9 月。目前尚无法预订——季节将于 6 月开始，价格届时公布。"
   },
   "tr": {
    "name": "Topkapı Sarayı Gece Turu",
    "tagline": "Tarihin sessizliğinde eşsiz bir Topkapı deneyimi",
    "intro": "Kalabalık çekilip ışıklar yandığında Topkapı Sarayı bambaşka bir yere dönüşür. Sarayın ilk Gece Müzeciliği programında rehberlik yapan Ergin Karakoyun, bu gece turunu 3 yıl önce ilk başlatan isimdir.",
    "duration": "Akşam",
    "group": "Rehberli grup",
    "desc": "Buluşmanın ardından, sarayın tarihî ve coğrafi konumunu daha iyi anlamak için kısa bir Tarihi Yarımada yürüyüşü yapıyoruz: Hipodrom, Sultanahmet Camii (dışarıdan), Alman Çeşmesi, Ayasofya (dışarıdan), Hürrem Sultan Hamamı ve III. Ahmet Çeşmesi uzman anlatımı eşliğinde tanıtılıyor. Ardından Topkapı Sarayı'na geçerek Harem dahil sarayın en önemli bölümlerini gece ışıkları altında ziyaret ediyor; Osmanlı hanedanının yaşamını, devlet yönetimini ve İstanbul'un eşsiz tarihini uzman anlatımıyla keşfediyoruz.",
    "included": [
     "Bizans–Osmanlı tarihi uzmanı, profesyonel turist rehberi Ergin Karakoyun eşliğinde rehberlik ve teknik destek",
     "Tur boyunca kullanılacak kişisel rehber dinleme sistemi (audio guide cihazı)",
     "Topkapı Sarayı Gece Müzeciliği giriş bileti + Harem Bölümü giriş bileti",
     "Rezervasyon ve giriş işlemlerinin organizasyonu",
     "Hürrem Sultan Hamamı Cafe'de gerçekleştirilen karşılama programı kapsamında karşılama ve ikramlar"
    ],
    "not_included": [
     "Buluşma noktasına ulaşım",
     "Kişisel harcamalar"
    ],
    "note": "Sezonluk program: Haziran–Eylül. Şimdilik rezervasyon yapılamıyor — sezon Haziran'da başlayacak, fiyat o zaman duyurulacak."
   }
  }
 },
 "traditional-handicrafts": {
  "img": "tour-carpet.webp",
  "content": {
   "en": {
    "name": "Traditional Turkish Handicrafts",
    "tagline": "Carpets and İznik tiles, made by families who gave their lives to the craft.",
    "intro": "Istanbul's traditional crafts live on in family workshops that have practised them for generations — hand-knotted carpets, İznik tiles and pottery painted by hand. Sit down with a Turkish coffee or tea and watch the masters at work, with no obligation to buy.",
    "duration": "About 30 minutes",
    "group": "Private group, up to 8 guests",
    "desc": "If you would like to buy a carpet or İznik tiles, we take you to traditional handicraft centres run by family businesses with 50 years of heritage and more, who have devoted their lives to this craft. Watch the weaving and the pottery being made, with Turkish coffee or tea on us. About 30 minutes — completely free.",
    "included": [
     "Handicraft centre visit with live demonstrations",
     "Turkish coffee or tea",
     "Completely free — no obligation to buy"
    ],
    "not_included": [
     "Anything you choose to buy"
    ],
    "note": "A free extra alongside your tour. The centre is chosen to suit your budget."
   },
   "de": {
    "name": "Traditionelles türkisches Kunsthandwerk",
    "tagline": "Teppiche und İznik-Fliesen von Familien, die ihr Leben diesem Handwerk gewidmet haben.",
    "intro": "Istanbuls traditionelles Handwerk lebt in Familienwerkstätten weiter, die es seit Generationen ausüben — handgeknüpfte Teppiche, İznik-Fliesen und handbemalte Keramik. Sehen Sie den Meistern bei einem türkischen Kaffee oder Tee zu, ganz ohne Kaufverpflichtung.",
    "duration": "Etwa 30 Minuten",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Wenn Sie einen Teppich oder İznik-Fliesen kaufen möchten, bringen wir Sie zu traditionellen Kunsthandwerkszentren von Familienbetrieben mit 50 Jahren Tradition und mehr, die ihr Leben diesem Handwerk gewidmet haben. Sehen Sie zu, wie gewebt und getöpfert wird — mit türkischem Kaffee oder Tee auf unsere Einladung. Etwa 30 Minuten — völlig kostenlos.",
    "included": [
     "Besuch eines Kunsthandwerkszentrums mit Live-Vorführungen",
     "Türkischer Kaffee oder Tee",
     "Völlig kostenlos — keine Kaufverpflichtung"
    ],
    "not_included": [
     "Alles, was Sie kaufen möchten"
    ],
    "note": "Ein kostenloses Extra zu Ihrer Tour. Das Zentrum wird passend zu Ihrem Budget gewählt."
   },
   "zh": {
    "name": "土耳其传统手工艺",
    "tagline": "地毯与伊兹尼克瓷砖，出自将一生奉献给这门手艺的家族之手。",
    "intro": "伊斯坦布尔的传统手工艺在世代经营的家族作坊中延续——手工编织地毯、伊兹尼克瓷砖和手绘陶器。喝一杯土耳其咖啡或茶，看大师们工作，绝无购买义务。",
    "duration": "约 30 分钟",
    "group": "私人团，最多 8 人",
    "desc": "如果您想购买地毯或伊兹尼克瓷砖，我们会带您前往由拥有 50 年以上传承的家族企业经营的传统手工艺中心——他们将一生奉献给了这门手艺。观看编织与陶艺制作的过程，并享用我们请您的土耳其咖啡或茶。约 30 分钟——完全免费。",
    "included": [
     "参观手工艺中心并观看现场演示",
     "土耳其咖啡或茶",
     "完全免费——无购买义务"
    ],
    "not_included": [
     "您选择购买的任何物品"
    ],
    "note": "作为行程的免费附加项。中心会根据您的预算选择。"
   },
   "tr": {
    "name": "Geleneksel Türk El Sanatları",
    "tagline": "Ücretsiz 30 dakikalık sunum — halı ve İznik çinilerinin ustalarından.",
    "intro": "İstanbul'un geleneksel el sanatları, kuşaklardır bu işi yapan aile atölyelerinde yaşıyor: el dokuması halılar, İznik çinileri ve elde boyanmış seramikler. Bir kahve ya da çay eşliğinde ustaları iş başında izleyin; satın alma zorunluluğu yok.",
    "duration": "Yaklaşık 30 dakika",
    "group": "Ücretsiz sunum",
    "desc": "Halı veya çini almak istiyorsanız, sizi bu işine yıllarını vermiş ailelerin ürettiği el sanatları merkezlerine götürüyoruz. Halı dokumacılığının ve İznik çini üretiminin nasıl yapıldığını ustalarından görün; kahve ve çay ikramımızdır. Merkezler en az 50 yıllık deneyime ve mirasa sahip aile işletmeleridir; mekân bütçenize göre seçilir.",
    "included": [
     "Ücretsiz sunum — yaklaşık 30 dakika",
     "Canlı halı dokuma ve çini yapımı gösterimi",
     "Kahve ve çay ikramı",
     "En az 50 yıllık aile işletmeleri"
    ],
    "not_included": [
     "Satın alma zorunluluğu yoktur"
    ],
    "note": "Bu sunum ücretsizdir — alışveriş tamamen sizin isteğinize bağlıdır."
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
  "hero_kicker": "BYZIST · Istanbul Old City",
  "hero_title": "Discover Istanbul with Ergin Karakoyun",
  "free": "Free",
  "add_ticket": "Add entrance tickets",
  "skip_note": "Skip-the-line tickets only: normal price + €2.50 per ticket.",
  "tickets_word": "ticket",
  "free_word": "Free",
  "details_link": "View details",
  "tickets_available": "Skip-the-line tickets available",
  "add_other": "Add another tour too",
  "tier_label": "Yacht Tier",
  "tier_standard": "Standard Yacht — €400 (2 hrs)",
  "tier_luxury": "Luxury Yacht — €600 (2 hrs, drinks included)",
  "hero_sub": "32 years of experience. One city. One guide.",
  "tours_title": "Istanbul Tours",
  "menu_word": "Menu",
  "menu_hint": "Select first: tour date, number of guests and tour language — then add your tours below. Ticket prices are calculated automatically.",
  "select_details": "Please select tour details",
  "grp_byzantine": "Byzantine Istanbul",
  "grp_ottoman": "Ottoman Istanbul",
  "grp_shopping": "Shopping & Handicrafts",
  "grp_bosphorus": "Bosphorus",
  "grp_fullday": "Full-Day Istanbul",
  "discover_title": "Meet your guide",
  "discover_sub": "Ergin Karakoyun, licensed heritage specialist · Est. 1994",
  "hero_topline": "From Constantinople to Istanbul",
  "footer_form": "Contact form",
  "form_title": "Contact Ergin",
  "form_sub": "Send a message — it reaches Ergin directly, and his email address is never shown.",
  "form_name": "Your name",
  "form_reach": "Your phone or email",
  "form_msg": "Your message",
  "form_send": "Send message",
  "form_note": "Delivered by email — no WhatsApp needed.",
  "form_sending": "Sending…",
  "form_sent": "Thank you — your message has been sent. Ergin will reply to the contact you gave.",
  "form_error": "Sorry, sending failed. Please try again.",
  "full_details": "Full details",
  "covered_full_day": "Already covered by your Full-Day tour",
  "fullday_note": "The Full-Day tour covers the single-site tours — adding it removes them from your booking automatically.",
  "skip_add": "Add skip-the-line ticket",
  "tours_sub": "Every tour is one flat price for your group (up to 8 people). Need entrance tickets? Add them per person when you book — always the skip-the-line ticket at the normal price + €2.50.",
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
  "view_on": "View on {platform}",
  "guide_short": "Your Guide",
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
  "meeting": "You will find us every day, 09:00–17:00, in front of the Four Seasons Hotel Istanbul at Sultanahmet, Tevkifhane Sk. No:1 — in the heart of the Old Town, a few minutes from Hagia Sophia and the Blue Mosque.",
  "meeting_label": "Meeting point",
  "phone_label": "WhatsApp / Phone",
  "email_label": "Email",
  "instagram_label": "Instagram",
  "footer_line": "BYZIST — Byzantine & Ottoman tours in Istanbul. Operated by Oligarch Tour, TÜRSAB licence No. 14988.",
    "legal_line": "Book direct here and get your confirmation personally on WhatsApp.",
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
  "tour_lang": "Tour language",
  "night_badge": "June – September · Bookings not open yet — starts in June",
  "who_is": "Who is Ergin Karakoyun?",
  "tabii_title": "As seen on TRT tabii",
  "tabii_text": "Ergin appears in TRT's tabii series 'Like a Dream: Istanbul' — guests ask him about it all the time. Tap the picture to watch it on tabii.",
  "tabii_bts": "Behind the scenes — Ergin in Episode 7, Büyükada",
  "chan_kicker": "Ergin's WhatsApp Channel",
  "chan_sub": "Before you visit, follow museums, mosques, visiting hours, closures and official announcements for the Historic Peninsula — straight from your guide.",
  "chan_btn": "Follow the channel",
  "tursab_text": "All tours are operated by Oligarch Tour, a member of TÜRSAB — the Association of Turkish Travel Agencies. Licence No. 14988.",
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
  "cc_search": "Search country or code",
  "cc_nomatch": "No match",
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
  "hero_kicker": "BYZIST · Istanbuls Altstadt",
  "hero_title": "Entdecken Sie Istanbul mit Ergin Karakoyun",
  "free": "Kostenlos",
  "add_ticket": "Eintrittstickets hinzufügen",
  "skip_note": "Nur Skip-the-Line-Tickets: Normalpreis + €2,50 pro Ticket.",
  "tickets_word": "Ticket",
  "free_word": "Kostenlos",
  "details_link": "Details ansehen",
  "tickets_available": "Skip-the-Line-Tickets verfügbar",
  "add_other": "Eine weitere Tour hinzufügen",
  "tier_label": "Yacht-Option",
  "tier_standard": "Standard-Yacht — 400 € (2 Std.)",
  "tier_luxury": "Luxus-Yacht — 600 € (2 Std., inkl. Getränke)",
  "hero_sub": "32 Jahre Erfahrung. Eine Stadt. Ein Guide.",
  "tours_title": "Istanbul-Touren",
  "menu_word": "Menü",
  "menu_hint": "Wählen Sie zuerst: Tourdatum, Gästezahl und Tour-Sprache — dann fügen Sie unten Ihre Touren hinzu. Ticketpreise werden automatisch berechnet.",
  "select_details": "Bitte wählen Sie die Tourdetails",
  "grp_byzantine": "Byzantinisches Istanbul",
  "grp_ottoman": "Osmanisches Istanbul",
  "grp_shopping": "Shopping & Handwerk",
  "grp_bosphorus": "Bosporus",
  "grp_fullday": "Ganztägiges Istanbul",
  "discover_title": "Lernen Sie Ihren Guide kennen",
  "discover_sub": "Ergin Karakoyun, lizenzierter Heritage-Spezialist · Est. 1994",
  "hero_topline": "Von Konstantinopel nach Istanbul",
  "footer_form": "Kontaktformular",
  "form_title": "Ergin kontaktieren",
  "form_sub": "Senden Sie eine Nachricht — sie erreicht Ergin direkt, und seine E-Mail-Adresse wird nie gezeigt.",
  "form_name": "Ihr Name",
  "form_reach": "Ihre Telefonnummer oder E-Mail",
  "form_msg": "Ihre Nachricht",
  "form_send": "Nachricht senden",
  "form_note": "Wird per E-Mail zugestellt — kein WhatsApp nötig.",
  "form_sending": "Wird gesendet…",
  "form_sent": "Vielen Dank — Ihre Nachricht wurde gesendet. Ergin antwortet an den von Ihnen angegebenen Kontakt.",
  "form_error": "Senden leider fehlgeschlagen. Bitte versuchen Sie es erneut.",
  "full_details": "Alle Details",
  "covered_full_day": "Bereits durch Ihre Ganztagestour abgedeckt",
  "fullday_note": "Die Ganztagestour umfasst die einzelnen Sehenswürdigkeiten — beim Hinzufügen werden sie automatisch aus Ihrer Buchung entfernt.",
  "skip_add": "Skip-the-Line-Ticket hinzufügen",
  "tours_sub": "Jede Tour hat einen Festpreis für Ihre Gruppe (bis 8 Personen). Eintrittstickets gefällig? Fügen Sie sie bei der Buchung pro Person hinzu — immer Skip-the-Line zum Normalpreis + €2,50.",
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
  "view_on": "Auf {platform} ansehen",
  "guide_short": "Ihr Guide",
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
  "meeting": "Sie finden uns täglich von 09:00 bis 17:00 Uhr vor dem Four Seasons Hotel Istanbul at Sultanahmet, Tevkifhane Sk. Nr. 1 — im Herzen der Altstadt, wenige Minuten von Hagia Sophia und Blauer Moschee.",
  "meeting_label": "Treffpunkt",
  "phone_label": "WhatsApp / Telefon",
  "email_label": "E-Mail",
  "instagram_label": "Instagram",
  "footer_line": "BYZIST — Byzanz- und Osmanen-Touren in Istanbul. Betrieben von Oligarch Tour, TÜRSAB-Lizenz Nr. 14988.",
    "legal_line": "Buchen Sie direkt hier und erhalten Sie Ihre Bestätigung persönlich per WhatsApp.",
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
  "tour_lang": "Tour-Sprache",
  "night_badge": "Juni – September · Buchung noch nicht möglich — Start im Juni",
  "who_is": "Wer ist Ergin Karakoyun?",
  "tabii_title": "Bekannt aus TRT tabii",
  "tabii_text": "Ergin ist in der tabii-Serie 'Like a Dream: Istanbul' von TRT zu sehen — Gäste fragen ihn ständig danach. Tippen Sie auf das Bild, um die Serie auf tabii zu sehen.",
  "tabii_bts": "Hinter den Kulissen — Ergin in Folge 7, Büyükada",
  "chan_kicker": "Ergins WhatsApp-Kanal",
  "chan_sub": "Verfolgen Sie vor Ihrem Besuch Museen, Moscheen, Öffnungszeiten, Schließungen und offizielle Ankündigungen für die Historische Halbinsel — direkt von Ihrem Guide.",
  "chan_btn": "Kanal folgen",
  "tursab_text": "Alle Touren werden von Oligarch Tour durchgeführt, einem Mitglied von TÜRSAB — dem Verband türkischer Reisebüros. Lizenz Nr. 14988.",
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
  "cc_search": "Land oder Vorwahl suchen",
  "cc_nomatch": "Kein Treffer",
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
  "hero_kicker": "BYZIST · 伊斯坦布尔老城",
  "hero_title": "与 Ergin Karakoyun 一起探索伊斯坦布尔",
  "free": "免费",
  "add_ticket": "添加门票",
  "skip_note": "仅售免排队票：正常票价 + 每张 €2.50。",
  "tickets_word": "门票",
  "free_word": "免费",
  "details_link": "查看详情",
  "tickets_available": "可加免排队门票",
  "add_other": "再加一条线路",
  "tier_label": "游艇级别",
  "tier_standard": "标准游艇——400 欧元（2 小时）",
  "tier_luxury": "豪华游艇——600 欧元（2 小时含饮品）",
  "hero_sub": "32 年经验。一座城市。一位导游。",
  "tours_title": "伊斯坦布尔之旅",
  "menu_word": "菜单",
  "menu_hint": "请先选择：行程日期、人数和导览语言——然后在下方添加您的行程。门票价格会自动计算。",
  "select_details": "请选择行程详情",
  "grp_byzantine": "拜占庭伊斯坦布尔",
  "grp_ottoman": "奥斯曼伊斯坦布尔",
  "grp_shopping": "购物与手工艺",
  "grp_bosphorus": "博斯普鲁斯海峡",
  "grp_fullday": "伊斯坦布尔全日游",
  "discover_title": "认识您的导游",
  "discover_sub": "Ergin Karakoyun，持证文化遗产专家 · 自 1994 年",
  "hero_topline": "从君士坦丁堡到伊斯坦布尔",
  "footer_form": "联系表单",
  "form_title": "联系 Ergin",
  "form_sub": "发送消息——直接送达 Ergin，且不会显示他的电子邮件地址。",
  "form_name": "您的姓名",
  "form_reach": "您的电话或电子邮件",
  "form_msg": "您的留言",
  "form_send": "发送消息",
  "form_note": "通过电子邮件送达——无需 WhatsApp。",
  "form_sending": "发送中…",
  "form_sent": "谢谢——您的消息已发送。Ergin 会通过您留下的联系方式回复。",
  "form_error": "发送失败，请重试。",
  "full_details": "完整详情",
  "covered_full_day": "已包含在您的全日游中",
  "fullday_note": "全日游涵盖各单项景点——添加后会自动从预订中移除这些单项行程。",
  "skip_add": "添加免排队票",
  "tours_sub": "每条线路为整团一口价（最多 8 人）。需要门票？预订时按人添加 — 均为免排队票，正常票价 + €2.50。",
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
  "view_on": "在 {platform} 查看",
  "guide_short": "您的导游",
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
  "meeting": "每天 09:00–17:00，我们在苏丹艾哈迈德的伊斯坦布尔四季酒店门前等您（Tevkifhane Sk. No:1）——位于老城中心，距圣索菲亚大教堂和蓝色清真寺仅几分钟。",
  "meeting_label": "集合点",
  "phone_label": "WhatsApp / 电话",
  "email_label": "电子邮箱",
  "instagram_label": "Instagram",
  "footer_line": "BYZIST——伊斯坦布尔拜占庭与奥斯曼主题导览。由 Oligarch Tour 运营，TÜRSAB 许可证编号 14988。",
    "legal_line": "在此直接预订，并通过 WhatsApp 获得本人确认。",
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
  "tour_lang": "导览语言",
  "night_badge": "6 月 – 9 月 · 暂未开放预订 — 6 月开始",
  "who_is": "Ergin Karakoyun 是谁？",
  "tabii_title": "在 TRT tabii 平台亮相",
  "tabii_text": "Ergin 出演了 TRT 旗下 tabii 平台的剧集《Like a Dream: Istanbul》，客人们经常向他问起。点击图片即可在 tabii 上观看。",
  "tabii_bts": "幕后花絮——Ergin 出演第 7 集(大岛)",
  "chan_kicker": "Ergin 的 WhatsApp 频道",
  "chan_sub": "出发前先关注:历史半岛的博物馆、清真寺、开放时间、闭馆信息与官方公告——直接来自您的导游。",
  "chan_btn": "关注频道",
  "tursab_text": "所有行程均由 Oligarch Tour 运营，该公司是土耳其旅行社协会 TÜRSAB 的成员。许可证号 14988。",
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
  "cc_search": "搜索国家或区号",
  "cc_nomatch": "无匹配结果",
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
   "hero_kicker": "BYZIST · Tarihi Yarımada",
   "hero_title": "İstanbul'u Ergin Karakoyun ile Keşfedin",
   "free": "Ücretsiz",
   "add_ticket": "Giriş biletlerini ekle",
   "skip_note": "Yalnızca hızlı giriş bileti satılır: normal fiyat + bilet başı €2,50.",
   "tickets_word": "bilet",
   "free_word": "Ücretsiz",
   "details_link": "Detayları gör",
   "tickets_available": "Hızlı giriş bileti eklenebilir",
   "add_other": "Başka bir tur da ekle",
   "tier_label": "Yat Seçeneği",
   "tier_standard": "Standart Yat — 400 € (2 Saat)",
   "tier_luxury": "Lüks Yat — 600 € (2 Saat, İçecekler Dahil)",
   "hero_sub": "32 yıllık deneyim. Tek şehir. Tek rehber.",
   "tours_title": "İstanbul Turları",
   "menu_word": "Menü",
   "menu_hint": "Önce seçin: tur tarihi, kişi sayısı ve tur dili — sonra turlarınızı aşağıdan ekleyin. Bilet fiyatları otomatik hesaplanır.",
   "select_details": "Lütfen tur detaylarını seçin",
   "grp_byzantine": "Bizans İstanbul'u",
   "grp_ottoman": "Osmanlı İstanbul'u",
   "grp_shopping": "Alışveriş ve El Sanatları",
   "grp_bosphorus": "Boğaz",
   "grp_fullday": "Tam Gün İstanbul",
   "discover_title": "Rehberinizle tanışın",
   "discover_sub": "Ergin Karakoyun, lisanslı kültür mirası uzmanı · 1994'ten beri",
   "hero_topline": "Konstantinopolis'ten İstanbul'a",
   "footer_form": "İletişim formu",
   "form_title": "Ergin'e Ulaşın",
   "form_sub": "Mesaj gönderin — e-posta adresi hiç görünmeden doğrudan Ergin'e ulaşır.",
   "form_name": "Adınız",
   "form_reach": "Telefonunuz veya e-postanız",
   "form_msg": "Mesajınız",
   "form_send": "Mesajı Gönder",
   "form_note": "E-posta ile iletilir — WhatsApp gerekmez.",
   "form_sending": "Gönderiliyor…",
   "form_sent": "Teşekkürler — mesajınız gönderildi. Ergin, bıraktığınız iletişimden size dönecektir.",
   "form_error": "Gönderilemedi, lütfen tekrar deneyin.",
   "full_details": "Tüm detaylar",
   "covered_full_day": "Tam Gün Turu'nuz zaten kapsıyor",
   "fullday_note": "Tam Gün Turu tekil mekan turlarını kapsar — eklediğinizde bunlar rezervasyonunuzdan otomatik kaldırılır.",
   "skip_add": "Hızlı giriş bileti ekle",
   "tours_sub": "Her tur, grubunuz için tek fiyattır (en fazla 8 kişi). Giriş bileti mi lazım? Rezervasyonda kişi başı ekleyin — hepsi hızlı giriş biletidir: normal fiyat + €2,50.",
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
   "view_on": "{platform} üzerinde gör",
   "guide_short": "Rehberiniz",
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
   "meeting": "Bizi her gün 09:00–17:00 arasında Four Seasons Hotel Istanbul at Sultanahmet önünde bulabilirsiniz: Tevkifhane Sk. No:1 — Tarihi Yarımada'nın kalbinde, Ayasofya ve Sultanahmet Camii'ne birkaç dakika.",
   "meeting_label": "Buluşma Noktası",
   "phone_label": "WhatsApp / Telefon",
   "email_label": "E-posta",
   "instagram_label": "Instagram",
   "footer_line": "BYZIST — İstanbul'da Bizans ve Osmanlı turları. Oligarch Tour tarafından işletilmektedir, TÜRSAB Belge No: 14988.",
   "legal_line": "Doğrudan buradan rezerve edin, teyidinizi WhatsApp üzerinden bizzat alın.",
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
   "tour_lang": "Tur Dili",
   "night_badge": "Haziran – Eylül · Rezervasyon henüz yapılamıyor — Haziran'da başlıyor",
   "who_is": "Ergin Karakoyun Kimdir?",
   "tabii_title": "TRT tabii'de yer aldı",
   "tabii_text": "Ergin, TRT'nin tabii dizisi 'Like a Dream: Istanbul'da yer alıyor; misafirlerin en çok sorduğu konulardan biri bu. İzlemek için resme dokunun.",
   "tabii_bts": "Kamera arkası — Ergin 7. bölümde, Büyükada",
   "chan_kicker": "Ergin'in WhatsApp Kanalı",
   "chan_sub": "Gelmeden önce takip edin: Tarihi Yarımada için müzeler, camiler, ziyaret saatleri, kapanışlar ve resmî duyurular — doğrudan rehberinizden.",
   "chan_btn": "Kanalı takip et",
   "tursab_text": "Tüm turlar, TÜRSAB — Türkiye Seyahat Acentaları Birliği üyesi Oligarch Tour tarafından düzenlenmektedir. Belge No: 14988.",
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
   "cc_search": "Ülke veya kod ara",
   "cc_nomatch": "Sonuç yok",
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
 "hagia-sophia": {
  "en": "5.0 (25 reviews) · Viator",
  "de": "5,0 (25 Bewertungen) · Viator",
  "zh": "5.0（25 条评价）· Viator",
  "tr": "5,0 (25 yorum) · Viator"
 },
 "topkapi-palace": {
  "en": "4.86 (36 reviews) · Airbnb",
  "de": "4,86 (36 Bewertungen) · Airbnb",
  "zh": "4.86（36 条评价）· Airbnb",
  "tr": "4,86 (36 yorum) · Airbnb"
 },
 "basilica-cistern": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor",
  "tr": "4,7 (58 yorum) · TripAdvisor"
 },
 "sultanahmet-hippodrome": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor",
  "tr": "4,7 (58 yorum) · TripAdvisor"
 },
 "full-day-istanbul": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor",
  "tr": "4,7 (58 yorum) · TripAdvisor"
 },
 "half-day-istanbul": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor",
  "tr": "4,7 (58 yorum) · TripAdvisor"
 },
 "bazaars-tour": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor",
  "tr": "4,7 (58 yorum) · TripAdvisor"
 },
 "bosphorus-yacht": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor",
  "tr": "4,7 (58 yorum) · TripAdvisor"
 },
 "traditional-handicrafts": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor",
  "tr": "4,7 (58 yorum) · TripAdvisor"
 }
};
export const MEETING_DEFAULT: Record<Locale, string> = {"en": "In front of the Four Seasons Hotel, Tevkifhane Sk. No:1, Sultanahmet", "de": "Vor dem Four Seasons Hotel, Tevkifhane Sk. Nr. 1, Sultanahmet", "zh": "四季酒店门前，Tevkifhane Sk. No:1, Sultanahmet", "tr": "Four Seasons Hotel önü, Tevkifhane Sk. No:1, Sultanahmet"};
export const MEETING_OVERRIDE: Record<string, Record<Locale, string>> = {};
export const TOUR_GALLERY: Record<string, string[]> = {
  'hagia-sophia': ['tour-hs-guided.webp', 'gal-hs-mosaic1.webp', 'gal-hs-mosaic2.webp', 'tour-hs-private.webp'],
  'basilica-cistern': ['tour-cistern.webp', 'gal-cistern-columns.webp', 'gal-cistern-medusa.webp'],
  'sultanahmet-hippodrome': ['tour-bluemosque.webp', 'gal-hippodrome-obelisk.webp'],
  'topkapi-palace': ['tour-topkapi-private.webp', 'gal-topkapi-gate.webp', 'tour-topkapi-night.webp'],
  'topkapi-night': ['tour-topkapi-night.webp', 'tour-topkapi-private.webp'],
  'bazaars-tour': ['tour-bazaars.webp', 'gal-bazaar-gold.webp', 'tour-carpet.webp'],
  'bosphorus-yacht': ['tour-bosphorus-yacht.webp', 'gal-bosphorus-bridge.webp'],
  'traditional-handicrafts': ['tour-carpet.webp', 'gal-tiles.webp', 'gal-bazaar-gold.webp'],
  'full-day-istanbul': ['tour-istanbul-day.webp', 'tour-hs-private.webp', 'tour-topkapi-private.webp', 'tour-bluemosque.webp'],
};
export const TOUR_GROUPS: { key: string; ids: string[] }[] = [
  { key: 'grp_fullday', ids: ['full-day-istanbul', 'half-day-istanbul'] },
  { key: 'grp_byzantine', ids: ['hagia-sophia', 'basilica-cistern', 'sultanahmet-hippodrome'] },
  { key: 'grp_ottoman', ids: ['topkapi-palace', 'topkapi-night'] },
  { key: 'grp_shopping', ids: ['bazaars-tour', 'traditional-handicrafts'] },
  { key: 'grp_bosphorus', ids: ['bosphorus-yacht'] },
];
export function meetingPoint(locale: Locale, tourId: string): string {
  const own = TOURS[tourId]?.meeting?.[locale];
  if (own) return own;
  return (MEETING_OVERRIDE[tourId] && MEETING_OVERRIDE[tourId][locale]) || MEETING_DEFAULT[locale];
}
