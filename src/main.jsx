import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  ProductsPage,
  BrandsPage,
  CategoriesPage,
  CartPage,
  SignIn,
  SignUp,
} from "./pages";
import { getAllProducts } from "./services/apiServers.js";
import Modal from "react-modal";
// Set the app element
Modal.setAppElement("#root");
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => getAllProducts(),
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/brands",
        element: <BrandsPage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
