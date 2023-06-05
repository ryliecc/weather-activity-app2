export default function ActivityList({
  displayedActivities,
  onDeleteActivity,
}) {
  return (
    <ul className="activity-list">
      {displayedActivities.map((activity) => {
        return (
          <li className="activity-list-item" key={activity.id}>
            {activity.name}
            <button type="button" onClick={() => onDeleteActivity(activity.id)}>
              ❌
            </button>
          </li>
        );
      })}
    </ul>
  );
}
