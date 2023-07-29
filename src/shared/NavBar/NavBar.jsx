import { Link } from "react-router-dom";
import img from "../../assets/logos/Group 1329.png";

const NavBar = () => {
  const lists = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>Donation</Link>
      </li>
      <li>
        <Link>Events</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {lists}
          </ul>
        </div>
        <div className="w-[120px] md:w-[200px]">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{lists}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn btn-sm md:btn-md btn-primary mr-2 ">
          Login
        </Link>
        <Link className="btn btn-sm md:btn-md btn-neutral  ">Admin</Link>
      </div>
    </div>
  );
};

export default NavBar;
