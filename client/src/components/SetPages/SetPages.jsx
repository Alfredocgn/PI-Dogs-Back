import React from "react";
import style from "./SetPages.module.css"

export default function SetPages ({
    dogsPerPage,
    filteredDogs,
    paging,
    currentPage
    }){
    const pageNumbers = [];

    for (let i = 1; i<= Math.ceil(filteredDogs.length/dogsPerPage);i++){
        pageNumbers.push(i)
    }
    return(
        <nav className={style.pagination}>
            <ul className={style.paginationUl}>
                {pageNumbers.map(number =>{
                    return(
                    <li className={style.paginationList} key={number}>                      
                        <button className={style.paginationButton} onClick={()=> paging(number)}
                        style={{backgroundColor: currentPage === number && "green",
                        }}
                        >
                            {number}
                        </button>
                        
                    </li>)

                })}
            </ul>
        </nav>
    )

}

