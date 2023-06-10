import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-24">
        {/* Page content here */}
        <Outlet/>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-72 pt-24 h-full bg-base-200 text-base-content">
          <li>
            <Link to="/dashboard">Selected Class</Link>
          </li>
          <li>
            <Link to="/dashboard/enrolledClass">Enrolled Class</Link>
          </li>
          <li>
            <Link to="/dashboard/payment">Payment History</Link>
          </li>
          <div className="divider" />
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
