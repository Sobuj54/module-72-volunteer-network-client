import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className=" w-full  md:w-3/12  text-center">
      <Link to="/volunteers">
        <h4 className="text-blue-500 md:mb-4 text-lg font-semibold">
          Volunteer Register List
        </h4>
      </Link>
      <Link to="/addEvent" className="btn">
        <span className="text-xl">+</span> Add Event
      </Link>
    </div>
  );
};

export default LeftNav;
