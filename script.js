const apiKey = "a475483af58f4f4880040648251107";

async function getWeather() {
  const location = document.getElementById("locationInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!location) {
    resultDiv.innerText = "Please enter a location.";
    return;
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Location not found");

    const data = await res.json();
    const temp = data.current.temp_c;
    const condition = data.current.condition.text;

    resultDiv.innerHTML = `
      <strong>Location:</strong> ${data.location.name}, ${data.location.country} <br />
      <strong>Temperature:</strong> ${temp}°C <br />
      <strong>Condition:</strong> ${condition}
    `;
  } catch (error) {
    resultDiv.innerText = "Error: " + error.message;
  }
}
