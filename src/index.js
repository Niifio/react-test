import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import ViewPage from "./pages/ViewPage";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ProtectedRoute from "./utils/ProtectedRoute";
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
      <Route element={<NavBar test="test" />}>
        <Route
          path="home/user"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="home/user/create" element={<CreateForm />} />
        <Route path="home/user/create/dashboard" element={<Dashboard />} />
        <Route
          path="home/user/create/dashboard/view/:index"
          element={<ViewPage />}
        />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
