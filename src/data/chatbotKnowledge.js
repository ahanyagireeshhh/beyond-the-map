// Comprehensive local knowledge base and conversational AI engine for Kozhikode (Malabar Mitra)

export const CHATBOT_PROMPTS = [
  "What is the best route and 1-day itinerary for Kozhikode?",
  "How do I reach Beypore Uru yard from city center?",
  "How do I reach Kappad Beach and what is the best route?",
  "Where can I find the best Kozhikodan Biryani right now?",
  "Where do I buy authentic Kozhikodan Halwa on SM Street?",
  "What are the auto-rickshaw meter rates and bus routes?",
  "I am lost! Help me find my way back to safety or transport.",
  "Teach me essential Malayalam phrases for traveling in Calicut."
];

export const MALAYALAM_PHRASES = [
  { phrase: "Namaskaram", meaning: "Hello / Greetings", mal: "നമസ്കാരം" },
  { phrase: "Evideya...?", meaning: "Where is...?", mal: "എവിടെയാ...?" },
  { phrase: "Ethra roopa aakum?", meaning: "How much will this cost?", mal: "എത്ര രൂപയാകും?" },
  { phrase: "Nanni", meaning: "Thank you", mal: "നന്ദി" },
  { phrase: "Kozhikode railway station-ilekku povumo?", meaning: "Will you go to Kozhikode Railway Station?", mal: "റെയിൽവേ സ്റ്റേഷനിലേക്ക് പോവുമോ?" },
  { phrase: "Oru choodu Sulaimani tharumo?", meaning: "Can I get a hot Sulaimani tea?", mal: "ഒരു ചൂട് സുലൈമാനി തരുമോ?" }
];

export function getOfflineAIResponse(userMessage, currentLocation = null) {
  const query = userMessage.toLowerCase().trim();

  // 1. LOST / SOS INTENT
  if (
    query.includes('lost') ||
    query.includes('where am i') ||
    query.includes('help me find') ||
    query.includes('lost my way') ||
    query.includes('sos') ||
    query.includes('stuck')
  ) {
    const locName = currentLocation?.name || "Mananchira Square (City Center)";
    return `🚨 **Lost Traveler Assistance Activated!** 
Don't worry, Kozhikode is one of the safest and friendliest cities in India with legendary hospitality!

📍 **Your current reference point:** **${locName}**

🧭 **Immediate Orientation & Transport Steps:**
1. **Auto-Rickshaws:** Flag down any black-and-yellow or green auto-rickshaw. Calicut auto drivers are famous for using strict fair meters (*'Meter idumo?'*).
2. **Key Landmarks nearby:**
   - **Kozhikode Railway Station (CLT):** South of Mananchira, ~1.2 km (5 mins by auto, ₹40-50).
   - **KSRTC Bus Terminal (Mavoor Road):** East of Mananchira, ~1.8 km (7 mins by auto).
   - **Palayam Bus Stand:** Walking distance from SM Street and Mananchira (~500m).
3. **Emergency Numbers:**
   - Kerala Police Helpline: **112**
   - Kozhikode Pink Police (Women's Safety): **1515**
   - Beach Police Aid Post: **0495 2365440**

Tell me what landmark or shop sign you see around you, and I will guide you step-by-step!`;
  }

  // 2. ROUTE & DIRECTIONS INTENT (Answers all route, travel time, and destination questions)
  if (
    query.includes('route') ||
    query.includes('how to reach') ||
    query.includes('how to get') ||
    query.includes('how do i reach') ||
    query.includes('directions') ||
    query.includes('distance') ||
    query.includes('way to') ||
    query.includes('itinerary') ||
    query.includes('how far')
  ) {
    if (query.includes('beypore') || query.includes('uru')) {
      return `🧭 **Route to Beypore Port & Uru Yard (11 km South):**
- **From City Center / Railway Station:** 
  Take the Kallai Road ➔ Meenchanda Junction ➔ Cheruvannur ➔ Beypore Port Road.
- **Estimated Travel Time:** ~25-30 minutes by auto or taxi.
- **Auto Fare:** Approximately ₹150 - ₹180 (by strict Kozhikode meter).
- **Public Bus:** Regular blue city buses depart from Palayam Bus Stand every 10 minutes directly to Beypore Harbor (Fare: ~₹18).
- **Must-See on Route:** Historic Kallai timber river bridge, Beypore Uru craft shipyard, and the 2 km stone sea walkway (Pulimuttu).`;
    }

    if (query.includes('kappad')) {
      return `🧭 **Route to Kappad Beach & Vasco da Gama Monument (16 km North):**
- **From City Center:** 
  Head north on Kannur Road (NH 66) ➔ West Hill ➔ Elathur ➔ Turn left towards Kappad Beach Road.
- **Estimated Travel Time:** ~35-40 minutes.
- **Auto / Cab Fare:** Auto ~₹260 - ₹300; Cab ~₹350 - ₹450.
- **Public Bus:** Frequent buses towards Koyilandy from Kozhikode New Bus Stand (Mavoor Road); ask for Kappad stop (Fare: ~₹22).
- **Highlight:** Blue Flag certified beach with clean water and rocky headland.`;
    }

    if (query.includes('beach') || query.includes('pier') || query.includes('kadalpalam')) {
      return `🧭 **Route to Kozhikode Beach & Sea Pier (1.5 km West):**
- **From Mananchira Square:** Walk straight west via Court Road / Beach Road (~15-20 minutes pleasant walk), or take an auto (~₹35, 5 mins).
- **From Railway Station:** Just 1.2 km; take an auto from the western exit (~₹35, 4 mins).
- **Tip:** Head there around 5:00 PM for sunset, hot Kallummakkaya fry, and fresh pickled mango!`;
    }

    if (query.includes('sm street') || query.includes('mittai theruvu') || query.includes('halwa')) {
      return `🧭 **Route to S.M. Street (Mittai Theruvu):**
- **Location:** Right in the heart of Calicut, directly adjacent to Mananchira Square and Palayam.
- **From Railway Station:** Just 800m north; ~10 mins walk or ₹30 minimum auto fare.
- **Note:** S.M. Street is completely pedestrianized (no vehicles allowed), making it a wonderful stroll for shopping hot Halwa and freshly fried banana chips!`;
    }

    if (query.includes('kuttichira') || query.includes('mishkal')) {
      return `🧭 **Route to Kuttichira & Mishkal Mosque (2 km Southwest):**
- **From Mananchira:** Head south-west through Big Bazaar / Halwa bazaar towards Kuttichira tank (~7 mins auto, ₹40-50).
- **Highlights:** 700-year-old wooden tiered Mishkal Mosque, ancient temple-style pond, and Zain's restaurant for evening snacks.`;
    }

    if (query.includes('itinerary') || query.includes('1-day') || query.includes('one day') || query.includes('tour')) {
      return `🗺️ **The Ultimate 1-Day Kozhikode Route & Itinerary:**
1. **Morning (8:30 AM - 11:30 AM):** 
   - Start at **Mananchira Square** & stroll through the historic **S.M. Street** (taste warm Halwa).
   - Explore **Mishkal Mosque** and Kuttichira heritage quarter.
2. **Lunch (12:30 PM - 2:00 PM):** 
   - Head to **Paragon Restaurant** (Kannur Rd) for the world-ranked Chicken Dum Biryani, or **Rahmath** for Beef Biryani.
3. **Afternoon (2:30 PM - 5:00 PM):** 
   - Take the 25-min drive to **Beypore** to see giant handcrafted **Uru ships** and walk 2 km into the ocean on the **Pulimuttu sea bridge**.
4. **Sunset & Evening (5:30 PM - 8:30 PM):** 
   - Relax at **Kozhikode Beach**, photograph the historic **1871 Kadalpalam pier**, and savor spiced **Sulaimani tea** with pickled snacks.`;
    }

    return `🧭 **Kozhikode Route & Travel Navigator:**
Here are standard routes and distances from the city center (Mananchira / Railway Station):
- **Kozhikode Beach & Pier:** 1.5 km West | 5 mins by auto (~₹35)
- **S.M. Street (Halwa Bazaar):** 500 m East | Walking distance
- **Mishkal Mosque & Kuttichira:** 2.0 km South-West | 8 mins by auto (~₹45)
- **Paragon Restaurant:** 1.8 km North | 7 mins by auto (~₹40)
- **Beypore Uru Yard & Beach:** 11 km South | 25 mins by auto (~₹160) or Palayam bus (₹18)
- **Kappad Historic Beach:** 16 km North | 35 mins by auto (~₹280) or NH66 bus (₹22)
- **Sarovaram Bio Park:** 4.2 km North-East | 12 mins by auto (~₹75)
- **Calicut Airport (CCJ):** 26 km South-East | 45 mins by cab (~₹750)

Ask me about any specific spot for exact turns, bus numbers, and travel times!`;
  }

  // 3. BIRYANI / FOOD INTENT
  if (
    query.includes('biryani') ||
    query.includes('food') ||
    query.includes('eat') ||
    query.includes('restaurant') ||
    query.includes('lunch') ||
    query.includes('dinner') ||
    query.includes('porotta')
  ) {
    return `🍛 **Kozhikode Culinary Guide — The Capital of Taste!**

Here are the legendary, unmissable spots:
1. **Paragon Restaurant (Kannur Road):** World-ranked #11 legendary restaurant. Order the **Chicken Dum Biryani** (made with fragrant short-grain Kaima rice), **Fish Mango Curry**, and **Aykoora Pollichathu**.
2. **Rahmath Restaurant (Aravind Ghosh Rd):** Celebrated for their legendary **Beef Dum Biryani** with melt-in-mouth tender meat.
3. **Zains (Kuttichira):** The pioneer of authentic Mappila snacks: **Chatti Pathiri**, **Unnakaya**, and **Arikadukka** (stuffed fried mussels).
4. **Bombay Hotel (Near Beach):** Classic 1920s heritage teahouse serving steaming hot **Biryani** and afternoon Sulaimani.
5. **Topform & Sagar:** Great for quick lunch dum biryani and fresh Malabar seafood fries.

💡 *Pro-tip: Always conclude your Kozhikode feast with a glass of piping hot, spiced Sulaimani (black tea with cardamom and fresh lime)!*`;
  }

  // 3. HALWA / SM STREET / SWEETS INTENT
  if (
    query.includes('halwa') ||
    query.includes('sm street') ||
    query.includes('mittai theruvu') ||
    query.includes('sweet') ||
    query.includes('shopping') ||
    query.includes('banana chips')
  ) {
    return `🍬 **SM Street (Mittai Theruvu) & Kozhikodan Halwa Guide:**

- **What is it?** Kozhikodan Halwa is a translucent, chewy delicacy cooked slowly for hours in pure coconut oil or ghee with wheat extract and spices.
- **Top Halwa Flavors to try:**
  - *Classic Black Halwa (Karutha Halwa):* Deep rich jaggery and pure ghee taste.
  - *Tender Coconut (Elaneer) Halwa:* Translucent and delicately fragrant.
  - *Dry Fruit & Badam Halwa:* Rich with toasted cashews and almonds.
- **Where to buy:**
  - **Sankaran Bakery (SM Street):** Generations-old legendary maker; they always offer free generous tasting cubes!
  - **Cochin Bakery / Royal Sweets:** Vacuum-packed fresh boxes that last for months.
- **Live Banana Chips:** Watch hot chips sliced and fried fresh in pure boiling coconut oil right along SM Street.`;
  }

  // 4. BEYPORE / URU INTENT
  if (
    query.includes('uru') ||
    query.includes('beypore') ||
    query.includes('ship') ||
    query.includes('boat') ||
    query.includes('khalasi')
  ) {
    return `⛵ **The Living Legend of Beypore Uru:**

- **What makes it unique?** Beypore Urus are gigantic ocean dhows handcrafted entirely of Malabar teak wood without any blueprints or steel nails! The master craftsmen (Mooppans) hold the entire mathematical design purely in their minds.
- **The Khalasis:** Traditional riggers who have hauled 1,000-ton vessels into water for centuries using pulleys and timber winches called *Dhabba*.
- **Location & Timing:** Beypore is ~11 km south of Kozhikode center. The Uru yards and the **Beypore Pulimuttu** (2 km stone sea-walk into the ocean) are open daily from 9:00 AM to 6:30 PM.
- **Souvenir:** You can buy a miniature handcrafted rosewood and brass Uru model with certified GI tag at the local artisans' cooperative!`;
  }

  // 5. BEACHES / SUNSET INTENT
  if (
    query.includes('beach') ||
    query.includes('sunset') ||
    query.includes('sea') ||
    query.includes('kappad') ||
    query.includes('pier') ||
    query.includes('kadalpalam')
  ) {
    return `🌅 **Best Beaches & Sunset Spots in Kozhikode:**

1. **Kozhikode Beach (Main City Beach):**
   - Iconic 1871 ruined iron sea pier (**Kadalpalam**) silhouetted against glowing orange skies.
   - Street food heaven: Try spicy **Kallummakkaya** (crushed mussels fry) and pickled mango/pineapple (**Uppilittathu**).
   - Best time: **5:15 PM – 6:45 PM**.
2. **Kappad Beach (16 km North):**
   - Historic shore where Vasco da Gama landed on **May 20, 1498**.
   - Certified international **Blue Flag Eco Beach** with pristine clean waters, cycling pathways, and rock jutting into sea.
3. **Beypore Sea Walkway (Pulimuttu):**
   - A dramatic 2 km stone walkway where you walk literally in the middle of the Arabian ocean with waves on both sides!`;
  }

  // 6. HISTORY / ZAMORIN INTENT
  if (
    query.includes('history') ||
    query.includes('zamorin') ||
    query.includes('samoothiri') ||
    query.includes('vasco') ||
    query.includes('portuguese') ||
    query.includes('monument')
  ) {
    return `📜 **Kozhikode's Epic Heritage & The Zamorin Dynasty:**

- **The City of Truth:** Kozhikode earned the historical moniker *'The City of Truth'* because the benevolent Zamorin kings guaranteed fair weights, safety, and religious freedom to merchants of all nations.
- **Spice Trade Hub:** Pliny the Elder and Ibn Battuta wrote about Calicut as the global epicenter of the black pepper trade connecting Arabia, Persia, China, and Africa.
- **Key Historic Milestones:**
  - *14th Century:* Zamorin King Mana Vikrama excavates Mananchira royal tank; Mishkal Mosque built in wooden pagoda style.
  - *May 20, 1498:* Vasco da Gama lands at Kappad Beach opening direct European sea route to Asia.
  - *1510:* Zamorin troops defend Mishkal Mosque against Portuguese invaders.
  - *1871:* British build the 1,500-foot iron shipping pier at Kozhikode Beach.`;
  }

  // 7. TRANSPORT / AUTO / BUS INTENT
  if (
    query.includes('transport') ||
    query.includes('auto') ||
    query.includes('taxi') ||
    query.includes('bus') ||
    query.includes('train') ||
    query.includes('fare')
  ) {
    return `🚖 **Getting Around Kozhikode — Fast & Honest:**

1. **Auto-Rickshaws:** Kozhikode has the most courteous auto drivers in South India. They almost universally turn on the meter! Base minimum fare is ₹30 for the first 1.5 km, then ₹15/km.
2. **City Buses:**
   - Blue city buses run frequently connecting Beach, Railway Station, Medical College, Beypore, and Mananchira.
   - Fare ranges from ₹10 to ₹25 for city routes.
3. **Major Hubs:**
   - **Kozhikode Railway Station (CLT):** Centrally located near Palayam / Mananchira.
   - **New Bus Stand (Mavoor Road):** For inter-district buses to Wayanad, Kannur, Kochi, Bengaluru.
   - **Calicut International Airport (CCJ):** Located in Karipur (~26 km away, ~45 mins by cab / ₹700-900).`;
  }

  // 8. MALAYALAM TRAVEL WORDS
  if (
    query.includes('malayalam') ||
    query.includes('language') ||
    query.includes('phrase') ||
    query.includes('words')
  ) {
    return `🗣️ **Essential Kozhikode Malayalam Cheat Sheet:**

- **Namaskaram** (നമസ്കാരം) = Hello / Greetings
- **Evideya?** (എവിടെയാ?) = Where is [place]? (e.g. *"Beach evideya?"*)
- **Ethra roopa aakum?** (എത്ര രൂപയാകും?) = How much will this cost?
- **Shari** (ശരി) = Okay / Alright
- **Nanni** (നന്ദി) = Thank you
- **Choodu vellam tharumo?** (ചൂട് വെള്ളം തരുമോ?) = Could I have some warm drinking water?
- **Oru Sulaimani!** (ഒരു സുലൈമാനി!) = One glass of spiced black tea, please!

Locals will be delighted and warmly welcome you when you say *"Namaskaram!"*`;
  }

  // 9. GENERAL / CULTURAL GREETING FALLBACK
  return `✨ **Namaskaram from Kozhikode!**
I am your **Malabar Mitra** (Kozhikode Virtual Explorer Assistant). 

Here are great things I can help you with right now:
- 🍛 **Culinary Trails:** Best places for Biryani, Halwa, Sulaimani & Kallummakkaya.
- 🏰 **Heritage Stories:** Secrets of the Zamorins, Mishkal Mosque, and 1498 Vasco landing.
- ⛵ **Beypore Uru Crafts:** How giant wooden ocean ships are built without nails.
- 🌅 **Sunset Guide:** Prime locations for Arabian sea views and sea pier photography.
- 🚖 **Directions & Safety:** Transport routes, honest auto fares, and our "Lost Traveler" SOS guide.

What would you like to explore next? Feel free to ask anything!`;
}
