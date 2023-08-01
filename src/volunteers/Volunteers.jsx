import { useEffect, useState } from "react";
import Volunteer from "./Volunteer";
import { Link } from "react-router-dom";
import LeftNav from "../shared/LeftNav/LeftNav";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setVolunteers(data);
      });
  }, []);

  return (
    <div className="md:flex mt-14">
      <LeftNav></LeftNav>

      <div className="overflow-x-auto w-full mt-5 md:mt-0">
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
