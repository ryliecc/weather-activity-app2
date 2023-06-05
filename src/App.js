import "./App.css";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import Weather from "./components/Weather";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";

export default function App() {
  const [allActivities, setAllActivities] = useLocalStorageState(
    "allActivities",
    []
  );

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
    console.log(allActivities);
    form.reset();
    form.elements.name.focus();
  }

  return (
    <>
      <Weather>
        <ActivityList />
      </Weather>
      <ActivityForm onAddActivity={handleAddActivity} />
    </>
  );
}
