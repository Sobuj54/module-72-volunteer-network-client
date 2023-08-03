import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/ContextAPI";
import EventTask from "./EventTask";

const EventTasks = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      `https://volunteer-network-server-peach.vercel.app/events?email=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("event-access-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">
      {events.map((event) => (
        <EventTask key={event._id} event={event}></EventTask>
      ))}
    </div>
  );
};

export default EventTasks;
