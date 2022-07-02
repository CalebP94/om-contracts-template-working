import React, { useEffect, useState} from "react";
import { useHistory } from "react-router";
import { useMap, GeoJSON } from 'react-leaflet'
import "./Map.css"
import data from "../data/gz_2010_us_outline_20m.json"

import geojsonGM from "../data/ssGravityMains_COC.geojson.json";
import L from "leaflet";

export default function GravityMains({gm}){
    console.log(gm)
    return (
        <GeoJSON data={gm} style={() => ({
            color: '#4a83ec',
            weight: 4,
            fillColor: "#1a1d62",
            fillOpacity: 1,
           })}/>
    )
}