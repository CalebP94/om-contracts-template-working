import React, { useEffect, useState} from "react";
import { useHistory } from "react-router";
import { useMap, GeoJSON } from 'react-leaflet'
import "./Map.css"
import GravityMains from "./GravityMain";
import data from "../data/gz_2010_us_outline_20m.json"

import geojsonGM from "../data/ssGravityMains_COC.geojson.json";
import L from "leaflet";

export default function Leaflet(){

    const map = useMap();
    const initialFormState = {
        type: "FeatureCollection"
    }
    const [gm, setGM] = useState(null);
    const [geom, setGeom] = useState(null);
    const [error, setError] = useState(null);
    //console.log(gm);
    useEffect(() => {
        fetch("http://localhost:5000/rootcontrol/map")
            .then(response =>{
                if(response.ok){
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                //console.log(data.data)
                return(data.data)
            })
            .then(parse =>{
                //console.log(parse)
                const geomParse = parse.map((i) => {
                    const geometry = JSON.parse(i.geom)
                    const obj= {
                        type:"Feature",
                        properties: {
                            id: i.id,
                            FACILITYID:i.FACILITYID,
                        },
                        geometry:{
                            type: geometry.type,
                            coordinates: geometry.coordinates
                        }
                    }
                    return obj
                })
                return geomParse;
            })
            .then(parsed => {
                console.log(parsed)
                setGM({
                    ...initialFormState,
                    features: parsed
                })
            })
            .catch(error => {
                console.log("Error fetching...")
                setError(error)
                console.log({error})
            })
    },[])
    let [gravitymains , setGravitymains] = useState(null);
    // useEffect(() => {
    //     let gravityMains = new L.GeoJSON(gm)
    //     //console.log(gravityMains)
    //     setGravitymains(gravityMains)
    //     console.log(gravitymains)
    //     gravityMains.addTo(map);
    // },[gm])

    // useEffect(() => {
    //     //console.log(gm)
    //     const abortController = new AbortController();
    //     async function loadGeom(){
    //         try{
    //             const response = await fetch("http://localhost:5000/rootcontrol/map",
    //             {signal: abortController.signal}
    //             );
    //             console.log("RESPONSE", response)
    //             const dataFromApi = await response.json();
    //             let arr = await dataFromApi.data;
    //             //console.log(arr)
    //             const parseGeom = await arr.map((i) =>{
    //                 const geometry = JSON.parse(i.geom)
    //                 const obj= {
    //                     "type":"Feature",
    //                     "properties": {
    //                         "id": i.id,
    //                         "FACILITYID":i.FACILITYID,
    //                     },
    //                     "geometry":{
    //                         "type": geometry.type,
    //                         "coordinates": geometry.coordinates
    //                     }
    //                 }
    //                 return obj
    //             })
    //             setGeom(parseGeom)
    //             console.log(geom)
    //             setGM(geom)
    //             console.log(gm)
    //             //console.log({geom})
    //         }
    //         catch(error){
    //             if (error.name === "AbortError") {
    //                 // Ignore `AbortError`
    //                 console.log("Aborted");
    //                 } else {
    //                 throw error;
    //                 }
    //         }
    //     }
    //     loadGeom();
    //     return () => abortController.abort();
    // },[]);

    // useEffect(() => {
    //     async function load(){
    //     if(geom){
    //         let arr = await geom
    //         let obj = await {...initialFormState, features:arr}
    //         setGM(obj);
    //         console.log(gm)
    //     }
    //     }
    //     load()
    //     //console.log({finalGM})
    //     //setGM(finalGM);
    //     console.log(gm)
    // },[geom])
    return (
        <div>
           {/* // <GeoJSON data={gm}/> */}
           <GravityMains gm={gm}/>
        </div>
    )
}