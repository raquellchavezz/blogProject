import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./pages/aboutme";
import Root from "./pages/root";
import Blogs from "./pages/Blogs";
import "semantic-ui-css/semantic.min.css";
//Browser router which will actually help connect to the browser
//routes component which is going to be the parent for all our routes
//route, used to set up a single page

//root as base component
//you have two children which is the two pages you want
//want displayed

//index: this component has no other paths, so just inherit path from
//the parent

//var router holds our routes that's being defined
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "aboutme",
        element: <AboutMe />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
