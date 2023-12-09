import { Outlet } from "react-router-dom";
import Header from "../components/portfolio/Header";

const PortfolioTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default PortfolioTemplate;
