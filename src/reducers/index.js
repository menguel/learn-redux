import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import postReducer from "./post.reducer";

// Ici c'est le fichier où l'on combine tout nos reducers (rootReducer)

export default combineReducers({
    // REDUCERS 
    userReducer,
    postReducer,
});