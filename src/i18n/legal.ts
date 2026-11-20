import type { DetailLocale } from "./detail-locales";

export const legalSlugs = ["privacy", "terms", "cookies"] as const;
export type LegalSlug = (typeof legalSlugs)[number];

type LegalCopy = {
  titles: Record<LegalSlug, string>;
  updated: string;
  home: string;
  privacy: [string, string, string[]?][];
  terms: [string, string][];
  cookies: {
    intro: string;
    categories: [string, string, string][];
    title: string;
    notice: string;
    active: string;
    inactive: string;
    provider: string;
    save: string;
    reject: string;
    saved: string;
    failed: string;
  };
};

export const legalCopy: Record<DetailLocale, LegalCopy> = {
  en: {
    titles: { privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookie Settings" },
    updated: "Last updated June 2026", home: "Back to the homepage",
    privacy: [
      ["Information we collect", "We collect only the minimum data needed to provide the service. This may include the following.", ["Browsing data such as IP address, browser type and pages visited", "Cookies and similar technologies", "Information you voluntarily submit by email or through a contact form"]],
      ["How we use your information", "We use the information we collect for the following purposes.", ["Improve the site’s content and user experience", "Analyse traffic and usage patterns", "Respond to requests", "Meet our legal obligations"]],
      ["Third-party services", "The site may use third-party services such as Google Maps for maps and location data, Google Analytics for traffic analysis, and Unsplash for images. These services have their own privacy policies."],
      ["Your rights", "The General Data Protection Regulation (GDPR) and related rules provide rights including the following.", ["Access your personal data", "Request correction or deletion", "Object to processing", "Lodge a complaint with a supervisory authority"]],
    ],
    terms: [
      ["Access and use", "By accessing and using this website, you agree to these terms of service."],
      ["Use of content", "All content is provided for information only. This independent travel guide is not affiliated with attractions, government agencies or commercial operators."],
      ["Accuracy of information", "We aim to provide accurate, timely information, but cannot guarantee its completeness or accuracy. Schedules, conditions and services may change without notice. Verify important information through official sources before travelling."],
      ["Intellectual property", "The website design and original content are protected by copyright. Images from Unsplash are used under its licence. Google Maps data is subject to Google's terms of service."],
      ["Limitation of liability", "This website is provided as is, without warranties. We are not responsible for losses resulting from use of this website’s information, including travel decisions based on its content."],
    ],
    cookies: {
      intro: "We use cookies to improve your browsing experience. Manage your preferences below.",
      categories: [
        ["Necessary cookies", "Required for the website to function and cannot be disabled.", "Always active"],
        ["Analytics cookies", "Help us understand how visitors use the website by collecting anonymous usage data.", "Google Analytics"],
        ["Preference cookies", "Remember settings such as language and theme.", "User preferences"],
        ["Marketing cookies", "Are used to display relevant ads and measure their effectiveness.", "Personalised advertising"],
      ],
      title: "Manage consent", notice: "You can change cookie preferences at any time. Disabling some cookies may affect website functionality.", active: "On", inactive: "Off", provider: "Provider", save: "Save preferences", reject: "Reject optional cookies", saved: "Preferences saved.", failed: "Preferences could not be saved in this browser.",
    },
  },
  zh: {
    titles: { privacy: "隐私政策", terms: "服务条款", cookies: "Cookie 设置" },
    updated: "最后更新于 2026 年 6 月", home: "返回首页",
    privacy: [
      ["我们收集的信息", "我们仅收集提供服务所必需的最低限度数据，可能包括以下内容。", ["浏览数据，如 IP 地址、浏览器类型和访问页面", "Cookie 和类似技术", "您通过联系表格或电子邮件自愿提供的信息"]],
      ["我们如何使用您的信息", "收集的信息用于以下用途。", ["改善网站内容与用户体验", "分析流量与使用模式", "回应请求", "履行法律义务"]],
      ["第三方服务", "本网站可能使用第三方服务，例如提供地图和位置数据的 Google 地图、用于流量分析的 Google Analytics，以及提供图片的 Unsplash。这些服务各有自己的隐私政策。"],
      ["您的权利", "根据《通用数据保护条例》（GDPR）及相关法规，您享有以下权利。", ["访问您的个人数据", "要求更正或删除", "反对处理个人数据", "向监管机构投诉"]],
    ],
    terms: [
      ["访问和使用", "访问和使用本网站，即表示您同意受这些服务条款的约束。"],
      ["内容使用", "本网站所有内容仅供参考。本旅行指南独立运营，与景点、政府机构或商业运营商均无关联。"],
      ["信息准确性", "我们力求提供准确及时的信息，但无法保证信息的完整性或准确性。行程安排、条件及服务可能随时变更。出行前请通过官方渠道核实重要信息。"],
      ["知识产权", "本网站设计与原创内容受版权保护。来自 Unsplash 的图片按其许可使用。Google 地图数据适用 Google 的服务条款。"],
      ["责任限制", "本网站按现状提供，不作任何担保。因使用本网站信息而导致的损失，包括依据网站内容作出的旅行决定所造成的损失，本站概不负责。"],
    ],
    cookies: {
      intro: "我们使用 Cookie 来改善浏览体验。您可以在下方管理偏好。",
      categories: [
        ["必要 Cookie", "网站正常运行所必需，无法停用。", "始终启用"],
        ["分析 Cookie", "收集匿名使用数据，帮助我们了解访客如何使用网站。", "Google Analytics"],
        ["偏好 Cookie", "记住语言、主题等设置。", "用户偏好"],
        ["营销 Cookie", "用于展示相关广告并衡量广告效果。", "个性化广告"],
      ],
      title: "同意管理", notice: "您可以随时调整 Cookie 偏好。停用某些 Cookie 可能影响网站功能。", active: "启用", inactive: "停用", provider: "提供者", save: "保存偏好", reject: "拒绝可选 Cookie", saved: "偏好已保存。", failed: "当前浏览器无法保存偏好。",
    },
  },
  es: {
    titles: { privacy: "Política de privacidad", terms: "Condiciones del servicio", cookies: "Configuración de cookies" },
    updated: "Última actualización en junio de 2026", home: "Volver al inicio",
    privacy: [
      ["Información que recopilamos", "Recopilamos solo los datos mínimos necesarios para prestar el servicio. Pueden incluir lo siguiente.", ["Datos de navegación como la dirección IP, el tipo de navegador y las páginas visitadas", "Cookies y tecnologías similares", "Información que envías voluntariamente por correo electrónico o mediante un formulario de contacto"]],
      ["Cómo utilizamos la información", "Usamos los datos recopilados para lo siguiente.", ["Mejorar el contenido y la experiencia de uso", "Analizar el tráfico y los patrones de uso", "Responder a solicitudes", "Cumplir nuestras obligaciones legales"]],
      ["Servicios de terceros", "El sitio puede utilizar Google Maps para mapas y ubicaciones, Google Analytics para analizar el tráfico y Unsplash para imágenes. Estos servicios tienen sus propias políticas de privacidad."],
      ["Tus derechos", "El Reglamento General de Protección de Datos (RGPD) y las normas relacionadas reconocen, entre otros, los siguientes derechos.", ["Acceder a tus datos personales", "Solicitar su rectificación o supresión", "Oponerte al tratamiento", "Presentar una reclamación ante una autoridad de control"]],
    ],
    terms: [
      ["Acceso y uso", "Al acceder a este sitio web y utilizarlo, aceptas estas condiciones del servicio."],
      ["Uso del contenido", "Todo el contenido se ofrece únicamente con fines informativos. Esta guía de viaje independiente no está vinculada a atracciones, organismos públicos ni operadores comerciales."],
      ["Exactitud de la información", "Procuramos ofrecer información precisa y actualizada, pero no podemos garantizar que sea completa o exacta. Los horarios, las condiciones y los servicios pueden cambiar sin previo aviso. Verifica la información importante en fuentes oficiales antes de viajar."],
      ["Propiedad intelectual", "El diseño y el contenido original del sitio están protegidos por derechos de autor. Las imágenes de Unsplash se usan conforme a su licencia. Los datos de Google Maps se rigen por las condiciones de Google."],
      ["Limitación de responsabilidad", "El sitio se ofrece tal como está, sin garantías. No nos hacemos responsables de las pérdidas derivadas del uso de la información del sitio, incluidas las decisiones de viaje basadas en su contenido."],
    ],
    cookies: {
      intro: "Usamos cookies para mejorar tu experiencia de navegación. Puedes administrar tus preferencias a continuación.",
      categories: [
        ["Cookies necesarias", "Son imprescindibles para el funcionamiento del sitio y no se pueden desactivar.", "Siempre activas"],
        ["Cookies de análisis", "Recopilan datos anónimos de uso para ayudarnos a entender cómo se utiliza el sitio.", "Google Analytics"],
        ["Cookies de preferencias", "Recuerdan opciones como el idioma y el tema.", "Preferencias del usuario"],
        ["Cookies de marketing", "Se utilizan para mostrar publicidad relevante y medir su eficacia.", "Publicidad personalizada"],
      ],
      title: "Gestión del consentimiento", notice: "Puedes cambiar tus preferencias de cookies en cualquier momento. Desactivar ciertas cookies puede afectar al funcionamiento del sitio.", active: "Activada", inactive: "Desactivada", provider: "Proveedor", save: "Guardar preferencias", reject: "Rechazar cookies opcionales", saved: "Preferencias guardadas.", failed: "No se pudieron guardar las preferencias en este navegador.",
    },
  },
  qu: {
    titles: { privacy: "Sapanchasqa willakuykunapa kamachiy", terms: "Llamk’achinapaq kamachiykuna", cookies: "Cookie wakichiy" },
    updated: "2026 watap junio killanpi musuqchasqa", home: "Qallariy p’anqaman kutiy",
    privacy: [
      ["Huñusqayku willakuykuna", "Kay llamk’ayta qunapaq munasqa willakuyllata huñuyku. Kaykunam kanman.", ["IP yupay, maskana kaq, qhawasqa p’anqakuna", "Cookie nisqakuna, chayman rikch’akuq llamk’anakunapas", "Correo electrónico utaq tinkinapaq p’anqa nisqawan munaspa apachimusqayki willakuykuna"]],
      ["Willakuykiwan imata ruwanchik", "Huñusqa willakuykunata kaykunapaq llamk’achiyku.", ["P’anqapa willakuyninta, llamk’achiyta ima allichanapaq", "Hayk’aq, imayna p’anqapi purisqankuta yachanapaq", "Tapukuykunata kutichinapaq", "Kamachiykunata hunt’achinapaq"]],
      ["Huk runakunapa llamk’ayninkuna", "Kay p’anqaqa Google Maps nisqata mapakunapaq, Google Analytics nisqata p’anqapa llamk’achiyninta qhawanapaq, Unsplash nisqata retratukunapaq llamk’achinman. Sapankam kikinpa pakay kamachiyniyuq."],
      ["Hayñiykikuna", "GDPR nisqa kamachiy, huk hina kamachiykunapas, kay hayñikunata qun.", ["Kikinpa willakuyniykita qaway", "Allichanata utaq qulluchinata mañay", "Willakuyki llamk’achiyta mana munasqaykita willay", "Qhawaq kamachiqman quejata apachiy"]],
    ],
    terms: [
      ["Yaykuy, llamk’achiy", "Kay sitio web nisqaman yaykuspa llamk’achispapas, kay kamachiykunata chaskinki."],
      ["Willakuykunata llamk’achiy", "Kay willakuykuna riqsinallapaqmi. Kay puriy yanapakuq p’anqaqa kikinmanta llamk’an; watuna kitikunawan, suyu kamachiqkunawan, qhatuq empresakunawanpas mana hukllachu."],
      ["Willakuykunap chiqap kasqan", "Chiqap, kunan pacha willakuyta qunapaq llamk’ayku, ichaqa llapan hunt’asqachu chiqapchu kasqanta mana hunt’achiyta atiykuchu. Horakuna, imayna kay, llamk’aykunapas musuqyankuman mana ñawpaq willakuywan. Manaraq rispa kamachiqpa willakuyninta qaway."],
      ["Ruraqpa hayñin", "Kay p’anqapa rikch’aynin, kikin rurasqa qillqankunapas ruraqpa hayñinwan waqaychasqa. Unsplashmanta retratukuna paypa saqisqanman hina llamk’achisqa. Google Maps willakuykunata Googlepa kamachiykunan qhawan."],
      ["Ruwasqamanta mana llapan kutichiy", "Kay p’anqata imayna kasqanman hina quykiku, mana garantíayuq. Kay p’anqap willakuyninta llamk’achispa qulluq kaptin, chay willakuywan puriymanta akllasqaykimantapas, mana ñuqaykuchu kutichiyku."],
    ],
    cookies: {
      intro: "Maskaspa aswan allin llamk’anaykipaq cookie nisqakunata llamk’achiyku. Uraypi munasqaykita wakichiy.",
      categories: [
        ["Munasqa cookiekuna", "P’anqa allin llamk’anapaq munakun. Mana wañuchiyta atinkichu.", "Sapa kuti llamk’aq"],
        ["Qhawarina cookiekuna", "Mana sutiyuq llamk’achiy willakuyta huñunku imayna p’anqapi purisqankuta yachanapaq.", "Google Analytics"],
        ["Akllay cookiekuna", "Rimayta, p’anqapa rikch’ayninta ima yuyarinku.", "Llamk’achiqpa akllasqan"],
        ["Anuncio cookiekuna", "Anunciokunata rikuchinku, imayna llamk’asqankuta qhawanku.", "Akllasqa anunciokuna"],
      ],
      title: "Saqiyta wakichiy", notice: "Hayk’aqpas cookie akllayniykita tikrayta atinki. Wakin cookiekunata wañuchispa, p’anqap llamk’aynin tikrakunman.", active: "Llamk’aq", inactive: "Mana llamk’aq", provider: "Quq", save: "Akllasqaykita waqaychay", reject: "Akllana cookiekunata mana chaskiy", saved: "Akllasqayki waqaychasqa.", failed: "Kay maskanapi akllasqaykita waqaychayta mana atikunqachu.",
    },
  },
};
