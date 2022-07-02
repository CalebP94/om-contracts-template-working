import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router";
import { MapContainer, Map, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet'
import "./Map.css"
import Leaflet from "./Leaflet"


export default function Mapper(){

///const mapRef = useRef();

// useEffect(() => {
//     console.log(mapRef)
//     //const { current={} }=mapRef
//     //console.log(current);
//     //const {leafletElement: map} = current;
// }, [mapRef])


    return (
            <MapContainer center={[34.0007, -81.0348]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
                {/* {gm.map(g => (
                    <Polyline 
                        key= {g.id}
                        position={[g.geom]}
                        pathOptions={limeOptions}>
                        
                    </Polyline>
                    )
                )} */}
                <div>
                <Leaflet />
                </div>
            </MapContainer>


    )
}