import { GET_DOG, GET_DOGS, GET_TEMPERAMENTS } from "./actions";

const initialState = {
    dogs:[],
    dog:{},
    temperaments:[]

};

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_DOGS:
            return{...state,dogs:action.payload}
        case GET_DOG:
            return{...state, dog:action.payload}
        case GET_TEMPERAMENTS:
            return{...state, temperaments:action.payload}
        default:
            return{...state};
    }
}

export default rootReducer;