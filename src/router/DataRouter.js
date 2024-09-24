import React from "react";
import NotFoundPage from "../pages/404";
import HomeGolobal from "../pages/HomePage/HomeGolobal";
import Albums from "../pages/album";
import Contacter from "../pages/contacter";
import Blogs from "../pages/blogs";
import PublieOfre from "../pages/publieoffre";
import Scholarship from "../pages/scholarship";
import Tutorials from "../pages/tutorials";
// import Article from "../pages/article";

export const PrivateRouters = [{ path: "", component: "" }];

export const PublicRouters = [
  { path: "/", component: <HomeGolobal /> },
  { path: "/album", component: <Albums /> },
  { path: "/contacter", component: <Contacter /> },
  { path: "/blogs", component: <Blogs /> },
  { path: "/publieoffre", component: <PublieOfre /> },
  { path: "/error", component: <NotFoundPage /> },
  { path: "/scholarship", component: <Scholarship /> },
  { path: "/tutorials", component: <Tutorials /> },
  // { path: `/article/${id}`, component: <Article /> },
];
