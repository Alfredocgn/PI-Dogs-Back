
const {YOUR_API_KEY} = process.env;

export const GET_DOGS = "GET_DOGS"
export const GET_DOG = "GET_DOG"


export const getDogs = () =>{
    return async function(dispatch) {
        const apiData = fetch(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);
        
        const dogs = apiData.data;
        dispatch({ type: GET_DOGS, payload:dogs });


    }
}

export const getDog = (id) =>{
    return async function (dispatch){
        const apiData = fetch(`https://api.thedogapi.com/v1/breeds/${id}`);
        const dog = apiData.data;
        dispatch({type: GET_DOG, payload:dog })
    }
}