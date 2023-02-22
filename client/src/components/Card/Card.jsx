import { Link } from "react-router-dom";
import style from "./Card.module.css"

const Card = ({img,name,weight,temperament,id})=>{
    const url = `/detail/${id}`
    return(
        <Link to={url}>
            <div className={style.card}>
                <p>Name:{name}</p>
                <p>Weight:{weight}</p>
                <p>Temperament:{temperament}</p>
                <img src={img} alt="imgDog" className={style.cardImage} />
            </div>
        </Link>
    )
}

export default Card;