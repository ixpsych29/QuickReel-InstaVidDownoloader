// Navbar.jsx

import React from "react";

function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <TabItem
              tabName="Instagram"
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
            <TabItem
              tabName="Facebook"
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
            <TabItem
              tabName="TikTok"
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

function TabItem({ tabName, setActiveTab, activeTab }) {
  return (
    <button
      className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
        activeTab === tabName ? "bg-gray-900" : "hover:bg-gray-700"
      }`}
      onClick={() => setActiveTab(tabName)}>
      {tabName}
    </button>
  );
}

export default Navbar;
