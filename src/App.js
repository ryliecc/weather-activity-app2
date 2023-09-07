import { useState, useEffect } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import Weather from "./components/Weather";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";
import LocationForm from "./components/LocationForm";

export default function App() {
  const [location, setLocation] = useState("europe");
  const fetchURL = "https://example-apis.vercel.app/api/weather/" + location;
  const [weather, setWeather] = useState([]);
  const [allActivities, setAllActivities] = useLocalStorageState(
    "allActivities",
    []
  );
  const initialActivities = [
    {
      id: uid(),
      name: "have a vegan BBQ 🌽",
      isForGoodWeather: true,
      isForBadWeather: false,
    },
    {
      id: uid(),
      name: "read a book 📖",
      isForGoodWeather: true,
      isForBadWeather: true,
    },
  ];
  if (allActivities == null) {
    setAllActivities(initialActivities);
  }
  const sunnyActivities = allActivities.filter(
    (activity) => activity.isForGoodWeather === true
  );
  const rainyActivities = allActivities.filter(
    (activity) => activity.isForBadWeather === true
  );
  let displayedActivities;

  if (weather.isGoodWeather === true) {
    displayedActivities = sunnyActivities;
  } else {
    displayedActivities = rainyActivities;
  }

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(fetchURL);
      const weather = await response.json();
      setWeather(weather);
      console.log(weather);
    }
    const fetchIntervId = setInterval(fetchWeather, 5000);
    return () => {
      clearInterval(fetchIntervId);
    };
  }, [fetchURL]);

  function handleAddActivity(event) {
    event.preventDefault();
    const form = event.target;
    const newActivity = {
      id: uid(),
      name: form.name.value,
      isForGoodWeather: form.elements.isSunny.checked,
      isForBadWeather: form.elements.isRainy.checked,
    };
    setAllActivities([...allActivities, newActivity]);
    form.reset();
    form.elements.name.focus();
  }

  function handleDeleteActivity(toDelete) {
    const updatedActivities = allActivities.filter(
      (activity) => activity.id !== toDelete
    );
    setAllActivities(updatedActivities);
  }

  function handleChangeLocation(event) {
    event.preventDefault();
    const form = event.target;
    setLocation(form.elements.location.value);
  }

  return (
    <>
      <Weather
        isGoodWeather={weather.isGoodWeather}
        condition={weather.condition}
        temperature={weather.temperature}
      >
        <ActivityList
          displayedActivities={displayedActivities}
          onDeleteActivity={handleDeleteActivity}
        />
        <LocationForm onChangeLocation={handleChangeLocation} />
      </Weather>
      <ActivityForm onAddActivity={handleAddActivity} />
    </>
  );
}
