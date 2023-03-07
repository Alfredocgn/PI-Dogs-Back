import { Link } from "react-router-dom"
import style from "./SuccesCard.module.css"

const SuccesCard = () =>{
    return(
        <div className={style.SuccessCardContainer}>
        <h3>Your dog have been created succesfully!</h3>
        <Link className={style.HomeLink} to="/home">HOME</Link>
        </div>
    )
}

export default SuccesCard;