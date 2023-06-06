export default function LocationForm({ onChangeLocation }) {
  return (
    <form className="location-form" onSubmit={onChangeLocation}>
      <fieldset className="location-form__fieldset">
        <legend className="location-form__legend">I am somewhere in:</legend>
        <div className="location-form__option1">
          <input
            type="radio"
            id="europe"
            name="location"
            value="europe"
            className="location-form__input"
            checked
          />
          <label htmlFor="europe" className="location-form__input-label">
            Europe
          </label>
        </div>
        <div className="location-form__option2">
          <input
            type="radio"
            id="arctic"
            name="location"
            value="arctic"
            className="location-form__input"
          />
          <label htmlFor="arctic" className="location-form__input-label">
            the Arctic
          </label>
        </div>
        <div className="location-form__option3">
          <input
            type="radio"
            id="sahara"
            name="location"
            value="sahara"
            className="location-form__input"
          />
          <label htmlFor="sahara" className="location-form__input-label">
            the Sahara
          </label>
        </div>
        <div className="location-form__option4">
          <input
            type="radio"
            id="rainforest"
            name="location"
            value="rainforest"
            className="location-form__input"
          />
          <label htmlFor="rainforest" className="location-form__input-label">
            the Rainforest
          </label>
        </div>
        <button type="submit" className="location-form__submit-button">
          Go!
        </button>
      </fieldset>
    </form>
  );
}
