import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppWrapper = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      //   children: [
      //     {
      //       path: "blog",
      //       element: <div>salam</div>,
      //     },
      //     {
      //       path: "blog/:blogID",
      //       element: <div>salam1</div>,
      //     },
      //   ],
    },
    {
      path: "blog",
      element: <div>sa;am</div>,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppWrapper;
