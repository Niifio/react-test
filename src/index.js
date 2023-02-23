import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" errorElement={<ErrorPage />} element={<App />} />
      <Route path="register" element={<Register />} />
      <Route element={<NavBar />}>
        <Route path="home/user" element={<Home />} />
        <Route path="home/user/create" element={<CreateForm />} />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
