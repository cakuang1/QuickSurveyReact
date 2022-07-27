import React,{useState} from "react";
import { NavLink } from "react-router-dom";





export default function Nav() {
    
    return (
        <div className="Nav"> 
            <ul>

                <li><NavLink to = "create"/></li>
                <li><NavLink to = "created"/></li>
            </ul>
        </div>




    )




}


