import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import LoginForm, { loginAction } from "./frontend/components/recruitee/login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpForm from "./frontend/components/recruitee/signup";
import JobSearchForm from "./frontend/components/recruitee/jobsearch";
// import jobpostingform from "./frontend/components/recruitee/jobpostingform";
const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUpForm />,
    
  },
  {
    path: "/login",
    index: true,
    element: <LoginForm />,
    action: loginAction,
  },
  {
    path: "/jobsearch",
    element: <JobSearchForm />,
  },

  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
