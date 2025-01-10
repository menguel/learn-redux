import axios from 'axios';

export const GET_USER = "GET_USER";

export const getUsers = () => {
    return (dispatch) => { // Dispatch est une fonction qui envoie l'action au réducteur
        return axios.get("http://localhost:3001/user").then((res) => {
            
            dispatch({ type: GET_USER, payload: res.data[0] });
        });
    };
};