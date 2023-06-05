export default function ActivityList({ displayedActivities }) {
  return (
    <ul className="activity-list">
      {displayedActivities.map((activity) => {
        return (
          <li className="activity-list-item" key={activity.id}>
            {activity.name}
            <button type="button">❌</button>
          </li>
        );
      })}
    </ul>
  );
}
