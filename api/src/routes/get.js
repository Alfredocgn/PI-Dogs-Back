const {Router} = require('express');
const {getAllDogs} = require('./index');

const router = Router();

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


