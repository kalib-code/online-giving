import React from "react";
import MainScreen from "./screens/MainScreen"


function App() {
  return (
    <div className=" flex container mx-auto justify-center h-screen items-center">
    <div className="items-center justify-center border-1 shadow-lg border-gray-100 p-3.5 md:w-1/2 h-auto content-between w-4/5">
      <div className=" flex flex-col w-full items-center justify-center ">
        <img className=" w-40 h-40" src="./image/destiny.jpg"/>
        <h1>Destiny City Church</h1>
        </div>
      
      <MainScreen />
    </div>
    </div>
  );
}

export default App;
