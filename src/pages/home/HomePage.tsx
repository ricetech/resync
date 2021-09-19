import React from "react";
import DashboardNavbar from "../../components/dashboard-navbar";

export const HomePage = () => {
  return (
    <>
      <DashboardNavbar isDashboard={false} />
      <div className="landing">Hello</div>
    </>
  );
};
