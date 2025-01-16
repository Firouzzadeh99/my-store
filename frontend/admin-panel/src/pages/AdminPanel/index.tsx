import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AdminHeader from "./components/Header";
import { adminRoutes } from "./_routes";
import ContentLoading from "@/components/ui/ContentLoading";

function AaminPanelRoutes() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="w-full p-3">
        <Suspense fallback={<ContentLoading />}>
          <Routes>
            {adminRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default AaminPanelRoutes;
