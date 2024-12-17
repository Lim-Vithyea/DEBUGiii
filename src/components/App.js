
import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Button from "./Button";
import Card from "./Card";
import Featurecard from "./Featurecard";

function App() {
  return (
  
    <div>
      <Navbar/>
      <Body/>
      <div className="flex gap-5 justify-center p-3">
        <Button name={"Get Started"} color="blue" border="" shadow="shadow"/>
        <Button name={"Learn More"} color="background" border="border" shadow="shadow"/>
      </div>
      <div>
        <Card/>
        <h1 className="text-center bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-bold pt-[20px] text-4xl">Feature</h1>
        <Featurecard/>
      </div>
    </div>
  );
}

export default App;
