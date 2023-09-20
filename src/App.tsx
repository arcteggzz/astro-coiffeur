import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//context
import { AppContextProvider } from "./context/AppContext";

//layouts
import { PublicPageLayout } from "./utils/";

//pages
import { SplashPage, HomePage } from "./pages";

//routes
import { routePaths } from "./utils/";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AppContextProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path={routePaths.SPLASHPAGE} element={<SplashPage />} />

            <Route element={<PublicPageLayout />}>
              <Route path={routePaths.HOMEPAGE} element={<HomePage />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </AppContextProvider>
    </>
  );
};

export default App;
