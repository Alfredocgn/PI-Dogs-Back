
import style from "./Filters.module.css"



const  Filters = ({setSortingType,setFilterType,sortingType}) =>{



    const handleOnChange = (e) =>{

        setSortingType(e.target.value)        
    }

    const handleOnChangeSearchBar = (e)=>{
        if(e.target.checked && e.target.value === "Name")
        {return setFilterType("name")}
        else if(e.target.checked && e.target.value === "Temperament"){
            return setFilterType("temperament")
        }else return setFilterType("createInDb")
        
    }





    return(
        <div className={style.filters}>

            <input 
            type="radio" 
            name="sort" 
            onChange={handleOnChange} 
            value={"nameAscendant"}
            checked = {sortingType === "nameAscendant" && true} />
            <label htmlFor="AlphaneticalCheckBox">Alphabetical Order A-Z</label>
            <input 
            type="radio" 
            name="sort" 
            value={"nameDescendant"} 
            onChange={handleOnChange}
            />
            <label htmlFor="AlphaneticalCheckBox">Alphabetical Order Z-A</label>
            <input 
            type="radio" 
            name="sort" 
            value={"weightAscendant"} 
            onChange={handleOnChange}
            />
            <label htmlFor="WeightCheckBox">Order by Weight Min to Max </label>
            <input 
            type="radio" 
            name="sort" 
            value={"weightDescendant"} 
            onChange={handleOnChange}
            />
            <label htmlFor="WeightCheckBox">Order by Weight Max to Min</label>

            
            
            <input type="radio" name="search" value="Name" onChange={handleOnChangeSearchBar}/>
            <label htmlFor="Searchbar">Name</label>
            <input type="radio" name="search" value="Temperament" onChange={handleOnChangeSearchBar}/>
            <label htmlFor="Searchbar">Temperament</label>
            <input type="radio" name="search" value={"dbDogs"} onChange={handleOnChangeSearchBar}/>
            <label htmlFor="DbCheckBox">Created Dogs</label>

        </div>

    )

}

export default Filters;