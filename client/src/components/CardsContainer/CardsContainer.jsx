import Card from "../Card/Card"
import style from './CardsContainer.module.css'
import { useState } from "react"
import {useSelector} from 'react-redux'
import SetPages from "../SetPages/SetPages"
import Filters from "../Filters/Filters"
import SearchBar from "../../pages/SearchBar/SearchBar"

const DOGS_PER_PAGE = 8;

const CardsContainer = () =>{

    const dogs = useSelector((state) => state.dogs)
    
    //FILTER
    const [searchValue,setSearchValue]=useState("");
    const [filterType,setFilterType]=useState("name")
    const filteredDogs = dogs.filter((dog)=>  {
        if(filterType === "name"){
            return dog.name.toLowerCase().startsWith(searchValue);
        }else if(filterType === "temperament"){
            return dog.temp && dog.temp.toLowerCase().includes(searchValue);
        }else {return Object.hasOwn(dog,"createInDb")}
        
    });

    //SORTING

    const [sortingType,setSortingType] = useState("nameAscendant");

    const sortFunction =(a,b)=>{
        if(sortingType === "nameAscendant"){
            return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
        }else if (sortingType === "nameDescendant"){
            return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
        }else if (sortingType === "weightAscendant"){
            const firstNumberOfWeighta = parseInt(a.weight.substring(0,2));
            const firstNumberOfWeightb = parseInt(b.weight.substring(0,2))
            return firstNumberOfWeighta < firstNumberOfWeightb ? -1 : 1 ;
        }else if (sortingType === "weightDescendant"){
            const firstNumberOfWeighta = parseInt(a.weight.substring(0,2));
            const firstNumberOfWeightb = parseInt(b.weight.substring(0,2))
            return firstNumberOfWeighta < firstNumberOfWeightb ? 1 : -1 ;
            
        }
    }



    //PAGINATION
    const [currentPage,setCurrentPage] = useState(1);
    const indexOfLastDog = currentPage * DOGS_PER_PAGE;
    const indexOfFirstDog = indexOfLastDog - DOGS_PER_PAGE;
    const currentDogs = filteredDogs
    .sort(sortFunction)
    .slice(indexOfFirstDog,indexOfLastDog);
        
    const paging = (pageNumber)=>{
            setCurrentPage(pageNumber)
        }
    

    return (
        
        <>{filterType === "createInDb" ? null : (<SearchBar 
            placeholder="Enter a value..." 
            setSearchValue={setSearchValue}
            value = {searchValue}
            filterType ={filterType}
            setCurrentPage={setCurrentPage}
            />)}

        <Filters 
        setSortingType={setSortingType} 
        setFilterType={setFilterType}
        sortingType={sortingType}
        />
        <SetPages       
        dogsPerPage = {DOGS_PER_PAGE}
        filteredDogs = {filteredDogs}
        paging = {paging}
        currentPage={currentPage}

        />

            <div className={style.container}>
                {currentDogs.map(dog => {
                    return (
                    <Card
                        key ={dog.id}
                        name={dog.name}
                        weight={dog.weight}
                        temperament={dog.temp || dog.temperaments}
                        height={dog.height}
                        id ={dog.id}
                        img={dog.img ? dog.img.url : "No image"}
                        
                    />);
                })}
            </div>
        </>
    )
}

export default CardsContainer;

