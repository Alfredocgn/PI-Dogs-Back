const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {YOUR_API_KEY} = process.env;
const axios = require('axios');
const {Dog , Temperament} = require('../db')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);
// console.log(apiUrl)
    const apiInfo = await apiUrl.data.map(el=>{
        return {
            name : el.name,
            img: el.image.url,
            bred: el.bred_for,
            breedGroup: el.breed_group,
            lifeSpan: el.life_span,
            height : el.height.metric,
            weight: el.weight.metric,
            temperament: el.temperament,
            origin: el.origin,


        }
    }); return apiInfo; 
    
};

// getApiInfo()

const getDbInfo = async () =>{
    return await Dog.findAll({
        include:{
            model:Temperament,
            attributes: ['name'],
            through:{
                attributes:[],
            }
        }
    })
}

const getAllDogs = async () =>{
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
    // console.log(infoTotal)
}

getAllDogs()

router.get('/dogs',async (req,res)=>{
    const {name} = req.query;
    let totalDogs = await getAllDogs();
    if(name){
        let dogName = await totalDogs.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
        dogName.length ?
        res.status(200).send(dogName) :
        res.status(404).send('No existe el dog')
    } else{
        res.status(200).send(totalDogs)
    }
})


module.exports = router,getAllDogs;
