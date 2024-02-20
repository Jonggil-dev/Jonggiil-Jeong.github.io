// MainLayout.js
import React from "react";

const BrowserLayout = ({ children }) => {
  return (
    <div className="font-sans bg-gray-50 min-w-[1024px] mx-auto overflow-auto">
      {children}
    </div>
  );
};

export default BrowserLayout;
