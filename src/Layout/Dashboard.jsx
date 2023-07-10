import { Link, NavLink, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const [rollData, setRollData] = useState([]);
  const { user, loading } = useAuth();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  // const isAdmin = true;
  // const isInstructor = false;

  const adminBar = (
    <>
      {/* ----------Admin------------ */}
      <div className="avatar my-4">
        <div className="mx-auto w-24 rounded-full">
          <img src={user.photoURL} />
        </div>
      </div>
      <div className="mb-4">Welcome, {user.displayName}</div>
      <li>
        <NavLink to="/dashboard/manageClass">Manage Classes</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
      </li>
    </>
  );
  const instructorBar = (
    <>
      {/* ----------Instructor------------ */}
      <div className="avatar my-4">
        <div className="mx-auto w-24 rounded-full">
          <img src={user.photoURL} />
        </div>
      </div>
      <div className="mb-4">Welcome, {user.displayName}</div>
      <li>
        <NavLink to="/dashboard/addAClass">Add a Class</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/myClasses">My classes</NavLink>
      </li>
    </>
  );
  const student = (
    <>
      <div className="avatar my-4">
        <div className="mx-auto w-24 rounded-full">
          <img src={user.photoURL} />
        </div>
      </div>
      <div className="mb-4">Welcome, {user.displayName}</div>
      <li>
        <Link to="/dashboard/selectedClass">Selected Class</Link>
      </li>
      <li>
        <Link to="/dashboard/enrolledClass">Enrolled Class</Link>
      </li>
      <li>
        <Link to="/dashboard/payment">Payment History</Link>
      </li>
    </>
  );

  useEffect(() => {
    fetch(`https://alpha-photography-server.vercel.app/students`)
      .then((res) => res.json())
      .then((data) => {
        setRollData(data);
      });
  }, [user?.email]);

  // for (const rolls of rollData) {
  //   console.log(rolls.role);
  // }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-24">
        <Outlet />
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
          {isAdmin ? adminBar : isInstructor ? instructorBar : student}
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
