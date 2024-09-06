import { Route, Routes as ReactRouterRoutes, Navigate } from "react-router-dom";
import uris from "./uris";
import { HomeScreen, LoginScreen } from "../pages";

export default function Router() {
  return (
    <ReactRouterRoutes>
      <Route path={uris.login} element={<LoginScreen />} />
      <Route path={uris.home} element={<HomeScreen />} />

      {/* <Route path="*" element={<PageNotFoundScreen />}/> */}
      <Route path="/" element={<Navigate to={uris.home} replace />} />
    </ReactRouterRoutes>
  );
}
