export default function ActivityForm({ onAddActivity }) {
  return (
    <form className="activity-form" onSubmit={onAddActivity}>
      <h2 className="activity-form__heading">Add new activity!</h2>
      <label
        htmlFor="activity-form__name"
        className="activity-form__name-label"
      >
        Name:
      </label>
      <input
        type="text"
        name="name"
        id="activity-form__name"
        className="activity-form__name"
      />
      <label
        htmlFor="activity-form__sunny-checkbox"
        className="activity-form__sunny-checkbox-label"
      >
        Good weather activity:
      </label>
      <input
        type="checkbox"
        id="activity-form__sunny-checkbox"
        name="isSunny"
        className="activity-form__sunny-checkbox"
      />
      <label
        htmlFor="activity-form__rainy-checkbox"
        className="activity-form__rainy-checkbox-label"
      >
        Bad weather activity:
      </label>
      <input
        type="checkbox"
        id="activity-form__rainy-checkbox"
        name="isRainy"
        className="activity-form__rainy-checkbox"
      />
      <button type="submit" className="activity-form__submit-button">
        Submit
      </button>
    </form>
  );
}
