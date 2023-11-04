import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductList from "../Views/Products/ProductList";
import ProductDetails from "../Views/Products/ProductDetails";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetails />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

const Router = () => {
  return <RouterProvider router={browserRouter} />;
};

export default Router;
