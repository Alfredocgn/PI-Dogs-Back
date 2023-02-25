import React from "react";

export default function SetPages (dogsPerPage,dogs,paging){
    const pageNumbers = [];

    for (let i = 0; i<= Math.ceil(dogs/dogsPerPage);i++){
        pageNumbers.push(i+1)
    }
    return(
        <nav>
            <ul >
                {pageNumbers && 
                pageNumbers.map(number =>{
                    // console.log(number)
                    return(
                    <li> 
                        HOLA                       
                        <a onClick={()=> paging(number)}>{number}hola</a>
                        
                    </li>)

                })}
            </ul>
        </nav>
    )

}

