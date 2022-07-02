

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

export default function Form(){
    const URL = `http://localhost:5000/rootcontrol/submission`
    const initialState = {
        DATA : "",
        GUARANTEE:"",
        ADDRESS: "",
        US_ID: "",
        DS_ID:"",
        FACILITYID:"",
        WETWEATHER:"",
        TEMP:"",
        PIPESIZE:"",
        LENGTHTREATED:"",
        RATE:"",
        AGENT:""
    }
    
    const [form, setFormData] = useState({...initialState});
    const [errors, setErrors] = useState(null);
    console.log(form)
    
    const handleChange = ({ target }) => {
        if(target.name === "LENGTH-TREATED" || target.name === "PIPE-SIZE"){
            setFormData({
                ...form,
                [target.name]: parseInt(target.value),
            })
        }else{
            setFormData({
                ...form,
                [target.name]: target.value,
            });
        }
    };
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            console.log("SUBMITTED", form)
            console.log("EVENT", event)
             try{
                 setErrors(null);
                 await axios.post(URL, {data:form});
             }
             catch(e){
                setErrors(e.response.data.error)
            }
        };
    
    return(
        <div>
            <form onSubmit={ handleSubmit } className="m-3">
            <div className="form-group"> 
                    <label htmlFor="DATA">Date:</label>
                        <input
                            id="DATA"
                            name="DATA"
                            type = "DATE"
                            onChange={handleChange}
                            required={true}
                            value={form.DATA}
                        />
                    
                    
                    <label htmlFor="GUARANTEE">GUARANTEE:</label>
                        <input
                            id="GUARANTEE"
                            name="GUARANTEE"
                            type="DATE"
                            onChange={handleChange}
                            required={true}
                            value={form.GUARANTEE}
                        />

                    
                    <label htmlFor="ADDRESS">ADDRESS:</label>
                        <input
                            id="ADDRESS"
                            name="ADDRESS"
                            type="string"
                            onChange={handleChange}
                            required={true}
                            value={form.ADDRESS}
                        />
                    
                    
                    <label htmlFor="US_ID">UPSTREAM:</label>
                        <input
                            id="US_ID"
                            name="US_ID"
                            type="string"
                            onChange={handleChange}
                            required={true}
                            value={form.US_ID}
                        />
                    
                    
                    <label htmlFor="DS_ID">DOWNSTREAM:</label>
                        <input
                            id="DS_ID"
                            name="DS_ID"
                            type="string"
                            onChange={handleChange}
                            required={true}
                            value={form.DS_ID}
                        />
                    
                    
                    <label htmlFor="FACILITYID">FACILITYID:</label>
                        <input
                            id="FACILITYID"
                            name="FACILITYID"
                            type="string"
                            onChange={handleChange}
                            required={true}
                            value={form.FACILITYID}
                        />
                    
                    
                    <label htmlFor="WETWEATHER">WET WEATHER:</label>
                        <input
                            id="WETWEATHER"
                            name="WETWEATHER"
                            type="string"
                            onChange={handleChange}
                            required={false}
                            value={form.WETWEATHER}
                        />
                    
                    
                    <label htmlFor="TEMP">TEMPERATURE:</label>
                        <input
                            id="TEMP"
                            name="TEMP"
                            type="string"
                            onChange={handleChange}
                            required={false}
                            value={form.TEMP}
                        />
                    
                    
                    <label htmlFor="PIPE-SIZE">PIPE SIZE:</label>
                        <input
                            id="PIPE-SIZE"
                            name="PIPESIZE"
                            type="integer"
                            onChange={handleChange}
                            required={true}
                            value={form.PIPESIZE}
                        />
                    
                    
                    <label htmlFor="LENGTHT-TREATED">LENGTH TREATED:</label>
                        <input
                            id="LENGTH-TREATED"
                            name="LENGTHTREATED"
                            type="integer"
                            onChange={handleChange}
                            required={true}
                            value={form.LENGTHTREATED}
                        />
                    
                    
                    <label htmlFor="RATE">RATE:</label>
                        <input
                            id="RATE"
                            name="RATE"
                            type="string"
                            onChange={handleChange}
                            required={true}
                            value={form.RATE}
                        />
                    
                    
                    <label htmlFor="AGENT">AGENT:</label>
                        <input
                            id="AGENT"
                            name="AGENT"
                            type="string"
                            onChange={handleChange}
                            required={true}
                            value={form.AGENT}
                        />
                    <button type="submit">Submit</button>
                </div>
                <hr/> 
            </form>
        </div>
    )
}