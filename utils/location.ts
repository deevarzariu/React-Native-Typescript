const GOOGLE_API_KEY = "AIzaSyAVgb3P6FVSsNvMadzOhL55eD2h4lyAaG0";

export function getMapPreviewUrl({ lat, long }) {
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${long}&key=${GOOGLE_API_KEY}`;
  return url;
}

export async function getAddress({ lat, long }) {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${GOOGLE_API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch address");
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}
