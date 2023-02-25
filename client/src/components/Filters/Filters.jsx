import { useDispatch } from "react-redux";
import { filterDogsByCreated } from "../../redux/actions";


const  Filters = () =>{
    const dispatch = useDispatch()

    function handleFilterCreated(e){
        console.log(e)
        dispatch(filterDogsByCreated(e.target.value))

    }

    return(
        <div>
            <select onChange={e => handleFilterCreated(e)}>
                <option value="All">All</option>
                <option value="true">Created</option>
                <option value="false">Api</option>
            </select>
            <select>
                <option value="Temperaments">Temperaments</option>
            </select>
            <select>
                <option value="Alphabetic">Ordenar Alfabeticamente</option>
                <option value="Weight">Ordenar por Peso</option>
            </select>

        </div>

    )

}

export default Filters;