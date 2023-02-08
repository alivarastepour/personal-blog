import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage";
import Spinner from "./Components/Spinner";
import Header from "./Components/Header";
import { useSelector } from "react-redux";
import { useState, Suspense, createContext } from "react";
export const languageContext = createContext();

const AppWrapper = () => {
  const [language, setLanguage] = useState("IR");
  const theme = useSelector((state) => state.theme.value)?.toLowerCase();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "blog",
      element: <div>salam</div>,
    },
    {
      path: "blog/:blogID",
      element: <div>salam1</div>,
    },
  ]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <languageContext.Provider value={{ language, setLanguage }}>
          <div className={`App ${theme ? `App-${theme}` : `App-default`}`}>
            {/* <Header /> */}
            <RouterProvider router={router} />
            {/* <Outlet /> */}
          </div>
        </languageContext.Provider>
      </Suspense>
    </>
  );
};
export default AppWrapper;
