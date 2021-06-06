import React from "react";
import MainScreen from "./screens/MainScreen"


function App() {
  return (
    <div className="grid center">
    <div className="ui raised very padded text container segment column twelve wide">
      <h2 className="ui header">Online Giving</h2>
      <MainScreen />
     
    </div>
    </div>
  );
}

export default App;
