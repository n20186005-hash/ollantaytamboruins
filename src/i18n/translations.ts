export type Locale = "zh" | "en" | "es" | "qu";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };
export type TimelineEvent = { period: string; description: string };
export type HistorySection = { subtitle: string; content: string };
export type ArchitectureSection = { subtitle: string; content: string };
export type CultureSection = { subtitle: string; content: string };
export type OllantaytamboSection = { subtitle: string; content: string };

export type Translations = {
  nav: { about: string; architecture: string; culture: string; history?: string; bestTime: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; bestTime: { title: string; content: string; tip: string } };
  architecture: ArchitectureSection;
  culture: CultureSection;
  ollantaytambo: { title?: string; subtitle: string; content: string };
    visiting: { title: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string; ticketTip: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] }; route: { title: string; content: string } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; city: { title: string; content: string; steps: string[] }; selfDrive: { title: string; content: string; steps: string[] } };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { about: "景点概览", architecture: "巨石建筑", culture: "印加文化", history: "历史长河", bestTime: "最佳时间", visiting: "游览指南", transportation: "交通接驳", tips: "游览建议", gallery: "照片画廊", reviews: "旅行者手记", faq: "常见问题", location: "地图位置" },
    hero: { tagline: "秘鲁库斯科 · 圣谷印加要塞", title: "奥扬泰坦博", subtitle: "Ollantaytambo · 印加帝国的活古城堡", cta: "探索古迹" },
    rating: { reviews: "条评价", source: "Google 评论" },
    about: {
      title: "奥扬泰坦博考古遗址：印加帝国的活古城堡与巨石奇迹",
      p1: "在秘鲁库斯科圣谷（Sacred Valley）的北端，矗立着印加帝国最独特、最完整的考古遗址之一——奥扬泰坦博（Ollantaytambo）。这座集军事要塞、皇家庄园与宗教祭祀中心于一体的古老城镇，是印加文明鼎盛时期的杰出代表。\n\n与许多印加遗址不同，奥扬泰坦博不仅是一处考古遗址，更是一个至今仍有居民生活的「活古城」。这里的石砌街道、梯田系统和灌溉水渠，依然按照600年前的印加城市规划在运转。它也是通往马丘比丘的重要门户，无数旅行者从这里搭乘火车前往印加圣城。",
      p2: "奥扬泰坦博最令人震撼的，是其正面墙（Frontal Wall）上巨大的多边形巨石。这些来自附近山脉的粉红色花岗岩巨石，每块重达50吨以上，被精确切割成复杂的多边形，严丝合缝地嵌入墙体。在没有任何金属工具和车轮的印加时代，这些巨石是如何被开采、运输并精确安装的，至今仍是考古学和工程学的未解之谜。",
      highlights: { title: "景点亮点", items: ["巨石神殿: 正面墙六块巨石，每块重50吨以上", "活古城: 至今仍有居民生活的印加古城", "太阳观测台: 祭祀太阳神Inti的神圣场所", "梯田要塞: 印加军事防御工程的典范", "圣谷门户: 通往马丘比丘的必经之地"] },
      bestTime: { title: "最佳参观时间", content: "07:00-17:00\n建议清晨参观，避开人群且光线柔和\n雨季（12月-3月）需注意防滑", tip: "💡 建议: 清晨07:00开园时到达，游客最少且能拍摄无人的巨石神殿" }
    },
    architecture: {
      subtitle: "巨石建筑之谜：50吨花岗岩如何飞越山谷？",
      content: "奥扬泰坦博最令人敬畏的，是其正面墙（Frontal Wall）上的六块巨型多边形花岗岩。这些巨石来自距离遗址约6公里外的Cachiccata采石场，位于山谷对面的高山之上。\n\n**超越想象的巨石运输：**\n每块巨石重达50吨以上，印加人必须将这些巨石从高山上开采下来，然后将其滚过Urubamba河，再沿着陡峭的山坡拉上山。由于没有车轮和铁器，他们只能依靠原木滚木、坚韧的龙舌兰纤维绳索，以及数以千计的劳工，才能完成这项看似不可能的任务。\n\n**多边形无缝石工：**\n这些巨石被精确切割成复杂的多边形，完美嵌套在一起。石缝间连一张纸都插不进去。这种无灰泥的建筑技术，不仅展现了印加人卓越的石工技艺，更赋予了建筑极强的抗震能力。\n\n💡 **建筑知识：** 奥扬泰坦博的正面墙是印加石工技术的巅峰之作。与萨克塞华曼的粗犷巨石不同，这里的巨石更加精致，展现了印加人在微观和宏观建筑上的双重造诣。"
    },
    culture: {
      subtitle: "印加文化的活化石：至今仍在使用的古城",
      content: "奥扬泰坦博不仅是一处考古遗址，更是一个「活着的」印加古城。这里的许多建筑、街道和灌溉系统，至今仍按照印加时代的规划在使用。\n\n**印加城市规划的典范：**\n奥扬泰坦博的城市布局严格遵循印加人的城市规划理念。街道呈网格状分布，中央有宽阔的广场，周围是皇家庄园和神殿。复杂的灌溉系统将山泉水引入城镇，为居民提供清洁的饮用水。\n\n**太阳观测台（Intihuatana）：**\n在遗址的最高处，有一块精心雕刻的石头，被称为Intihuatana（太阳观测台）。这是印加人用来观测太阳运行、确定农事节气的神圣工具。每年冬至和夏至，阳光会精确地照射在特定的岩石上，展现了印加人卓越的天文知识。\n\n💡 **文化知识：** 奥扬泰坦博是了解印加文化和历史的绝佳窗口。建议聘请当地导游，深入了解这座古城的秘密。"
    },
    ollantaytambo: {
      title: "历史长河 | 帝国的要塞与抗争",
      subtitle: "历史的见证：西班牙征服者与印加人的最后一战",
      content: "奥扬泰坦博在印加帝国历史上占有重要地位。1536年，印加皇室后裔曼科·印加（Manco Inca）在这里击败了西班牙征服者，取得了印加人对抗西班牙殖民者的唯一一次重大胜利。\n\n曼科·印加将奥扬泰坦博作为反抗西班牙的统治中心。他利用这里险要的地形，在山谷中修筑了防御工事，并成功击退了西班牙人的进攻。然而，随着西班牙援军的到来，曼科·印加最终被迫撤退到维尔卡班巴（Vilcabamba）丛林中，奥扬泰坦博也随之落入西班牙人之手。\n\n今天我们看到的奥扬泰坦博遗址，是印加帝国鼎盛时期的建筑杰作。它不仅是军事要塞，更是印加人城市规划、建筑技术和文化信仰的集中体现。\n\n💡 **旅行建议：** 从奥扬泰坦博可以继续前往马丘比丘（乘火车约1.5小时）。建议安排2-3天的圣谷行程，依次参观钦切罗（Chinchero）、莫雷梯田（Moray）、盐田（Maras Salt Pans）和奥扬泰坦博。"
    },
    visiting: {
      title: "游览指南",
      hours: { title: "开放时间", content: "07:00 - 17:00\n全年开放", note: "⚠️ 提醒：建议白天参观，安全和光线更佳。" },
      price: { title: "门票费用", content: "不可单买门票\n需凭库斯科游客通票\n（Boleto Turístico del Cusco）入场", note: "⚠️ 重要提示：奥扬泰坦博不设独立售票处，必须持有库斯科游客通票（BTC）。", ticketTip: "🎫 官方票务指南：奥扬泰坦博不设独立售票处，必须持有 库斯科游客通票（Boleto Turístico del Cusco - BTC）。\n建议游客抵达库斯科后，前往 Avenida el Sol 103 号的 <a href='https://www.culturacusco.gob.pe/' target='_blank' rel='noopener noreferrer' style='color:inherit;text-decoration:underline;'>[库斯科文化局 (COSITUC) 官方服务中心]</a> 购买，以防买到伪造票据。" },
      duration: { title: "建议游览时长", content: "建议预留 2 - 3 小时", note: "可以结合圣谷（Sacred Valley）游览，安排半天时间参观奥扬泰坦博及附近遗址。" },
      tips: { title: "游览建议物品", items: ["舒适的步行鞋（石板路较滑，且有爬坡）",
        "预防高反药物或古柯叶（海拔约2792米，请预防高山症 Soroche）", "防晒用品与墨镜（高原紫外线极强）", "相机和备用电池", "帽子和保暖衣物（早晚温差大）", "水和零食", "当地地图或导游APP", "氧气罐（可在库斯科药店购买，以防高反）"] },
      route: { title: "主要探索路线", content: "我们特别推荐以下奥扬泰坦博探索路线：\n\n1. 从城镇入口进入遗址\n2. 参观正面墙（Frontal Wall）和太阳神殿\n3. 攀登梯田要塞，欣赏圣谷全景\n4. 参观太阳观测台（Intihuatana）\n5. 探索印加桥梁和灌溉系统\n6. 返回城镇，参观当地市场和手工艺品店\n7. 如有时间，可参观对面的Pinkuylluna遗址" }
    },
    transportation: {
      title: "交通接驳",
      airport: { title: "第一程：亚历杭德罗·韦拉斯科·阿斯泰特国际机场 (CUZ) ➔ 奥扬泰坦博", content: "所有游客需先到达库斯科（Cusco）——印加帝国的古都。然后从库斯科前往奥扬泰坦博（约1.5小时车程）。", options: [
        { name: "出租车 / 私人包车", price: "约 150 - 250 索尔", time: "约 1.5 小时", steps: ["耗时与费用： 约 1.5 小时", "私人包车费用约 150-250 索尔", "可在库斯科机场或酒店安排"] },
        { name: "公共交通（小巴）", price: "约 10 - 15 索尔", time: "约 2 小时", steps: ["从库斯科Pavitos街乘坐小巴", "票价约10-15索尔", "约每15分钟一班，车程2小时"] }
      ]},
      city: { title: "第二程：库斯科 ➔ 奥扬泰坦博", content: "奥扬泰坦博位于库斯科西北约72公里处，海拔约2792米，是圣谷（Sacred Valley）的重要城镇。", steps: ["推荐：从库斯科包车或乘坐小巴前往", "车程约1.5小时", "也可以参加圣谷一日游旅行团"] },
      selfDrive: { title: "自驾前往", content: "从库斯科到奥扬泰坦博有铺设良好的公路，自驾是不错的选择。但需要注意山路弯多，谨慎驾驶。", steps: ["从库斯科沿CU-105公路行驶", "车程约1.5小时", "奥扬泰坦博有停车场", "注意：部分路段为山路，需谨慎驾驶"] }
    },
    tips: { title: "游览建议", items: [
      "⚠️ 高原反应预警：奥扬泰坦博海拔约2792米，比库斯科低约600米，但仍需注意高反。",
      "💡 交通建议：建议从库斯科包车前往，既节省时间又舒适。",
      "🎫 门票提示：必须购买Boleto Turístico通票，不能在门口单独买票。建议在官方网点购买。",
      "请做好防晒措施，高原紫外线极强，即使阴天也要涂防晒霜",
      "石板路较滑，建议穿防滑鞋。攀登梯田时注意脚下",
      "请尊重当地文化，不要攀爬墙体，不要在遗址上乱涂乱画",
      "建议聘请当地导游（约50-100索尔），了解更多历史故事和建筑奥秘",
      "可以结合参观圣谷其他景点，如钦切罗、莫雷梯田、盐田等",
      "注意保管个人物品，市中心游客较多，提防小偷",
      "尊重当地文化和传统",
      "保持景点整洁，不要乱扔垃圾。带走的只有照片，留下的只有脚印"
    ] },
    gallery: { title: "精彩照片", viewMore: "在 Google Maps 查看更多相片" },
    reviews: { title: "旅行者手记 (Traveler Insights)", subtitle: "来自奥扬泰坦博的声音：Google Maps 真实见证", viewMore: "在 Google Maps 查看更多见证" },
    faq: { title: "常见问题", subtitle: "深入了解奥扬泰坦博", items: [
      { question: "奥扬泰坦博的开放时间是？", answer: "奥扬泰坦博的开放时间为每天07:00-17:00，全年无休。但由于是户外遗址，建议白天参观，安全和光线更佳。" },
      { question: "参观奥扬泰坦博需要门票吗？", answer: "需要。奥扬泰坦博不能在门口单独买票，必须凭库斯科游客通票（Boleto Turístico del Cusco）入场。通票分为以下几种：\n• 全套通票（130索尔，10天有效）：包含所有遗址\n• Circuit 1（70索尔，1天有效）：包含奥扬泰坦博、Chinchero、Moray、Maras等\n建议在库斯科文化局官方网点购买，避免被宰。通票价格可能会变动，以官方公布为准。" },
      { question: "奥扬泰坦博有什么特别之处？", answer: "奥扬泰坦博因其巨大的多边形石块和「活古城」的特色而闻名。它展现了印加帝国杰出的石工技术——巨大的石块重达50吨以上，被精确切割成多边形，完美嵌入墙体，无需任何灰泥或水泥。此外，这里至今仍有居民生活，是了解印加文化的活化石。它也是通往马丘比丘的重要门户。" },
      { question: "如何前往奥扬泰坦博？有什么交通建议？", answer: "奥扬泰坦博位于秘鲁库斯科大区，距离库斯科约72公里。从库斯科Pavitos街乘坐小巴约2小时可达。\n\n⚠️ 重要交通建议：\n1. 推荐从库斯科包车前往，节省时间且舒适（约1.5小时）\n2. 也可以乘坐小巴，票价约10-15索尔\n3. 具体导航可在 Google Maps 中搜索Ollantaytambo, Cusco\n4. 也可以参加当地旅行团，包含交通和导游讲解" },
      { question: "游览奥扬泰坦博需要注意什么？有什么安全建议？", answer: "游览时需要注意：\n1. ⚠️ 高原反应：奥扬泰坦博海拔约2792米，比库斯科低，但仍需注意。刚到达库斯科的游客建议先适应1-2天再前往。可准备古柯叶或氧气罐。\n2. 🌞 防晒：高原紫外线极强，即使阴天也要涂防晒霜，戴墨镜和帽子\n3. 👟 防滑：石板路较滑，穿防滑鞋。攀登梯田时特别注意脚下\n4. 🏛️ 文化尊重：不要攀爬墙体，不要在遗址上乱涂乱画\n5. 💰 安全：保管好个人物品，市中心游客较多，提防小偷\n6. 🎫 门票：记住必须买通票，不能单独买票" },
      { question: "附近还有哪些值得一游的景点？", answer: "奥扬泰坦博位于圣谷（Sacred Valley），购买Boleto Turístico通票后，可以参观以下遗址：\n1. 钦切罗（Chinchero）——印加纺织中心\n2. 莫雷梯田（Moray）——印加农业试验场\n3. 盐田（Maras Salt Pans）——千年盐田\n4. 皮萨克（Pisac）——印加要塞和集市\n5. 马丘比丘（Machu Picchu）——从奥扬泰坦博乘火车约1.5小时可达" }
    ]},
    location: { title: "地图位置", address: "PPVM+6J7, Ollantaytambo 08676\nPerú\n（海拔约2,792米）", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为圣谷的重要文化遗产，请与我们一起爱护古迹、保护历史。保持景点整洁，共同维护这一人类文化遗产。⚠️ 注意：奥扬泰坦博海拔约2792米，请预防高原反应。", text: "© 2026 奥扬泰坦博考古遗址指南 · 保留所有权利。\n本网站是一个独立的第三方指南项目，致力于准确传播奥扬泰坦博信息。我们与秘鲁政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方指南项目。为探索者与学习者而制。", linksTitle: "相关链接", links: [
      { name: "秘鲁外贸和旅游部", url: "https://www.gob.pe/mincetur" },
      { name: "秘鲁国家旅游局官方指南 - 库斯科大区专页", url: "https://www.peru.travel/es/destinos/cusco" },
      { name: "库斯科大区政府", url: "https://www.gob.pe/regioncusco" },
      { name: "库斯科文化局", url: "https://www.culturacusco.gob.pe/" }
    ]}
  },

  en: {
    nav: { about: "Overview", architecture: "Megalithic Architecture", culture: "Inca Culture", history: "History", bestTime: "Best Time", visiting: "Visit Guide", transportation: "Getting There", tips: "Travel Tips", gallery: "Photo Gallery", reviews: "Traveler Insights", faq: "FAQ", location: "Location" },
    hero: { tagline: "Cusco, Peru · Sacrid Valley Fortress", title: "Ollantaytambo", subtitle: "Ollantaytambo · The Living Inca Fortress", cta: "Explore the Citadel" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    about: {
      title: "Ollantaytambo Archaeological Site: The Living Inca Fortress and Megalithic Miracle",
      p1: "At the northern end of the Sacred Valley of the Incas in Cusco, Peru, stands one of the most unique and complete archaeological sites of the Inca Empire—Ollantaytambo. This ancient town, integrating military fortress, royal estate, and religious center, is an outstanding representative of the Inca civilization at its peak.\n\nUnlike many Inca sites, Ollantaytambo is not just an archaeological site, but a 'living ancient city' where residents still live today. The stone-paved streets, terrace systems, and irrigation canals here still operate according to the Inca urban planning from 600 years ago. It is also an important gateway to Machu Picchu, from which countless travelers take the train to the Inca holy city.",
      p2: "The most awe-inspiring feature of Ollantaytambo is the massive polygonal stones on its Frontal Wall. These pink granite megaliths from nearby mountains weigh over 50 tons each, precisely cut into complex polygons and seamlessly fitted into the wall. In the Inca era, without any metal tools or wheels, how these megaliths were quarried, transported, and precisely installed remains an unsolved mystery in archaeology and engineering.",
      highlights: { title: "Highlights", items: ["Megalithic Temple: Six megalithic stones, each over 50 tons", "Living City: An ancient Inca town still inhabited today", "Intihuatana: Sacred solar observatory", "Terrace Fortress: Model of Inca military defense", "Sacred Valley Gateway: Essential stop to Machu Picchu"] },
      bestTime: { title: "Best Time to Visit", content: "07:00-17:00\nEarly morning recommended for fewer crowds and soft light\nRainy season (Dec-Mar): watch for slippery paths", tip: "💡 Tip: Arrive at 07:00 when the site opens for the fewest tourists and best photos of the megalithic temple" }
    },
    architecture: {
      subtitle: "Megalithic Architecture Mystery: How Were 50-ton Granite Stones Transported Across the Valley?",
      content: "The most awe-inspiring feature of Ollantaytambo is the six massive polygonal granite stones on its Frontal Wall. These megaliths come from the Cachiccata quarry, located about 6 kilometers away on the high mountain opposite the valley.\n\n**Beyond Imagination Megalithic Transportation:**\nEach stone weighs over 50 tons. The Incas had to quarry these stones from the high mountain, then roll them across the Urubamba River, and then pull them up the steep mountain slope. Without wheels or iron tools, they could only rely on log rollers, tough agave fiber ropes, and thousands of laborers to complete this seemingly impossible task.\n\n**Polygonal Seamless Masonry:**\nThese stones were precisely cut into complex polygons and perfectly nested together. Not even a piece of paper can be inserted between the stones. This mortar-free construction technique not only demonstrates the Incas'卓越的石工技艺，更赋予了建筑极强的抗震能力。\n\n💡 **Architectural Knowledge:** The Frontal Wall of Ollantaytambo is the pinnacle of Inca masonry. Unlike the rugged megaliths of Saqsaywaman, the stones here are more refined, demonstrating the Incas' dual attainment in both micro and macro architecture."
    },
    culture: {
      subtitle: "Living Fossil of Inca Culture: An Ancient City Still in Use Today",
      content: "Ollantaytambo is not just an archaeological site, but a 'living' Inca ancient city. Many of the buildings, streets, and irrigation systems here are still in use according to Inca-era planning.\n\n**Model of Inca Urban Planning:**\nThe urban layout of Ollantaytambo strictly follows the Incas' urban planning philosophy. The streets are distributed in a grid pattern, with a wide plaza in the center, surrounded by royal estates and temples. The complex irrigation system brings mountain spring water into the town, providing clean drinking water for residents.\n\n**Intihuatana (Solar Observatory):**\nAt the highest point of the site, there is a carefully carved stone called Intihuatana (solar observatory). This was a sacred tool used by the Incas to observe the sun's movement and determine agricultural seasons. Every winter and summer solstice, sunlight precisely strikes specific rocks, demonstrating the Incas'卓越的天文知识。\n\n💡 **Cultural Knowledge:** Ollantaytambo is an excellent window to understand Inca culture and history. It is recommended to hire a local guide to learn more about the secrets of this ancient city."
    },
    ollantaytambo: {
      title: "History | The Fortress and Struggle of the Empire",
      subtitle: "Historical Witness: The Last Battle Between Spanish Conquistadors and the Incas",
      content: "Ollantaytambo occupies an important place in the history of the Inca Empire. In 1536, Manco Inca, descendant of the Inca royal family, defeated the Spanish conquistadors here, achieving the only major victory of the Incas against the Spanish colonizers.\n\nManco Inca used Ollantaytambo as the center of resistance against the Spanish. He utilized the strategic terrain here to build defense works in the valley and successfully repelled the Spanish attacks. However, with the arrival of Spanish reinforcements, Manco Inca was eventually forced to retreat to the Vilcabamba jungle, and Ollantaytambo fell into Spanish hands.\n\nWhat we see today of Ollantaytambo is an architectural masterpiece from the peak period of the Inca Empire. It is not only a military fortress, but also a concentrated embodiment of the Incas' urban planning, architectural technology, and cultural beliefs.\n\n💡 **Travel Tip:** From Ollantaytambo, you can continue to Machu Picchu (about 1.5 hours by train). It is recommended to arrange a 2-3 day Sacred Valley itinerary, visiting Chinchero, Moray, Maras Salt Pans, and Ollantaytambo in sequence."
    },
    visiting: {
      title: "Visit Guide",
      hours: { title: "Opening Hours", content: "07:00 - 17:00\nOpen every day", note: "⚠️ Note: Daytime visits are recommended for better safety and lighting." },
      price: { title: "Entrance Fees", content: "Cannot buy separate ticket\nMust have 'Cusco Tourist Ticket'\n(Boleto Turístico del Cusco)", note: "⚠️ Important Note: Ollantaytambo cannot be entered with a separate ticket at the gate, you must purchase the Tourist Ticket.", ticketTip: "🎫 Ticket Tip: Cusco Tourist Ticket (Boleto Turístico) has several options:\n• Full Ticket (130 soles, valid 10 days): Includes all sites\n• Circuit 1 Only (70 soles, valid 1 day): Includes Ollantaytambo\nIt is recommended to purchase at official Cusco Culture Bureau offices to avoid scams." },
      duration: { title: "Recommended Duration", content: "Recommended: 2 - 3 hours", note: "Can be combined with Sacred Valley tour, plan half a day to visit Ollantaytambo and nearby sites." },
      tips: { title: "Recommended Items", items: ["Comfortable walking shoes (stone streets are slippery, and there's uphill walking)",
        "Altitude sickness medication or coca leaves (approx. 2792m altitude, prevent Soroche)", "Sun protection & sunglasses (extremely strong UV at high altitude)", "Camera and spare batteries", "Hat and warm clothing (large temperature difference between day and night)", "Water and snacks", "Local map or guide APP", "Oxygen canister (can be purchased at Cusco pharmacies for altitude sickness)"] },
      route: { title: "Exploration Routes", content: "We especially recommend the following Ollantaytambo exploration route:\n\n1. Enter the site from the town entrance\n2. Visit the Frontal Wall and Sun Temple\n3. Climb the terrace fortress for panoramic views of the Sacred Valley\n4. Visit the Intihuatana (Solar Observatory)\n5. Explore the Inca bridge and irrigation system\n6. Return to town, visit local market and handicraft shops\n7. If time permits, visit the Pinkuylluna site across the valley" }
    },
    transportation: {
      title: "Getting There",
      airport: { title: "From Lima or Other Cities", content: "All visitors must first arrive in Cusco—the ancient capital of the Inca Empire. Then travel from Cusco to Ollantaytambo (about 1.5 hours drive).", options: [
        { name: "Private Transfer / Taxi", price: "About 150 - 250 soles", time: "About 1.5 hours", steps: ["Private transfer from Cusco airport to Ollantaytambo", "Cost about 150-250 soles", "Can be arranged at Cusco airport or hotel"] },
        { name: "Public Transport (Minibus)", price: "About 10 - 15 soles", time: "About 2 hours", steps: ["Take minibus from Pavitos Street in Cusco", "Ticket about 10-15 soles", "Departs every 15 minutes, 2-hour journey"] }
      ]},
      city: { title: "Getting Around Cusco", content: "Ollantaytambo is located about 72 kilometers northwest of Cusco, at an altitude of about 2,792m. It is an important town in the Sacred Valley.", steps: ["Recommended: Private transfer or minibus from Cusco", "About 1.5 hours drive", "Can also join Sacred Valley day tour"] },
      selfDrive: { title: "Driving", content: "There is a well-paved road from Cusco to Ollantaytambo. Driving is a good option, but be careful on mountain roads with many curves.", steps: ["Drive along CU-105 highway from Cusco", "About 1.5 hours drive", "Parking available in Ollantaytambo", "Note: Some sections are mountain roads, drive carefully"] }
    },
    tips: { title: "Travel Tips", items: [
      "⚠️ Altitude Sickness Warning: Ollantaytambo is at approx. 2,792m, about 600m lower than Cusco, but still be careful.",
      "💡 Transportation Tip: Recommended to arrange private transfer from Cusco, saves time and comfortable.",
      "🎫 Ticket Tip: Must purchase Boleto Turístico tourist ticket, cannot buy separate ticket at the gate. Recommended to purchase at official offices.",
      "Take sun protection measures, UV is extremely strong at high altitude, apply sunscreen even on cloudy days",
      "Stone streets are slippery, wear non-slip shoes. Be careful when climbing terraces",
      "Respect local culture, do not climb the wall, do not graffiti on the ruins",
      "Hire a local guide (about 50-100 soles) to learn more about historical stories and architectural mysteries",
      "Visit other Sacred Valley attractions like Chinchero, Moray, Maras Salt Pans",
      "Keep personal belongings safe, town center has many tourists, beware of pickpockets",
      "Respect local culture and traditions",
      "Keep the attraction clean, do not litter. Take only photos, leave only footprints"
    ] },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    reviews: { title: "Traveler Insights", subtitle: "Voices from Ollantaytambo: Real Reviews from Google Maps", viewMore: "View More Reviews on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn More About Ollantaytambo", items: [
      { question: "What are the opening hours of Ollantaytambo?", answer: "Ollantaytambo is open daily from 07:00-17:00, every day of the year. However, as it is an outdoor attraction, daytime visits are recommended for better safety and lighting." },
      { question: "Is there an entrance fee to see Ollantaytambo?", answer: "Yes. Ollantaytambo cannot be entered with a separate ticket at the gate. You must have the 'Cusco Tourist Ticket' (Boleto Turístico del Cusco). The ticket has several options:\n• Full Ticket (130 soles, valid 10 days): Includes all sites\n• Circuit 1 Only (70 soles, valid 1 day): Includes Ollantaytambo, Chinchero, Moray, Maras\nIt is recommended to purchase at official Cusco Culture Bureau offices to avoid scams. Ticket prices may change, subject to official announcement." },
      { question: "What is special about Ollantaytambo?", answer: "Ollantaytambo is famous for its massive polygonal stones and its characteristic as a 'living ancient city'. It demonstrates the outstanding stonework techniques of the Inca Empire—the huge stones weigh over 50 tons, were precisely cut into polygons, and perfectly embedded in the wall without any mortar or cement. In addition, residents still live here today, making it a living fossil for understanding Inca culture. It is also an important gateway to Machu Picchu." },
      { question: "How to get to Ollantaytambo? Any transportation recommendations?", answer: "Ollantaytambo is located in the Cusco region of Peru, about 72 kilometers from Cusco. You can take a minibus from Pavitos Street in Cusco, about 2 hours.\n\n⚠️ Important Transportation Recommendations:\n1. Recommended to arrange private transfer from Cusco, saves time and comfortable (about 1.5 hours)\n2. Can also take minibus, ticket about 10-15 soles\n3. For specific navigation, search for 'Ollantaytambo, Cusco' in Google Maps\n4. You can also join a local tour, which includes transportation and guide explanation" },
      { question: "What should I pay attention to when visiting? Any safety recommendations?", answer: "When visiting, please note:\n1. ⚠️ Altitude sickness: Ollantaytambo is at approx. 2,792m, lower than Cusco, but still be careful. Visitors who have just arrived in Cusco should acclimate for 1-2 days before visiting. Prepare coca leaves or oxygen canister.\n2. 🌞 Sun protection: Extremely strong UV at high altitude, apply sunscreen even on cloudy days, wear sunglasses and hat\n3. 👟 Slip prevention: Stone streets are slippery, wear non-slip shoes. Be especially careful when climbing terraces\n4. 🏛️ Cultural respect: Do not climb the wall, do not graffiti on the ruins\n5. 💰 Safety: Keep personal belongings safe, town center has many tourists, beware of pickpockets\n6. 🎫 Tickets: Remember you must buy the tourist ticket, cannot buy separate ticket" },
      { question: "What other attractions are worth visiting nearby?", answer: "Ollantaytambo is located in the Sacred Valley. After purchasing the Boleto Turístico tourist ticket, you can visit the following sites:\n1. Chinchero — Inca textile center\n2. Moray — Inca agricultural experimental station\n3. Maras Salt Pans — Thousand-year-old salt pans\n4. Pisac — Inca fortress and market\n5. Machu Picchu — About 1.5 hours by train from Ollantaytambo" }
    ]},
    location: { title: "Map Location", address: "PPVM+6J7, Ollantaytambo 08676\nPeru\n(Altitude: approx. 2,792m)", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As an important cultural heritage site in the Sacred Valley, please join us in caring for the monument and protecting history. Keep the attraction clean and maintain this cultural heritage of humanity together. ⚠️ Note: Ollantaytambo is at approx. 2,792m altitude, please prevent altitude sickness.", text: "© 2026 Ollantaytambo Archaeological Site Guide · All rights reserved.\nThis website is an independent third-party guide project dedicated to accurately sharing information about Ollantaytambo. We are not affiliated with the Peruvian government or any official authority.", made: "This website is an independent third-party guide project. Made for explorers and learners.", linksTitle: "Related Links", links: [
      { name: "Peru Ministry of Foreign Trade and Tourism", url: "https://www.gob.pe/mincetur" },
      { name: "Official Peru Travel Guide - Cusco Region", url: "https://www.peru.travel/es/destinos/cusco" },
      { name: "Cusco Regional Government", url: "https://www.gob.pe/regioncusco" },
      { name: "Cusco Culture Bureau", url: "https://www.culturacusco.gob.pe/" }
    ]}
  },

  es: {
    nav: { about: "Descripción", architecture: "Arquitectura Megalítica", culture: "Cultura Inca", history: "Historia", bestTime: "Mejor Época", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería", reviews: "Diario de Viajeros", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "Cusco, Perú · Fortaleza del Valle Sagrado", title: "Ollantaytambo", subtitle: "Ollantaytambo · La Fortaleza Inca Viva", cta: "Explorar" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Sitio Arqueológico de Ollantaytambo: La Fortaleza Inca Viva y el Milagro Megalítico",
      p1: "En el extremo norte del Valle Sagrado de los Incas en Cusco, Perú, se encuentra uno de los sitios arqueológicos más únicos y completos del Imperio Inca: Ollantaytambo. Este antiguo pueblo, que integra fortaleza militar, hacienda real y centro religioso, es un representante excepcional de la civilización inca en su apogeo.\n\nA diferencia de muchos sitios incas, Ollantaytambo no es solo un sitio arqueológico, sino una 'ciudad antigua viva' donde los residentes todavía viven hoy. Las calles empedradas, los sistemas de terrazas y los canales de riego aquí todavía funcionan según la planificación urbana inca de hace 600 años. También es una puerta importante a Machu Picchu, desde donde countless viajeros toman el tren a la ciudad santa inca.",
      p2: "Lo más impresionante de Ollantaytambo son las masivas piedras poligonales en su Muro Frontal. Estas megalitas de granito rosa de las montañas cercanas pesan más de 50 toneladas cada una, cortadas precisamente en polígonos complejos y encajadas perfectamente en la pared. En la era inca, sin herramientas de metal ni ruedas, cómo estas megalitas fueron extraídas, transportadas e instaladas precisamente sigue siendo un misterio sin resolver en arqueología e ingeniería.",
      highlights: { title: "Puntos Destacados", items: ["Templo Megalítico: Seis piedras megalíticas, cada una de más de 50 toneladas", "Ciudad Viva: Un antiguo pueblo inca todavía habitado hoy", "Intihuatana: Sagrado observatorio solar", "Fortaleza de Terrazas: Modelo de defensa militar inca", "Puerta del Valle Sagrado: Parada esencial a Machu Picchu"] },
      bestTime: { title: "Mejor Época para Visitar", content: "07:00-17:00\nSe recomienda temprano en la mañana para menos turistas y luz suave\nTemporada de lluvias (dic-mar): cuidado con caminos resbaladizos", tip: "💡 Consejo: Llegue a las 07:00 cuando el sitio abre para menos turistas y mejores fotos del templo megalítico" }
    },
    architecture: {
      subtitle: "Misterio de Arquitectura Megalítica: ¿Cómo se Transportaron Piedras de Granito de 50 Toneladas a Través del Valle?",
      content: "Lo más impresionante de Ollantaytambo son las seis masivas piedras poligonales de granito en su Muro Frontal. Estas megalitas provienen de la cantera de Cachiccata, ubicada a unos 6 kilómetros de distancia en la alta montaña frente al valle.\n\n**Transporte Megalítico más allá de la imaginación:**\nCada piedra pesa más de 50 toneladas. Los incas tenían que extraer estas piedras de la alta montaña, luego rodarlas a través del río Urubamba, y luego jalarlas cuesta arriba por la empinada pendiente montañosa. Sin ruedas ni herramientas de hierro, solo podían depender de rodillos de troncos, cuerdas de fibra de agave resistentes y miles de trabajadores para completar esta tarea aparentemente imposible.\n\n**Albañilería Poligonal Sin Mortero:**\nEstas piedras fueron cortadas precisamente en polígonos complejos y perfectamente anidadas. Ni siquiera se puede insertar un papel entre las piedras. Esta técnica de construcción sin mortero no solo demuestra la excelente artesanía de piedra de los incas, sino que también le da al edificio una fuerte capacidad sísmica."
    },
    culture: {
      subtitle: "Fósil Vivo de la Cultura Inca: Una Ciudad Antigua Todavía en Uso Hoy",
      content: "Ollantaytambo no es solo un sitio arqueológico, sino una ciudad antigua inca 'viva'. Muchos de los edificios, calles y sistemas de riego aquí todavía están en uso según la planificación de la era inca.\n\n**Modelo de Planificación Urbana Inca:**\nEl diseño urbano de Ollantaytambo sigue estrictamente la filosofía de planificación urbana de los incas. Las calles se distribuyen en un patrón de cuadrícula, con una plaza amplia en el centro, rodeada de haciendas reales y templos. El complejo sistema de riego trae agua de manantial de montaña al pueblo, proporcionando agua potable limpia para los residentes.\n\n**Intihuatana (Observatorio Solar):**\nEn el punto más alto del sitio, hay una piedra cuidadosamente tallada llamada Intihuatana (observatorio solar). Esta era una herramienta sagrada utilizada por los incas para observar el movimiento del sol y determinar las estaciones agrícolas. Cada solsticio de invierno y verano, la luz solar golpea precisamente rocas específicas, demostrando el excelente conocimiento astronómico de los incas."
    },
    ollantaytambo: {
      title: "Historia | La Fortaleza y Lucha del Imperio",
      subtitle: "Testigo Histórico: La Última Batalla entre Conquistadores Españoles e Incas",
      content: "Ollantaytambo ocupa un lugar importante en la historia del Imperio Inca. En 1536, Manco Inca, descendiente de la familia real inca, derrotó a los conquistadores españoles aquí, logrando la única victoria mayor de los incas contra los colonizadores españoles.\n\nManco Inca usó Ollantaytambo como el centro de resistencia contra los españoles. Utilizó el terreno estratégico aquí para construir obras defensivas en el valle y repelió exitosamente los ataques españoles. Sin embargo, con la llegada de refuerzos españoles, Manco Inca finalmente se vio obligado a retirarse a la selva de Vilcabamba, y Ollantaytambo cayó en manos españolas.\n\nLo que vemos hoy de Ollantaytambo es una obra maestra arquitectónica del período pico del Imperio Inca. No es solo una fortaleza militar, sino también una encarnación concentrada de la planificación urbana, tecnología arquitectónica y creencias culturales de los incas."
    },
    visiting: {
      title: "Guía de Visita",
      hours: { title: "Horario de Apertura", content: "07:00 - 17:00\nAbierto todos los días", note: "⚠️ Nota: Se recomienda visitar durante el día para mejor seguridad e iluminación." },
      price: { title: "Entrada", content: "No se puede comprar entrada separada\nRequiere 'Boleto Turístico del Cusco'", note: "⚠️ Nota Importante: Ollantaytambo no se puede ingresar con una entrada separada en la puerta, debe comprar el Boleto Turístico.", ticketTip: "🎫 Consejo de Entrada: Boleto Turístico del Cusco tiene varias opciones:\n• Boleto Completo (130 soles, válido 10 días): Incluye todos los sitios\n• Solo Circuito 1 (70 soles, válido 1 día): Incluye Ollantaytambo\nSe recomienda comprar en oficinas oficiales de Cultura Cusco para evitar estafas." },
      duration: { title: "Duración Recomendada", content: "Recomendado: 2 - 3 horas", note: "Puede combinarse con un tour del Valle Sagrado, planee medio día para visitar Ollantaytambo y sitios cercanos." },
      tips: { title: "Qué llevar", items: ["Zapatos cómodos para caminar (las calles de piedra son resbaladizas, y hay subida)",
        "Medicamentos para el mal de altura u hojas de coca (aprox. 2792m de altitud)", "Protección solar y gafas de sol (UV fuerte en altura)", "Cámara y baterías de repuesto", "Sombrero y ropa abrigadora (gran diferencia de temperatura)", "Agua y snacks", "Mapa local o APP de guía", "Balón de oxígeno (se puede comprar en farmacias de Cusco)"] },
      route: { title: "Ruta Recomendada", content: "Recomendamos especialmente la siguiente ruta de exploración por Ollantaytambo:\n\n1. Entrar al sitio desde la entrada del pueblo\n2. Visitar el Muro Frontal y el Templo del Sol\n3. Subir la fortaleza de terrazas para vistas panorámicas del Valle Sagrado\n4. Visitar el Intihuatana (Observatorio Solar)\n5. Explorar el puente inca y el sistema de riego\n6. Regresar al pueblo, visitar mercado local y tiendas de artesanías\n7. Si hay tiempo, visitar el sitio Pinkuylluna al frente" }
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "Desde Lima u Otras Ciudades", content: "Todos los visitantes deben llegar primero a Cusco—la antigua capital del Imperio Inca. Luego viajar de Cusco a Ollantaytambo (about 1.5 horas en auto).", options: [
        { name: "Transferencia Privada / Taxi", price: "Aprox. 150 - 250 soles", time: "Aprox. 1.5 horas", steps: ["Transferencia privada desde aeropuerto Cusco a Ollantaytambo", "Costo about 150-250 soles", "Puede ser organizado en aeropuerto Cusco o hotel"] },
        { name: "Transporte Público (Minibús)", price: "Aprox. 10 - 15 soles", time: "Aprox. 2 horas", steps: ["Tomar minibús desde Calle Pavitos en Cusco", "Boleto about 10-15 soles", "Sale cada 15 minutos, 2 horas de viaje"] }
      ]},
      city: { title: "Transporte en Cusco", content: "Ollantaytambo está ubicado a about 72 kilómetros al noroeste de Cusco, a una altitud de about 2,792m. Es un pueblo importante en el Valle Sagrado.", steps: ["Recomendado: Transferencia privada o minibús desde Cusco", "About 1.5 horas en auto", "También puede unirse a tour de día del Valle Sagrado"] },
      selfDrive: { title: "Conduciendo", content: "Hay un camino bien pavimentado desde Cusco a Ollantaytambo. Conducir es una buena opción, pero tenga cuidado en caminos montañosos con muchas curvas.", steps: ["Conducir por carretera CU-105 desde Cusco", "About 1.5 horas en auto", "Estacionamiento disponible en Ollantaytambo", "Nota: Algunas secciones son caminos montañosos, conduzca con cuidado"] }
    },
    tips: { title: "Consejos", items: [
      "⚠️ Advertencia de Mal de Altura: Ollantaytambo está a aprox. 2792m, about 600m más bajo que Cusco, pero todavía tenga cuidado.",
      "💡 Consejo de Transporte: Recomendado arreglar transferencia privada desde Cusco, ahorra tiempo y cómodo.",
      "🎫 Consejo de Entrada: Debe comprar Boleto Turístico, no se puede comprar entrada separada.",
      "Tome medidas de protección solar",
      "Use zapatos antideslizantes",
      "Respetar la cultura local",
      "Contratar un guía local"
    ] },
    gallery: { title: "Galería", viewMore: "Ver Más Fotos en Google Maps" },
    reviews: { title: "Diario de Viajeros (Traveler Insights)", subtitle: "Voces de Ollantaytambo", viewMore: "Ver Más Reseñas en Google Maps" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda Más Sobre Ollantaytambo", items: [
      { question: "¿Cuál es el horario de Ollantaytambo?", answer: "07:00-17:00, todos los días." },
      { question: "¿Hay entrada?", answer: "Sí, requiere Boleto Turístico." }
    ]},
    location: { title: "Ubicación", address: "PPVM+6J7, Ollantaytambo 08676\nPerú\n(Altitud: aprox. 2,792m)", openMaps: "Ver en Google Maps" },
    footer: { callToAction: "Como un importante sitio de patrimonio cultural en el Valle Sagrado, únanse a nosotros para cuidar el monumento.", text: "© 2026 Guía de Sitio Arqueológico de Ollantaytambo.", made: "Hecho para exploradores.", linksTitle: "Enlaces", links: [
      { name: "MINCETUR", url: "https://www.gob.pe/mincetur" },
      { name: "Peru Travel - Cusco", url: "https://www.peru.travel/es/destinos/cusco" },
      { name: "Gobierno Regional de Cusco", url: "https://www.gob.pe/regioncusco" },
      { name: "Cultura Cusco", url: "https://www.culturacusco.gob.pe/" }
    ]}
  },

  qu: {
    nav: { about: "Qhaway", architecture: "Rumimanta Yachay", culture: "Kultura", history: "Wiñay Kawsay", bestTime: "Allin Punchaw", visiting: "Puriy", transportation: "Chaykamuy", tips: "Yachay", gallery: "Rikuy", reviews: "Puriy Niykuna", faq: "Tapuykuna", location: "Maypi" },
    hero: { tagline: "Cusco, Piruw · Sacrid Valley Fortress", title: "Ollantaytambo", subtitle: "Ollantaytambo · Inca Fortress", cta: "Rikuy" },
    rating: { reviews: "niykuna", source: "Google niykuna" },
    about: {
      title: "Ollantaytambo: Inca Fortress",
      p1: "Ollantaytambo, Cusco, Piruwpi. Inca fortress. Kayqa Inka runakunaq ruwayta rikuchin.\n\nOllantaytambo nisqa Inca fortress. Runakunaqa kachkan.",
      p2: "Ollantaytambo rumikuna 50 toneladas. Inka runakuna rumita junt'achanku.",
      highlights: { title: "Rikuy", items: ["Megalithic Wall: 6 stones", "Living City: Runakuna kachkan", "Intihuatana: Solar", "Terraces: Inca", "Gateway: Machu Picchu"] },
      bestTime: { title: "Allin Punchaw", content: "07:00-17:00\nPaqarina allin", tip: "💡 Yachay: Paqarina hamuy" }
    },
    architecture: {
      subtitle: "Rumimanta Yachay",
      content: "Ollantaytambo rumikuna 50 toneladas. Inka runakuna rumita junt'achanku, mana ñawch'awan. Inka pirqunqa jatun temblorpi mana urmachu.\n\nInka rumikuna 50 toneladas. Rumikunaqa Cachiccata urqumantam 6 km karumanta apamusqa karqan. Inka runakunaqa mana llantayuq, mana fierroyuq, k'ulluwan, waskha waskawan, waranqa waranqa runakunawan kay 50 ton rumikunata aysarqanku."
    },
    culture: {
      subtitle: "Kultura | Inka Yachay",
      content: "Inka runakuna rumita yupaychanku. Ollantaytambo nisqa Inca fortress. Runakunaqa kachkan.\n\nIntihuatana: Solar observatory."
    },
    ollantaytambo: {
      title: "Wiñay Kawsay",
      subtitle: "Historia | Inca",
      content: "Ollantaytambo Inca fortress. Inka runakuna rumita junt'achanku.\n\nManco Inca."
    },
    visiting: {
      title: "Puriy",
      hours: { title: "Punchaw", content: "07:00-17:00\nSapa punchaw", note: "⚠️ Punchaw rikuy." },
      price: { title: "Qullqi", content: "Boleto Turístico", note: "⚠️ Boleto Turístico apamuy.", ticketTip: "🎫 Boleto Turístico 130 soles." },
      duration: { title: "Unay", content: "2 - 3 ura", note: "Sacrid Valley puriy." },
      tips: { title: "Apamuy", items: ["Bota", "Soroche pastilla", "Inti amachana", "Cámara", "Oxygen"] },
      route: { title: "Puriy", content: "1. Ollantaytambo-man\n2. Rikuy\n3. Intihuatana\n4. Puriy\n5. Kutiy" }
    },
    transportation: {
      title: "Chaykamuy",
      airport: { title: "Lima-manta", content: "Cusco-man antawan hamuy.", options: [
        { name: "Anta", price: "$80 - $200", time: "1 ura", steps: ["Lima-manta Cusco-man anta", "Aeropuerto-manta Ollantaytambo-man"] }
      ]},
      city: { title: "Cusco", content: "Cusco-manta 1.5 ura.", steps: ["Taxi", "Minibús", "Google Maps-mi maskuy"] },
      selfDrive: { title: "Auto", content: "Mana allin. Taxi.", steps: ["Auto", "CU-105", "Ollantaytambo-man"] }
    },
    tips: { title: "Yachay", items: [
      "Ollantaytambo 2792m, Soroche",
      "Taxi",
      "Boleto Turístico",
      "Intita amachakuy",
      "Rumi ñan, botawan puriy"
    ] },
    gallery: { title: "Rikuy", viewMore: "Google Maps nisqapi astawan rikuy" },
    reviews: { title: "Puriy Niykuna (Traveler Insights)", subtitle: "Ollantaytambo niykuna", viewMore: "Astawan niykuna" },
    faq: { title: "Tapuykuna", subtitle: "Yachay", items: [
      { question: "Hayk'aq kachkan?", answer: "07:00-17:00. Sapa p'unchay." },
      { question: "Qullqi paganan chá?", answer: "Arí. Boleto Turístico." }
    ]},
    location: { title: "Maypipas", address: "PPVM+6J7, Ollantaytambo 08676\nPerú\n(2792m)", openMaps: "Google Maps nisqapi maytapas rikuy" },
    footer: { callToAction: "Ñawpa ruwayta cuiday. 2792m, Soroche amachakuy.", text: "© 2026 Ollantaytambo. Kayqa puriy yachay.", made: "Kayqa puriy yachay.", linksTitle: "Imakunata", links: [
      { name: "MINCETUR", url: "https://www.gob.pe/mincetur" },
      { name: "Peru Travel - Cusco", url: "https://www.peru.travel/es/destinos/cusco" },
      { name: "Cusco Gobierno", url: "https://www.gob.pe/regioncusco" },
      { name: "Cultura Cusco", url: "https://www.culturacusco.gob.pe/" }
    ]}
  }
};
