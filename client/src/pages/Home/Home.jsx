import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs} from "../../redux/actions";

const Home = ()=>{
    //1) que se monte, hacer dispatch 
    //se monta con useEffect() manejamos el ciclo de vida del componente
    //que haga el dispatch con useDispatch()

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDogs());
    },[dispatch])


    return(
        <>
        <h1> Esta es la vista Home</h1>
        <CardsContainer/>
        </>
    )
}

export default Home;