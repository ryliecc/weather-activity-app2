export default function ActivityForm({ onSubmit }) {
  return (
    <form className="activity-form" onSubmit={onSubmit}>
      <h2 className="activity-form__heading">Add new activity!</h2>
      <label
        for="activity-form__title"
        className="activity-form__title-label"
      ></label>
      <input
        type="text"
        id="activity-form__title"
        className="activity-form__title"
      />
      <label
        for="activity-form__sunny-checkbox"
        className="activity-form__sunny-checkbox-label"
      >
        Good weather activity:
      </label>
      <input
        type="checkbox"
        id="activity-form__sunny-checkbox"
        className="activity-form__sunny-checkbox"
      />
      <label
        for="activity-form__rainy-checkbox"
        className="activity-form__rainy-checkbox-label"
      >
        Bad weather activity:
      </label>
      <input
        type="checkbox"
        id="activity-form__rainy-checkbox"
        className="activity-form__rainy-checkbox"
      />
      <button type="submit" className="activity-form__submit-button">
        Submit
      </button>
    </form>
  );
}
