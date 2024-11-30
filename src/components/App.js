
import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Button from "./Button";

function App() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <div className="flex gap-5 justify-center p-3">
        <Button name={"Get Started"} color="blue" border="border"/>
        <Button name={"Learn More"} color="background" border="border"/>
      </div>
    </div>
  );
}

export default App;
