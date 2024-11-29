import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage, CheckoutPage, HomePage } from "./pages/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
