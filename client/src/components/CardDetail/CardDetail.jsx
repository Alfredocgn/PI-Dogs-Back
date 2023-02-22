
import style from "./CardDetail.module.css"


const CardDetail = ({name,img,temperament,height,weight,lifeSpan}) =>{
    return(
        <div className={style.CardDetail}>
            <p>Name:{name}</p>
            {/* <p>Height:{height}</p>
            <p>Weight:{weight}</p> */}
            <p>LifeSpan:{lifeSpan}</p>
            <p>Temperaments:{temperament}</p>
            <img src={img} alt="imgDogDetail" className={style.CardDetailImage}/>      
        </div>

    )
}

export default CardDetail;