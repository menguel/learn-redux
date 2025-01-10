import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import { createRoot } from "react-dom/client";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"
import { getPosts } from "./actions/post.actions";
import { getUsers } from "./actions/user.action";

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

store.dispatch(getPosts());
store.dispatch(getUsers());
const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

