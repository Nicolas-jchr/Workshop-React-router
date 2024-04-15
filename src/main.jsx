import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

// page components

import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import './index.css'
// router creation

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/articles/1">Article </Link>
        </nav>
        <main>
          <Home />
        </main>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/articles">Articles</Link>
        </nav>
        <main>
          <About />
        </main>
      </>
    ),
  },
  {
    path: "/articles/:id",
    element: <Article />,
  },
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);