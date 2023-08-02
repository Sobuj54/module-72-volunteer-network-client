import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import VolunteerWorks from "../VolunteerWorks/VolunteerWorks";

const Home = () => {
  const totalWork = useLoaderData();
  return (
    <>
      <Banner></Banner>
      <VolunteerWorks totalWork={totalWork}></VolunteerWorks>
    </>
  );
};

export default Home;
