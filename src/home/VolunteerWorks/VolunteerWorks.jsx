import { useEffect, useState } from "react";
import Work from "./Work";

const VolunteerWorks = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => {
        setWorks(data);
      });
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">
      {works.map((work) => (
        <Work key={work.eventName} work={work}></Work>
      ))}
    </div>
  );
};

export default VolunteerWorks;