export default function ActivityList({
  displayedActivities,
  onDeleteActivity,
}) {
  return (
    <ul className="activity-list">
      {displayedActivities.map((activity) => {
        return (
          <li className="activity-list-item" key={activity.id}>
            <p className="activity-list-item__name">{activity.name}</p>
            <button
              type="button"
              onClick={() => onDeleteActivity(activity.id)}
              className="activity-list-item__delete-button"
            >
              ❌
            </button>
          </li>
        );
      })}
    </ul>
  );
}
