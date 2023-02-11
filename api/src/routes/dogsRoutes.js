const {Router} = require('express');
const {getAllDogs} = require('./index');

const dogsRoutes = Router();

dogsRoutes.get('/dogs',async (req,res)=>{
    const {name} = req.query;
    let totalDogs = await getAllDogs();
    if(name){
        let dogName = await totalDogs.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
        dogName.length ?
        res.status(200).send(dogName) :
        res.status(404).send('No existe esa raza')
    } else{
        res.status(200).send(totalDogs)
    }
})


dogsRoutes.post('/dogs', async (req,res) =>{
    
})


module.exports = dogsRoutes;

