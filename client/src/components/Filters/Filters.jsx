
import style from "./Filters.module.css"



const  Filters = ({setSortingType,setFilterType}) =>{


    const handleOnChange = (e) =>{
        console.log(e.target.checked)
        console.log(e.target.name)
        console.log(e.target.value)
        if(e.target.checked && e.target.value === "aToZ"){
        return setSortingType("nameAscendant")
        }else if(e.target.checked && e.target.value === "zToA"){
            return setSortingType("nameDescendant")
        }else if (e.target.checked && e.target.value === "minWeight"){
            return setSortingType("weightAscendant")

        }else if (e.target.checked && e.target.value === "maxWeight") {
            return setSortingType("weightDescendant")
        }
        
    }

    const handleOnChangeSearchBar = (e)=>{
        if(e.target.checked && e.target.value === "Name")
        {return setFilterType("name")}
        else if(e.target.checked && e.target.value === "Temperament"){
            return setFilterType("temperament")
        }else if(e.target.checked && e.target.value === "dbDogs"){
            return setFilterType("createInDb")
        }
    }





    return(
        <div className={style.filters}>
            <input type="radio" name="sort" onChange={handleOnChange} value={"aToZ"} />
            <label htmlFor="AlphaneticalCheckBox">Alphabetical Order A-Z</label>
            <input type="radio" name="sort" value={"zToA"} onChange={handleOnChange}/>
            <label htmlFor="AlphaneticalCheckBox">Alphabetical Order Z-A</label>
            <input type="radio" name="sort" value={"minWeight"} onChange={handleOnChange}/>
            <label htmlFor="WeightCheckBox">Order by Weight Min to Max </label>
            <input type="radio" name="sort" value={"maxWeight"} onChange={handleOnChange}/>
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