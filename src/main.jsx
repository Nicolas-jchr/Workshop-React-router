import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

import App from "./App";

// page components

import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";

const getSomeData = (id) => {
  const allData = {
    42: {
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet",
    },
    123: {
      title: "Schnapsum",
      content: "Lorem Elsass ipsum Salut bisamme",
    },
    666: {
      title: "Cupcake Ipsum",
      content: "Tiramisu pastry wafer brownie soufflé",
    },
  };

  return allData[id];
};


// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      const weather = "sunny";
      return weather;
    },
    id:"app",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles/:id",
        element: <Article />,
        loader: ({ params }) => {
          return getSomeData(params.id);
        }
      },
    ],
  },
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);