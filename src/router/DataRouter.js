import React from 'react';
import NotFoundPage from "../pages/404";
import HomeGolobal from "../pages/HomePage/HomeGolobal";
import Albums from '../pages/Albums';
import Contacter from '../pages/Contacter';


export const PrivateRouters=[
    {path:"",component: "",},
];

export const PublicRouters=[
    {path:"/",component: <HomeGolobal />,},
    {path:"/album",component: <Albums />,},
    { path: "/contacter", component: <Contacter /> },
    { path: "/error", component: <NotFoundPage /> },
]