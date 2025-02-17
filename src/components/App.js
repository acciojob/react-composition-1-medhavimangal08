import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  let [tab, showCurrentTab] = useState("Tab 1");
  function showTab(e) {
    showCurrentTab(e.target.innerHTML);
  }
  return (
    <div>
      <h1 style={{ textDecoration: "underLine", fontWeight: "normal" }}>
        Output:
      </h1>
      <ul>
        <li onClick={showTab}>Tab 1</li>
        <li onClick={showTab}>Tab 2</li>
        <li onClick={showTab}>Tab 3</li>
      </ul>
      <p>This is the content for {tab}.</p>
    </div>
  );
};

export default App;
