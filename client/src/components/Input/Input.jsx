import React from "react";

export default function Input({label,name,error,value,onChange,type}){
    return(
        <div>
            <label>{label}</label>
            <input type={type} value={value} onChange ={onChange} name={name}/>
            {error && <span>{error}</span>}
        </div>
    )
}