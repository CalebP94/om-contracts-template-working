import React, { useEffect, useState } from "react";

import { useHistory } from "react-router";
import SideBar from "../SideBar";
import TableDisplay from "./RootControlTableDisplay";


function RootPayApp(){
    
    const URL = `http://localhost:5000`

    console.log("URL", URL)
    const [rootControlWork, setrootControlWork] = useState([]);
    //patern to populate variable with fetch from api in react... 
    useEffect(() => {
            
            const abortController = new AbortController(); // Create a new `AbortController`
            async function loadRootControl(){
                try{
                    const response = await fetch(`${URL}/rootcontrol/table`,
                    {signal: abortController.signal}
                    );

                    const dataFromApi = await response.json();
                    setrootControlWork(dataFromApi.data);
        
                }
                catch (error) {
                    if (error.name === "AbortError") {
                    // Ignore `AbortError`
                    console.log("Aborted");
                    } else {
                    throw error;
                    }
                }  
            }
        loadRootControl()
        return () => {
            console.log("cleanup");
            abortController.abort(); // Cancels any pending request or response
        };
    },[]);

    console.log("RC", rootControlWork)


    return (
        <>
        {/* <div className="container-fluid">
            <div className="row h-100">
                <div className="col-lg-2 side-bar">
                    <SideBar/>
                </div>
            </div>
        </div> */}
        <div className="overscroll">
            <table className="table content-table">
                <thead>
                    <tr>
                        <th scope="col">Facility ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Guarantee</th>
                        {/* <th scope="col">Length Treated</th> */}
                        <th scope="col">Rate</th>
                        <th scope="col">Cost</th>
                    </tr>
                </thead>
                {rootControlWork.map((rc)=> (
                <TableDisplay key={rc.object_id} table={rc}/>)
                )}
            </table>
        </div>
        </>
    );

}

export default RootPayApp;