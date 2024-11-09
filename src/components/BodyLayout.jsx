import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export const CompanyLayout = () => {
  return (
    <div className="company">
      <Sidebar />
      <Outlet />
    </div>
  );
};
