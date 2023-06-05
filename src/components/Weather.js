export default function Weather({ children, isGoodWeather }) {
  let text;
  if ({ isGoodWeather } === true) {
    text = "Yay, good weather!";
  } else {
    text = "Oh no, the weather seems to be bad right now.";
  }
  return (
    <section className="Weather">
      <span className="weather__icon">🌞</span>
      <p className="weather__temperature">20°C</p>
      <p className="weather__text">{text}</p>
      {children}
    </section>
  );
}
