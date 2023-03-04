
import style from "./CardDetail.module.css"


const CardDetail = ({name,img,temperament,height,weight,lifeSpan}) =>{
    return(
        <div className={style.CardDetail}>
            <p className={style.DetailTemp}>Name:{name}</p>
            <p className={style.DetailTemp}>Height:{height && height.metric} cm</p>
            <p className={style.DetailTemp}>Weight:{weight && weight.metric} kg</p>
            <p className={style.DetailTemp}>LifeSpan:{lifeSpan}</p>
            <p className={style.DetailTemp}>  Temperaments: {Array.isArray(temperament) ? "ami" : temperament}
            </p>
            <img src={img} alt="imgDogDetail" className={style.CardDetailImage}/>      
        </div>

    )
}

export default CardDetail;