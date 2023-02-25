


    const validate = (form,error,setError) =>{
        if(/^[A-Za-z]+$/.test(form.name)){
            setError({...error,name:""})
        }else{
            setError({...error,name:"Formato de nombre invalido"})
        }if(form.name === ""){setError({error,name:"Campo vacio"})}
            }

export default validate ;