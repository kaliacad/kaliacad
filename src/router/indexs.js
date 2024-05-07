import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRouters, PublicRouters } from "./DataRouter";
import ProtectRoutes from "./ProtectRouter";

export default function indexs() {
  return (
    <Routes>
      <Route>
        {
          /**
           * definition de route publics
           */
          PublicRouters.map((e) => (
            <Route
              path={e.path}
              element={e.component}
              //   exact={e.exact}
            />
          ))
        }
      </Route>

      <Route element={<ProtectRoutes />}>
        {
          /**
           * definition de route private
           */
          PrivateRouters.map((e) => (
            <Route path={e.path} element={e.component} />
          ))
        }
      </Route>
    </Routes>
  );
}
