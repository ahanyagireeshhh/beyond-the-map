// Comprehensive database of Kozhikode (Calicut) tourist destinations, monuments, food spots, and heritage landmarks

export const LOCATIONS = [
  {
    id: 'kozhikode-beach',
    name: 'Kozhikode Beach & Sea Pier',
    malayalamName: 'കോഴിക്കോട് ബീച്ച് & കടൽപ്പാലം',
    tagline: 'Historic Arabian sunset shore with 150-year-old iron sea bridge',
    category: 'beaches',
    categoryLabel: 'Beaches & Sunsets',
    isMustTry: true,
    coordinates: { lat: 11.2618, lng: 75.7698 },
    address: 'Beach Road, Vellayil, Kozhikode, Kerala 673032',
    rating: 4.85,
    reviewsCount: 4120,
    badgeRewardId: 'arabian-voyager',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Calicut_Beach_with_Pier.JPG/1280px-Calicut_Beach_with_Pier.JPG',
    historicalEra: '1871 British Maritime Trading Port',
    openHours: 'Open 24 hours (Best 4:30 PM - 8:30 PM)',
    bestTimeToVisit: 'Sunset (5:15 PM - 6:45 PM)',
    entryFee: 'Free',
    priceRange: '₹ (Budget Beach Food: ₹50 - ₹150)',
    approxCostForTwo: '₹150 for snacks & tea',
    priceTier: 'budget',
    signatureDishes: [
      { name: 'Kallummakkaya Nirachathu (Fried Stuffed Mussels)', price: '₹80', desc: 'Fresh local sea mussels stuffed with spiced rice batter and crisp-fried' },
      { name: 'Uppilittathu (Pickled Mango, Gooseberry & Pineapple)', price: '₹30', desc: 'Tangy local fruits marinated in salted brine with green bird-eye chilies' },
      { name: 'Elaneer Shake (Fresh Tender Coconut Milkshake)', price: '₹60', desc: 'Chilled cream of tender coconut blended with fresh coconut water' },
      { name: 'Crushed Ice / Ice Orathi', price: '₹40', desc: 'Traditional Calicut hand-shaved ice topped with rose syrup and fruits' }
    ],
    reviews: [
      { author: "Nikhil K., Mumbai", rating: 5, comment: "Walking beside the weathered 1871 Kadalpalam pillars while the sun sinks into the Arabian sea is pure poetry. Don't leave without tasting the fried mussels!", source: "Google Reviews" },
      { author: "Sara V., Bangalore", rating: 5, comment: "The vibe at 6 PM is incredible. Families, artists, and foodies all gathering. Safe, clean, and filled with authentic Malabar warmth.", source: "TripAdvisor" }
    ],
    tags: ['Must-Try', 'Sunset', 'Street Food', 'Kallummakkaya', 'Sea Bridge', 'Breeze', 'Heritage'],
    mustTryOrSee: [
      'Pickled fruits (Uppilittathu) & Kallummakkaya (spiced mussels) at beach shacks',
      'The iconic skeletal pillars of the 1871 ruined shipping pier (Kadalpalam)',
      'Lighthouse built in 1907 emitting dual flashes across the Malabar Coast',
      'Kozhikode Beach open-air cultural stage and Gandhi statue'
    ],
    audioNarration: {
      english: "Welcome to Kozhikode Beach, the heartbeat of Malabar's coastal soul. For centuries, merchant vessels from Arabia, Persia, and Venice dropped anchor off these very sands to trade in black gold—Malabar pepper. In 1871, the British built the 1,500-foot iron sea bridge right ahead of you to crane spices directly into steamships. Today, the weathered rust-colored pillars stand as majestic maritime sculptures against the blazing orange Arabian sunset. As the evening sea breeze rolls in, the air fills with the aroma of freshly fried crushed mussels and salted green mangoes.",
      malayalamSummary: "കോഴിക്കോടിന്റെ പ്രൗഢമായ കടലോര ചരിത്രത്തിലേക്ക് സ്വാഗതം. നൂറ്റാണ്ടുകളോളം അറബികളും യൂറോപ്യന്മാരും സുഗന്ധവ്യഞ്ജന വ്യാപാരത്തിനെത്തിയ ഈ തീരത്ത് 1871-ൽ പണിത കടൽപ്പാലത്തിന്റെ അവശിഷ്ടങ്ങൾ ഇന്നും തലയുയർത്തി നിൽക്കുന്നു.",
      durationSec: 45
    },
    arExperience: {
      modelType: 'sea-pier',
      title: '1871 Victorian Steam Pier Restoration',
      subtitle: 'Look through your lens to see the active maritime port of 1890',
      hotspots: [
        { title: 'Hydraulic Steam Cranes', text: 'Loaded 5,000 tons of Malabar spices daily directly into British India Steam Navigation vessels.', x: 30, y: 40 },
        { title: 'The Old Rail Track', text: 'Narrow gauge trolley line transported pepper bags from Calicut warehouses to pier head.', x: 65, y: 55 },
        { title: 'Arabian Dhow Anchorage', text: 'Local boatmen navigated the surf with wooden canoes called Machwas.', x: 50, y: 25 }
      ],
      timeTravelYears: ['1498 Medieval Port', '1890 Steam Pier Boom', '2026 Coastal Promenade'],
      timeTravelDescriptions: [
        'Zamorin fleet welcoming Arab merchants with coir-bound dhows on the open coast.',
        'Thriving iron pier humming with steam whistles, spice sacks, and dock workers.',
        'Vibrant evening leisure destination famed for cultural festivals and golden sunsets.'
      ]
    },
    quest: {
      title: 'Secrets of the Arabian Pier',
      storyPrompt: 'Uncover the engineering and spice legends hidden beneath the historic Kadalpalam pillars.',
      xp: 120,
      clue: 'Look for the year the iron pier was commissioned by the British port engineers.',
      questions: [
        {
          question: 'In what year was the famous Kozhikode Sea Pier (Kadalpalam) erected?',
          options: ['1750', '1871', '1947', '1920'],
          correctIndex: 1,
          explanation: 'The pier was erected in 1871 to transport spices from godowns into waiting ships anchored deep in the Arabian Sea.'
        },
        {
          question: 'Which iconic Malabar beach delicacy made with spicy batter-fried shellfish is synonymous with Kozhikode Beach?',
          options: ['Kallummakkaya Nirachathu (Stuffed Mussels)', 'Gobi Manchurian', 'Fish & Chips', 'Dosa'],
          correctIndex: 0,
          explanation: 'Kallummakkaya (fresh green-lipped mussels coated in chili rice paste and shallow-fried) is the signature street food of Kozhikode beach.'
        }
      ]
    },
    facts: [
      'Kozhikode beach hosted the very first All India Radio broadcast towers in Malabar.',
      'During monsoon storms, the Arabian sea waves surge right up to the coastal walkway creating dramatic spray.',
      'Renowned Malayalam writer Vaikom Muhammad Basheer spent numerous evenings conversing with sea lovers here.'
    ],
    travelTips: [
      'Visit around 5:00 PM to grab the best seating along the sea wall before sunset.',
      'Carry small cash for the roadside pickled fruits (Nellakka, Manga, Pineapple in brine).'
    ]
  },
  {
    id: 'beypore-uru',
    name: 'Beypore Port & Uru Shipbuilding Yard',
    malayalamName: 'ബേപ്പൂർ തുറമുഖവും ഉരു നിർമ്മാണവും',
    tagline: 'World-famous 1,500-year-old living tradition of handcrafted giant wooden ships',
    category: 'culture',
    categoryLabel: 'Heritage & Crafts',
    isMustTry: true,
    coordinates: { lat: 11.1645, lng: 75.8118 },
    address: 'Beypore Marina & Wharf, Kozhikode, Kerala 673015',
    rating: 4.92,
    reviewsCount: 3120,
    badgeRewardId: 'uru-shipwright',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Uru.jpg/1280px-Uru.jpg',
    historicalEra: '1st Millennium BCE - Maritime Silk Route',
    openHours: '9:00 AM - 6:00 PM',
    bestTimeToVisit: 'Morning 9:30 AM or Late Afternoon',
    entryFee: '₹20 (Beypore Pulimuttu walkway)',
    priceRange: '₹ (Boat Tickets & Local Snacks: ₹50 - ₹150)',
    approxCostForTwo: '₹100',
    priceTier: 'budget',
    signatureDishes: [
      { name: 'Fresh Chaliyar River Pearl Spot (Karimeen) Fry', price: '₹180', desc: 'Caught fresh and pan-roasted in spicy shallot paste' },
      { name: 'Hot Sulaimani & Pazham Pori (Banana Fritters)', price: '₹35', desc: 'Crisp ripe banana in golden batter with fragrant black tea' }
    ],
    reviews: [
      { author: "Capt. Mark Davies, UK", rating: 5, comment: "Seeing a 1,000-ton wooden ship built without a single engineering drawing on paper is an absolute wonder of the world.", source: "National Geographic Traveler" },
      { author: "Reshma P., Kochi", rating: 5, comment: "The sea bridge walkway (Pulimuttu) where waves hit on both sides as you walk into the ocean is unforgettable!", source: "Google Reviews" }
    ],
    tags: ['Must-Try', 'Shipbuilding', 'Uru', 'Craftsmanship', 'Chaliyar River', 'Port', 'Pulimuttu Walkway'],
    mustTryOrSee: [
      'Active Uru yards where master craftsmen (Khalasis) shape teak hulls using only hand tools',
      'The 2-kilometer stone sea bridge (Pulimuttu) that stretches deep into the Arabian Sea',
      'Fresh river fish fry at local harbor eateries',
      'Miniature souvenir Urus carved out of seasoned rosewood and brass'
    ],
    audioNarration: {
      english: "You are standing at Beypore, where human craftsmanship defies centuries of industrialization. For over 1,500 years, the master carpenters called 'Mooppans' and skilled riggers known as 'Khalasis' have built colossal ocean-going wooden vessels called 'Urus' without a single blueprint drawn on paper. Using pure geometric intuition, Malabar teak, and coconut coir, these ships were sought after by Arab sultans and Mediterranean traders. Watch closely as the iron-hard timber of Nilambur forests is bent using steam and sheer muscle power right beside the tranquil Chaliyar River.",
      malayalamSummary: "നൂറ്റാണ്ടുകളുടെ പെരുമ പേറുന്ന ബേപ്പൂർ ഉരു നിർമ്മാണ കേന്ദ്രത്തിലേക്ക് സ്വാഗതം. യാതൊരുവിധ ബ്ലൂപ്രിന്റുമില്ലാതെ മനസ്സിലെ കണക്കുകൂട്ടലുകൾ കൊണ്ട് മാത്രം പണിയുന്ന ലോകപ്രശസ്തമായ തടി കപ്പലുകളാണ് ബേപ്പൂർ ഉരു.",
      durationSec: 50
    },
    arExperience: {
      modelType: 'uru-ship',
      title: 'Handcrafted Beypore Dhow (Uru)',
      subtitle: 'Interactive exploration of the wooden hull, teak frames, and Khalasi winches',
      hotspots: [
        { title: 'Nilambur Teak Planking', text: 'Resistant to sea rot and marine borers for up to 100 years of continuous voyaging.', x: 45, y: 50 },
        { title: 'Coir & Fish Oil Caulking', text: 'Seams are caulked with wild resin, indigenous cotton, and sardine oil to make the vessel waterproof.', x: 70, y: 65 },
        { title: 'Khalasi Launch Winch', text: 'Legendary Khalasis use pulley mechanisms (Dhanb) to roll 1,000-ton ships into the river effortlessly.', x: 20, y: 35 }
      ],
      timeTravelYears: ['Ancient Mesopotamia Trade', '1970s Gulf Boom', 'Modern Artisan Era'],
      timeTravelDescriptions: [
        'Vessels loaded with spices, timber, and peacocks setting sail towards ancient Babylon.',
        'Luxurious custom-built royal yachts commissioned by Qatar and Kuwait royalty.',
        'Protected GI-tagged heritage craft celebrated across international nautical circles.'
      ]
    },
    quest: {
      title: 'The Master Khalasi Challenge',
      storyPrompt: 'Prove your knowledge of Beypore’s ancient maritime naval architecture and engineering wonders.',
      xp: 150,
      clue: 'Notice the legendary group of traditional riggers renowned across India for moving massive weights.',
      questions: [
        {
          question: 'What are the traditional rigger craftsmen of Beypore famed for their mechanical hauling prowess called?',
          options: ['Khalasis', 'Chettiyars', 'Samurais', 'Marakkars'],
          correctIndex: 0,
          explanation: 'The Beypore Khalasis are celebrated world-over for their traditional winch (Dhabba) techniques capable of hauling submerged locomotives and multi-ton ships.'
        },
        {
          question: 'What river empties into the Arabian Sea at Beypore, transporting timber down from Nilambur forests?',
          options: ['Periyar', 'Chaliyar', 'Bharathapuzha', 'Pamba'],
          correctIndex: 1,
          explanation: 'The Chaliyar River was historically the liquid highway used to float seasoned logs from Nilambur rainforests directly into Beypore shipyards.'
        }
      ]
    },
    facts: [
      'The Beypore Uru holds a prestigious Geographical Indication (GI) tag for its unique handicraft method.',
      'Modern Arab royals still commission multi-million dollar luxury cruising Urus from Beypore yards.',
      'The Khalasis were summoned by Indian Railways to salvage fallen train engines from the Kadalundi river disaster because modern cranes could not match their ingenuity.'
    ],
    travelTips: [
      'Walk along the Beypore Pulimuttu stone pier in the late afternoon for a 360-degree ocean breeze.',
      'Purchase certified GI miniature Uru models from the government handicraft society near the jetty.'
    ]
  },
  {
    id: 'sm-street',
    name: 'SM Street (Sweet Meat Street / Mittai Theruvu)',
    malayalamName: 'മിഠായിത്തെരുവ് (എസ്.എം. സ്ട്രീറ്റ്)',
    tagline: 'Legendary pedestrian bazaar famed for Kozhikodan Halwa and Malabar sweets',
    category: 'shopping',
    categoryLabel: 'Shopping & Bazaars',
    isMustTry: true,
    coordinates: { lat: 11.2505, lng: 75.7794 },
    address: 'S.M. Street, Palayam, Kozhikode, Kerala 673001',
    rating: 4.93,
    reviewsCount: 4680,
    badgeRewardId: 'sweet-meat-maestro',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/S_M_Street1.jpg/1280px-S_M_Street1.jpg',
    historicalEra: '14th Century Zamorin Market Guilds',
    openHours: '9:30 AM - 10:00 PM',
    bestTimeToVisit: 'Evening (5:00 PM - 9:00 PM when lights glow)',
    entryFee: 'Free (Pedestrianized Zone)',
    priceRange: '₹ - ₹₹ (Halwa & Sweets: ₹150 - ₹400/kg)',
    approxCostForTwo: '₹300 for Halwa & live chips',
    priceTier: 'budget',
    signatureDishes: [
      { name: 'Classic Black Ghee Halwa (Karutha Halwa, 1kg)', price: '₹280', desc: 'Deep black gelatinous delicacy made with palm jaggery, pure ghee, and wheat milk' },
      { name: 'Tender Coconut (Elaneer) Halwa (500g)', price: '₹180', desc: 'Translucent and subtly sweet, made with fresh tender coconut water and kernel' },
      { name: 'Hot Wafer-Thin Banana Chips (500g)', price: '₹170', desc: 'Sliced fresh and fried right before your eyes in pure boiling coconut oil' },
      { name: 'Dry-Fruit & Nut Halwa (500g)', price: '₹220', desc: 'Rich with toasted cashews, almonds, and cardamom' }
    ],
    reviews: [
      { author: "Deepak Menon, Chennai", rating: 5, comment: "Sankaran Bakery gives you tasting cubes of 10 different halwa varieties before you buy! The Elaneer halwa melts like silk.", source: "Zomato" },
      { author: "Ayesha R., Hyderabad", rating: 5, comment: "Completely vehicle-free street with historic architecture and the intoxicating smell of ghee and roasting coconut oil!", source: "Google Reviews" }
    ],
    tags: ['Must-Try', 'Kozhikodan Halwa', 'Shopping', 'Heritage Street', 'Banana Chips', 'S.K. Pottekkatt', 'Spices'],
    mustTryOrSee: [
      'Tasting glistening black, tender coconut, and dry-fruit Kozhikodan Halwa simmered in pure ghee',
      'Fresh hot wafer-thin raw banana chips fried live in fragrant coconut oil',
      'The bronze statue of Jnanpith laureate S.K. Pottekkatt who immortalized the street in literature',
      'Antique textile shops, attar perfume stalls, and Gujarati merchant temples'
    ],
    audioNarration: {
      english: "Welcome to Mittai Theruvu, globally known as Sweet Meat Street or SM Street. When Gujarati sweet makers and Arab merchants settled here under the benevolent patronage of the Zamorin of Calicut, the British dubbed the glistening, jelly-like halwa as 'Sweet Meat'. Immortalized by Kerala's great novelist S.K. Pottekkatt in his epic work 'Oru Desathinte Katha', this pedestrian boulevard retains its cobblestone charm, fragrant copper cauldrons of simmering ghee, stacks of vibrant multicolored halwa, and bustling textile houses.",
      malayalamSummary: "എസ്.കെ. പൊറ്റെക്കാട്ടിന്റെ 'ഒരു ദേശത്തിന്റെ കഥ'യിലൂടെ പ്രശസ്തമായ മിഠായിത്തെരുവ്. നെയ്യിൽ തിളങ്ങുന്ന കോഴിക്കോടൻ ഹൽവയും ചൂടുള്ള നേന്ത്രക്കായ വറുത്തതും സുഗന്ധം പരത്തുന്ന ചരിത്ര വീഥി.",
      durationSec: 48
    },
    arExperience: {
      modelType: 'halwa-stall',
      title: 'Traditional Malabar Halwa & Spice Urn',
      subtitle: 'Inspect authentic ingredients, brass cauldrons, and historic trading tokens',
      hotspots: [
        { title: 'Pure Ghee & Palm Jaggery', text: 'Stirred continuously for over 6 hours in giant round brass cauldrons called Varpus.', x: 50, y: 55 },
        { title: 'Sankaran Bakery Recipe', text: 'Classic recipes preserved through three generations of master confectioners.', x: 25, y: 40 },
        { title: 'Parsi & Gujarati Heritage', text: 'Merchant families who established Calicut’s spice and confectionery trade in the 1800s.', x: 75, y: 40 }
      ],
      timeTravelYears: ['1600 Zamorin Guilds', '1950 Pottekkatt Era', '2026 Modern Heritage Walk'],
      timeTravelDescriptions: [
        'Open spice stalls exchanging cardamom, black pepper, and dates with Persian coin bags.',
        'Lively cultural hub frequented by poets, dramatists, and trade union pioneers.',
        'Modern cobblestoned, vehicle-free heritage promenade with ambient lampposts.'
      ]
    },
    quest: {
      title: 'The Sweet Meat Chronicle',
      storyPrompt: 'Unravel the literary and confectionery secrets of Kerala’s most beloved marketplace.',
      xp: 110,
      clue: 'Think of the great writer whose statue guards the entrance of Mittai Theruvu.',
      questions: [
        {
          question: 'Which celebrated Jnanpith award-winning author wrote "Oru Theruvinte Katha" based on SM Street?',
          options: ['Vaikom Muhammad Basheer', 'S.K. Pottekkatt', 'M.T. Vasudevan Nair', 'Thakazhi'],
          correctIndex: 1,
          explanation: 'S.K. Pottekkatt spent years observing the eccentric characters, merchants, and life of SM Street, producing the iconic novel "Oru Theruvinte Katha".'
        },
        {
          question: 'What gave SM Street its English moniker "Sweet Meat Street"?',
          options: ['Beef curry shops', 'Kozhikodan Halwa mistaken for sweet meat by Europeans', 'Sugar canes', 'Bakery cakes'],
          correctIndex: 1,
          explanation: 'European visitors encountered the dense, gelatinous texture of Kozhikodan Halwa and described it in their travel logs as "sweet meat".'
        }
      ]
    },
    facts: [
      'SM Street is strictly vehicle-free, making it one of the safest and most pleasant walking shopping boulevards in South India.',
      'Authentic Kozhikodan Halwa has a shelf life of months without artificial preservatives due to pure coconut oil and ghee.',
      'The street still houses one of Kerala’s oldest Parsi cemeteries and Jain temples established over 150 years ago.'
    ],
    travelTips: [
      'Request samples before buying! Authentic shops like Sankaran Bakery and Royal Halwa always let you taste every flavor.',
      'Check out the alleyways for traditional attar perfumes and handloom Malabar mundus.'
    ]
  },
  {
    id: 'paragon-biryani',
    name: 'Paragon Restaurant & Calicut Biryani Trail',
    malayalamName: 'പാരഗൺ & കോഴിക്കോടൻ ബിരിയാണി',
    tagline: 'World-renowned culinary temple celebrated for authentic Kozhikodan Dum Biryani',
    category: 'food',
    categoryLabel: 'Food & Malabar Delicacies',
    isMustTry: true,
    coordinates: { lat: 11.2581, lng: 75.7828 },
    address: 'Kannur Road, Near CH Overbridge, Kozhikode, Kerala 673011',
    rating: 4.96,
    reviewsCount: 8450,
    badgeRewardId: 'biryani-connoisseur',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Kozhikodan_biryani.jpg/1280px-Kozhikodan_biryani.jpg',
    historicalEra: 'Founded 1939 - 85 Years of Culinary Legend',
    openHours: '11:30 AM - 11:30 PM (Daily)',
    bestTimeToVisit: 'Lunch (12:30 PM - 2:30 PM) or Dinner (7:30 PM - 9:30 PM)',
    entryFee: 'Dining Only',
    priceRange: '₹₹ (Moderate: ₹200 - ₹450 per person)',
    approxCostForTwo: '₹500 - ₹750 for two',
    priceTier: 'moderate',
    signatureDishes: [
      { name: 'Kozhikodan Chicken Dum Biryani', price: '₹240', desc: 'Short-grain Kaima rice cooked on dum with tender spiced chicken, fried onions, and ghee' },
      { name: 'Aykoora (Kingfish) Pollichathu', price: '₹390', desc: 'Fresh Kingfish steak coated in shallot-chili masala and roasted inside banana leaves' },
      { name: 'Paragon Fish Mango Curry', price: '₹340', desc: 'Tangy local seer fish simmered in fresh coconut milk and sour raw green mangoes' },
      { name: 'Malabar Porotta (2 pcs)', price: '₹40', desc: 'Multi-layered flaky spiral flatbread hand-stretched and griddled with butter' },
      { name: 'Tender Coconut (Elaneer) Payasam', price: '₹120', desc: 'Silky dessert of sweet coconut cream, tender pulp, and crushed pistachios' },
      { name: 'Spiced Sulaimani Tea', price: '₹20', desc: 'Golden amber black tea infused with cardamom, mint, and fresh lemon' }
    ],
    reviews: [
      { author: "TasteAtlas Global Guide", rating: 5, comment: "Ranked #11 in the world on TasteAtlas 150 Most Legendary Restaurants. The Kaima rice biryani has no equal globally.", source: "TasteAtlas 2023" },
      { author: "Vir Sanghvi, Eminent Food Critic", rating: 5, comment: "Kozhikode Biryani at Paragon is one of the greatest culinary treasures of Asia. Subtle, fragrant, and profoundly flavorful.", source: "Hindustan Times" },
      { author: "Anjali Menon, Film Director", rating: 5, comment: "The smell of Paragon’s dum handi opening is the truest taste of home. Always order Fish Mango curry with hot Porotta!", source: "Google Reviews" }
    ],
    tags: ['Must-Try', 'Dum Biryani', 'Kaima Rice', 'Seafood', 'Sulaimani', 'Elaneer Payasam', 'Paragon', 'TasteAtlas #11'],
    mustTryOrSee: [
      'Kozhikodan Chicken Dum Biryani made with fine fragrant Kaima/Jeerakasala rice and caramelized onions',
      'Aykoora (Kingfish) Pollichathu wrapped in banana leaf and roasted with Malabar masalas',
      'Paragon Fish Mango Curry paired with hot flaky Malabar Porottas',
      'Chilled tender coconut pudding (Elaneer Payasam) & hot spiced Sulaimani tea'
    ],
    audioNarration: {
      english: "Welcome to Paragon, ranked among the most legendary culinary establishments on earth by TasteAtlas. In Kozhikode, biryani is not merely a meal; it is an emotion deeply woven into Malabar hospitality. Unlike Hyderabadi or Awadhi biryanis that use long-grain Basmati, authentic Kozhikodan Biryani is cooked exclusively with tiny, aromatic 'Kaima' or 'Jeerakasala' rice. The meat is marinated in mild yet deeply fragrant green masalas, layered in copper handis, and slow-cooked on dum sealed with dough. Paired with date-lemon pickle, mint chammanthi, and a steaming glass of spiced Sulaimani tea, it is a culinary experience like no other.",
      malayalamSummary: "ലോകത്തിലെ ഏറ്റവും മികച്ച ബിരിയാണി റസ്റ്റോറന്റുകളിൽ ഒന്നായി തിരഞ്ഞെടുക്കപ്പെട്ട പാരഗൺ. സുഗന്ധം പരത്തുന്ന ജീരകശാല അരിയും മലബാർ സുഗന്ധവ്യഞ്ജനങ്ങളും ചേർത്ത കോഴിക്കോടൻ ദം ബിരിയാണിയുടെ മാസ്മരിക രുചി.",
      durationSec: 47
    },
    arExperience: {
      modelType: 'halwa-stall',
      title: 'The Malabar Dum Handi & Spices',
      subtitle: 'Inspect aromatic Kaima rice grains, star anise, Malabar cloves, and steaming Sulaimani',
      hotspots: [
        { title: 'Kaima (Jeerakasala) Rice', text: 'Small, fragrant grain grown in Wayanad valleys that absorbs meat juices thoroughly.', x: 40, y: 45 },
        { title: 'Dum Dough Seal', text: 'Wheat flour dough sealing the rim of the copper degh to trap every drop of aromatic steam.', x: 65, y: 35 },
        { title: 'The Sulaimani Pour', text: 'Black tea infused with cardamom, mint, and lime—the ritual digestive finish to every feast.', x: 25, y: 65 }
      ],
      timeTravelYears: ['1939 Humble Bakery Stalls', '1980s Malabar Institution', '2026 Global Culinary Icon'],
      timeTravelDescriptions: [
        'Founded by Govindan Panhikeyil serving tea and freshly baked snacks to railway passengers.',
        'Perfecting the signature chicken biryani that won hearts across Kerala and the Middle East.',
        'Internationally ranked among the top 20 most legendary restaurants in the world by TasteAtlas.'
      ]
    },
    quest: {
      title: 'The Master of Malabar Flavors',
      storyPrompt: 'Prove your gourmet credentials by identifying the secret traditions of Kozhikodan Dum Biryani.',
      xp: 125,
      clue: 'Think of the short, aromatic native rice variety used in Malabar instead of long Basmati.',
      questions: [
        {
          question: 'What special variety of fragrant, small-grain rice is used in authentic Kozhikodan Biryani?',
          options: ['Basmati', 'Kaima (Jeerakasala)', 'Sona Masoori', 'Jasmine Rice'],
          correctIndex: 1,
          explanation: 'Authentic Kozhikodan Biryani is made with Kaima (also called Jeerakasala) rice, which has a distinct sweet aroma and tender bite that absorbs the meat essence.'
        },
        {
          question: 'What spiced black tea with lemon and mint is traditionally sipped after a Kozhikode feast?',
          options: ['Sulaimani', 'Masala Chai', 'Matcha', 'Kawa'],
          correctIndex: 0,
          explanation: 'Sulaimani is the quintessential Malabar sweet black tea brewed with cardamom, cloves, and lime juice that aids digestion after a rich biryani.'
        }
      ]
    },
    facts: [
      'TasteAtlas ranked Paragon #11 in the world on its list of 150 Most Legendary Restaurants in 2023.',
      'Over 2,000 plates of biryani are served daily at this flagship Kozhikode branch alone.',
      'The biryani is accompanied by a unique dark sweet-and-sour date pickle (Eenthappazham Achar).'
    ],
    travelTips: [
      'Expect a 15-20 minute waiting line during peak Sunday lunch, but the efficient token system moves quickly.',
      'Do not miss ordering the legendary Malabar Porotta and Fish Mango Curry alongside biryani.'
    ]
  },
  {
    id: 'zains-kuttichira',
    name: 'Zains & Kuttichira Malabar Snack Trail',
    malayalamName: 'സൈൻസ് & കുട്ടിച്ചിറ പലഹാരങ്ങൾ',
    tagline: 'Home of iconic Malabar delicacies: Chatti Pathiri, Unnakaya, and Mutta Mala',
    category: 'food',
    categoryLabel: 'Food & Malabar Delicacies',
    isMustTry: true,
    coordinates: { lat: 11.2482, lng: 75.7712 },
    address: 'Convent Road, Kuttichira, Kozhikode, Kerala 673001',
    rating: 4.88,
    reviewsCount: 3420,
    badgeRewardId: 'biryani-connoisseur',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Chatti_pathiri.JPG/1280px-Chatti_pathiri.JPG',
    historicalEra: 'Traditional Mappila Home Kitchen Heritage',
    openHours: '12:00 PM - 10:30 PM (Snacks fresh at 4:00 PM)',
    bestTimeToVisit: 'Tea time (4:00 PM - 6:30 PM)',
    entryFee: 'Dining Only',
    priceRange: '₹ (Budget Snacks: ₹25 - ₹100 per dish)',
    approxCostForTwo: '₹250 - ₹350 for feast of snacks & tea',
    priceTier: 'budget',
    signatureDishes: [
      { name: 'Chicken Chatti Pathiri (Layered Malabar Lasagna)', price: '₹90', desc: 'Paper-thin crepes layered with tender minced meat and cardamom egg-custard' },
      { name: 'Golden Unnakaya (2 pcs)', price: '₹50', desc: 'Mashed ripe plantain spindles stuffed with sweetened coconut, roasted cashews & raisins' },
      { name: 'Mutta Mala & Pinnanthappam', price: '₹100', desc: 'Fine threads of egg yolks cooked in sugar syrup served over steamed fluffy egg whites' },
      { name: 'Arikadukka (Spiced Stuffed Mussels)', price: '₹70', desc: 'Green mussels stuffed with spicy ground rice flour and fried crisp' },
      { name: 'Authentic Sulaimani (Mint & Lime Tea)', price: '₹15', desc: 'Served hot in clear glass tumblers' }
    ],
    reviews: [
      { author: "Kalyan Karmakar, Finely Chopped", rating: 5, comment: "Zainabi Noor revolutionized how the world views Mappila home cooking. The Chatti Pathiri here is legendary!", source: "Food Bloggers Association" },
      { author: "Hafiz K., Dubai", rating: 5, comment: "Nothing compares to coming to Zains at 4:30 PM when the glass counter is loaded with 25 varieties of warm handmade snacks.", source: "Google Reviews" }
    ],
    tags: ['Must-Try', 'Malabar Snacks', 'Chatti Pathiri', 'Unnakaya', 'Mutta Mala', 'Zains', 'Kuttichira'],
    mustTryOrSee: [
      'Chatti Pathiri: A rich multi-layered savory or sweet baked crepe stuffed with minced meat or eggs and raisins',
      'Unnakaya: Spindle-shaped boiled plantain mash stuffed with grated coconut, cashew nuts, and fried golden',
      'Mutta Mala: Intricate golden egg-yolk garlands served over steamed egg-white foam (Pinnanthappam)',
      'Fresh mint and lime infused hot Sulaimani tea served in classic glass tumblers'
    ],
    audioNarration: {
      english: "Step into Zains, the beloved culinary haven founded by Zainabi Noor, who pioneered sharing secret Malabar Muslim home delicacies with travelers. Kuttichira has a culinary lexicon found nowhere else on earth. Here, evening tea is an elaborate ritual featuring over thirty handmade varieties of sweet and savory snacks. Look at the glass counters filled with Chatti Pathiri, delicate spindle-shaped Unnakayas made from ripe plantains, and Mutta Mala made using pure spun egg yolks. Every bite reflects the centuries of Arab, Persian, and indigenous Kerala culinary exchange.",
      malayalamSummary: "സൈനബി നൂർ തുടക്കമിട്ട സൈൻസ് റെസ്റ്റോറന്റ് മലബാർ പലഹാരങ്ങളുടെ പറുദീസയാണ്. ചട്ടിപ്പത്തിരി, ഉന്നക്കായ, മുട്ടമാല തുടങ്ങിയ തനത് കോഴിക്കോടൻ വിഭവങ്ങൾ ഇവിടെ രുചിക്കാം.",
      durationSec: 45
    },
    arExperience: {
      modelType: 'halwa-stall',
      title: 'Artisan Malabar Snacks Display',
      subtitle: 'Learn the intricate preparation of Chatti Pathiri, Unnakaya, and Sulaimani',
      hotspots: [
        { title: 'Layered Chatti Pathiri', text: 'Ultra-thin rice crepes layered with cardamom egg-custard and roasted nuts, baked in a traditional earthen pan.', x: 40, y: 50 },
        { title: 'Golden Unnakaya', text: 'Steamed Nendran banana dough hand-rolled into elegant spindles filled with sweetened coconut.', x: 65, y: 40 },
        { title: 'The Glass Tumbler Sulaimani', text: 'Brewed to golden amber color with a squeeze of fresh Malabar lime.', x: 25, y: 65 }
      ],
      timeTravelYears: ['1600 Kuttichira Home Kitchens', '1984 Zains Opening', '2026 Living Food Landmark'],
      timeTravelDescriptions: [
        'Mappila brides perfecting heirloom snack recipes for wedding festivities.',
        'Zainabi Noor opening the first traditional female-run snack house for travelers.',
        'Legendary pilgrimage stop for food writers and hungry explorers worldwide.'
      ]
    },
    quest: {
      title: 'The Malabar Snack Connoisseur',
      storyPrompt: 'Identify the legendary ingredients behind Kuttichira’s iconic evening tea delicacies.',
      xp: 110,
      clue: 'Think of the ripe Kerala fruit that forms the outer crust of an Unnakaya.',
      questions: [
        {
          question: 'What is the primary fruit used to craft the golden dough of an Unnakaya snack?',
          options: ['Ripe Nendran Banana (Plantain)', 'Mango', 'Jackfruit', 'Papaya'],
          correctIndex: 0,
          explanation: 'Unnakaya is made by mashing boiled ripe Nendran bananas, flattening the dough into spindle shapes, and stuffing them with sweetened coconut and nuts.'
        },
        {
          question: 'What is the multi-layered crepe dish filled with meat or sweet egg custard called?',
          options: ['Chatti Pathiri', 'Samosa', 'Vada', 'Shawarma'],
          correctIndex: 0,
          explanation: 'Chatti Pathiri is an elaborate Malabar dish reminiscent of lasagna, consisting of layered crepes soaked in egg and coconut milk and slow-baked.'
        }
      ]
    },
    facts: [
      'Founder Zainabi Noor was one of the earliest Muslim women restaurateurs in Kerala to gain national acclaim.',
      'Traditional Malabar weddings boast over 20 unique snack varieties specifically prepared for the groom’s reception.',
      'Zains displays nostalgic photographs of old Calicut and famous dignitaries who have dined here.'
    ],
    travelTips: [
      'Arrive between 4:00 PM and 5:30 PM when the full array of over 20 hot snacks is placed fresh into the display cabinet.',
      'Pair your savory snacks with hot Sulaimani rather than milky tea for the authentic experience.'
    ]
  },
  {
    id: 'mananchira-square',
    name: 'Mananchira Square & Royal Tank',
    malayalamName: 'മാനവിക്രമൻ കുളവും മാനഞ്ചിറ ചത്വരവും',
    tagline: 'Serene emerald royal reservoir and heritage park in the heart of Calicut',
    category: 'resting',
    categoryLabel: 'Resting & Heritage',
    isMustTry: true,
    coordinates: { lat: 11.2532, lng: 75.7801 },
    address: 'Opposite Town Hall, Mananchira, Kozhikode, Kerala 673001',
    rating: 4.75,
    reviewsCount: 3340,
    badgeRewardId: 'zamorin-scholar',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Mananchira%2CCalicut.jpg/1280px-Mananchira%2CCalicut.jpg',
    historicalEra: '14th Century King Mana Vikrama Era',
    openHours: '2:30 PM - 8:30 PM (Daily)',
    bestTimeToVisit: 'Late Afternoon (4:30 PM - 7:00 PM)',
    entryFee: 'Free',
    priceRange: 'Free Entry',
    approxCostForTwo: 'Free',
    priceTier: 'budget',
    signatureDishes: [
      { name: 'Park Street Tea & Coconut Cookies', price: '₹30', desc: 'Available at heritage tea kiosks outside Town Hall' }
    ],
    reviews: [
      { author: "Dr. Sandeep Nair", rating: 5, comment: "The emerald water reflecting the traditional tile roofs at twilight brings peace right in the bustling city center.", source: "Google Reviews" }
    ],
    tags: ['Must-Try', 'Royal Tank', 'Green Park', 'Zamorin Palace', 'Open Lawns', 'Tranquil', 'Resting Area'],
    mustTryOrSee: [
      'The ancient rectangular emerald water reservoir built by Zamorin King Mana Vikrama',
      'Traditional Kerala architectural gateways (Padippura) with intricately carved wooden pillars',
      'The lush manicured green lawns and illuminated musical fountains at dusk',
      'Surrounding colonial structures: Commonwealth Trust Factory, Public Library, and Town Hall'
    ],
    audioNarration: {
      english: "Step into the oasis of Mananchira Square, named after King Mana Vikrama, the revered Zamorin ruler of Calicut. In the 14th century, this expansive water tank was excavated as the royal bath for the Zamorin's palace complex. Surrounded by an arc of stately red-brick colonial buildings, tiled pavilions, and coconut groves, Mananchira remains the civic and cultural lung of the city. As evening falls, soft classical notes drift across the illuminated waters while travelers relax on the shaded benches away from city traffic.",
      malayalamSummary: "സാമൂതിരി രാജാവായിരുന്ന മാനവിക്രമൻ കൊട്ടാര ആവശ്യങ്ങൾക്കായി നിർമ്മിച്ച പുണ്യ ജലാശയമാണ് മാനഞ്ചിറ. പച്ചപ്പുനിറഞ്ഞ പുൽത്തകിടികളും പൈതൃക ശൈലിയിലുള്ള പടിപ്പുരകളും ഇവിടുത്തെ ആകർഷണമാണ്.",
      durationSec: 42
    },
    arExperience: {
      modelType: 'zamorin-throne',
      title: 'Zamorin Royal Emblem & Copper Edicts',
      subtitle: 'Discover the royal insignia of the Samoothiri dynasty that safeguarded religious freedom',
      hotspots: [
        { title: 'The Royal Granary Gate', text: 'Guarded by Nair warriors armed with broadswords and brass bucklers.', x: 35, y: 45 },
        { title: 'Laterite Stone Embankment', text: 'Carved with subterranean channels that filter rainwater naturally using herbal charcoal.', x: 60, y: 60 },
        { title: 'Revathi Pattathanam Pavilion', text: 'Where scholars were conferred royal purses of gold panams for Vedic debates.', x: 50, y: 30 }
      ],
      timeTravelYears: ['1400 Zamorin Durbar', '1900 Basel Mission Era', '2026 Eco-Heritage Sanctuary'],
      timeTravelDescriptions: [
        'Grand royal palace compound teeming with ministers, astrologers, and foreign ambassadors.',
        'Tile factories and Victorian institutions framing the tranquil central tank.',
        'Sprawling heritage public garden featuring traditional Kerala wooden architecture.'
      ]
    },
    quest: {
      title: 'Legacy of the Samoothiri',
      storyPrompt: 'Demonstrate your knowledge of Calicut’s benevolent monarch and water conservation marvels.',
      xp: 130,
      clue: 'Recall the royal title of the hereditary rulers of the Kingdom of Kozhikode.',
      questions: [
        {
          question: 'What was the hereditary title of the feudal monarchs of Kozhikode who built Mananchira?',
          options: ['Zamorin (Samoothiri)', 'Travancore Raja', 'Nawab of Arcot', 'Sultan of Malabar'],
          correctIndex: 0,
          explanation: 'The Zamorins (Nediyiruppu Swaroopam / Samoothiri) ruled Kozhikode for over six centuries with justice, religious harmony, and maritime prowess.'
        },
        {
          question: 'What purpose did Mananchira tank originally serve when excavated in the 14th century?',
          options: ['Naval warship dock', 'Bathing pond and water source for the Zamorin’s Royal Palace', 'Fish farming pond', 'Moat for fortress'],
          correctIndex: 1,
          explanation: 'It was excavated by King Mana Vikrama as the pristine fresh water source and bathing tank for the royal palace.'
        }
      ]
    },
    facts: [
      'The water in Mananchira reservoir remains remarkably clean and serves as a major potable water reserve.',
      'The surrounding Commonwealth Trust Tile Factory nearby was the birthplace of the globally famous Mangalore tiles.',
      'The square is enclosed by 250 carved iron lamp posts reminiscent of royal palace corridors.'
    ],
    travelTips: [
      'An ideal spot to sit and read or relax under shaded rain trees between 4 PM and 7 PM.',
      'Directly across the road is the Calicut Town Hall and the historic Crown Theatre.'
    ]
  },
  {
    id: 'kappad-beach',
    name: 'Kappad Beach & Vasco da Gama Monument',
    malayalamName: 'കാപ്പാട് ബീച്ചും വാസ്കോഡഗാമ സ്മാരകവും',
    tagline: 'The historic rock-strewn shore where the sea route to India was discovered in 1498',
    category: 'monuments',
    categoryLabel: 'Historical & Monuments',
    isMustTry: true,
    coordinates: { lat: 11.3855, lng: 75.7198 },
    address: 'Kappad Beach, Chemancheri, Kozhikode, Kerala 673304',
    rating: 4.82,
    reviewsCount: 3750,
    badgeRewardId: 'historic-navigator',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kappad_Beach.jpg/1280px-Kappad_Beach.jpg',
    historicalEra: 'May 20, 1498 - Age of Discovery',
    openHours: '6:00 AM - 7:00 PM',
    bestTimeToVisit: 'Early Morning or 4:00 PM - 6:30 PM',
    entryFee: 'Free (Blue Flag Eco Beach Amenities: ₹20)',
    priceRange: '₹20 Entry to Blue Flag amenities',
    approxCostForTwo: '₹100 for snacks and tender coconut',
    priceTier: 'budget',
    signatureDishes: [
      { name: 'Fresh Coconut Water from beach palms', price: '₹40', desc: 'Sweet natural electrolyte straight from the shell' },
      { name: 'Spicy Fish Tawa Fry by local fishermen', price: '₹120', desc: 'Fresh morning catch shallow fried on iron skillet' }
    ],
    reviews: [
      { author: "Prof. Arthur Silva, Lisbon", rating: 5, comment: "To stand before the stone pillar where Da Gama stepped ashore in 1498 was deeply moving. The Blue Flag beach is immaculate.", source: "Travel Historians Review" }
    ],
    tags: ['Must-Try', 'Vasco da Gama', '1498 Landing', 'Blue Flag Beach', 'Monuments', 'History', 'Rocky Shore'],
    mustTryOrSee: [
      'The historical stone monument with the inscription: "Vasco da Gama landed here, Kappakadavu, in the year 1498"',
      'The 800-year-old rock-top temple overlooking the rolling Arabian surf',
      'The Blue Flag certified eco-beach with pristine clean sand and cycling tracks',
      'Traditional fishing catamarans returning with early morning catches'
    ],
    audioNarration: {
      english: "On May 20, 1498, three weary Portuguese caravels led by Vasco da Gama anchored just off this rock-studded beach of Kappakadavu. This fateful landing connected Europe to Asia by direct sea route for the first time in human history, irrevocably altering global commerce, colonization, and maritime law. The Zamorin of Calicut granted Da Gama audience with typical Malabar hospitality, marveling at European gifts of brass vessels and hats. Stand beside the weathered commemorative stone pillar and gaze out at the very waters that launched the Age of Discovery.",
      malayalamSummary: "1498 മെയ് 20-ന് യൂറോപ്പിൽ നിന്നുള്ള ആദ്യത്തെ നാവികനായ വാസ്കോഡഗാമ മൂന്ന് കപ്പലുകളുമായി വന്നിറങ്ങിയ ചരിത്രപ്രസിദ്ധമായ കാപ്പാട് തീരം. ഇന്ത്യയിലേക്കുള്ള പുതിയ സമുദ്രപാത തുറന്നത് ഇവിടെ നിന്നാണ്.",
      durationSec: 46
    },
    arExperience: {
      modelType: 'vasco-compass',
      title: '1498 Portuguese Mariner Astrolabe & Caravel',
      subtitle: 'Inspect Vasco da Gama’s nautical instruments and historic monument',
      hotspots: [
        { title: 'The Stone Pillar (Padrao)', text: 'Planted on the shore bearing the coat of arms of King Manuel I of Portugal.', x: 50, y: 50 },
        { title: 'The Flagship São Gabriel', text: 'A 120-ton armed nau with square sails bearing the Cross of the Order of Christ.', x: 25, y: 30 },
        { title: 'Zamorin Envoy Meeting', text: 'Royal Muslim customs officials greeted Gama and piloted his crew safely over the reefs.', x: 75, y: 60 }
      ],
      timeTravelYears: ['1498 The First Landing', '1950 Stone Pillar Erected', '2026 Blue Flag Eco Beach'],
      timeTravelDescriptions: [
        'Portuguese mariners on knees in prayers on the rock face greeted by Malabar fisherman.',
        'Simple commemorative pillar installed near the beach cliff to mark world history.',
        'World-class eco-tourism destination with solar-powered promenade and international Blue Flag.'
      ]
    },
    quest: {
      title: 'Chronicles of the 1498 Landing',
      storyPrompt: 'Test your knowledge on the historic nautical voyage that forever reshaped global trade.',
      xp: 140,
      clue: 'Check the exact date inscribed on the historical stone memorial at Kappakadavu.',
      questions: [
        {
          question: 'On what date did Vasco da Gama make his historic landing at Kappad beach?',
          options: ['May 20, 1498', 'August 15, 1502', 'October 12, 1492', 'January 26, 1524'],
          correctIndex: 0,
          explanation: 'Vasco da Gama arrived with his fleet at Kappakadavu on May 20, 1498, opening the direct maritime spice route from Europe to India.'
        },
        {
          question: 'What prestigious international eco-label does Kappad Beach hold for cleanliness and sustainability?',
          options: ['Green Globe', 'Blue Flag', 'UNESCO Biosphere', 'Clean Sea Award'],
          correctIndex: 1,
          explanation: 'Kappad is one of the elite beaches in India honored with the prestigious international "Blue Flag" certification for ecological management and pristine safety.'
        }
      ]
    },
    facts: [
      'The local Malayalam name for this historic cove is Kappakadavu, meaning "the ship jetty".',
      'The Portuguese crew spent three months in Calicut trading before sailing back with cinnamon and cloves.',
      'A scenic rock jetty protrudes into the ocean, offering one of the most stunning panoramic vantage points for coastal photography.'
    ],
    travelTips: [
      'Located 16 km north of Kozhikode city; easily accessible by auto-rickshaw or coastal train to Koyilandy.',
      'The Blue Flag zone features clean changing rooms, drinking water kiosks, and child-safe shallow wading zones.'
    ]
  },
  {
    id: 'mishkal-mosque',
    name: 'Mishkal Mosque & Kuttichira Heritage',
    malayalamName: 'മിശ്കാൽ പള്ളിയും കുട്ടിച്ചിറയും',
    tagline: '700-year-old architectural marvel built entirely of wood without domes or minarets',
    category: 'culture',
    categoryLabel: 'Culture & Architecture',
    isMustTry: true,
    coordinates: { lat: 11.2468, lng: 75.7725 },
    address: 'Kuttichira, Kozhikode, Kerala 673001',
    rating: 4.94,
    reviewsCount: 2450,
    badgeRewardId: 'heritage-guardian',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Miskhal_Masjid%2C_Kozhikode%2C_Kerala.jpg/1280px-Miskhal_Masjid%2C_Kozhikode%2C_Kerala.jpg',
    historicalEra: '1300s CE - Nakhuda Mishkal',
    openHours: '5:00 AM - 9:00 PM (Visitors welcome outside prayer hours)',
    bestTimeToVisit: 'Morning 9:00 AM - 11:30 AM or 3:30 PM - 5:00 PM',
    entryFee: 'Free (Modest dress required)',
    priceRange: 'Free Entry',
    approxCostForTwo: 'Free',
    priceTier: 'budget',
    signatureDishes: [
      { name: 'Kuttichira Heritage Tea & Kozhikodan Halwa', price: '₹40', desc: 'At historic tea stalls around Kuttichira tank' }
    ],
    reviews: [
      { author: "Tariq Mansoor, Cairo", rating: 5, comment: "It looks like a majestic wooden temple or palace. Seeing the charred Portuguese cannon marks on the top rafter defended by the Hindu Zamorin is remarkable.", source: "Heritage Traveler" }
    ],
    tags: ['Must-Try', 'Wooden Architecture', 'Kuttichira', 'Zamorin Ally', 'No Minarets', 'Heritage Pond', '700 Years Old'],
    mustTryOrSee: [
      'The 4-tiered pagoda-style tiled gables built in traditional Kerala temple-timber architectural style',
      '50 intricate carved wooden doors and 24 teak pillars supporting the upper sanctuary',
      'The scars on the top floor timber from the 1510 Portuguese siege defended by the Hindu Zamorin forces',
      'The grand Kuttichira communal tank (Chira) fringed by ancient courtyard homes (Tharavads)'
    ],
    audioNarration: {
      english: "Welcome to Mishkal Mosque in Kuttichira, a testament to Kerala's extraordinary communal synthesis. Built in the 14th century by wealthy Yemeni merchant and ship-owner Nakhuda Mishkal, this mosque has no Middle Eastern domes or minarets. Instead, it looks like a magnificent classical Kerala palace or temple, constructed entirely from teakwood with tiered tiled roofs and wooden gables. In 1510, when Portuguese invaders set fire to the mosque, the Hindu Zamorin of Calicut personally rushed his troops to extinguish the blaze and provided royal timber to restore the sacred sanctuary.",
      malayalamSummary: "14-ാം നൂറ്റാണ്ടിൽ നിർമ്മിച്ച മിശ്കാൽ പള്ളി കേരളീയ വാസ്തുവിദ്യയുടെ വിസ്മയമാണ്. താഴികക്കുടങ്ങളോ മിനാരങ്ങളോ ഇല്ലാതെ തടിയിൽ പണിത ഈ നാലുനില പള്ളിയെ 1510-ൽ പോർച്ചുഗീസുകാർ ആക്രമിച്ചപ്പോൾ സാമൂതിരി സ്വന്തം സൈന്യത്തെ അയച്ച് സംരക്ഷിച്ചു.",
      durationSec: 52
    },
    arExperience: {
      modelType: 'ancient-lamp',
      title: 'Classical Kerala Mosque Wood Carving',
      subtitle: 'Explore the 4-tiered wooden gable, lotus motifs, and historic water tank',
      hotspots: [
        { title: 'The Tiered Gopuram Roof', text: 'Designed by local master carpenters (Thatchans) following Kerala Vastu principles for tropical rain run-off.', x: 50, y: 30 },
        { title: 'The Zamorin Restoration Mark', text: 'Charred timber preserved on the roof rafters as a testament to the 1510 siege.', x: 70, y: 45 },
        { title: 'Teakwood Mimbar Pulpit', text: 'Intricately inscribed with calligraphy combined with native floral lotus wood-carvings.', x: 30, y: 65 }
      ],
      timeTravelYears: ['1340 Yemeni Merchant Era', '1510 Portuguese Defense', '2026 Living Heritage Center'],
      timeTravelDescriptions: [
        'Nakhuda Mishkal supervising Arab dhow captains and Kerala craftsmen carving teak timbers.',
        'Zamorin soldiers and Mappila defenders repelling Albuquerque’s raiding ships.',
        'Peaceful spiritual heart of Kuttichira surrounded by traditional matrilineal heritage mansions.'
      ]
    },
    quest: {
      title: 'The Secret of Kuttichira Timber',
      storyPrompt: 'Discover how Hindu-Muslim friendship and Kerala woodworking created this world-renowned sanctuary.',
      xp: 135,
      clue: 'Observe the materials used: there are zero stone domes or minarets.',
      questions: [
        {
          question: 'Who founded the Mishkal Mosque in the 14th century?',
          options: ['Vasco da Gama', 'Nakhuda Mishkal (Yemeni merchant)', 'Tipu Sultan', 'Ibn Battuta'],
          correctIndex: 1,
          explanation: 'It was built by Nakhuda Mishkal, a legendary Yemeni Arab shipowner and merchant who had deep ties of loyalty with the Zamorin.'
        },
        {
          question: 'How many tiers or storeys does the unique wooden roof of Mishkal Mosque possess?',
          options: ['1', '2', '4', '7'],
          correctIndex: 2,
          explanation: 'Mishkal Mosque is celebrated for its magnificent four-tiered pagoda-style sloping timber roof designed for heavy Malabar monsoon rains.'
        }
      ]
    },
    facts: [
      'The famed Moroccan traveler Ibn Battuta visited Calicut in 1342 and wrote about meeting Nakhuda Mishkal.',
      'Unlike mosques in North India, Mishkal Mosque mirrors Kerala temple aesthetics, proving deep indigenous cultural synthesis.',
      'Kuttichira follows the unique ancient matrilineal joint family system where women inherit ancestral houses.'
    ],
    travelTips: [
      'Dress respectfully with covered shoulders and knees. Remove footwear before entering the courtyard.',
      'After visiting, walk 200 meters to try Sulaimani tea and Chatti Pathiri at nearby heritage tea stalls.'
    ]
  },
  {
    id: 'tali-temple',
    name: 'Tali Shiva Temple',
    malayalamName: 'തളി മഹാശിവക്ഷേത്രം',
    tagline: '14th-century architectural masterpiece and seat of the legendary Revathi Pattathanam',
    category: 'culture',
    categoryLabel: 'Heritage & Culture',
    isMustTry: false,
    coordinates: { lat: 11.2442, lng: 75.7878 },
    address: 'Tali, Chalappuram, Kozhikode, Kerala 673002',
    rating: 4.84,
    reviewsCount: 2750,
    badgeRewardId: 'zamorin-scholar',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tali_temple%2C_Kozhikode.jpg/1280px-Tali_temple%2C_Kozhikode.jpg',
    historicalEra: '12th - 14th Century Zamorin Golden Age',
    openHours: '4:30 AM - 11:30 AM, 5:00 PM - 8:30 PM',
    bestTimeToVisit: 'Evening Deeparadhana (6:30 PM)',
    entryFee: 'Free (Traditional dress code applies)',
    priceRange: 'Free Entry',
    approxCostForTwo: 'Free',
    priceTier: 'budget',
    signatureDishes: [
      { name: 'Traditional Temple Unniyappam', price: '₹30', desc: 'Sweet jaggery and roasted coconut banana cakes' }
    ],
    reviews: [
      { author: "K. R. Narayanan, Bengaluru", rating: 5, comment: "Deeparadhana with hundreds of traditional brass oil lamps lit along the stone wall is a soul-stirring experience.", source: "Google Reviews" }
    ],
    tags: ['Zamorin Dynasty', 'Vedic Debate', 'Shiva Temple', 'Laterite Architecture', 'Deeparadhana', 'Wood Carvings'],
    mustTryOrSee: [
      'The Sanctum Sanctorum (Srikovil) with exquisite two-storied granite and laterite stonework',
      'The brass-plated flagstaff (Dwajasthambam) and 300 oil lamps illuminating the outer circumambulatory wall (Vilakkumadam)',
      'The sacred stage where the historic Revathi Pattathanam intellectual congress was convened annually',
      'Intricate wooden ceiling carvings depicting scenes from the Mahabharata'
    ],
    audioNarration: {
      english: "You have arrived at the Tali Maha Shiva Temple, one of the two royal guardian temples of the Zamorin of Kozhikode. Here, for hundreds of years during the Malayalam month of Thulam, the Zamorin presided over 'Revathi Pattathanam'—an extraordinary seven-day gathering of the greatest philosophers, grammarians, and poets from across India. Scholars debated deep Vedic logic and literature; the victorious savants were bestowed the coveted title of 'Bhattathil' alongside bags of royal gold coins (Panams). The architecture showcases the purest Kerala temple traditions, with sloping copper roofs and laterite walls.",
      malayalamSummary: "സാമൂതിരി രാജാക്കന്മാരുടെ കാലത്ത് വിഖ്യാതമായ 'രേവതി പട്ടത്താനം' അരങ്ങേറിയിരുന്ന തളി ക്ഷേത്രം. പണ്ഡിതന്മാരുടെ വാദപ്രതിവാദങ്ങൾക്കും ജ്ഞാനസദസ്സുകൾക്കും സാക്ഷ്യം വഹിച്ച പവിത്രമായ പൈതൃക കേന്ദ്രം.",
      durationSec: 46
    },
    arExperience: {
      modelType: 'zamorin-throne',
      title: 'Revathi Pattathanam Royal Gold Purse & Manuscript',
      subtitle: 'Inspect Palm-leaf granthas, bronze vilakku lamps, and the Zamorin’s ceremonial umbrella',
      hotspots: [
        { title: 'The Royal Sabha Mandapam', text: 'Where the Zamorin sat on a silver throne with his chief court pandits to judge literary debates.', x: 45, y: 55 },
        { title: 'Vilakkumadam Brass Lamps', text: 'Hundreds of coconut oil lamps lit simultaneously during the twilight Deeparadhana ceremony.', x: 75, y: 40 },
        { title: 'Granite Elephant Carvings', text: 'Bas-relief sculptures guarding the inner sanctum stairs carved in the 14th century.', x: 25, y: 65 }
      ],
      timeTravelYears: ['1300 Medieval Vedic Congress', '1780 Mysore Resistance', '2026 Spiritual Sanctuary'],
      timeTravelDescriptions: [
        'Vedic savants debating Upanishadic philosophy in front of the crowned Zamorin.',
        'Fortified temple defenses safeguarding sacred bronze murthis from external raiders.',
        'Peaceful spiritual sanctum preserving authentic temple rituals, classical arts, and architecture.'
      ]
    },
    quest: {
      title: 'The Revathi Pattathanam Contest',
      storyPrompt: 'Channel the wisdom of ancient scholars who earned royal gold panams at Tali.',
      xp: 130,
      clue: 'Think of the great intellectual Vedic debate held here every year by the Zamorins.',
      questions: [
        {
          question: 'What was the famous intellectual assembly of scholars convened annually at Tali Temple called?',
          options: ['Revathi Pattathanam', 'Mamankam', 'Thrissur Pooram', 'Navaratri Sangeetholsavam'],
          correctIndex: 0,
          explanation: 'Revathi Pattathanam was the 7-day intellectual competition where the Zamorin rewarded the finest literary minds and grammarians with purse of gold coins.'
        },
        {
          question: 'What is the primary deity worshipped at Tali Temple?',
          options: ['Lord Shiva', 'Lord Krishna', 'Lord Ganesha', 'Goddess Durga'],
          correctIndex: 0,
          explanation: 'Tali Temple is dedicated to Lord Shiva (Maha Shiva) and is considered one of the most venerable Shiva shrines in northern Kerala.'
        }
      ]
    },
    facts: [
      'The famous Sanskrit poet Uddanda Sastrikal participated and triumphed in the Tali Revathi Pattathanam.',
      'The temple pond across the road is known as Tali Kulam, where ritual ablutions have taken place for 700 years.',
      'Men are required to enter bare-chested with a traditional mundu/dhoti in reverence to Kerala temple sanctity.'
    ],
    travelTips: [
      'Visit at 6:15 PM to witness the breathtaking Deeparadhana when hundreds of oil lamps flicker in unison.',
      'Strict traditional dress code: dhotis for men, sarees or traditional long dresses for women.'
    ]
  },
  {
    id: 'sarovaram-park',
    name: 'Sarovaram Bio Park',
    malayalamName: 'സരോവരം ബയോപാർക്ക്',
    tagline: 'Lush 200-acre eco-friendly wetland sanctuary with mangrove boardwalks and boating',
    category: 'nature',
    categoryLabel: 'Nature & Parks',
    isMustTry: false,
    coordinates: { lat: 11.2742, lng: 75.7988 },
    address: 'Near Eranhipalam, Mini Bypass Road, Kozhikode, Kerala 673006',
    rating: 4.65,
    reviewsCount: 2580,
    badgeRewardId: 'nature-trailblazer',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Sarovaram_Bio_Park%2C_Kozhikode.jpg/1280px-Sarovaram_Bio_Park%2C_Kozhikode.jpg',
    historicalEra: 'Eco-Preservation Wetland Zone',
    openHours: '9:00 AM - 8:00 PM',
    bestTimeToVisit: 'Morning 9:00 AM - 11:00 AM or 4:00 PM - 7:00 PM',
    entryFee: '₹30 Adults, ₹15 Children',
    priceRange: '₹30 Entry ticket, Boating ₹100',
    approxCostForTwo: '₹160',
    priceTier: 'budget',
    signatureDishes: [
      { name: 'Sarovaram Lakeside Filter Coffee & Snacks', price: '₹35', desc: 'Served at the eco-cafe near the boating jetty' }
    ],
    reviews: [
      { author: "Sneha Nair, Naturalist", rating: 5, comment: "Spotted 4 species of kingfishers along the mangrove canal walk. A fantastic urban biodiversity haven!", source: "Google Reviews" }
    ],
    tags: ['Mangroves', 'Bird Watching', 'Boating', 'Boardwalk', 'Eco-Park', 'Nature Walk'],
    mustTryOrSee: [
      'Wooden elevated boardwalk winding through dense green mangrove forests and canals',
      'Spotting migratory wetland birds, kingfishers, and iridescent Malabar butterflies',
      'Solar-powered pedal boating in the expansive Canoly Canal backwaters',
      'Open-air musical amphitheater and children’s eco-adventure playground'
    ],
    audioNarration: {
      english: "Welcome to Sarovaram Bio Park, a 200-acre green lung preserving the vital Canoli Canal mangrove ecosystem in northern Kozhikode. Built entirely using eco-sensitive architecture, the park features wooden boardwalks perched over tidal swamps where seven distinct species of mangroves thrive. These mangroves act as natural flood barriers and nurseries for aquatic life. Take a quiet morning stroll along the water trail to listen to the call of over 34 species of native and migratory birds, or glide quietly across the canal on a solar boat.",
      malayalamSummary: "കോഴിക്കോട് നഗരഹൃദയത്തിലെ 200 ഏക്കറോളം വരുന്ന പച്ചത്തുരുത്താണ് സരോവരം ബയോപാർക്ക്. കണ്ടൽക്കാടുകളിലൂടെയുള്ള മരപ്പാലങ്ങളും കനോലി കനാലിലെ ബോട്ടിങ്ങും ശാന്തമായ പ്രകൃതിഭംഗിയും ഇവിടുത്തെ പ്രത്യേകതയാണ്.",
      durationSec: 43
    },
    arExperience: {
      modelType: 'timber-log',
      title: 'Canoly Canal Mangrove Biosphere',
      subtitle: 'Identify respiratory mangrove roots (pneumatophores), mudskippers, and kingfishers',
      hotspots: [
        { title: 'Rhizophora Mangrove Roots', text: 'Stilt roots that stabilize coastal soil and absorb excess monsoon floodwaters.', x: 35, y: 55 },
        { title: 'The Historic Canoly Canal', text: 'Constructed in 1848 by British Collector H.V. Conolly connecting rivers of Malabar.', x: 65, y: 40 },
        { title: 'White-Breasted Kingfisher', text: 'Abundant native hunter diving for small freshwater fish in the tidal creeks.', x: 50, y: 25 }
      ],
      timeTravelYears: ['1848 Conolly Canal Built', '2005 Eco-Restoration Project', '2026 Urban Wetland Haven'],
      timeTravelDescriptions: [
        'Conolly excavating the historic canal to transport Malabar timber and spices to ports.',
        'Revitalizing the degraded wetlands into Kerala’s pioneering urban eco-sanctuary.',
        'Thriving eco-park offering environmental education and peaceful nature escapes.'
      ]
    },
    quest: {
      title: 'Guardian of the Mangroves',
      storyPrompt: 'Uncover the biodiversity secrets of Kozhikode’s precious coastal wetlands.',
      xp: 115,
      clue: 'Think of the British collector who engineered the canal that flows through Sarovaram.',
      questions: [
        {
          question: 'Which historic 1848 inland navigation canal flows through the Sarovaram Bio Park?',
          options: ['Canoly (Conolly) Canal', 'Suez Canal', 'Buckingham Canal', 'National Waterway 3'],
          correctIndex: 0,
          explanation: 'The Canoly Canal was commissioned in 1848 by Collector H.V. Conolly to facilitate continuous boat transport along the Malabar Coast.'
        },
        {
          question: 'What ecological role do the dense mangrove trees at Sarovaram play for the city of Kozhikode?',
          options: ['Prevent urban floods & serve as fish nurseries', 'Produce commercial rubber', 'Provide firewood for cooking', 'Attract desert animals'],
          correctIndex: 0,
          explanation: 'Mangroves act as natural storm buffers, absorb urban runoff, purify water, and shelter vital marine biodiversity.'
        }
      ]
    },
    facts: [
      'Sarovaram is home to 7 rare mangrove species and more than 30 varieties of wetland butterflies.',
      'The park was constructed without felling a single mangrove tree, using elevated wooden planks.',
      'An open-air amphitheater hosts classical music and theatre performances during winter weekends.'
    ],
    travelTips: [
      'Bring a camera or binoculars early in the morning for wonderful bird-watching opportunities.',
      'Combine your visit with an evening snack at the open-air lakeside cafe.'
    ]
  },
  {
    id: 'kallayi-river',
    name: 'Kallayi River & Historic Timber Hub',
    malayalamName: 'കല്ലായിപ്പുഴയും തടിവ്യവസായ കേന്ദ്രവും',
    tagline: 'Once the second-largest timber trading center in the world after the Amazon',
    category: 'photography',
    categoryLabel: 'Photography & Heritage',
    isMustTry: false,
    coordinates: { lat: 11.2325, lng: 75.7955 },
    address: 'Kallayi Bridge, Kozhikode, Kerala 673003',
    rating: 4.62,
    reviewsCount: 1950,
    badgeRewardId: 'river-explorer',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Kallai_bridge_kozhikode.jpg/1280px-Kallai_bridge_kozhikode.jpg',
    historicalEra: '19th - 20th Century Global Timber Boom',
    openHours: 'Open 24 hours (Best daylight view)',
    bestTimeToVisit: 'Morning 7:00 AM or Golden Hour (5:30 PM)',
    entryFee: 'Free',
    priceRange: 'Free Vantage Point',
    approxCostForTwo: 'Free',
    priceTier: 'budget',
    signatureDishes: [
      { name: 'Kallayi Bridge Tea & Parippu Vada', price: '₹25', desc: 'At riverside tea stalls under the shade of rain trees' }
    ],
    reviews: [
      { author: "Manu Joseph, Photographer", rating: 5, comment: "The old iron railway bridge built in 1888 with reflections of floating teak logs makes for world-class golden hour photography.", source: "National Geographic Your Shot" }
    ],
    tags: ['Kallayi River', 'Timber Trade', 'Iron Bridge', 'Teak', 'Photography', 'Reflection'],
    mustTryOrSee: [
      'Panoramic sunset views of wooden logs floating peacefully on the river reflections',
      'The heritage British-era Kallayi railway bridge with its black steel girders',
      'Historic water sawmills and wood-crafting ateliers along the riverbanks',
      'Photographing traditional river fishermen casting circular nets at dusk'
    ],
    audioNarration: {
      english: "Flowing gracefully into the Arabian Sea just south of Calicut, the Kallayi River holds a legendary place in industrial history. In the late 19th and early 20th centuries, this tranquil riverbank was the second-largest timber trading center on earth, surpassed only by the Amazon basin. Famed Malabar teak, rosewood, and mahogany felled in the high Nilambur hills were bound together as massive rafts and floated down the river directly into waiting sawmills and steamships.",
      malayalamSummary: "ഒരുകാലത്ത് ആമസോണിന് ശേഷം ലോകത്തിലെ ഏറ്റവും വലിയ രണ്ടാമത്തെ തടി വ്യാപാര കേന്ദ്രമായിരുന്ന കല്ലായിപ്പുഴ. നിലമ്പൂർ കാടുകളിൽ നിന്ന് ഒഴുകിയെത്തിയ തടിത്തടികളും പൈതൃക റെയിൽവേ പാലവും ഇതിന്റെ ചരിത്ര ശേഷിപ്പുകളാണ്.",
      durationSec: 44
    },
    arExperience: {
      modelType: 'timber-log',
      title: 'Floating Teak Rafts & Sawmill Wheels',
      subtitle: 'Visualize 19th-century log rafts floated down from Nilambur into Kallayi sawmills',
      hotspots: [
        { title: 'The Nilambur Teak Rafts', text: 'Tied together with bamboo ropes, steered downriver by agile timber rafters for days.', x: 45, y: 55 },
        { title: 'Steam-Powered Gang Saw', text: 'Victorian saw blades slicing whole tree trunks into export planks for British shipyards.', x: 70, y: 40 },
        { title: 'The Kallayi Steel Bridge', text: 'Constructed by the Madras Railway Company in 1888 across the river mouth.', x: 25, y: 35 }
      ],
      timeTravelYears: ['1890 Global Timber Boom', '1960 Sawmill Golden Era', '2026 Serene Riverfront'],
      timeTravelDescriptions: [
        'River carpeted with thousands of floating teak logs stretching across both shores.',
        'Dozens of bustling steam sawmills humming day and night with skilled carpenters.',
        'Tranquil scenic riverfront famous for romantic sunsets and heritage photography.'
      ]
    },
    quest: {
      title: 'The Timber River Riddle',
      storyPrompt: 'Discover why Kallayi was celebrated on global trade maps alongside the Amazon.',
      xp: 120,
      clue: 'Recall Kallayi’s peak ranking in global timber commerce during the early 1900s.',
      questions: [
        {
          question: 'In the early 20th century, Kallayi was regarded as the world’s largest timber trading center after which river basin?',
          options: ['The Nile', 'The Amazon', 'The Mississippi', 'The Danube'],
          correctIndex: 1,
          explanation: 'During its peak, Kallayi was the second busiest timber hub on earth right after the Amazon River in Brazil.'
        },
        {
          question: 'What prized native hardwood was primarily floated down the river from Nilambur to Kallayi?',
          options: ['Malabar Teak', 'Pine', 'Balsa', 'Birch'],
          correctIndex: 0,
          explanation: 'Nilambur teak (celebrated for its immense strength and natural oils) was the primary timber that gave Kallayi its global fame.'
        }
      ]
    },
    facts: [
      'The Kallayi iron rail bridge was erected in 1888 and remains one of the oldest railway bridges in northern Kerala.',
      'The river originates in the Cherukulathur hills and travels 40 km before merging into the Arabian Sea.',
      'Today, the peaceful riverbank is a favorite haunt for Kerala landscape photographers and birdwatchers.'
    ],
    travelTips: [
      'The best photographic vantage point is from the old road bridge looking west toward the river mouth at sunset.',
      'Stop by the nearby local tea shops to try hot banana fritters (Pazham Pori) with evening tea.'
    ]
  },
  {
    id: 'thusharagiri-falls',
    name: 'Thusharagiri Waterfalls & Trekking Trails',
    malayalamName: 'തുഷാരഗിരി വെള്ളച്ചാട്ടവും ട്രെക്കിംഗും',
    tagline: 'Snow-capped spray cascading through Western Ghats evergreen rainforests',
    category: 'nature',
    categoryLabel: 'Nature & Trekking',
    isMustTry: false,
    coordinates: { lat: 11.4725, lng: 76.0425 },
    address: 'Thusharagiri, Kodenchery, Kozhikode District, Kerala 673580',
    rating: 4.85,
    reviewsCount: 2900,
    badgeRewardId: 'nature-trailblazer',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Thusharagiri_Falls.jpg/1280px-Thusharagiri_Falls.jpg',
    historicalEra: 'Western Ghats Ancient Rainforest Sanctuary',
    openHours: '8:00 AM - 5:00 PM',
    bestTimeToVisit: 'September to March (Post-monsoon full flow)',
    entryFee: '₹50 per person (Eco-tourism ticket)',
    priceRange: '₹50 Entry Ticket',
    approxCostForTwo: '₹100',
    priceTier: 'budget',
    signatureDishes: [
      { name: 'Tribal Wild Forest Honey & Spiced Tea', price: '₹40', desc: 'Harvested by local indigenous forest societies' }
    ],
    reviews: [
      { author: "Karthik R., Trekker", rating: 5, comment: "The three cascading tiers and the 400-year-old hollow tree make this the finest nature escape from Calicut city.", source: "TripAdvisor" }
    ],
    tags: ['Waterfalls', 'Western Ghats', 'Trekking', 'Spice Plantations', 'Adventure', 'Nature'],
    mustTryOrSee: [
      'The three dramatic waterfall tiers: Erattumukku, Mazhavil Chattom (Rainbow Falls), and Thumpithullum Para',
      'The famous hollow bell-shaped giant Thanni tree trunk that can fit three people inside',
      'Trekking path lined with rubber, betel nut, nutmeg, and aromatic Malabar black pepper vines',
      'Suspension bridge with panoramic vantage overlooking the roaring mountain river'
    ],
    audioNarration: {
      english: "Welcome to Thusharagiri, which translates in Malayalam to 'The Mountain of Snow', named for the perpetual white misty spray that shrouds these Western Ghats cascades. Formed by two mountain streams originating in the virgin Wayanad hills, the river plunges over three spectacular rock tiers. As you trek through lush spice plantations of cardamom and clove, the scent of wet mountain earth and rushing torrents awakens your senses. Marvel at the hollow 400-year-old Thanni tree along the jungle path and take in the pristine biodiversity of God’s Own Country.",
      malayalamSummary: "പശ്ചിമഘട്ട മലനിരകളിൽ നിന്ന് ഒഴുകിയെത്തുന്ന തുഷാരഗിരി വെള്ളച്ചാട്ടം. മഞ്ഞിന്റെ മലനിരയെന്ന് അറിയപ്പെടുന്ന ഇവിടെ മൂന്ന് ഘട്ടങ്ങളായാണ് വെള്ളച്ചാട്ടം പതിക്കുന്നത്.",
      durationSec: 45
    },
    arExperience: {
      modelType: 'timber-log',
      title: 'Western Ghats Biodiversity & Canopy',
      subtitle: 'Explore the 3 waterfall tiers, endemic flora, and the 400-year-old hollow tree',
      hotspots: [
        { title: 'Erattumukku First Fall', text: 'Easily accessible first cascade tumbling into a serene forest rock pool.', x: 45, y: 55 },
        { title: 'Mazhavil Chattom (Rainbow Fall)', text: 'Where morning sunlight refracts through spray to create shimmering circular rainbows.', x: 70, y: 35 },
        { title: 'Ancient Hollow Tree', text: 'A gigantic 400-year-old Terminalia bellerica tree with a naturally hollowed core.', x: 25, y: 65 }
      ],
      timeTravelYears: ['Ancient Forest Sanctuary', 'Early Spices Settlement', '2026 Eco-Tourism Reserve'],
      timeTravelDescriptions: [
        'Untouched primal Western Ghats rainforest inhabited by tribal honey gatherers.',
        'Spices and rubber plantations established along the mountain stream banks.',
        'Thriving eco-adventure trekking hub operated by local forest protection committees.'
      ]
    },
    quest: {
      title: 'The Mist Mountain Trail',
      storyPrompt: 'Discover the natural wonders of Thusharagiri’s mountain streams and ancient canopy.',
      xp: 135,
      clue: 'Translate what the word "Thusharagiri" literally translates to in Malayalam.',
      questions: [
        {
          question: 'What does the Malayalam word "Thusharagiri" literally translate to?',
          options: ['Mountain of Snow / Mist', 'Golden Valley', 'River of Fire', 'Forest of Tigers'],
          correctIndex: 0,
          explanation: '"Thusharam" means snow or morning mist, and "Giri" means mountain; hence Thusharagiri signifies "The Mountain of Snow" due to the snowy water mist.'
        },
        {
          question: 'Which world-renowned mountain range, a UNESCO World Heritage biodiversity hotspot, is home to Thusharagiri?',
          options: ['The Western Ghats (Sahyadri)', 'The Himalayas', 'The Aravallis', 'The Vindhyas'],
          correctIndex: 0,
          explanation: 'Thusharagiri is nestled within the Western Ghats (Sahyadri), one of the top eight biodiversity hotspots on planet earth.'
        }
      ]
    },
    facts: [
      'Thusharagiri is an internationally recognized destination for whitewater kayaking and river sports.',
      'The trekking trail continues all the way uphill through thick evergreen jungle to Vythiri in Wayanad.',
      'Over 200 species of medicinal plants flourish in the micro-climate surrounding the waterfalls.'
    ],
    travelTips: [
      'Located 50 km east of Kozhikode; best visited by hired taxi or bus through Thamarassery and Kodenchery.',
      'Wear sturdy hiking shoes with good grip on wet granite rocks. Carry a water bottle and rain poncho.'
    ]
  },
  {
    id: 'krishna-menon-museum',
    name: 'VK Krishna Menon Museum & Art Gallery',
    malayalamName: 'വി.കെ. കൃഷ്ണമേനോൻ മ്യൂസിയവും ആർട്ട് ഗ്യാലറിയും',
    tagline: 'Rare personal treasures of India’s statesman, Raja Ravi Varma paintings & Zamorin artifacts',
    category: 'culture',
    categoryLabel: 'Culture & Heritage',
    isMustTry: false,
    coordinates: { lat: 11.2858, lng: 75.7725 },
    address: 'East Hill, Near Kendriya Vidyalaya, Kozhikode, Kerala 673005',
    rating: 4.68,
    reviewsCount: 1780,
    badgeRewardId: 'zamorin-scholar',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/VK_Krishna_Menon_Statue_Mananchira.jpg/1280px-VK_Krishna_Menon_Statue_Mananchira.jpg',
    historicalEra: 'Colonial & Modern Indian History',
    openHours: '10:00 AM - 5:00 PM (Closed on Mondays)',
    bestTimeToVisit: 'Morning 10:30 AM - 1:00 PM',
    entryFee: '₹20 Adults, ₹10 Students',
    priceRange: '₹20 Entry ticket',
    approxCostForTwo: '₹40',
    priceTier: 'budget',
    signatureDishes: [
      { name: 'East Hill Spiced Tea', price: '₹15', desc: 'Available at neighborhood tea stalls outside museum' }
    ],
    reviews: [
      { author: "Dr. Meera Iyer, Historian", rating: 5, comment: "The original Raja Ravi Varma oil canvases and Krishna Menon’s UN memorabilia make this a cultural goldmine.", source: "Museum Journal" }
    ],
    tags: ['Museum', 'Raja Ravi Varma', 'Krishna Menon', 'Zamorin History', 'Art Gallery', 'Artifacts'],
    mustTryOrSee: [
      'Original oil paintings by celebrated master artist Raja Ravi Varma and his sister Mangalabai Thampuratti',
      'Personal diplomatic artifacts, walking sticks, and UN memorabilia of statesman V.K. Krishna Menon',
      'The Pazhassi Raja Memorial section displaying megalithic urns, stone celts, and iron weaponry',
      'Ancient copper plate charters and medieval coins minted by the Zamorins of Calicut'
    ],
    audioNarration: {
      english: "Perched atop the tranquil East Hill of Kozhikode, this museum honors one of India's most brilliant diplomatic minds—Vengalil Krishnan Krishna Menon. Born in Calicut, Menon went on to become India's High Commissioner in London, Minister of Defence, and the charismatic voice of the Non-Aligned Movement at the United Nations. The adjacent Art Gallery houses breathtaking original masterpieces by Kerala's royal painter Raja Ravi Varma, along with stone age burial urns and Zamorin royal artifacts excavated from the Malabar soil.",
      malayalamSummary: "കോഴിക്കോടിന്റെ പ്രിയപുത്രനും ലോകപ്രശസ്ത നയതന്ത്രജ്ഞനുമായിരുന്ന വി.കെ. കൃഷ്ണമേനോന്റെ സ്മരണാർത്ഥം സ്ഥാപിച്ച മ്യൂസിയം. രാജാ രവിവർമ്മയുടെ അപൂർവ്വ ചിത്രങ്ങളും പുരാവസ്തു ശേഖരങ്ങളും ഇവിടെ കാണാം.",
      durationSec: 44
    },
    arExperience: {
      modelType: 'zamorin-throne',
      title: 'UN Diplomatic Medal & Zamorin Copper Plates',
      subtitle: 'Examine V.K. Krishna Menon’s historic 8-hour UN marathon speech transcripts and memorial',
      hotspots: [
        { title: 'The UN Record Speech', text: 'Delivered an unprecedented 8-hour marathon speech defending India’s sovereign stance at the UN Security Council in 1957.', x: 45, y: 50 },
        { title: 'Raja Ravi Varma Original Oils', text: 'Exquisite portraits capturing the nuances of Kerala royal attire and mythology.', x: 70, y: 35 },
        { title: 'Zamorin Gold & Silver Panams', text: 'Medieval mint coins bearing royal conch and lotus insignias.', x: 25, y: 65 }
      ],
      timeTravelYears: ['1800 Zamorin Archives', '1957 UN Speech Era', '2026 Modern Museum Wing'],
      timeTravelDescriptions: [
        'Royal treasury keeping ancient temple palm leaf edicts and copper charters.',
        'V.K. Krishna Menon’s diplomatic missions bridging India with global leaders.',
        'Curated cultural institution inspiring new generations of historians and art lovers.'
      ]
    },
    quest: {
      title: 'The Statesman’s Archive',
      storyPrompt: 'Uncover the diplomatic and artistic milestones commemorated at East Hill.',
      xp: 125,
      clue: 'Think of the record-breaking marathon speech delivered by Krishna Menon at the UN.',
      questions: [
        {
          question: 'V.K. Krishna Menon set an unbroken Guinness record at the UN Security Council in 1957 for what feat?',
          options: ['Longest speech in UN history (over 7 hours)', 'Fastest debate walkout', 'Youngest delegate', 'Singing the national anthem'],
          correctIndex: 0,
          explanation: 'Krishna Menon spoke for nearly 8 hours over two days defending India’s position on Kashmir, a speech that remains the longest in UN Security Council history.'
        },
        {
          question: 'Which legendary Indian painter whose works adorn the museum gallery pioneered combining European realism with Indian iconography?',
          options: ['Raja Ravi Varma', 'M.F. Husain', 'Amrita Sher-Gil', 'Jamini Roy'],
          correctIndex: 0,
          explanation: 'Raja Ravi Varma is widely considered one of the greatest painters in the history of Indian art, whose original canvases are proudly displayed at East Hill.'
        }
      ]
    },
    facts: [
      'The museum is situated in a colonial-era British bungalow surrounded by lush mahogany and teak trees.',
      'A life-sized bronze statue of V.K. Krishna Menon greets visitors at the East Hill garden entrance.',
      'The megalithic rock-cut caves and iron age pottery on display date back over 2,500 years in Malabar.'
    ],
    travelTips: [
      'Photography inside the oil painting gallery requires special permission; observe without flash.',
      'Combine your trip with a stroll through the peaceful East Hill residential neighborhood.'
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Destinations', icon: 'Compass', color: '#0ea5e9' },
  { id: 'must-try', label: '⭐ Must-Try Places', icon: 'Star', color: '#f59e0b', description: 'The absolute iconic landmarks of Kozhikode' },
  { id: 'food', label: 'Food & Malabar Delicacies', icon: 'Utensils', color: '#f59e0b', description: 'Legendary Biryani, Halwa, Sulaimani & Snacks' },
  { id: 'monuments', label: 'Historical & Monuments', icon: 'Landmark', color: '#ef4444', description: 'Vasco da Gama landing, ancient piers & forts' },
  { id: 'beaches', label: 'Beaches & Sunsets', icon: 'Sun', color: '#f97316', description: 'Arabian sea breeze, sea bridge & golden skies' },
  { id: 'culture', label: 'Heritage & Culture', icon: 'BookOpen', color: '#8b5cf6', description: 'Beypore Uru craftsmanship, mosques & temples' },
  { id: 'nature', label: 'Nature & Parks', icon: 'Trees', color: '#10b981', description: 'Canopy waterfalls, mangrove parks & wetlands' },
  { id: 'shopping', label: 'Shopping & Bazaars', icon: 'ShoppingBag', color: '#ec4899', description: 'SM Street, handloom, spices & souvenirs' },
  { id: 'resting', label: 'Resting & Relaxation', icon: 'Coffee', color: '#06b6d4', description: 'Quiet emerald tanks, lawns & shaded seating' },
  { id: 'photography', label: 'Photography Spots', icon: 'Camera', color: '#6366f1', description: 'Sunset reflections, ancient timber & sea piers' }
];

export const SIMULATED_ORIGINS = [
  { id: 'mananchira', name: 'Mananchira Square (City Center)', coords: { lat: 11.2532, lng: 75.7801 } },
  { id: 'kozhikode-beach', name: 'Kozhikode Beach Promenade', coords: { lat: 11.2618, lng: 75.7698 } },
  { id: 'railway-station', name: 'Kozhikode Main Railway Station', coords: { lat: 11.2486, lng: 75.7836 } },
  { id: 'beypore-jetty', name: 'Beypore Marina / Harbor', coords: { lat: 11.1645, lng: 75.8118 } }
];
