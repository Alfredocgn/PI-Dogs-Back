import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import style from "./Landing.module.css"



const Landing = ()=>{
    return (
        <div className={style.LandingContainer}>
        <Carousel autoPlay={true} />
        <h1 className={style.LandingTitle}>Find your best friend with one click...</h1>
        <Link className={style.HomeLink} to="/home">Home</Link>        
        </div>
    )
}

export default Landing;