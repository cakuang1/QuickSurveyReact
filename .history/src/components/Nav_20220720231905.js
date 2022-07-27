import React,{useState} from "react";
import { NavLink } from "react-router-dom";



export default function Nav() {
    
    return (
        <div className="Nav"> 
        <div>
            <NavLink>
        </div>
            <ul>

                <li><NavLink to = "create">Create</NavLink></li>
                <li><NavLink to = "created">Surveys</NavLink></li>
            </ul>
        </div>
    )




}


