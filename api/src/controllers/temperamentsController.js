const {Temperament} = require('../db');
const axios = require('axios')
const {YOUR_API_KEY} = process.env;

const getTemp = async () =>{    
const getTemperamentsRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)).data
// console.log(getTemperamentsRaw)
const getTemperaments = getTemperamentsRaw.map(el => el.temperament)
// console.log(getTemperaments)


const finalTemperaments = getTemperaments.reduce((prev,actual)=>{
    if(actual){
    actual.split(',').forEach(el => prev.push(el.trim()))}
    return prev
},[])

// console.log(finalTemperaments)

const cleanTemperaments = new Set(finalTemperaments);
console.log
const resultTemperaments = [...cleanTemperaments];
console.log(resultTemperaments);

resultTemperaments.forEach( async (temp) => { 
    await Temperament.create({
        name : temp,
    }
)
    
});
}

module.exports ={getTemp};