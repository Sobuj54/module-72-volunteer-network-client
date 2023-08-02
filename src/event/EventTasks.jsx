import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/ContextAPI";
import EventTask from "./EventTask";

const EventTasks = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/events?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-8 mt-14">
      {events.map((event) => (
        <EventTask key={event._id} event={event}></EventTask>
      ))}
    </div>
  );
};

export default EventTasks;
