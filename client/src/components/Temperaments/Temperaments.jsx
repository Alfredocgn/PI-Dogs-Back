import React, {useEffect,useState} from "react";
import { useSelector } from "react-redux";

export default function Temperaments({setForm}){
    const temperaments = useSelector((state)=>state.temperaments)
    const [actualTemps,setActualTemps]= useState([]);
    

    useEffect(()=>{
        setForm((prevForm)=>({
            ...prevForm,
            temperaments: actualTemps,
        }))
    },[actualTemps,setForm])
    
    return(
        <ul style={{
            overflowY : "scroll",
            maxHeight:"150px",
            listStyle:"none"
        }}>
            {temperaments.map((temperament)=>{
                return(
                    <li key={temperament.id}>
                        {temperament.name}
                        {!actualTemps.includes(temperament.id) ? (<button type="button" onClick={()=> setActualTemps([...actualTemps,temperament.id])}>Add</button>) : null}

                        {actualTemps.includes(temperament.id) ? (<button type="button" onClick={()=> setActualTemps(actualTemps.filter((tempt)=>tempt !== temperament.id))}>Remove
                        </button>) : null}
                    </li>
                )
            })}
        </ul>
    )


}