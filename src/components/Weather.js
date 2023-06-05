export default function Weather({ children }) {
  return (
    <section className="Weather">
      <span className="weather__icon">🌞</span>
      <p className="weather__temperature">20°C</p>
      <p className="weather__text"></p>
      {children}
    </section>
  );
}
