// import Search from "../pages/search";

/* eslint-disable no-unused-vars */
const { createBrowserRouter } = require("react-router-dom");
const { default: App } = require("../App");
const { default: Home } = require("../pages/home");
const { default: Explorepage } = require("../pages/Explorepage");
const { default: DetialsPages } = require("../pages/detialspages");
const { default: SearchPages } = require("../pages/search");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":explore",
        element: <Explorepage />,
      },
      {
        path: ":explore/:id",
        element: <DetialsPages />,
      },
      {
        path: "search",
        element: <SearchPages/>,
      },
    ],
  },
]);

export default router;
