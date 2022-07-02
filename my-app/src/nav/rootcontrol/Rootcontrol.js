import React, { useEffect, useState } from "react";
import SideBar from "./SideBar"
import BottomNav from "../BottomNav";
import RootPayApp from "./payapp/RootPayApp";
import Form from "./form/Form"
import Mapper from "./map/Map"
import { BrowserRouter, Routes, Route, Link, uesRouteMatch} from "react-router-dom";
import "../Layout.css";

function Rootcontrol(){
    return (
    <>
    <main className="'container">
        <section className ="d-flex flex-row justify-content-around">
            <div className="d-flex flex-column">
                <div className="side-bar h-300 m-3 rounded">
                    <SideBar/>
                    <BottomNav />
                </div>
                <div className="side-bar m-3 rounded">
                    <SideBar />
                </div>
            </div>
            
            <Routes>
                <Route path="table" element={<RootPayApp/>}/>
                <Route path="map" element={<Mapper/>}/>
                <Route path="submission" element= {<Form/>}/>
            </Routes>
        </section>
    </main>
    </>
    )
}

export default Rootcontrol;