export default function Weather({
  children,
  isGoodWeather,
  condition,
  temperature,
}) {
  let text;
  if (isGoodWeather === true) {
    text = "Yay, good weather!";
  } else {
    text = "Oh no, the weather seems to be bad right now.";
  }
  return (
    <section className="weather">
      <h1 className="weather__heading">
        {condition}
        {temperature}°C
      </h1>
      <p className="weather__text">{text}</p>
      {children}
    </section>
  );
}
