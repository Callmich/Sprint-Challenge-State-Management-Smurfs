import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_VILLAGE = "UPDATE_VILLAGE";
export const SET_ERROR = 'SET_ERROR';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            console.log('AxiosCall', response.data)
            dispatch({ type: UPDATE_VILLAGE, payload: response.data})
        })
        .catch(error => {
            console.log('We got ourselves a little blue problem', error)
            dispatch({ type: SET_ERROR, payload: "The Smurfs are hiding - check your AXIOS call"})
        })
}