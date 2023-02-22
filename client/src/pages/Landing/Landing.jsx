import { Link } from "react-router-dom";
import style from "./Landing.module.css"


const Landing = ()=>{
    return (
        <>
        <h1>Esta es la vista Landing</h1>
        <img src="../Rona.jpeg"  alt="Rona" className={style.homeImage}/>
        <Link to="/home">Home</Link>
        </>
    )
}

export default Landing;