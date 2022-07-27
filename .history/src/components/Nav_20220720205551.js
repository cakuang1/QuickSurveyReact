import React,{useState} from "react";


const Button = ({type}) => {
    return (
        <button className={type}>{type}</button>
    )


}



export default function Nav() {
    
    return (
        <div className="Nav"> 
            <ul>
                <li><Button type={"Create"}/></li>
                <li><Button type={"Created Surveys"}/></li>
                <li><Button type={""}/></li>

            </ul>
        </div>




    )




}


