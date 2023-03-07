import React from "react";
import style from "./SetPages.module.css"

export default function SetPages ({
    dogsPerPage,
    filteredDogs,
    paging,
    currentPage,
    }){
    const pageNumbers = [];

    for (let i = 1; i<= Math.ceil(filteredDogs.length/dogsPerPage);i++){
        pageNumbers.push(i)
    }
    return(
        <nav className={style.pagination}>

            <ul className={style.paginationUl}>
                <button className={style.paginationFBButton} onClick={()=> paging(currentPage !== 1 ? 1 : currentPage)}>{"<<"}</button>
                <button className={style.paginationFBButton} onClick ={()=> paging(currentPage === 1 ? 1 : currentPage - 1)}>{"<"}</button> 
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
                <button className={style.paginationFBButton} onClick ={()=> paging(currentPage === pageNumbers.length ? pageNumbers.length : currentPage+ 1)}>{">"}</button> 
                <button className={style.paginationFBButton} onClick={()=> paging(currentPage !== pageNumbers.length ? pageNumbers.length : currentPage)}>{">>"}</button>
            </ul>
        </nav>
    )

}

