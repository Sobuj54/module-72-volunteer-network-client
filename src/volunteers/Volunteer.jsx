import { FaTrash } from "react-icons/fa";

const Volunteer = ({ volunteer }) => {
  const { name, email, date, work } = volunteer;

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{date}</td>
        <td>{work}</td>
        <td className="text-red-500 btn">
          <FaTrash />
        </td>
      </tr>
    </>
  );
};

export default Volunteer;
