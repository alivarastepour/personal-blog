import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage";
import Spinner from "./Components/Spinner";
import { useSelector } from "react-redux";
import { useState, Suspense, createContext } from "react";
import Blog from "./Components/Blog";
import BlogArticle from "./Components/BlogArticle/BlogArticle";
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
      path: "/blog/:blogID",
      element: <BlogArticle />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
  ]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <languageContext.Provider value={{ language, setLanguage }}>
          <div className={`App ${theme ? `App-${theme}` : `App-default`}`}>
            <RouterProvider router={router} />
          </div>
        </languageContext.Provider>
      </Suspense>
    </>
  );
};
export default AppWrapper;
