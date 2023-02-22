import Card from "../Card/Card"
import style from './CardsContainer.module.css'
import {useSelector} from 'react-redux'

const CardsContainer = () =>{

    const dogs = useSelector((state) => state.dogs)
    // console.log(dogs)

    return (
        <div className={style.container}>
            {dogs.map(dog => {
                return (<Card
                    key ={dog.id}
                    name={dog.name}
                    weight={dog.weight.metric}
                    temperament={dog.temp}
                    id ={dog.id}
                    img={dog.img ? dog.img.url : "No image"}
                />);
            })}
        </div>
    )
}

export default CardsContainer;

