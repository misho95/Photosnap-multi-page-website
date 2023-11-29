import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./components/shared/container";
import Header from "./components/header/header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container>
        <Header />
      </Container>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
