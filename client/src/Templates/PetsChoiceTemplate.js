import { Outlet } from "react-router-dom";
import Header from "../components/Petschoice/Header";
import Footer from "../components/Petschoice/Footer";

const PetsChoiceTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PetsChoiceTemplate;
