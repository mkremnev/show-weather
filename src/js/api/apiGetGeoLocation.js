export async function apiGetGeoLocation() {
  try {
    const response = await fetch(process.env.GEO);
    return response.json();
  } catch (e) {
    console.log(e.message);
  }
}
