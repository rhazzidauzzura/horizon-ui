import React from "react";
import { Routes, Route, Navigate, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store";
import ProtectedRoute from "auth/protectedRoute";
import router from "routers";

// import RtlLayout from "layouts/rtl";
// import AdminLayout from "layouts/admin";
// import AuthLayout from "layouts/auth";
// import ProjectDetail from "layouts/detail-project";
// import ListMasterData from "layouts/master-data";
// import FormMasterData from "layouts/master-data/form";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={
            <AdminLayout />
        //   <ProtectedRoute>
        // </ProtectedRoute>
      } />
        <Route path="rtl/*" element={<RtlLayout />} />
        <Route path="list/*" element={
          <ListMasterData />
        //   <ProtectedRoute>
        // </ProtectedRoute>
      } />
        <Route path="form/*" element={<FormMasterData />} />
        <Route path="project/*" element={<ProjectDetail />} />
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes> */}
    </Provider>
  );
};

export default App;
