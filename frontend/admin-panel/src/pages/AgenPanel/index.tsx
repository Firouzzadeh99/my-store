// src/pages/AdminDashboard/index.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterDoc from "./RegisterDoc";

function AgentPanel() {
  return (
    <Routes>
      <Route index element={<RegisterDoc />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}

export default AgentPanel;
