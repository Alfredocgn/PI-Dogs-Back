import {  useEffect, useState } from "react";
import {  useDispatch } from "react-redux";
import DefaultLayout from "../../components/DefaultLayout/DefaultLayout";
import { getTemperaments } from "../../redux/actions";
import validate from "../../components/Validator/validate";
import Input from "../../components/Input/Input"
import Temperaments from "../../components/Temperaments/Temperaments";

import style from "./Form.module.css"
import axios from "axios";



const Form = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTemperaments());
    },[dispatch])

    const [successSubmit,setSuccessSubmit]=useState(false);



    const [form,setForm] = useState({
        name: undefined,
        minHeight: undefined,
        maxHeight: undefined,
        minWeight: undefined,
        maxWeight: undefined,
        minLifeSpan: undefined,
        maxLifeSpan: undefined,
        temperaments: [],

    })

    const [error,setError] = useState({
        name: undefined,
        minHeight: undefined,
        maxHeight: undefined,
        minWeight: undefined,
        maxWeight: undefined,
        minLifeSpan: undefined,
        maxLifeSpan: undefined,
        temperaments: undefined,

    })

    const changeHandler = (e) =>{
        const prop = e.target.name;
        const value = e.target.value;


        validate({[prop]:value},error,setError,form);
        setForm({...form,[prop]:value});




    }

    const submitHandler= ((e) => {
        e.preventDefault()
        if(Object.values(error).every((el)=>el=== undefined)){
            const formData = {
                name:form.name,
                height: `${form.minHeight} - ${form.maxHeight}`,
                weight: `${form.minWeight} - ${form.maxWeight}`,
                lifeSpan: `${form.minLifeSpan} - ${form.maxLifeSpan}`,
                temperaments: form.temperaments,

            };
            axios
            .post("http://localhost:3001/dogs",form)
            .then(res=>alert(res))
            .catch(err=>alert(err))
        }else {
            alert("Can't Submit");
        }
    })

    return (
            <DefaultLayout>
            <div className={style.Form}>
            <div className={style.FormContainer}>
                {successSubmit ? (
                <p>Exito</p>
                ) : (
                <form onSubmit={submitHandler}>
                    <Input
                    name="name"
                    label="Name: "
                    value={form.name}
                    onChange={changeHandler}
                    error={error.name}
                    type="text"
                    />
                    <div className={style.FormController}>
                    <Input
                        name="minWeight"
                        label="Min weight: "
                        value={form.minWeight}
                        onChange={changeHandler}
                        error={error.minWeight}
                        type="number"
                    />
                    <Input
                        name="maxWeight"
                        label="Max weight: "
                        value={form.maxWeight}
                        onChange={changeHandler}
                        error={error.maxWeight}
                        type="number"
                    />
                    </div>
                    <div className={style.FormController}>
                    <Input
                        name="minHeight"
                        label="Min height: "
                        value={form.minHeight}
                        onChange={changeHandler}
                        error={error.minHeight}
                        type="number"
                    />
                    <Input
                        name="maxHeight"
                        label="Max height: "
                        value={form.maxHeight}
                        onChange={changeHandler}
                        error={error.maxHeight}
                        type="number"
                    />
                    </div>
                    <div className={style.FormController}>
                    <Input
                        name="minLifeSpan"
                        label="Min lifeSpan: "
                        value={form.minLifeSpan}
                        onChange={changeHandler}
                        error={error.minLifeSpan}
                        type="number"
                    />
                    <Input
                        name="maxLifeSpan"
                        label="Max lifeSpan: "
                        value={form.maxLifeSpan}
                        onChange={changeHandler}
                        error={error.maxLifeSpan}
                        type="number"
                    />
                    </div>
    
                    <div>
                    <label className={style.FormLabel}>Temperaments: </label>
                    <Temperaments setForm={setForm} setError={setError} />
                    {error && <span>{error.temperaments}</span>}
                    </div>
                    <button className={style.CreateButton} type="submit">
                    Create
                    </button>
                </form>
                )}
            </div>
            </div>
        </DefaultLayout>

        
    )
}

export default Form;