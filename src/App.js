import "./App.css";
import Weather from "./components/Weather";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";

export default function App() {
  return (
    <>
      <Weather>
        <ActivityList />
      </Weather>
      <ActivityForm />
    </>
  );
}
