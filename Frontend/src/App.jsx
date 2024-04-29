// App.jsx (Parent Component)

import React, { useState } from "react";
import Navbar from "./Components/navbar";
import TikTok from "./Components/tiktokk";
import Instagram from "./Components/instagram";
import Facebook from "./Components/facebook";

function App() {
  const [activeTab, setActiveTab] = useState("Instagram");

  // Function to get the tool name based on the active tab
  const getToolName = () => {
    switch (activeTab) {
      case "Instagram":
        return "Instagram";
      case "Facebook":
        return "Facebook";
      case "TikTok":
        return "TikTok";
      default:
        return "";
    }
  };

  return (
    <div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Pass toolName as a prop to the active component */}
      {activeTab === "Instagram" && <Instagram toolName={getToolName()} />}
      {activeTab === "Facebook" && <Facebook toolName={getToolName()} />}
      {activeTab === "TikTok" && <TikTok toolName={getToolName()} />}
    </div>
  );
}

export default App;
