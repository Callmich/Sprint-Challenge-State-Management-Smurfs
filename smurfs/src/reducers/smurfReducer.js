import { FETCH_DATA, UPDATE_VILLAGE, SET_ERROR, ADD_BLUE} from '../actions/smurfActions'

const initialState = {
    villageData: [],
    isFetchingData: false,
    error: ''
}

export const smurfReducer = (state=initialState, action) => {
    switch (action.type){
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                villiageData: []
            }
        case UPDATE_VILLAGE:
            return {
                ...state,
                villageData: action.payload,
                isFetchingData: false
            }
        case SET_ERROR:
            return{
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        case ADD_BLUE:
            // console.log("before add",villageData)
            return{
                ...state,
                villageData: [...state, action.payload]
            }
            
        default:
            return state;
    }
}