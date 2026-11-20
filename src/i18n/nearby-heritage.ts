const culture = "https://www.culturacusco.gob.pe";
const inventory = "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=";
const barroco = "https://rutadelbarrocoandino.com/";

export const heritagePlaces = [
  ["choqana", "Choqana Archaeological Site", "ollanta", "Sitio Arqueológico Choqana, distrito de Ollantaytambo, Urubamba, Cusco", "park", "https://mapcarta.com/N3518286573",
    "Choqana stands on the south side of the Urubamba valley east of Ollantaytambo. Its stone enclosures belong to the wider archaeological landscape along the river approach to the Inca settlement.",
    "Look at the short stretches of wall and openings in relation to the narrow valley corridor. This is a small ruin set into a hillside, distinct from the broad terraces at the main park.",
    "Arrange the public walking approach locally in Ollantaytambo. Ask your guide to confirm the safe access, exact meeting point and permitted return along the river corridor.",
    "Photograph from the established path where the masonry and slope are both visible. Keep clear of exposed edges and loose stone.",
    "Can I enter Choqana through the main archaeological park gate?", "Plan it as a separate outing. Ask local staff about the current approach before leaving town."],
  ["qespiwanka", "Qespiwanka Museum", "valley", "Museo de Qespiwanka, Casa Hacienda Pino, Urubamba, Cusco", "museum", culture + "/post/museos/museo-de-qespiwanka/",
    "The museum in Casa Hacienda Pino presents the Qhapaq Ñan, or Andean road network, through five galleries. It uses Urubamba’s position in the valley to connect road building with the estate of Wayna Qhapaq and later local history.",
    "Compare the maps documenting different periods of the road system. In the final galleries, look for the transition from the Inca estate to the hacienda and modern traditions.",
    "Ask for Museo de Qespiwanka at Casa Hacienda Pino in Urubamba. Confirm the public entrance and visitor schedule before setting out from the town centre.",
    "Use the public entrance for a view of the hacienda setting. Ask museum staff about photographs in galleries or during temporary exhibitions.",
    "What does the museum explain beyond the roads?", "The galleries also introduce the palace of Qespiwanka, hacienda history and living customs in Urubamba."],
  ["sayri-tupac", "Palace of Sayri Túpac", "valley", "Palacio de Sayri Túpac, esquina Plaza Manco II y Calle San Martín, Yucay, Cusco", "park", inventory + "1779",
    "On the corner of Plaza Manco II and Calle San Martín in Yucay, the historic House of Sayri Túpac is a short architectural stop within the village. The corner and doorway are the easiest features to locate from public space.",
    "Compare the stone doorway with the adjoining walls and the lines of the square. Note how the historic building occupies a corner of a working village rather than a separate park.",
    "From Urubamba, use the valley road to Yucay and get off near Plaza Manco II. The tourism inventory puts the road approach from Urubamba at about 3.1 km.",
    "Take an oblique view from the public corner to include both the doorway and wall. Avoid blocking the adjoining street.",
    "Is the palace the same visit as the Yucay village walk?", "The palace is one named monument in the village. Its corner makes a good short stop before continuing to the public lanes and field edges."],
  ["huaro", "San Juan Bautista Church of Huaro", "south", "Templo San Juan Bautista de Huaro, Plaza de Armas s/n, Huaro, Quispicanchi, Cusco", "church", inventory + "1821",
    "The church stands on Huaro’s main square. Started around the turn of the seventeenth century, it combines a restrained exterior of stone, adobe and tile with an interior known for narrative murals.",
    "Begin with the proportions of the façade. Inside, if open, take time to read the mural program as a sequence and note how painted scenes occupy different parts of the nave.",
    "Drive the South Valley road to Huaro and ask for Plaza de Armas. If continuing to Canincunca, confirm a separate stop at the chapel by the Urcos lagoon.",
    "Across the square, frame the façade together with the paving and village edge. Follow the route staff’s rules for interior images.",
    "Is this the same stop as Andahuaylillas?", "Huaro is a separate church with its own named plaza entrance. Ask which stops the current route ticket covers."],
  ["canincunca", "Chapel of the Purified Virgin of Canincunca", "south", "Capilla Virgen Purificada de Canincunca, Huaro, Quispicanchi, Cusco", "church", inventory + "1822",
    "The small seventeenth-century chapel overlooks the Urcos lagoon near a pass on the Cusco–Puno corridor. The tourism inventory records a prior Wari ceremonial site at this location.",
    "View the modest exterior and the landscape that gives the chapel its prominence. If the interior is open, compare its painted decoration with the larger nave at Huaro.",
    "Use the chapel’s own pin on the road near Urcos and confirm a safe signed drop-off. Keep the visit distinct from Huaro’s main square.",
    "Photograph the chapel with the lagoon setting from permitted ground. Check restrictions at the door before taking interior photos.",
    "Is the chapel down in Huaro’s main square?", "The chapel is a separate roadside stop near the Urcos lagoon. Navigate to Capilla Virgen Purificada de Canincunca."],
  ["inkariy", "Museo Inkariy", "valley", "Museo Inkariy, Carretera Cusco–Calca–Urubamba km 53, Calca, Cusco", "museum", "https://museos.cultura.pe/museos/museo-inkariy",
    "Museo Inkariy presents several pre-Hispanic societies through themed pavilions, with reconstructed settings that help visitors compare ways of living across regions and periods.",
    "Read the introductory map and timeline before each pavilion. Compare an object, technique or social practice across two cultures rather than rushing through the scenes.",
    "Arrive by the Calca–Urubamba road and ask for the museum stop at kilometre 53, then use the signed public entrance.",
    "The roadside frontage and entrance sculpture make useful exterior views. Ask before using a camera in the exhibition spaces.",
    "Is this the same as Museo Inka in Cusco?", "Museo Inkariy is in the Sacred Valley near Calca. The university’s Museo Inka is in central Cusco."],
] as const;

type Plan = [string, string, string, string, string, [string, string, string], string, string];

export const heritagePlans: Record<string, Plan> = {
  choqana: ["Stone enclosures on the river approach to Ollantaytambo","Allow a separate morning with a confirmed local approach","Uneven hillside path",
    "Confirm the public approach before leaving town. If the riverbank route is unsuitable, visit the main park or Pinkuylluna separately.",
    "The layout makes most sense when viewed with the river corridor below. Archaeological writing describes Choqana alongside other small sites guarding approaches to Ollantaytambo.",
    ["Agree on the starting point with a local guide.", "Follow the permitted approach and examine the walls from stable ground.", "Return by the verified route and reconnect with your pickup."],
    "Leave rail corridors, fields and unstable masonry outside your route.", "Use Ollantaytambo as a base for an early start and an unhurried return."],
  qespiwanka: ["Five galleries on the Inca road network in a former hacienda","60–90 minutes","Town streets and indoor galleries",
    "Add the museum before a valley road trip to understand where Urubamba fits into the historical network.",
    "The Ministry of Culture restored Casa Hacienda Pino for the museum. The five galleries move from predecessors of the Qhapaq Ñan to its Inca expansion, the valley network and local life.",
    ["Start at the Casa Hacienda Pino visitor entrance.", "Follow the galleries from early Andean networks to the Qespiwanka estate.", "Finish with Casa Pino and local traditions; ask about any temporary exhibition."],
    "Confirm admission and opening before travel, especially if your plans depend on a short stop.", "Stay in central Urubamba for a short local transfer and onward valley trips."],
  "sayri-tupac": ["A historic doorway at Plaza Manco II in Yucay","25–45 minutes","Public streets and plaza paving",
    "Combine this exterior heritage stop with a walk through the Yucay village lanes.",
    "The Ministry of Culture’s monument register identifies the House of Sayri Túpac at the Plaza Manco II and Calle San Martín corner, with a 1991 listing.",
    ["Arrive at Plaza Manco II.", "Find the named corner and compare doorway and adjacent masonry.", "Continue through the public streets or return to the valley-road pickup."],
    "Keep the pavement and nearby doorways clear. Confirm any interior access locally.", "Stay in Yucay for a village walk or Urubamba for broader transport options."],
  huaro: ["Andean Baroque murals behind the village church façade","45–75 minutes","Paved plaza and church entrance",
    "Allow time for the interior interpretation rather than treating Huaro as a quick façade stop.",
    "MINCETUR dates construction to the late sixteenth and early seventeenth centuries. The murals give the nave a distinct character within the Andean Baroque route.",
    ["Cross the plaza for an exterior overview.", "Confirm ticket terms and visit the nave if open.", "Return to the plaza and arrange the separate drive to Canincunca."],
    "Respect worship access and interior photography restrictions.", "Use Cusco as a base for a South Valley road day that includes Huaro and nearby churches."],
  canincunca: ["A small Baroque chapel at the pass above the Urcos lagoon","25–45 minutes","Roadside access and chapel forecourt",
    "Pair the chapel with Huaro when both entrances are open. Allow a separate stop so you can see the chapel and the lagoon setting together.",
    "The name Canincunca refers to a pass or neck, a fitting description of its place on the route southeast of Cusco.",
    ["Use the signed roadside entrance.", "View the building in the landscape before entering if access is open.", "Return to the designated roadside pickup."],
    "Coordinate safe parking at the chapel and use permitted viewpoints.", "Base yourself in Cusco or plan a confirmed stop if already traveling southeast."],
  inkariy: ["Pre-Hispanic societies explored pavilion by pavilion","90–120 minutes","Museum paths and indoor exhibits",
    "Start with the introductory explanations and pick several cultures to compare if your visit is short.",
    "Peru’s museum directory describes a project conceived in 2002 to present a panoramic view of pre-Hispanic Peru. The themed buildings let visitors move between different societies.",
    ["Enter at the km 53 museum stop.", "Walk through the pavilions using their maps and timelines for context.", "Return to the entrance to meet your vehicle before continuing through the valley."],
    "Check current hours and last admission directly with the museum.", "Stay in Calca or Urubamba to visit the museum without an extra transfer from Cusco."],
};

export const heritageManagement: Record<string, { name: string; details: string; url: string }> = {
  choqana: { name: "Dirección Desconcentrada de Cultura de Cusco", details: "DDC Cusco is the regional authority for archaeological heritage around Ollantaytambo. Choqana lies on the south side of the river corridor in Ollantaytambo district. Ask locally about the current public approach before visiting.", url: culture + "/parques-arqueologicos/ollantaytambo/" },
  qespiwanka: { name: "Qhapaq Ñan team, Dirección Desconcentrada de Cultura de Cusco", details: "The Qhapaq Ñan team manages the museum in Casa Hacienda Pino. Its exhibitions connect the Andean road network with the valley, the estate of Wayna Qhapaq and the traditions of present-day Urubamba.", url: culture + "/post/museos/museo-de-qespiwanka/" },
  "sayri-tupac": { name: "Ministerio de Cultura del Perú", details: "The ministry lists the House of Sayri Túpac as a protected historic monument at Plaza Manco II and Calle San Martín. Ask local heritage staff about access beyond the public corner.", url: "https://aulavirtual.cultura.pe/pluginfile.php/7084/mod_resource/content/1/relaciondemonumentoshistoricos.pdf" },
  huaro: { name: "Asociación SEMPA, Ruta del Barroco Andino", details: "The Jesuit association manages the visitor route that includes Huaro. Visiting income supports conservation and parish social work. Check the church’s arrangements around worship before entering.", url: barroco },
  canincunca: { name: "Asociación SEMPA, Ruta del Barroco Andino", details: "The Jesuit association manages the visitor route that includes the Canincunca chapel. The chapel is a separate heritage stop overlooking the Urcos lagoon, with opening and access handled through the route.", url: barroco },
  inkariy: { name: "Museo Inkariy", details: "The museum’s team runs the exhibitions and visitor services at the Calca site. Peru’s museum directory lists it as a dedicated interpretation centre for pre-Hispanic societies.", url: "https://museoinkariy.com/contacts/" },
  andahuaylillas: { name: "Asociación SEMPA, Ruta del Barroco Andino", details: "The Jesuit association manages the visitor route that includes this church. Admissions support conservation and the Jesuit parishes’ social work. Confirm worship and sightseeing arrangements at the village square.", url: barroco },
  "la-compania": { name: "Asociación SEMPA, Ruta del Barroco Andino", details: "La Compañía is the Cusco city stop on the visitor route managed by the Jesuit association. Visit through the church’s designated entrance at Plaza de Armas.", url: barroco },
};

type Feature = { title: string; text: string };
type VisitorDetail = {
  kind: string;
  stop: string;
  arrival: string;
  timing: string;
  features: Feature[];
  photo: string;
  question: string;
  answer: string;
  source: { label: string; url: string };
};

export const heritageVisitorDetails: Record<string, VisitorDetail> = {
  choqana: {
    kind: "Inca-period riverside archaeological site",
    stop: "South bank of the Vilcanota (Urubamba) River, east of Ollantaytambo",
    arrival: "Use Ollantaytambo as the meeting point unless a local guide confirms a different start. A route description links Pachar and Ollantaytambo via Choqana, but ask which section is currently usable and whether to return the way you came. The map identifies the ruins, not a vehicle drop-off.",
    timing: "Make the walk a standalone morning. Leave time for the return and avoid placing the visit immediately before a booked train. If using a through-walk, agree on which end your driver will meet you at before you leave.",
    features: [
      { title: "River approach", text: "The ruins sit along the approach to Ollantaytambo from the east. Take in the river and opposing slope before looking at the masonry to understand the relationship between the site and the valley corridor." },
      { title: "Stone enclosures", text: "Compare the short enclosures in the surviving walls. Notice where stonework meets bedrock and how the usable ground narrows lower down the slope." },
    ],
    photo: "An oblique photograph from the established path shows wall thickness and the hillside grade. Use a second, wider frame only where the river is visible from stable ground.",
    question: "Does the map identify the trailhead?",
    answer: "The search points to the ruins. Confirm the legal foot approach and return in person before setting out, especially after rain.",
    source: { label: "Published Pachar–Choqana–Ollantaytambo walk", url: "https://www.packing-up-the-pieces.com/maps-routes/pachar-choqana-ollantaytambo/" },
  },
  qespiwanka: {
    kind: "Museum of the Qhapaq Ñan and Urubamba’s heritage",
    stop: "Visitor entrance of Casa Hacienda Pino, Urubamba",
    arrival: "For a road transfer from Ollantaytambo, give the driver both the museum name and Casa Hacienda Pino. From central Urubamba, ask the venue to confirm the walkable approach and entrance before leaving the plaza.",
    timing: "Reserve about an hour for the permanent galleries and extra time for any temporary exhibition. Read the valley-network displays before visiting other stops so you can recognise the different road connections.",
    features: [
      { title: "From early networks to the Inca road system", text: "The first rooms put the Inca system in a longer Andean context by introducing Tiwanaku and Wari before the Tawantinsuyu. Compare which connections are regional and which belong to the later imperial network." },
      { title: "The Urubamba valley and Wayna Qhapaq", text: "The middle rooms narrow the focus to roads within the valley and the estate of Qespiwanka. Use the maps to see where the valley connections fit within the wider network." },
      { title: "Casa Pino and living traditions", text: "The last gallery moves from estates to haciendas and Urubamba traditions, including the Señor de Torrechayoq festivities. The house itself is an example of the later valley history examined in the display." },
    ],
    photo: "From the visitor approach, frame the entrance steps and façade together to show the building’s setting. Take indoor photographs only in spaces where museum staff allow them.",
    question: "Am I visiting the original palace?",
    answer: "The five-gallery museum is in Casa Hacienda Pino. It interprets the history of the Qespiwanka estate and palace.",
    source: { label: "Ministry of Culture account of the restoration and museum installation", url: "https://www.gob.pe/institucion/culturacusco/noticias/1082201-ministerio-de-cultura-invirtio-mas-de-s-2-6-millones-en-recuperacion-e-implementacion-del-museo-de-qespiwanka" },
  },
  "sayri-tupac": {
    kind: "Listed historic house and exterior architecture stop",
    stop: "Corner of Plaza Manco II and Calle San Martín, Yucay",
    arrival: "From Urubamba, use the valley road toward Yucay and ask for the Plaza Manco II corner at Calle San Martín. The national inventory lists about 3.1 km by road from Urubamba and 16.9 km from Calca.",
    timing: "Allow roughly half an hour for a plaza and façade visit. If extending the walk toward the Yucay archaeological zone, check the public access first. The inventory lists a separate foot segment of about 900 metres.",
    features: [
      { title: "A protected village corner", text: "The national register gives the precise corner for the house. Compare the doorway facing the street with the boundary of the square to locate the building within the older settlement." },
      { title: "Reading the doorway", text: "Start across the street to see the opening in proportion to the walls, then look at the outline and joints of the surviving masonry from the pavement." },
    ],
    photo: "Take a wider picture from the public square and an angled detail from Calle San Martín, leaving enough space for people using the corner.",
    question: "Can I combine this with a longer Yucay heritage walk?",
    answer: "Yes. Begin at Plaza Manco II and verify the onward public paths to the archaeological zone separately from the palace stop.",
    source: { label: "Ministry of Culture historical monument register", url: "https://aulavirtual.cultura.pe/pluginfile.php/7084/mod_resource/content/1/relaciondemonumentoshistoricos.pdf" },
  },
  huaro: {
    kind: "Andean Baroque parish church",
    stop: "Plaza de Armas s/n, Huaro",
    arrival: "Travel from Cusco along the South Valley road and request a drop-off at the Huaro town square. For a multi-church visit, arrange for the driver to collect you at the square before continuing separately to Canincunca.",
    timing: "Keep 45–75 minutes for the square and church. Confirm the visiting slot if your trip coincides with a Mass, feast day or other parish activity.",
    features: [
      { title: "Renaissance proportions", text: "View the simple façade and roofline from across the square before approaching. The route’s catalogue describes a church built in stone, adobe and tile around the turn of the seventeenth century." },
      { title: "Tadeo Escalante’s murals", text: "When the nave is open, scan the walls and ceiling as one painted program. The route attributes the scenes of death, judgement and the afterlife to Tadeo Escalante and relates their imagery to both Andean and colonial traditions." },
      { title: "Murals and altar furnishings", text: "After viewing the painted surfaces, compare them with the retablos and devotional objects. Ask whether the route offers an explanation of specific panels while you are there." },
    ],
    photo: "Use the far side of Plaza de Armas for the full exterior and a closer public angle for the entrance. Follow the church’s rules inside, including any restriction on flash.",
    question: "What is the difference between Huaro and Canincunca?",
    answer: "Huaro is the village church with a large painted nave. Canincunca is a separate, smaller chapel on the road by the lagoon.",
    source: { label: "Andean Baroque Route catalogue and mural history", url: "https://rutadelbarrocoandino.com/wp-content/uploads/2015/05/AF_RBAnew_catalogo2015_V18_RGB_WEB.pdf" },
  },
  canincunca: {
    kind: "Seventeenth-century Andean Baroque chapel",
    stop: "Signed chapel entrance near the Urcos lagoon, Huaro district",
    arrival: "Ask the driver for the separate chapel entrance by the lagoon on the Cusco–Puno road. If arriving from Huaro village, confirm where the vehicle can stop safely and agree on the same pickup before entering.",
    timing: "Make time for both the setting and the small nave. If the chapel is closed for worship or maintenance, use public viewpoints where available and continue to a confirmed open route stop.",
    features: [
      { title: "The pass and lagoon", text: "The chapel sits above the lagoon where the road passes through a gap in the hills. Look outward before entering to see how the location gives a small building a prominent position." },
      { title: "Painted textiles and retablo", text: "The route describes a single nave with murals, gold bands and designs recalling the geometric pallais of Andean textiles. Compare the floral and bird motifs with the forms of the carved wooden retablo." },
      { title: "An earlier surface behind the current altar", text: "The route records surviving evidence of the original painted altar in the central niche. Ask the site guide which elements can be clearly seen from the visitor route." },
    ],
    photo: "Frame the chapel from its public forecourt, then look for a permitted angle that places the roofline against the lagoon or surrounding hills.",
    question: "Where do I check chapel admission?",
    answer: "Confirm the current rate and included churches through the Andean Baroque Route or at the designated visitor entrance.",
    source: { label: "Andean Baroque Route chapel description", url: "https://rutadelbarrocoandino.com/la-ruta/virgen-purificada-de-canincunca/" },
  },
  inkariy: {
    kind: "Private museum of pre-Hispanic societies",
    stop: "Museum entrance at km 53 on the Cusco–Calca–Urubamba road",
    arrival: "Ask for Museo Inkariy at kilometre 53 rather than Museo Inka in Cusco. The ministry brochure identifies the museum stop as Paradero Museo. Confirm where the driver will wait or how you will continue by road.",
    timing: "Set aside 90–120 minutes. If you have less time, choose contrasting rooms around a theme such as textiles and settlement, then finish with the Inca exhibit for context before an archaeological visit.",
    features: [
      { title: "Early societies and regional differences", text: "Begin with Caral and Chavín, then compare Paracas textiles with the coastal material in the Mochica and Nazca rooms. Read the room maps to keep the different regions and periods clear." },
      { title: "From Wari to the later coastal societies", text: "Use the Wari gallery as a bridge from early regional traditions toward larger networks. Then contrast it with the later Lambayeque and Chimú material in the north-coast display." },
      { title: "The Inca gallery", text: "Finish with the Cusco-centred Inca exhibit. Notice which practices can be compared with material shown earlier, before visiting the valley’s Inca sites." },
    ],
    photo: "Use the museum entrance sculpture and façade in the same shot from public visitor space. Check the rules for each exhibition room before taking pictures.",
    question: "Where can I confirm the current entrance fee?",
    answer: "Ask the museum directly at +51 984 666 698 or info@museoinkariy.com. Its official contact page lists current opening hours.",
    source: { label: "Museo Inkariy exhibition rooms", url: "https://museoinkariy.com/salas/" },
  },
};
