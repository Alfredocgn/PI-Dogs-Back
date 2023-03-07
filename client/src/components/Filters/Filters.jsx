
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
        <div className={style.Filters}>

            <div className={style.RadioButtonContainer}>
            <input 
            type="radio" 
            name="sort" 
            onChange={handleOnChange} 
            value={"nameAscendant"}
            checked = {sortingType === "nameAscendant" && true} />
            <label 
            htmlFor="AlphaneticalCheckBox"
            className={style.FiltersLabel}
            >Alphabetical Order A-Z</label>
            </div>
            <div className={style.RadioButtonContainer}>
            <input 
            type="radio" 
            name="sort" 
            value={"nameDescendant"} 
            onChange={handleOnChange}
            />
            <label 
            htmlFor="AlphaneticalCheckBox"
            className={style.FiltersLabel}
            >Alphabetical Order Z-A</label>                
            </div>

            <div className={style.RadioButtonContainer}>
            <input 
            type="radio" 
            name="sort" 
            value={"weightAscendant"} 
            onChange={handleOnChange}
            />
            <label 
            htmlFor="WeightCheckBox"
            className={style.FiltersLabel}
            >Order by Weight Min to Max </label>
            </div>

            <div className={style.RadioButtonContainer}>
            <input 
            type="radio" 
            name="sort" 
            value={"weightDescendant"} 
            onChange={handleOnChange}
            />
            <label 
            htmlFor="WeightCheckBox"
            className={style.FiltersLabel}
            >Order by Weight Max to Min</label>
            </div>
            
            <div className={style.RadioButtonContainer}>
            <input 
            type="radio" 
            name="search" 
            value="Name" 
            onChange={handleOnChangeSearchBar}/>
            <label 
            htmlFor="Searchbar"
            className={style.FiltersLabel}            
            >Name</label>
            </div>
            <div className={style.RadioButtonContainer}>
            <input 
            type="radio" 
            name="search" 
            value="Temperament" 
            onChange={handleOnChangeSearchBar}/>
            <label 
            htmlFor="Searchbar"
            className={style.FiltersLabel}
            >Temperament</label>
            </div>
            <div className={style.RadioButtonContainer}>
            <input 
            type="radio" 
            name="search" 
            value={"dbDogs"} 
            onChange={handleOnChangeSearchBar}/>
            <label 
            htmlFor="DbCheckBox"
            className={style.FiltersLabel}
            >Created Dogs</label>
            </div>


        </div>

    )

}

export default Filters;