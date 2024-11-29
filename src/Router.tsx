import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage, HomePage } from "./pages/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
