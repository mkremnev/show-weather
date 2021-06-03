export async function getWeatherDaily(city) {
  try {
    const response = await fetch(
      `${process.env.URL}onecall?lat=${city?.coord.lat}&lon=${city?.coord.lon}&exclude=minutely,hourly&appid=${process.env.KEY}&units=metric`
    );
    return response.json();
  } catch (e) {
    console.log(e.message);
  }
}
