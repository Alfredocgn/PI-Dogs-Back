// const {Router} = require('express');
// const {getAllDogs} = require('./index');

// const dogsRouter = Router();

// dogsRouter.get('/',async (req,res)=>{
//     const {name} = req.query;
//     let totalDogs = await getAllDogs();
//     if(name){
//         let dogName = await totalDogs.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
//         dogName.length ?
//         res.status(200).send(dogName) :
//         res.status(404).send('No existe esa raza')
//     } else{
//         res.status(200).send(totalDogs)
//     }
// })


// dogsRouter.get('/:id', (req,res)=>{
//     res.status(200).send("Detalle del usuario")
// })

// dogsRouter.post('/',(req,res)=>{
//     res.status(200).send('Voy a crear un perro')
// })





// module.exports = {dogsRouter};

