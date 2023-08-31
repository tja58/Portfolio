import { Outlet } from "react-router-dom";
import Header from "./comps/Header";

const PortfolioTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default PortfolioTemplate;
