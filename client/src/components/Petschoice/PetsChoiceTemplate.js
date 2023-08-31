import { Outlet } from "react-router-dom";
import Header from "./comps/Header";
import Footer from "./comps/Footer";

import "./styles/index.css";
import "./styles/pages";
import "./styles/header/index.css";
import "./styles/footer/index.css";

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
