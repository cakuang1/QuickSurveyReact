import React,{useState} from "react";
import { NavLink } from "react-router-dom";



export default function Nav() {
    
    return (
        <div className="Nav"> 
            <ul>
                <li className="title"><NavLink to = "/">Home</NavLink></li>
                <li><NavLink to = "create">Create</NavLink></li>
                <li><NavLink to = "created">Surveys</NavLink></li>
                <li><NavLink to = "login">Surveys</NavLink></li>
            </ul>
        </div>
    )




}


