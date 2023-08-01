import { useEffect, useState } from "react";
import Work from "./Work";

const VolunteerWorks = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/volunteers")
      .then((res) => res.json())
      .then((data) => {
        setWorks(data);
      });
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 md:mt-20 w-11/12 lg:w-full mx-auto">
      {works.map((work) => (
        <Work key={work._id} work={work}></Work>
      ))}
    </div>
  );
};

export default VolunteerWorks;
