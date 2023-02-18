import style from "./Card.module.css"

const Card = (props)=>{
    return(
        <div className={style.card}>
            <p>Name:{props.name}</p>
            <p>Image:{props.image}</p>
            <p>Weight:{props.weight}</p>
            <p>Temperament:{props.temperament}</p>
        </div>
    )
}

export default Card;