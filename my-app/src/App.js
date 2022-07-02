import React from "react";
import { BrowserRouter, Routes, Route, Link, uesRouteMatch} from "react-router-dom";

import Home from "./nav/Home";
import BottomNav from "./nav/BottomNav";
import RootControl from "./nav/rootcontrol/Rootcontrol"
import RootPayApp from "./nav/rootcontrol/payapp/RootPayApp"
// import Routes from "./nav/Routes"

/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="rootcontrol/*" element={<RootControl />}/>
      </Routes>
    </BrowserRouter>
    // <div> 
    //   <BottomNav />
    // </div>
    
  );
}

export default App;
