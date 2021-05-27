export async function getWeatherCurrent(city) {
  try {
    let response = await fetch(
      `${process.env.URL}weather?q=${city}&appid=${process.env.KEY}&units=metric`
    );
    return response.json();
  } catch (e) {
    console.log(e.message);
  }
}
