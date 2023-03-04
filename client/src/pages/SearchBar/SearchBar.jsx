import React from "react";
import style from "./SearchBar.module.css"

const SearchBar = ({
    placeholder,
    setSearchValue,
    searchValue,
    filterType

}) =>{
   


    return(
        <div className={style.Search}>
            <input 
            type="text" 
            placeholder={placeholder} 
            onChange={(e)=>setSearchValue(e.target.value.toLowerCase())} />
            <button onClick={()=>setSearchValue("")}>Clear</button>

        </div>

    )
}

export default SearchBar;