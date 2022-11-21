const GOOGLE_API_KEY = "AIzaSyAVgb3P6FVSsNvMadzOhL55eD2h4lyAaG0";

export function getMapPreviewUrl(lat, long) {
  const url = `
    https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${long}&key=${GOOGLE_API_KEY}
  `;
  console.log(url);
  return url;
}
