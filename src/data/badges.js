// Explorer Badges and Achievements system for Explore Kozhikode

export const BADGES = [
  {
    id: 'malabar-first-step',
    name: 'Malabar First Step',
    title: 'City Explorer Novice',
    icon: 'Compass',
    gradient: 'from-blue-500 to-cyan-500',
    color: '#06b6d4',
    description: 'Visited and scanned your first heritage location in Kozhikode.',
    criteria: 'Visit or scan any 1 location',
    xpReward: 50,
    requiredCount: 1
  },
  {
    id: 'arabian-voyager',
    name: 'Arabian Shoreline Voyager',
    title: 'Guardian of the Sea Bridge',
    icon: 'Waves',
    gradient: 'from-cyan-500 to-blue-600',
    color: '#0284c7',
    description: 'Walked the sands of historic Kozhikode Beach and inspected the 1871 sea pier.',
    criteria: 'Complete the Kozhikode Beach quest',
    xpReward: 100,
    locationId: 'kozhikode-beach'
  },
  {
    id: 'uru-shipwright',
    name: 'Master Uru Shipwright',
    title: 'Honorary Khalasi Guild',
    icon: 'Anchor',
    gradient: 'from-amber-600 to-yellow-500',
    color: '#d97706',
    description: 'Discovered the 1,500-year living craft of building giant wooden ocean dhows in Beypore.',
    criteria: 'Complete the Beypore Port quest',
    xpReward: 120,
    locationId: 'beypore-uru'
  },
  {
    id: 'sweet-meat-maestro',
    name: 'Sweet Meat Maestro',
    title: 'S.K. Pottekkatt Envoy',
    icon: 'Sparkles',
    gradient: 'from-pink-500 to-rose-600',
    color: '#e11d48',
    description: 'Immersed yourself in the literary street of Mittai Theruvu and authentic Kozhikodan Halwa lore.',
    criteria: 'Complete the SM Street quest',
    xpReward: 100,
    locationId: 'sm-street'
  },
  {
    id: 'zamorin-scholar',
    name: 'Zamorin Royal Scholar',
    title: 'Savants of Revathi Pattathanam',
    icon: 'Crown',
    gradient: 'from-amber-500 to-orange-600',
    color: '#f59e0b',
    description: 'Honored the benevolent rulers of Calicut and their patronages of Vedic literature and water tanks.',
    criteria: 'Complete Mananchira Square or Tali Temple quests',
    xpReward: 110,
    locationId: 'mananchira-square'
  },
  {
    id: 'historic-navigator',
    name: '1498 Historic Navigator',
    title: 'Voyager of Kappakadavu',
    icon: 'Navigation',
    gradient: 'from-emerald-500 to-teal-600',
    color: '#059669',
    description: 'Stood upon Kappad Beach where Vasco da Gama forged the first direct sea route from Europe to India.',
    criteria: 'Complete the Kappad Beach quest',
    xpReward: 130,
    locationId: 'kappad-beach'
  },
  {
    id: 'heritage-guardian',
    name: 'Kuttichira Heritage Guardian',
    title: 'Mishkal Architecture Master',
    icon: 'Shield',
    gradient: 'from-indigo-500 to-purple-600',
    color: '#7c3aed',
    description: 'Explored the 700-year wooden Mishkal Mosque and the communal harmony of ancient Calicut.',
    criteria: 'Complete the Mishkal Mosque quest',
    xpReward: 110,
    locationId: 'mishkal-mosque'
  },
  {
    id: 'biryani-connoisseur',
    name: 'Calicut Biryani Connoisseur',
    title: 'Malabar Culinary Diplomat',
    icon: 'Flame',
    gradient: 'from-orange-500 to-amber-600',
    color: '#ea580c',
    description: 'Tasted the aromatic magic of Kaima rice dum biryani and authentic Kuttichira snacks.',
    criteria: 'Complete Paragon or Zains culinary quest',
    xpReward: 100,
    locationId: 'paragon-biryani'
  },
  {
    id: 'nature-trailblazer',
    name: 'Monsoon Nature Trailblazer',
    title: 'Western Ghats Protector',
    icon: 'Trees',
    gradient: 'from-green-500 to-emerald-700',
    color: '#16a34a',
    description: 'Explored the mangroves of Sarovaram or the cascading mountain streams of Thusharagiri.',
    criteria: 'Complete Sarovaram or Thusharagiri quest',
    xpReward: 110,
    locationId: 'sarovaram-park'
  },
  {
    id: 'calicut-grandmaster',
    name: 'Grandmaster of Kozhikode',
    title: 'Legendary City Explorer',
    icon: 'Trophy',
    gradient: 'from-yellow-400 via-amber-500 to-red-600',
    color: '#eab308',
    description: 'Achieved mastery across Kozhikode’s coastline, heritage, culinary treasures, and history.',
    criteria: 'Accumulate 500+ XP and 5+ completed quests',
    xpReward: 250,
    isGrandmaster: true
  }
];

export const EXPLORER_RANKS = [
  { minXp: 0, title: 'Coastline Wanderer', level: 1, nextAt: 150, color: '#38bdf8' },
  { minXp: 150, title: 'Malabar Wayfarer', level: 2, nextAt: 350, color: '#4ade80' },
  { minXp: 350, title: 'Spice Route Pathfinder', level: 3, nextAt: 600, color: '#facc15' },
  { minXp: 600, title: 'Zamorin Royal Envoy', level: 4, nextAt: 1000, color: '#fb923c' },
  { minXp: 1000, title: 'Grandmaster of Calicut', level: 5, nextAt: 99999, color: '#f43f5e' }
];

export function getRankFromXp(xp) {
  for (let i = EXPLORER_RANKS.length - 1; i >= 0; i--) {
    if (xp >= EXPLORER_RANKS[i].minXp) {
      const current = EXPLORER_RANKS[i];
      const prevXp = current.minXp;
      const nextXp = current.nextAt;
      const progressPercent = nextXp === 99999 
        ? 100 
        : Math.min(100, Math.round(((xp - prevXp) / (nextXp - prevXp)) * 100));
      return { ...current, progressPercent };
    }
  }
  return { ...EXPLORER_RANKS[0], progressPercent: 0 };
}
