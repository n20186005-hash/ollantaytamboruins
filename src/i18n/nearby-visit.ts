import { expansionPlans } from "./nearby-expansion";
import { heritagePlans } from "./nearby-heritage";

type Visit = {
  tagline: string;
  duration: string;
  terrain: string;
  advice: string;
  history: string;
  steps: [string, string, string];
  precautions: string;
  stay: string;
};

const plans: Record<string, [
  tagline: string, duration: string, terrain: string, advice: string, history: string,
  steps: Visit["steps"], precautions: string, stay: string
]> = {
  pinkuylluna: [
    "Inca hillside storehouses above the old town", "60–90 minutes", "Steep hillside trail",
    "Pair the climb with the old town and do it separately from the main park’s stair circuit. Start while you still have good daylight for the descent.",
    "Peru’s tourism inventory describes two sectors. The group nearest the town has rectangular stone rooms built on platforms that also retain the slope.",
    ["Find the signed hillside access off Lares Calle.", "Climb on the authorised path and stop where the platforms and openings line up across the slope.", "Return through the same town-side access and continue to the old streets if time allows."],
    "Turn back at gates, damaged surfaces or wet rock. The path has exposed sections and the rooms are archaeological structures.",
    "Stay in Ollantaytambo’s old town to reach the trail before moving on to the main park or railway station.",
  ],
  pumamarca: [
    "Stone enclosures on a ridge above the Patacancha valley", "Half day including local transfers", "Uphill approach and ridge paths",
    "Agree on the final drop-off, walking approach and return pickup before leaving Ollantaytambo. Visit on a day without a tight train connection.",
    "MINCETUR describes Pumamarka as a pre-Hispanic settlement about 6 km northeast of Ollantaytambo. The walls give visitors a way to read the bounds of the settlement in the terrain.",
    ["Travel toward Pallata using a locally confirmed approach.", "Follow the existing uphill path to the perimeter and compare the layout of the enclosures.", "Retrace the confirmed approach to your arranged pickup."],
    "Check access after rain and bring water. Stay on the established approach rather than following unmarked shortcuts through fields.",
    "Book a base in Ollantaytambo and arrange the two-way transfer through a local operator.",
  ],
  "naupa-iglesia": [
    "Worked stone and terraces beside a natural rock shelter", "Allow a half day from Ollantaytambo", "Uphill approach to a rock shelter",
    "Make Pachar the transfer point and confirm the public foot approach before setting out. Leave enough daylight to return along the same path.",
    "MINCETUR records terraces and stairs below the shelter and describes a carved basalt huaca at the entrance. View the worked stone in relation to the natural cavity and the niches beside it.",
    ["Confirm the public trail and pickup at Pachar.", "Ascend the permitted route toward the rock shelter.", "View the carved block from the path and walk back to your pickup."],
    "Avoid railway property and steep shortcuts. Leave carvings untouched and respect other visitors using the shelter.",
    "Use Ollantaytambo as your overnight base for a separate Pachar excursion.",
  ],
  "ollantaytambo-old-town": [
    "Stone lanes and water channels in a living Inca town", "45–75 minutes", "Narrow lanes and uneven paving",
    "Combine the town loop with a plaza stop. Start in daylight if you want to see the channels and masonry at ground level.",
    "Qosqo Ayllu was one of the planned settlement’s principal sectors. The lanes let you read the original urban pattern alongside contemporary houses and shops.",
    ["Start at Plaza de Armas.", "Enter a residential lane and compare its stone bases and water channel with a parallel street.", "Return to the plaza through the parallel lane."],
    "Keep building entrances clear and watch for open channels along the lane edges.",
    "Choose a room near the plaza for easy evening walks, or nearer Avenida Ferrocarril for an early train.",
  ],
  "ollantaytambo-station": [
    "The Sacred Valley boarding point for Machu Picchu trains", "Follow the check-in time on your booking", "Downhill town approach to the station",
    "Read the departure station and service type before planning a ruin visit. Allow more time for the descent if you have luggage.",
    "The station sits below the historic town. Its position makes the change from road and pedestrian travel to rail especially clear along Avenida Ferrocarril.",
    ["Leave the plaza with enough margin for your ticket’s reporting time.", "Descend on the public approach to Avenida Ferrocarril and locate the operator’s boarding point.", "Show your ticket and ID as required, then follow the boarding instructions."],
    "Wait in the passenger area and keep clear of tracks. Check the operator’s baggage rules before packing.",
    "Stay near the station for a dawn departure, or in the historic town if you have enough time for the morning transfer.",
  ],
  moray: [
    "Concentric Inca terraces on the Maras plateau", "45–75 minutes", "Level approach to entrance; open plateau paths beyond",
    "Use the upper viewpoint first. Reserve a separate transfer for the salt pans and compare the two landscapes in the same outing if time permits.",
    "DDC Cusco places the site at about 3,480 m in the community of Mullak’as Misminay. Standing above the rings makes the adaptation of agricultural terraces to the natural depressions particularly clear.",
    ["Arrive at the park entrance from Maras.", "View a complete terrace bowl from the entrance area, then use the signed outer route where open.", "Compare the different levels from a second permitted stop and return to the entrance."],
    "Expect exposed plateau conditions. Stay outside barriers and ask staff which visitor paths are open.",
    "Base yourself in Urubamba for valley transfers or in Maras for a shorter road approach to Moray.",
  ],
  "maras-salt-pans": [
    "Brine channels and working salt ponds above the Sacred Valley", "45–60 minutes at the site", "Hillside viewing paths",
    "Allow a standalone stop for the pans. Confirm drop-off and pickup at the visitor entrance since the town square is a separate destination.",
    "MINCETUR lists a road approach of about 6.6 km from Maras. From above, the channels show how a single brine supply feeds many small production plots.",
    ["Arrive at the salt pans’ own visitor entrance.", "Use the designated overlook to follow the channels from the spring side across the ponds.", "Return through the public exit and verify the onward pickup before leaving."],
    "The ponds are active work areas. Keep behind visitor barriers and away from evaporation beds.",
    "Stay in Urubamba for a combined Maras and Moray day, or stay in Maras for a slower plateau visit.",
  ],
  "maras-town": [
    "Carved door surrounds in a plateau settlement", "35–60 minutes", "Public streets, with some uneven paving",
    "Allow time for the town between the two outlying sites. Use the square as a meeting point and look into the adjacent streets on foot.",
    "Carved stone portals are a visible part of Maras’s colonial-era streetscape. The municipality catalogues historic examples with differing dates and decorative motifs.",
    ["Meet at Plaza de Armas de Maras.", "Walk one block out from the square to inspect public-facing stone door surrounds.", "Return to the plaza on a parallel street for the next road transfer."],
    "Keep clear of private entrances and confirm where your driver will wait.",
    "Choose Maras for a quiet overnight near the plateau or Urubamba for wider onward transport options.",
  ],
  chinchero: [
    "Inca terraces below a colonial church and plaza", "60–90 minutes", "High plateau and sloped terrace paths",
    "Make the archaeological plaza the first stop. Arrange any weaving workshop separately in town so transport and access are clear.",
    "The colonial church and plaza occupy the upper settlement above the Inca agricultural sector. The masonry around the plaza shows how later buildings used an existing built landscape.",
    ["Enter through the designated archaeological access.", "View the plaza and church exterior, then follow the available terrace path.", "Return uphill into the village and continue to any prearranged textile visit."],
    "Allow time for the uphill return at altitude. Ask at the church about access around worship.",
    "Stay in Cusco if continuing city visits, or in Urubamba if heading west to Moray and Ollantaytambo.",
  ],
  "pisac-ruins": [
    "Inca terraces and stone stairways on a narrow ridge", "90–120 minutes", "Steep paths with rock-cut steps",
    "Use the high road entrance for a focused archaeological visit. Choose your pickup before committing to any descent toward town.",
    "DDC Cusco locates the park at an average altitude of approximately 3,400 m. The agricultural terraces and groups of masonry were built across a ridge with limited level ground.",
    ["Meet your driver at the signed archaeological entrance.", "Follow the posted route and compare the stepped ridge with the lower terraced slopes.", "Return to the agreed pickup or use a locally confirmed descent if open."],
    "Avoid exposed edges. Ask staff before setting out if your group needs a level route or a shorter walk.",
    "Stay in Pisac town for an early road ascent or in Urubamba for a broader east–west valley itinerary.",
  ],
  "pisac-market": [
    "Textiles and crafts around Pisac’s town square", "35–60 minutes", "Town square and narrow market lanes",
    "Combine the market with a meal or a town walk. Confirm the time each stall operates instead of relying on a fixed market-wide timetable.",
    "Pisac’s artisan market links the town square with surrounding retail lanes. Textiles and ceramics are best understood by asking vendors how individual pieces were made.",
    ["Begin at Plaza Constitución.", "Compare goods around the square before exploring the craft lanes.", "Return to the plaza for the onward transfer or the climb to your accommodation."],
    "Ask permission before photographing vendors and leave narrow passages clear.",
    "Stay around Pisac’s town center to walk to the market without a road transfer.",
  ],
  "huchuy-qosqo": [
    "Mountain terraces and earthen walls overlooking Lamay", "Half to full day depending on trailhead", "Substantial walking and exposed mountain paths",
    "Choose the ascent and descent as a single plan. A Lamay valley approach and a plateau approach require different drop-off and pickup arrangements.",
    "The stone lower courses and earthen upper courses provide a clear example of two construction materials used within the same archaeological group.",
    ["Agree on the trailhead, return route and meeting point with a guide.", "Reach the open archaeological sector and compare the wall materials from the marked path.", "Take the prearranged descent and meet your vehicle at the agreed location."],
    "Treat this as a hike. Carry water and a weather layer, and verify the approach after heavy rain.",
    "Use a valley base near Lamay or Calca for an early valley start. Confirm the pickup if beginning on the plateau.",
  ],
  yucay: [
    "Irrigated field edges and historic masonry near Urubamba", "45–60 minutes", "Village lanes and public roadside paths",
    "Take a short morning walk from the plaza before onward travel. Leave farm tracks out of the itinerary unless they are open to the public.",
    "The historic walls and irrigated valley floor show two different sides of the settlement: built heritage in the village and continuing agricultural use around it.",
    ["Start at Plaza Manco II.", "Walk toward the field edge on public lanes and look for historic masonry along the way.", "Return to the plaza through the public street network."],
    "Avoid entering working fields and keep irrigation channels clear.",
    "Stay in Yucay for village walks or in nearby Urubamba for more transport connections.",
  ],
  urubamba: [
    "A central plaza beneath the walls of the Sacred Valley", "30–50 minutes", "Urban streets and plaza paving",
    "Use the square as a pause between valley transfers. Check whether the next vehicle departs at the square, a terminal or your accommodation.",
    "Urubamba’s plaza is a compact civic and religious center. The church frontage and mountain views make its position within the agricultural valley easy to understand.",
    ["Ask for Plaza de Armas as the drop-off.", "Walk the four sides of the square and view the church from across the plaza.", "Confirm the next pickup and walk to it along the public streets."],
    "Check where minibuses actually stop and leave time to reach the terminal with bags.",
    "Urubamba works as a central overnight base for day trips toward Ollantaytambo, Maras, Chinchero and Pisac.",
  ],
  calca: [
    "A civic square on the quieter eastern valley road", "25–45 minutes", "Urban sidewalks and plaza paving",
    "Use the square as a short stop on the way between Pisac and Urubamba. Agree on pickup time and place if your driver is continuing with you.",
    "Calca is a provincial center. The plaza and the parish frontage show the town’s civic core, while the side streets open toward the steep valley sides.",
    ["Alight at Plaza de Armas de Calca.", "Circle the plaza and check the view up a side street toward the mountains.", "Return to your exact pickup point before continuing through the valley."],
    "Distinguish the plaza drop-off from roadside minibus stops, particularly when changing vehicles.",
    "Stay in Calca for an eastern-valley base or in Pisac if your next stop is the archaeological ridge.",
  ],
  "machu-picchu": [
    "The Inca citadel on a saddle above the Urubamba River", "Allow a full visit day including transfers", "Stepped one-way circuits; terrain varies by route",
    "Choose the route for the viewpoints and sectors you want to see before buying rail or bus tickets. Work backward from your entry slot.",
    "Retaining walls make usable platforms from a steep mountain saddle. Stairways connect those platforms and reveal how agricultural, residential and ceremonial spaces fit together.",
    ["Arrive at the entrance for the booked time with your ticket and ID.", "Follow the assigned route through the designated viewing points and built sectors.", "Exit at the signed point and allow time for the descent and onward train."],
    "Carry only what the park permits and follow the one-way route. Verify current restrictions with the cultural authority.",
    "Stay in Machu Picchu Pueblo before an early entry, especially if the first train would leave too little buffer.",
  ],
  "huayna-picchu": [
    "The steep peak above the Machu Picchu citadel", "Allow a half day including circuit check-in", "Steep, exposed stone stairs",
    "Reserve the route that names Waynapicchu and plan the ascent separately from any panoramic circuit you also want to visit.",
    "The terrain concentrates steps and narrow routes along the peak. Looking down toward the citadel shows the difference between the steep summit ridge and the broader built saddle.",
    ["Enter on the booked Waynapicchu route.", "Report to the mountain checkpoint and climb the signed path if open.", "Follow staff directions for the descent, then continue to the circuit exit."],
    "Choose the route only if your group is comfortable with steep stone steps and exposed sections. Give way at narrow points.",
    "Use Machu Picchu Pueblo for an early start and leave generous time to reach the upper entrance.",
  ],
  "intipunku-machu-picchu": [
    "A ridge gateway overlooking the citadel", "Allow a half day for a standalone circuit", "Uphill approach to a stone gateway",
    "Check which access you have before leaving town. A seasonal citadel ticket route and arrival on a permitted Inca Trail itinerary have different entry procedures.",
    "The gate belongs to the historic mountain approach to Machu Picchu. Its ridge position helps explain why the site first appears through a narrow view before opening onto the saddle.",
    ["Confirm that Intipunku is included in the entry or trail itinerary.", "Follow the authorised uphill approach to the gateway.", "Pause inside the permitted viewing space, then follow the exit or onward directions for your ticket."],
    "Check the route calendar and recent notices. A ticket for a different circuit gives a different experience.",
    "Stay in Machu Picchu Pueblo for the citadel route. On the Inca Trail, follow the lodging or camp arrangements in your itinerary.",
  ],
  "machu-picchu-pueblo": [
    "Riverside streets, rail arrivals and the gateway to the citadel", "45–75 minutes for a town walk", "Bridges and short, sometimes steep streets",
    "Walk from the station after dropping bags. Locate the citadel transfer point before finding dinner so the morning start is simpler.",
    "The town fills a narrow area next to railway and river corridors. The public bridges and steep street connections show how pedestrian access is fitted around both.",
    ["Leave the station and walk to Plaza Manco Cápac.", "Take a public bridge and a short riverside loop if conditions allow.", "Return to the center and identify your lodging and uphill transfer points."],
    "Keep to public roads and bridges and avoid railway tracks as walking shortcuts.",
    "Choose a central room for a short walk to transport, or ask about steps and luggage access before booking a hillside stay.",
  ],
  "winay-wayna": [
    "Stepped Inca terraces on the approach to Machu Picchu", "A stop within the booked trail day", "Steep terraces and stepped trail",
    "Check the route guide for the Wiñay Wayna stop and leave time for the scheduled checkpoint onward. Access depends on the authorised trail route.",
    "The cultural authority’s trail gallery documents this site as part of the Inca Trail. Its terrace walls turn a steep hillside into a sequence of built surfaces above the valley.",
    ["Approach with your authorised trail group from the agreed access point.", "Pause at the open viewing area to compare the upper buildings and lower terraces.", "Rejoin your guide and continue to the next authorised checkpoint."],
    "Stay with the guide and keep walking lanes open. Detours can change after weather or maintenance closures.",
    "Follow the itinerary’s camp or lodging arrangements and use Machu Picchu Pueblo after the trek if you need an overnight base.",
  ],
  phuyupatamarka: [
    "Water basins on a high Inca Trail shoulder", "A stop within the booked multi-day route", "High mountain paths and long stone descents",
    "Ask which viewpoints and descents are open on your trail day. The layout is easiest to read from the designated upper approach.",
    "Phuyupatamarka’s stairways and water basins occupy different levels on the mountain shoulder. Follow their sequence to see how the built structures use the gradient.",
    ["Arrive on the authorised multi-day trail with your guide.", "Observe the basins and visible masonry levels from stable stopping points.", "Follow the signed stepped descent with your group."],
    "Wet steps can be slippery. Stop off the walking line when taking photographs.",
    "Use the approved trail camp or overnight arrangements supplied by the operator rather than planning a separate purchase near the ruins.",
  ],
  sayacmarca: [
    "Inca masonry fitted to a narrow mountain spur", "A stop within the booked multi-day route", "Narrow steps to a rocky spur",
    "Ask about the side approach before leaving the main trail. The profile from the main path can be worthwhile even when the enclosure is closed.",
    "The spur limits the available building area. The walls and stair approach make that constraint visible in the shape of the surviving enclosures.",
    ["Stop at the side-path junction with your group.", "Use the authorised stairs if access is open and view the walls from the posted route.", "Descend as directed and rejoin the main trail."],
    "Stay behind designated boundaries along the spur and wait for space at narrow steps.",
    "Follow the overnight plan for your permitted multi-day Inca Trail itinerary.",
  ],
  runkuraqay: [
    "A curved Inca enclosure below the pass", "A stop within the booked multi-day route", "Sustained uphill trail toward the pass",
    "Ask whether you have time at the ruins before the climb continues. Mark the enclosure, rather than the pass of the same name, when looking it up.",
    "The curved plan is especially legible from the slope below. Its compact interior contrasts with the longer staircase and trail landscape continuing toward the pass.",
    ["Climb with your group from the preceding valley sector.", "Stop at the curved enclosure if access and itinerary timing allow.", "Continue uphill toward the pass under the guide’s instructions."],
    "Keep a pace that suits the climb and leave the trail edge clear during stops.",
    "The permitted trek sets the overnight stops. Confirm the climb’s position in your walking schedule before booking.",
  ],
  patallacta: [
    "Sweeping Inca agricultural terraces near the classic trail start", "A stop within the first trail stage", "Trail viewpoint above the river valley",
    "Ask whether your route views Patallacta from above or includes another authorised approach. The high viewpoint is especially useful for seeing the full sweep of the terraces.",
    "The settlement’s terraces follow the bend of the river landscape. Their shape is easier to understand from the trail above than from a close view at a single wall.",
    ["Start from the checkpoint assigned to your trail booking.", "Follow your guide to the viewpoint overlooking the terraces and settlement.", "Resume the marked path toward the next scheduled stop."],
    "Follow the trail operator’s group schedule and pause only at established viewpoints.",
    "An overnight in Ollantaytambo can simplify a pre-arranged transfer toward Piscacucho. Confirm where the operator collects your group.",
  ],
  sacsayhuaman: [
    "Monumental zigzag walls on the plateau above Cusco", "75–120 minutes", "Plateau paths; steep approach if walking from Cusco",
    "Start with the open view of the walls to understand their plan before walking close enough to examine the block joints.",
    "The complex occupies a plateau over Cusco. The changing angles of the walls create long sightlines across the open ground and short, sharp views at the projecting corners.",
    ["Enter at the open archaeological access.", "Walk along the open area in front of the walls, then examine one projecting angle from the route.", "Return via posted paths and meet your pickup at the agreed gate."],
    "Keep off archaeological walls and follow event or maintenance diversions announced by DDC Cusco.",
    "Stay in central Cusco for a short road approach. Arrange a separate uphill transfer if you want to conserve walking time for the sites.",
  ],
  qenqo: [
    "Carved limestone, grooves and narrow passages above Cusco", "30–45 minutes", "Uneven limestone and confined passages",
    "Combine Q’enqo with Sacsayhuamán if using Circuit I. Ask which passages are open before planning an interior visit.",
    "The visitor route circles a limestone outcrop shaped by human use. In side light, the distinction between carved channels and naturally broken rock is easiest to see.",
    ["Enter from the signed roadside entrance.", "Circle the outcrop and stop where details are visible from the path.", "Enter any open covered passage only as directed and return to the pickup."],
    "Avoid wet rock and leave carved surfaces untouched. Give others space in narrow areas.",
    "Stay in Cusco and group the Circuit I hill sites in one outing to use the partial ticket within its one-day validity.",
  ],
  "puka-pukara": [
    "A fortified-looking roadside complex on an open ridge", "25–45 minutes", "Uneven visitor paths around low walls",
    "Use Puka Pukara and Tambomachay as separate pins with separate stops. Ask your driver to wait if making a short circuit here.",
    "The enclosure’s outlines closely follow the hill, putting entrances and passages at different levels. From outside the wall the relationship between the ridge and road corridor is especially clear.",
    ["Start at the signed Puka Pukara entrance.", "Walk around the outer wall to the designated lookout.", "Return to the same entrance for the separate Tambomachay transfer."],
    "Use the official visitor path rather than climbing onto the walls. Confirm where you can safely wait for a vehicle.",
    "Base yourself in Cusco and combine the hill sites before carrying on toward Pisac if your itinerary allows.",
  ],
  tambomachay: [
    "Stone channels and fountains on the hillside outside Cusco", "30–50 minutes", "Uphill walking approach from the entrance",
    "Follow the uphill approach first and allow time to return before your next road pickup. The waterworks are best seen on foot.",
    "The water outlets are integrated into the stone walls and terraces. The niches offer a contrast in scale to the longer horizontal wall lines.",
    ["Enter through the Tambomachay ticket control.", "Walk uphill to the stone waterworks and stop behind the viewing boundary.", "Return along the marked approach to the same entrance."],
    "Stay off wet masonry and outside the waterworks. Ask staff where the active route ends.",
    "Stay in Cusco if using Circuit I on a city half-day, or plan a separate onward ride to the Sacred Valley.",
  ],
  qorikancha: [
    "Inca stonework beneath the convent of Santo Domingo", "60–90 minutes", "Urban sidewalks and heritage building paths",
    "Decide whether to visit the convent, the site museum or both. Allow time outside on Avenida El Sol to see the curved wall at city scale.",
    "Later religious structures rise above surviving Inca masonry. The curved base and straight room walls show differing techniques that can be compared within one visit.",
    ["Start on Avenida El Sol for a view of the curved wall.", "Use the entrance for the convent or museum named on your plan.", "Finish outside with a view of how the two periods’ buildings meet."],
    "Ask about interior photography and religious schedules at the venue.",
    "Choose central Cusco around Avenida El Sol or the historic center for an easy walking visit.",
  ],
  "cusco-cathedral": [
    "A cathedral and adjoining churches on Cusco’s Plaza de Armas", "45–75 minutes", "Paved urban square and steps at entrances",
    "Begin on the opposite plaza edge to see the full ensemble. Check the visitor entrance before joining a line for worship.",
    "The cathedral’s main frontage is read alongside the nearby Iglesia del Triunfo and Sagrada Familia. Their placement makes the religious ensemble an important edge of the main square.",
    ["View the façade from across Plaza de Armas.", "Locate the cathedral’s visitor entrance and confirm the religious circuit ticket if needed.", "After the visit, return to the plaza and compare the adjoining façades."],
    "Check photography, dress and worship restrictions when entering.",
    "Stay within walking distance of Plaza de Armas if combining several churches and museums in the historic center.",
  ],
  "san-pedro-market": [
    "A working covered market in historic Cusco", "30–60 minutes", "Busy enclosed aisles and paved streets",
    "Visit in the earlier part of the day for food shopping, then allow time to reach your valley transport pickup elsewhere in the city.",
    "The covered structure concentrates different trades under a single roof. Look at the roof span and how daylight from the entrances changes the character of the aisles.",
    ["Find the public entrance near Calle Cascaparo.", "Walk the main aisles and compare the produce and prepared-food sections.", "Leave through a public doorway and continue to the named onward pickup."],
    "Give vendors and shoppers room to pass, and keep bags close in busy aisles.",
    "Stay in historic Cusco for a walkable morning visit before traveling to the Sacred Valley.",
  ],
};

export const visitPlans = Object.fromEntries(Object.entries({ ...plans, ...expansionPlans, ...heritagePlans }).map(([slug, [
  tagline, duration, terrain, advice, history, steps, precautions, stay,
]]) => [slug, { tagline, duration, terrain, advice, history, steps, precautions, stay } satisfies Visit]));

const ddc = "https://www.culturacusco.gob.pe/parques/";
const mincetur = "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=";
export const tariffUrl = "https://cosituc.gob.pe/tarifario-2/";
export const machuTickets = "https://tuboleto.cultura.pe/";

export const openingHours: Record<string, { time: string; source: string }> = {
  inkariy: { time: "Daily 09:00–17:00, including holidays", source: "https://museoinkariy.com/contacts/" },
  huaro: { time: "08:30–16:30 (MINCETUR inventory)", source: mincetur + "1821" },
  canincunca: { time: "08:30–16:30 (MINCETUR inventory)", source: mincetur + "1822" },
  "sayri-tupac": { time: "07:00–17:00 (MINCETUR inventory)", source: mincetur + "1779" },
  qorikancha: { time: "08:00–17:30 (MINCETUR inventory)", source: mincetur + "1790" },
  "cusco-cathedral": { time: "10:00–18:00 (MINCETUR inventory)", source: mincetur + "896" },
  "museo-inka": { time: "Mon–Fri 09:15–16:00; Sat 08:45–13:45 (Apr–Dec); closed Sundays and holidays", source: "https://museoinka.unsaac.edu.pe/informacion.php" },
  pikillaqta: { time: "07:00–16:30", source: ddc + "pikillaqta/" },
  moray: { time: "07:00–17:00", source: ddc + "moray/" },
  chinchero: { time: "07:00–18:00", source: ddc + "chinchero/" },
  "pisac-ruins": { time: "07:00–16:30", source: ddc + "pisaq/" },
  sacsayhuaman: { time: "07:00–17:30", source: ddc + "saqsaywaman/" },
};

export const fieldDetails: Record<string, { label: string; value: string }> = {
  "sayri-tupac": { label: "Road distance from Urubamba", value: "About 3.1 km" },
  qespiwanka: { label: "Museum building", value: "Casa Hacienda Pino, five exhibition rooms" },
  canincunca: { label: "Road reference", value: "About 43 km from Cusco’s Plaza de Armas in the tourism inventory" },
  inkariy: { label: "Museum contact", value: "+51 984 666 698" },
  cachicqata: { label: "Inventory altitude", value: "About 3,886 m" },
  piuray: { label: "Road reference", value: "About 1 km from the paved Cusco–Chinchero road in MINCETUR’s inventory" },
  "museo-inka": { label: "Street address", value: "Cuesta del Almirante 103" },
  "map-cusco": { label: "Museum address", value: "Plaza Nazarenas 231" },
  "machu-picchu-mountain": { label: "Official route", value: "Circuit 1, Route 1-A" },
  pinkuylluna: { label: "Inventory altitude", value: "2,851 m" },
  pumamarca: { label: "Relative location", value: "About 6 km northeast of Ollantaytambo" },
  "naupa-iglesia": { label: "Inventory altitude", value: "2,850 m near Pachar" },
  "ollantaytambo-station": { label: "Station address", value: "Avenida Ferrocarril 1, Ollantaytambo 08676" },
  moray: { label: "Park altitude", value: "About 3,480 m" },
  "maras-salt-pans": { label: "Road approach", value: "About 6.6 km from Maras town" },
  "pisac-ruins": { label: "Average park altitude", value: "About 3,400 m" },
  "huayna-picchu": { label: "Official route", value: "Circuit 3, Route 3-A" },
  "intipunku-machu-picchu": { label: "Citadel route", value: "Circuit 1, Route 1-C in high season" },
  qorikancha: { label: "From Plaza de Armas", value: "About 500 m on foot in the tourism inventory" },
  "san-pedro-market": { label: "From Plaza de Armas", value: "About 700 m on foot in the tourism inventory" },
};

export const planningSources: Record<string, string> = {
  "maras-town": "https://munimaras.blogspot.com/p/las-portadas.html",
  qorikancha: mincetur + "1790",
  "san-pedro-market": mincetur + "6899",
};

const ollantaRating = "https://www.google.com/travel/hotels/entity/ChkI48Oh-57lrIYsGg0vZy8xMWZqNHZnamtjEAE?ap=ugEGcHJpY2Vz&ts=CAEaBAoCGgAqBAoAGgA";
const cuscoRating = "https://www.google.com/travel/hotels/entity/ChkIvJrIm7idrdAGGg0vZy8xMXJuNG5keThjEAE?gsas=1";
const elAlbergue = "https://www.google.com/travel/hotels/entity/ChcIz-6cnJWnv_lnGgsvZy8xdGZ6MTVkcRAB?ts=CAESABogCgIaABIaEhQKBwjlDxAHGBQSBwjlDxAHGBUYATICEAAqCQoFOgNVU0QaAA";

const unuwasi = "https://www.google.com/travel/hotels/entity/ChoIi7vat6nJuNGpARoNL2cvMTFxMmtocDNwMBAB?ts=CAEaIAoCGgASGhIUCgcI6g8QCBgeEgcI6g8QCBgfGAEyAhAAKgkKBToDVVNEGgA";
const killay = "https://www.google.com/travel/hotels/entity/CgoI0-HO-Z_QouE0EAE?ts=CAEaIAoCGgASGhIUCgcI6g8QCBgeEgcI6g8QCBgfGAEyAhAAKgkKBToDVVNEGgA";

export const placeRatings: Record<string, { score: string; reviews: string; url: string }> = {
  pinkuylluna: { score: "4.7", reviews: "756", url: elAlbergue },
  moray: { score: "4.7", reviews: "13,112", url: unuwasi },
  chinchero: { score: "4.7", reviews: "8,007", url: unuwasi },
  "maras-salt-pans": { score: "4.7", reviews: "1,751", url: unuwasi },
  "huchuy-qosqo": { score: "4.8", reviews: "179", url: unuwasi },
  "pisac-ruins": { score: "4.8", reviews: "10,264", url: killay },
  "puka-pukara": { score: "4.6", reviews: "3,614", url: killay },
  inkariy: { score: "4.7", reviews: "1,066", url: unuwasi },
  pumamarca: { score: "4.7", reviews: "185", url: ollantaRating },
  "naupa-iglesia": { score: "4.7", reviews: "255", url: ollantaRating },
  sacsayhuaman: { score: "4.7", reviews: "20,506", url: cuscoRating },
  qorikancha: { score: "4.7", reviews: "20,590", url: cuscoRating },
  "san-pedro-market": { score: "4.3", reviews: "45,754", url: cuscoRating },
  tambomachay: { score: "4.6", reviews: "4,171", url: killay },
};

export const confirmedTicketPrices: Record<string, { text: string; source: string }> = {
  huaro: { text: "MINCETUR lists S/18 for international visitors and S/10 for Peruvian visitors or students. Confirm the current rate and route inclusions with the church.", source: mincetur + "1821" },
  canincunca: { text: "MINCETUR lists S/18 for international visitors and S/10 for Peruvian visitors or students. Confirm admission arrangements with the chapel before traveling.", source: mincetur + "1822" },
  "sayri-tupac": { text: "MINCETUR lists free entry. Ask locally which parts are accessible and view the frontage from public space.", source: mincetur + "1779" },
  "museo-inka": { text: "UNSAAC lists S/20 for international adults and S/10 for Peruvian adults. See the museum’s student rates and current conditions before travel.", source: "https://museoinka.unsaac.edu.pe/informacion.php" },
};
