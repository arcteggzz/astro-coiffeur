import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//layouts
import { PublicPageLayout } from "./utils/";

//pages
import {
  SplashPage,
  HomePage,
  GalleryPage,
  LocationPage,
  ServicesPage,
  StorePage,
} from "./pages";

//routes
import { routePaths } from "./utils/";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={routePaths.SPLASHPAGE} element={<SplashPage />} />

          <Route element={<PublicPageLayout />}>
            <Route path={routePaths.HOMEPAGE} element={<HomePage />} />
            <Route path={routePaths.GALLERYPAGE} element={<GalleryPage />} />
            <Route path={routePaths.LOCATIONPAGE} element={<LocationPage />} />
            <Route path={routePaths.SERVICESPAGE} element={<ServicesPage />} />
            <Route path={routePaths.STOREPAGE} element={<StorePage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
