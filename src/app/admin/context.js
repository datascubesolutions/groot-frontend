// @ts-nocheck
"use client";

import { createContext, useContext, useState } from "react";

const AdminContext = createContext({
  sidebarOpen: false,
  setSidebarOpen: () => {},
});

export function AdminProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AdminContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => useContext(AdminContext);
