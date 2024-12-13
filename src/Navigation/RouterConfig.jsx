import { Routes, Route } from "react-router-dom";
import PublicRoute from "./Routes/PublicRoute";
import WEB_PAGES from "../pages";
import PATH from "../utils/path";

function RouterConfig() {
  return (
    <Routes>
      <Route
        path={PATH.HOME}
        element={<PublicRoute element={<WEB_PAGES.HOME.INDEX />} />}
      />
    </Routes>
  );
}

export default RouterConfig;
