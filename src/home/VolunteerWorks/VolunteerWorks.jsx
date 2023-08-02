import { useEffect, useState } from "react";
import Work from "./Work";

const VolunteerWorks = ({ totalWork }) => {
  const [works, setWorks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const len = totalWork.length;
  const totalPage = Math.ceil(len / itemsPerPage);
  const pageNumbers = [...Array(totalPage).keys()];

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://localhost:5000/volunteers?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await res.json();
      setWorks(data);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);

  const options = [4, 8, 16];
  const handleSelectChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 md:mt-20 w-11/12 lg:w-full mx-auto">
        {works.map((work) => (
          <Work key={work._id} work={work}></Work>
        ))}
      </div>
      {/* pagination */}
      <div className="mt-10 flex justify-center">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`join-item btn rounded-md mr-4 ${
              currentPage == number ? "btn-active bg-amber-600" : ""
            }`}
            onClick={() => setCurrentPage(number)}>
            {number + 1}
          </button>
        ))}
        <select
          value={itemsPerPage}
          onChange={handleSelectChange}
          className="border-2 rounded-md bg-teal-800 text-white px-1">
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default VolunteerWorks;
