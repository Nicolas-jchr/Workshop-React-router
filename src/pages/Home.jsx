import { useEffect, useState } from "react";

const getWeatherOfTheDay = () => {
  return "sunny";
};

function Home() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const weatherOfTheDay = getWeatherOfTheDay();

    setWeather(weatherOfTheDay);
  }, []);

  return (
    <>
      <h1>Hello i'm the page Home</h1>

      {weather != null && <p>Today is a {weather} day</p>}
    </>
  );
}

export default Home;