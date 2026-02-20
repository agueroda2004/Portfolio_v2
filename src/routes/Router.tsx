import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AllProjects from "../pages/AllProjects";
import ProjectDetail from "../pages/ProjectDetail";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "*", element: <NotFound /> },
      { path: "/all", element: <AllProjects /> },
      { path: "/project/:id", element: <ProjectDetail /> },
    ],
  },
]);
