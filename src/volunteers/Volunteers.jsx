import { useEffect, useState } from "react";
import Volunteer from "./Volunteer";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVolunteers(data);
      });
  }, []);

  return (
    <div className="flex mt-14">
      <div className="w-3/12">
        <h4 className="text-blue-500 mb-4 text-lg font-semibold">
          Volunteer Register List
        </h4>
        <button className="btn">
          <span className="text-xl">+</span> Add Event
        </button>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Registering Date</th>
              <th>Volunteer list</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map((volunteer) => (
              <Volunteer key={volunteer._id} volunteer={volunteer}></Volunteer>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Volunteers;
