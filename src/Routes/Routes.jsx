import React from "react";
import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Shared/Error/Error";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "../Routes/PrivateRoute";
import SelectedClass from "../Dashboard/Student/SelectedClass";
import EnrolledClass from "../Dashboard/Student/EnrolledClass";
import Payment from "../Dashboard/Student/Payment";
import AddAClass from "../Dashboard/Instructor/AddAClass";
import MyClass from "../Dashboard/Instructor/MyClass";
import ManageClasses from "../Dashboard/Admin/ManageClasses";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import UpdateMyClass from "../Dashboard/Instructor/UpdateMyClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />,
      </PrivateRoute>
    ),
    children: [
      // For Admin
      {
        path: "/dashboard/manageClass",
        element: <ManageClasses />,
      },
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers />,
      },
      // For Instructor
      {
        path: "/dashboard/addAClass",
        element: <AddAClass />,
      },
      {
        path: "/dashboard/myClasses",
        element: <MyClass />,
      },
      {
        path: "/dashboard/updateMyClass/:id",
        element: <UpdateMyClass />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classes/${params.id}`),
      },
      // For Students
      {
        path: "selectedClass",
        element: <SelectedClass />,
      },
      {
        path: "/dashboard/enrolledClass",
        element: <EnrolledClass />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
    ],
  },
]);

export default router;
