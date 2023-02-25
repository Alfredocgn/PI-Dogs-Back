import {  useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../components/DefaultLayout/DefaultLayout";
import { getTemperaments } from "../../redux/actions";
import validate from "../../components/Validator/validate";

import style from "./Form.module.css"
const axios = require('axios')



const Form = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTemperaments());
    },[dispatch])
    const temperaments = useSelector((state)=>state.temperaments)
    


    console.log (temperaments)
    const [form,setForm] = useState({
        name:"",
        height:"",
        weight:"",
        lifeSpan:"",
        temperaments:""
    })

    const [error,setError] = useState({
        name:"",
        height:"",
        weight:"",
        lifeSpan:"",

    })

    const changeHandler = (e) =>{
        const prop = e.target.name;
        const value = e.target.value;
        // console.log(prop)
        // console.log(value)

        validate({...form,[prop]:value},error,setError);
        setForm({...form,[prop]:value});
        // console.log(form)



    }

    const submitHandler= ((e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/dogs",form).then(res=>alert(res)).catch(err=>alert(err))
    })

    return (
        <DefaultLayout>
            <form className={style.Form} onSubmit={submitHandler}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={form.name} onChange={changeHandler} name="name"  />
                    {error.name && <span>{error.name}</span>}
                </div>
                <div>
                    <label>Height: </label>
                    <input type="text" value={form.height} onChange={changeHandler} name="height" />
                </div>
                <div>
                    <label>Weight: </label>
                    <input type="text" value={form.weight} onChange={changeHandler} name="weight"/>
                </div>
                <div>
                    <label>Life Span: </label>
                    <input type="text" value={form.lifeSpan} onChange={changeHandler} name="lifeSpan"/>
                </div>
                <div>
                    <label>Temperaments: </label>
                    <select name="temperaments" id="temps" multiple>
                        
                        <option>Temp 2</option>
                        <option>Temp 3</option>
                        <option>Temp 4</option>
                        <option>Temp 5</option>
                    </select>
                </div>
                <button type="submit">Create</button>

            </form>
        </DefaultLayout>
        
    )
}

export default Form;