import dogUp from '../../public/img/DogUp.jpeg'
import style from "./CardDetail.module.css"


const CardDetail = ({name,img,temperament,height,weight,lifeSpan}) =>{
    return(
        <div className={style.CardDetail}>
            <p className={style.DetailTemp}>Name:{name}</p>
            <p className={style.DetailTemp}>Height:{height && (height.metric || height)} cm</p>
            <p className={style.DetailTemp}>Weight:{weight && (weight.metric || weight)} kg</p>
            <p className={style.DetailTemp}>LifeSpan:{lifeSpan}</p>
            <p className={style.DetailTemp}>  {" "}Temperaments: {Array.isArray(temperament) ? temperament.reduce((prev,temp)=>{
                return `${prev} ${temp.name},`;
            }, "") : temperament}
            </p>
            <img src={img.includes("undefined") ? dogUp : img } alt="imgDogDetail" className={style.CardDetailImage}/>
            {console.log(img)}      
        </div>

    )
}


export default CardDetail;