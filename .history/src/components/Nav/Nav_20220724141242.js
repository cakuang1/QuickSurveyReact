import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { AppBar,Toolbar } from "@mui/material";
import './nav.css'




const function 

export default function Nav() {
    
    return (
        <div className="Nav"> 
            <ul>
                <li className="nav"><NavLink to = "/">Home</NavLink></li>
                <li className="nav"><NavLink to = "create">Create</NavLink></li>
                <li className="nav"><NavLink to = "created">Surveys</NavLink></li>
                <li className="nav"><NavLink to = "login">Login/Register</NavLink></li>
            </ul>
        </div>
    )




}


