export const guideSlugs = ["tickets-and-hours", "temple-of-the-sun", "train-to-machu-picchu"] as const;
export const guideLocales = ["en", "es", "zh"] as const;
export type GuideSlug = (typeof guideSlugs)[number];
export type GuideLocale = (typeof guideLocales)[number];

type Guide = {
  title: string;
  intro: string;
  sections: [string, string][];
  faq: [string, string][];
};

export const guideLabels = {
  en: { heading: "Plan your visit", home: "Archaeological site", map: "Open in Google Maps", sources: "Official sources", faq: "Frequently asked questions", checked: "Sources checked on November 20, 2026" },
  es: { heading: "Planifica tu visita", home: "Parque arqueológico", map: "Abrir en Google Maps", sources: "Fuentes oficiales", faq: "Preguntas frecuentes", checked: "Fuentes consultadas el 20 de noviembre de 2026" },
  zh: { heading: "规划游览", home: "考古遗址首页", map: "在 Google 地图中打开", sources: "官方资料", faq: "常见问题", checked: "资料核对日期 2026 年 11 月 20 日" },
};

export const guidePlaces = {
  "tickets-and-hours": "Parque Arqueológico de Ollantaytambo, Urubamba, Cusco, Perú",
  "temple-of-the-sun": "Templo del Sol, Parque Arqueológico de Ollantaytambo, Cusco, Perú",
  "train-to-machu-picchu": "Estación de Tren Ollantaytambo, Av. Ferrocarril, Ollantaytambo, Cusco, Perú",
};

export const guideSources = {
  "tickets-and-hours": [
    ["COSITUC · Tarifario", "https://cosituc.gob.pe/tarifario-2/"],
    ["COSITUC · Preguntas frecuentes", "https://cosituc.gob.pe/preguntas-frecuentes/"],
    ["DDC Cusco · Ollantaytambo", "https://www.culturacusco.gob.pe/parques/ollantaytambo/"],
  ],
  "temple-of-the-sun": [
    ["MINCETUR · Ollantaytambo", "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=938"],
    ["DDC Cusco · Ollantaytambo", "https://www.culturacusco.gob.pe/parques/ollantaytambo/"],
  ],
  "train-to-machu-picchu": [
    ["PeruRail", "https://www.perurail.com/train-schedules-and-frequencies/"],
    ["Inca Rail", "https://incarail.com/"],
    ["Ministerio de Cultura · Machupicchu", "https://tuboleto.cultura.pe/"],
  ],
};

export const guides: Record<GuideLocale, Record<GuideSlug, Guide>> = {
  en: {
    "tickets-and-hours": {
      title: "Ollantaytambo Ruins Tickets and Opening Hours",
      intro: "Choose the Cusco Tourist Ticket for the sites you plan to visit, then check the archaeological park’s opening hours before leaving for the Sacred Valley.",
      sections: [
        ["Which ticket covers the ruins?", "COSITUC lists Ollantaytambo on the partial Circuit III ticket with Pisac, Chinchero and Moray. The published foreign visitor rate is S/70 for two days. The full ticket is S/130 for ten days and covers the other circuits as well. Check the official tariff for eligibility and any changes."],
        ["When can you enter?", "DDC Cusco publishes visiting hours of 07:00–16:30. Check for changes on your travel day and leave time for the upper terraces. A late arrival gives you less time to follow the marked route and return from the upper sector."],
        ["How to plan your visit", "Bring ID and carry your ticket for each stop. COSITUC says validity starts on the purchase date, so group Circuit III sites into two consecutive days. The park also describes a short, level circuit with a ramp at the entrance and an estimated 35-minute visit. Ask staff which route is open on arrival."],
      ],
      faq: [["Can I use Circuit III for Machu Picchu?", "Circuit III covers the four named Sacred Valley sites. Machu Picchu admission is purchased separately."], ["Do I need to buy the tourist ticket in advance?", "COSITUC advises buying it when you start visiting because its validity begins on the purchase date."]],
    },
    "temple-of-the-sun": {
      title: "Temple of the Sun at Ollantaytambo",
      intro: "Follow the terraces to the upper archaeological sector, where six upright monoliths reveal how Inca builders worked with exceptionally large stones.",
      sections: [
        ["From the terraces to the temple", "Start at the archaeological park entrance and follow the signed visitor route. Where access permits, climb beside the terraces toward the enclosure of ten niches and continue to the temple sector. Check the route with staff if any stairs or passages are closed."],
        ["What to look for in the stonework", "At the Wall of the Six Monoliths, compare the tall blocks and their narrow stone joints. Look for traces of stepped carving, then contrast the dressed masonry with the retaining walls below. The park’s ceremonial buildings, terraces and water channels served different purposes within the same Inca complex."],
        ["Photography and the descent", "From the designated path, frame the terraces and valley together before using a tighter view for the joints and carvings. Take photos from places where others can pass. Use the marked descent and check DDC Cusco rules for commercial photography and drones."],
      ],
      faq: [["Is the temple inside the paid ruins?", "Yes. It is in the upper sector of the Ollantaytambo archaeological park."], ["Does the level circuit reach the temple?", "The temple is uphill. Ask park staff what the short level circuit covers and whether access to the upper route is open."]],
    },
    "train-to-machu-picchu": {
      title: "Ollantaytambo Train to Machu Picchu",
      intro: "Plan the walk from the archaeological park to Ollantaytambo station and check where your train arrives before arranging Machu Picchu admission.",
      sections: [
        ["Book the right departure", "Check the station and service on your ticket. PeruRail lists regular trains from Ollantaytambo to Machu Picchu Pueblo and bimodal services beginning with a bus transfer from another departure point. Match the boarding location to the itinerary on your confirmation."],
        ["Walk from the ruins to the station", "Exit the archaeological park toward the town and follow the station map pin toward Avenida Ferrocarril. Check the walking route and leave extra time for luggage, uneven paving and the operator’s required check-in. With an early departure, visiting the ruins the previous afternoon gives you more time at the park."],
        ["From Machu Picchu Pueblo to the citadel", "The train arrives in Machu Picchu Pueblo, also called Aguas Calientes. Budget time to continue uphill to the archaeological complex and match your arrival to the admission slot. Check return train details before leaving the station."],
      ],
      faq: [["Does the train fare include entry to the citadel?", "Check your booking inclusions. A rail-only ticket covers the train, and the citadel has a separate timed admission."], ["Can I visit the ruins before boarding?", "Yes, if your schedule allows for the park visit, the walk to the station and the operator’s check-in time."]],
    },
  },
  es: {
    "tickets-and-hours": {
      title: "Entradas y horarios de las ruinas de Ollantaytambo",
      intro: "Elige el Boleto Turístico del Cusco según los sitios que quieras visitar y revisa el horario del parque antes de salir hacia el Valle Sagrado.",
      sections: [
        ["Qué boleto incluye el parque", "El boleto parcial del Circuito III incluye Ollantaytambo, Pisac, Chinchero y Moray. COSITUC publica una tarifa de S/70 para visitantes extranjeros y dos días de vigencia. El boleto integral cuesta S/130, dura diez días y cubre los demás circuitos. Consulta el tarifario oficial para conocer las condiciones vigentes."],
        ["Horario de ingreso", "La Dirección Desconcentrada de Cultura de Cusco publica un horario de 07:00 a 16:30. Comprueba si hay cambios el día de tu visita y reserva tiempo para subir y bajar de los andenes antes del cierre."],
        ["Cómo organizar la visita", "Lleva tu documento de identidad y conserva el boleto para cada ingreso. Su vigencia empieza el día de la compra, así que agrupa los sitios del Circuito III en dos días consecutivos. El parque también describe un circuito corto y llano de unos 35 minutos con rampa de acceso. Pregunta al personal qué recorrido está habilitado."],
      ],
      faq: [["¿El Circuito III incluye Machu Picchu?", "El Circuito III cubre los cuatro sitios mencionados del Valle Sagrado. Machu Picchu requiere una entrada aparte."], ["¿Debo comprar el boleto con anticipación?", "COSITUC aconseja comprarlo al empezar las visitas, ya que la vigencia comienza el día de la compra."]],
    },
    "temple-of-the-sun": {
      title: "Templo del Sol de Ollantaytambo",
      intro: "Sube por los andenes hasta el sector alto del parque, donde seis monolitos permiten observar cómo los incas ensamblaron bloques de gran tamaño.",
      sections: [
        ["De los andenes al templo", "Parte desde el ingreso del parque y sigue la señalización. Cuando el tramo esté habilitado, sube junto a los andenes hacia el recinto de las diez hornacinas y continúa al sector del templo. Consulta al personal si alguna escalera o paso está cerrado."],
        ["Qué observar en los muros", "En el Muro de los Seis Monolitos, fíjate en las piezas estrechas que unen los grandes bloques y en las huellas de tallas escalonadas. Compara ese acabado con los muros de contención de los andenes. Las construcciones ceremoniales, los andenes y los canales cumplían funciones distintas en el conjunto inca."],
        ["Fotos y regreso", "Desde el sendero habilitado puedes encuadrar los andenes con el valle de fondo y luego acercar el encuadre para mostrar las juntas. Deja espacio para el paso de otros visitantes, baja por el recorrido indicado y consulta las reglas de la DDC Cusco para drones y fotografía comercial."],
      ],
      faq: [["¿El templo está dentro del recinto con entrada?", "Sí. Se encuentra en el sector alto del Parque Arqueológico de Ollantaytambo."], ["¿El circuito llano llega al templo?", "El templo está en la parte alta. Pregunta al personal qué sectores cubre el circuito corto y si está habilitada la subida."]],
    },
    "train-to-machu-picchu": {
      title: "Tren de Ollantaytambo a Machu Picchu",
      intro: "Organiza el traslado entre el parque arqueológico y la estación de Ollantaytambo antes de elegir el horario de ingreso a Machu Picchu.",
      sections: [
        ["Elige el punto de embarque", "Revisa la estación y el tipo de servicio de tu billete. PeruRail distingue los trenes regulares que salen de Ollantaytambo hacia Machu Picchu Pueblo de los servicios bimodales que empiezan con un traslado en autobús desde otro punto."],
        ["Del parque a la estación", "Sal del parque en dirección al pueblo y sigue el mapa de la estación hacia la avenida Ferrocarril. Deja margen para el equipaje, el pavimento irregular y la antelación de embarque indicada por tu operador. Para un tren temprano, puedes visitar el parque la tarde anterior."],
        ["De Machu Picchu Pueblo a la ciudadela", "El tren llega a Machu Picchu Pueblo, también llamado Aguas Calientes. Calcula el tiempo del traslado hasta el recinto arqueológico según la franja de ingreso de tu entrada. Verifica los datos del tren de regreso antes de salir de la estación."],
      ],
      faq: [["¿El tren incluye la entrada a la ciudadela?", "Consulta las condiciones de tu reserva. Un billete solo de tren cubre el traslado y la ciudadela tiene un ingreso con horario propio."], ["¿Puedo visitar las ruinas antes de tomar el tren?", "Sí, si tienes tiempo para recorrer el parque, llegar a la estación y presentarte con la antelación indicada por el operador."]],
    },
  },
  zh: {
    "tickets-and-hours": {
      title: "奥扬泰坦博遗址门票和开放时间",
      intro: "先按圣谷行程选购库斯科旅游通票，再核对奥扬泰坦博考古公园的入场时段。",
      sections: [
        ["选哪种门票", "库斯科旅游通票第三线路包含奥扬泰坦博、皮萨克、钦切罗和莫雷。COSITUC 公布的外国游客票价为 70 秘鲁索尔，有效期两天。全通票为 130 索尔，有效期十天，另含其他线路。票价和适用条件以官方票价表为准。"],
        ["开放时间", "库斯科文化主管部门公布的参观时段为 07:00–16:30。出发当天请核对是否临时调整。计划走上层台地时，要把登阶、停留和下行的时间都算进去。"],
        ["安排游览", "携带身份证件并保留通票。通票从购买当天起算，可把第三线路的景点排在连续两天。公园另有一条约 35 分钟的平缓短线，入口设有坡道。到场可请工作人员确认当天开放路段。"],
      ],
      faq: [["第三线路通票包含马丘比丘吗？", "第三线路涵盖上述四处圣谷景点，马丘比丘须另购门票。"], ["通票需要提前买吗？", "COSITUC 建议在开始参观时购买，因为有效期从购票当天开始。"]],
    },
    "temple-of-the-sun": {
      title: "奥扬泰坦博太阳神庙与六块巨石",
      intro: "沿台地登上考古公园的上层区域，可以近距离观察六块直立巨石及印加工匠留下的石材接缝。",
      sections: [
        ["从梯田走到神庙", "从考古公园入口沿现场标示前进。台阶开放时，可沿台地登至十壁龛建筑附近，再走向神庙区。遇到封闭台阶或通道，请向工作人员询问当天路线。"],
        ["观察巨石与台地", "在六块巨石组成的墙前，注意大石块之间细窄的嵌石和石面阶梯形雕刻的痕迹。再与下方台地的挡墙对照。礼仪建筑、台地和水渠在这处印加遗址中各有用途。"],
        ["拍摄角度与下行", "在指定步道上，可先把台地和谷地收入同一画面，再用近景记录石墙接缝。拍摄时给其他游客留出通行空间，沿标示下行。商用拍摄和无人机的规定可向库斯科文化主管部门核对。"],
      ],
      faq: [["太阳神庙在遗址的检票范围内吗？", "是。太阳神庙位于考古公园上层。"], ["平缓短线能到太阳神庙吗？", "神庙在高处。可向工作人员确认平缓短线的范围和上层路线的开放情况。"]],
    },
    "train-to-machu-picchu": {
      title: "从奥扬泰坦博搭火车去马丘比丘",
      intro: "把遗址游览、步行到车站和马丘比丘预约时段放在同一份行程里核对。",
      sections: [
        ["确认上车地点", "先看车票标明的车站和服务类型。PeruRail 有从奥扬泰坦博开往马丘比丘镇的直达铁路班次，也有从其他地点先搭巴士再转火车的联运。出发和报到地点以订单为准。"],
        ["从遗址步行到火车站", "出考古公园后往镇区走，再按车站地图前往铁路大道。携带行李时多留些时间，并把运营方要求的提前报到时间算进去。若搭清晨班次，可在前一天下午参观遗址。"],
        ["从马丘比丘镇到遗址", "火车到达马丘比丘镇，也叫热水镇。上山前往考古遗址还需另留交通时间，按门票预约时段倒推抵达时间。离开车站前核对返程车票上的时间和地点。"],
      ],
      faq: [["火车票包含马丘比丘门票吗？", "请查看预订包含的项目。单独购买的火车票用于乘车，马丘比丘遗址另有分时入场门票。"], ["能先看遗址再赶火车吗？", "可以，前提是留足参观、步行和提前报到的时间。"]],
    },
  },
};

export const practicalLabels = {
  en: { about: "Management and visitor access", basic: "Basic information", location: "Location", transport: "Getting there", reviews: "Visitor ratings and reviews", current: "See current ratings and reviews on Google Maps", check: "Official visitor information" },
  es: { about: "Gestión y acceso", basic: "Información básica", location: "Ubicación", transport: "Cómo llegar", reviews: "Valoraciones y opiniones", current: "Ver valoraciones y opiniones actuales en Google Maps", check: "Información oficial para visitantes" },
  zh: { about: "管理主体与参观安排", basic: "基础信息", location: "地点", transport: "交通方式", reviews: "游客评分与评价", current: "在 Google 地图查看最新评分和评价", check: "官方参观信息" },
};

export const guidePractical: Record<GuideLocale, Record<GuideSlug, { about: string; transport: string }>> = {
  en: {
    "tickets-and-hours": { about: "DDC Cusco manages the archaeological park and publishes visitor rules and hours. COSITUC administers the Cusco Tourist Ticket used for entry.", transport: "From Cusco, take the road via Chinchero and Urubamba or via Pisac and Calca. From Ollantaytambo town, walk to the signed archaeological entrance." },
    "temple-of-the-sun": { about: "The Temple of the Sun lies within the archaeological park managed by DDC Cusco. On-site staff set the upper-sector routes that are open to visitors.", transport: "Arrive at the main park entrance in Ollantaytambo, then follow the permitted stair route to the temple sector. Check with staff about closures." },
    "train-to-machu-picchu": { about: "Rail operators manage passenger check-in and boarding for their booked services. The Ministry of Culture manages admission to the Machu Picchu citadel separately.", transport: "From the town center, descend to Avenida Ferrocarril. Confirm your operator’s boarding point and reporting time before leaving the park or your accommodation." },
  },
  es: {
    "tickets-and-hours": { about: "La DDC Cusco gestiona el parque arqueológico y publica sus horarios y normas. COSITUC administra el Boleto Turístico del Cusco.", transport: "Desde Cusco se puede llegar por Chinchero y Urubamba o por Pisac y Calca. Desde el pueblo, camina hasta el acceso señalizado del parque." },
    "temple-of-the-sun": { about: "El Templo del Sol forma parte del parque arqueológico que gestiona la DDC Cusco. El personal del parque indica qué rutas del sector alto están abiertas.", transport: "Llega a la entrada principal del parque y sigue la escalinata autorizada hacia el sector del templo. Consulta al personal si hay cierres." },
    "train-to-machu-picchu": { about: "Cada operador ferroviario coordina el registro y el embarque de su servicio. El Ministerio de Cultura gestiona el acceso a la ciudadela de Machu Picchu por separado.", transport: "Desde el centro, baja hacia la avenida Ferrocarril. Confirma el punto y la hora de presentación antes de salir del parque o del alojamiento." },
  },
  zh: {
    "tickets-and-hours": { about: "库斯科文化主管部门（DDC Cusco）管理考古公园并发布开放时间与参观规定。入场使用的库斯科旅游通票由 COSITUC 管理。", transport: "从库斯科可经钦切罗、乌鲁班巴前往，也可经皮萨克、卡尔卡抵达。到奥扬泰坦博镇后，步行至有标示的考古公园入口。" },
    "temple-of-the-sun": { about: "太阳神庙位于库斯科文化主管部门管理的考古公园内。游客可向公园工作人员查问上层路线的当天开放情况。", transport: "到奥扬泰坦博考古公园主入口后，按现场指示沿开放台阶前往神庙区。遇到封闭路段时向工作人员核对替代路线。" },
    "train-to-machu-picchu": { about: "各铁路运营方负责其班次的报到和乘车安排。马丘比丘遗址的入场由秘鲁文化部另行管理。", transport: "从镇中心往铁路大道下行。离开考古公园或住宿地前，先核对车票上的报到地点和时间。" },
  },
};

export const guideRatings: Partial<Record<GuideSlug, { score: number; count: number; source: string }>> = {
  "tickets-and-hours": {
    score: 4.8,
    count: 26840,
    source: "https://www.google.com/travel/hotels/entity/ChoI2MyXw73e-aiuARoNL2cvMTFnN3owaHh3ORAB",
  },
  "temple-of-the-sun": {
    score: 4.8,
    count: 1014,
    source: "https://www.google.com/travel/hotels/entity/ChkI48Oh-57lrIYsGg0vZy8xMWZqNHZnamtjEAE?ap=ugEGcHJpY2Vz&ts=CAEaBAoCGgAqBAoAGgA",
  },
};
