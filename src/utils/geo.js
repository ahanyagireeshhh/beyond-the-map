// Geographic distance and travel time calculation utilities

export function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return Math.round(d * 10) / 10;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export function formatDistance(distanceKm) {
  if (distanceKm < 1) {
    return `${Math.round(distanceKm * 1000)} m`;
  }
  return `${distanceKm.toFixed(1)} km`;
}

export function estimateTravelTime(distanceKm) {
  // Walking: ~4.5 km/h
  const walkMinutes = Math.max(2, Math.round((distanceKm / 4.5) * 60));
  // Auto-rickshaw: ~25 km/h in city traffic
  const autoMinutes = Math.max(3, Math.round((distanceKm / 25) * 60));
  
  return {
    walk: walkMinutes > 60 ? `${Math.floor(walkMinutes / 60)}h ${walkMinutes % 60}m` : `${walkMinutes} min walk`,
    auto: autoMinutes > 60 ? `${Math.floor(autoMinutes / 60)}h ${autoMinutes % 60}m` : `${autoMinutes} min auto`,
    approxAutoFare: `₹${Math.max(30, Math.round(30 + Math.max(0, distanceKm - 1.5) * 15))}`
  };
}
