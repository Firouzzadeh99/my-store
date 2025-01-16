import React from "react";

export const adminRoutes = [
  { path: "/", element: React.lazy(() => import("./Dashboard")) },
  { path: "/users", element: React.lazy(() => import("./User")) },
];
