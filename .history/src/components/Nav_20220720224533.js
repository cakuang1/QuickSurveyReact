import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";





export default function Nav() {
    
    return (
        <div className="Nav"> 
            <ul>
                <li><Link to = "create">Create</NavLink></li>
                <li><NavLink to = "created">Surveys</NavLink></li>
            </ul>
        </div>
    )




}


