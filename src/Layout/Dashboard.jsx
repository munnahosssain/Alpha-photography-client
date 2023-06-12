import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

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
          {isAdmin || isInstructor ? (
            isAdmin ? (
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
            ) : (
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
            )
          ) : (
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
          )}
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
