import "./App.scss";
import { ReactDOM } from "react-dom";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Route, useLocation } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements, Routes } from "react-router-dom";
import Layout from "./Layout";
import { RouterProvider } from "react-router-dom";
import Planet from "./Planet";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/planet/:planetname" element={<Planet />}></Route>
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
