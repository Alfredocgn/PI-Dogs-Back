import Card from "../Card/Card"
import style from './CardsContainer.module.css'
import {useSelector} from 'react-redux'

const CardsContainer = () =>{

    const dogs = useSelector(state => state.dogs)

    // const dogs = [
    //     {
    //         "id": 1,
    //         "name": "Affenpinscher",
    //         "height": {
    //             "imperial": "9 - 11.5",
    //             "metric": "23 - 29"
    //         },
    //         "weight": {
    //             "imperial": "6 - 13",
    //             "metric": "3 - 6"
    //         },
    //         "lifeSpan": "10 - 12 years",
    //         "img": {
    //             "id": "BJa4kxc4X",
    //             "width": 1600,
    //             "height": 1199,
    //             "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
    //         },
    //         "created": false,
    //         "temp": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Afghan Hound",
    //         "height": {
    //             "imperial": "25 - 27",
    //             "metric": "64 - 69"
    //         },
    //         "weight": {
    //             "imperial": "50 - 60",
    //             "metric": "23 - 27"
    //         },
    //         "lifeSpan": "10 - 13 years",
    //         "img": {
    //             "id": "hMyT4CDXR",
    //             "width": 606,
    //             "height": 380,
    //             "url": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg"
    //         },
    //         "created": false,
    //         "temp": "Aloof, Clownish, Dignified, Independent, Happy"
    //     },
    //     {
    //         "id": 3,
    //         "name": "African Hunting Dog",
    //         "height": {
    //             "imperial": "30",
    //             "metric": "76"
    //         },
    //         "weight": {
    //             "imperial": "44 - 66",
    //             "metric": "20 - 30"
    //         },
    //         "lifeSpan": "11 years",
    //         "img": {
    //             "id": "rkiByec47",
    //             "width": 500,
    //             "height": 335,
    //             "url": "https://cdn2.thedogapi.com/images/rkiByec47.jpg"
    //         },
    //         "created": false,
    //         "temp": "Wild, Hardworking, Dutiful"
    //     },
    //     {
    //         "id": 4,
    //         "name": "Airedale Terrier",
    //         "height": {
    //             "imperial": "21 - 23",
    //             "metric": "53 - 58"
    //         },
    //         "weight": {
    //             "imperial": "40 - 65",
    //             "metric": "18 - 29"
    //         },
    //         "lifeSpan": "10 - 13 years",
    //         "img": {
    //             "id": "1-7cgoZSh",
    //             "width": 645,
    //             "height": 430,
    //             "url": "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg"
    //         },
    //         "created": false,
    //         "temp": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous"
    //     },
    //     {
    //         "id": 5,
    //         "name": "Akbash Dog",
    //         "height": {
    //             "imperial": "28 - 34",
    //             "metric": "71 - 86"
    //         },
    //         "weight": {
    //             "imperial": "90 - 120",
    //             "metric": "41 - 54"
    //         },
    //         "lifeSpan": "10 - 12 years",
    //         "img": {
    //             "id": "26pHT3Qk7",
    //             "width": 600,
    //             "height": 471,
    //             "url": "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg"
    //         },
    //         "created": false,
    //         "temp": "Loyal, Independent, Intelligent, Brave"
    //     },
    //     {
    //         "id": 6,
    //         "name": "Akita",
    //         "height": {
    //             "imperial": "24 - 28",
    //             "metric": "61 - 71"
    //         },
    //         "weight": {
    //             "imperial": "65 - 115",
    //             "metric": "29 - 52"
    //         },
    //         "lifeSpan": "10 - 14 years",
    //         "img": {
    //             "id": "BFRYBufpm",
    //             "width": 1280,
    //             "height": 853,
    //             "url": "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg"
    //         },
    //         "created": false,
    //         "temp": "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous"
    //     },
    //     {
    //         "id": 7,
    //         "name": "Alapaha Blue Blood Bulldog",
    //         "height": {
    //             "imperial": "18 - 24",
    //             "metric": "46 - 61"
    //         },
    //         "weight": {
    //             "imperial": "55 - 90",
    //             "metric": "25 - 41"
    //         },
    //         "lifeSpan": "12 - 13 years",
    //         "img": {
    //             "id": "33mJ-V3RX",
    //             "width": 1828,
    //             "height": 2065,
    //             "url": "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg"
    //         },
    //         "created": false,
    //         "temp": "Loving, Protective, Trainable, Dutiful, Responsible"
    //     },
    //     {
    //         "id": 8,
    //         "name": "Alaskan Husky",
    //         "height": {
    //             "imperial": "23 - 26",
    //             "metric": "58 - 66"
    //         },
    //         "weight": {
    //             "imperial": "38 - 50",
    //             "metric": "17 - 23"
    //         },
    //         "lifeSpan": "10 - 13 years",
    //         "img": {
    //             "id": "-HgpNnGXl",
    //             "width": 500,
    //             "height": 500,
    //             "url": "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg"
    //         },
    //         "created": false,
    //         "temp": "Friendly, Energetic, Loyal, Gentle, Confident"
    //     },
    //     {
    //         "id": 9,
    //         "name": "Alaskan Malamute",
    //         "height": {
    //             "imperial": "23 - 25",
    //             "metric": "58 - 64"
    //         },
    //         "weight": {
    //             "imperial": "65 - 100",
    //             "metric": "29 - 45"
    //         },
    //         "lifeSpan": "12 - 15 years",
    //         "img": {
    //             "id": "dW5UucTIW",
    //             "width": 1023,
    //             "height": 769,
    //             "url": "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg"
    //         },
    //         "created": false,
    //         "temp": "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful"
    //     }
    // ]
    return (
        <div className={style.container}>
            {dogs.map(dog => {
                return <Card
                    name={dog.name}
                    imagen={dog.img.id}
                    weight={dog.weight.metric}
                    temperament={dog.temp}
                />
            })}
        </div>
    )
}

export default CardsContainer;