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

// getAllDogs()

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

router.post('/dogs', async (req,res)=>{
    const {
        name,
        id,
        height,
        weight,
        bred,
        breedGroup,
        lifeSpan,
        origin,
        img,
        createInDb,
        temperament,
    } = req.body;

    const dogCreated = await Dog.create({
        name,
        height,
        weight,
        bred,
        breedGroup,
        lifeSpan,
        origin,
        img,
        createInDb,
        id
    })

    const temperamentDb = await Temperament.findAll({
        where:{
            name: temperament
        }
    })
    dogCreated.addTemperament(temperamentDb)
    res.send('Personaje creado con exito')
})

router.get('/temperaments', async(req,res)=>{
    const temperamentsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);
    // console.log(temperamentsApi)
    const temperaments = temperamentsApi.data.map(el => el.temperament);
    // console.log(temperaments)
    temperaments.forEach(el => {
        Temperament.findOrCreate({
            where: {name : el}
        })
        
    })

    
})

router.get('/dogs/:id', async (req,res)=>{
    const {id} = req.params;
    const totalDogs = await getAllDogs()
    if(id){
        let dogsId = await totalDogs.filter(el => el.id === id)
        dogsId.length ?
        res.status(200).json(dogsId):
        res.status(404).send('No encontre a ese dog')
    }
})




module.exports = router,getAllDogs;
