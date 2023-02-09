import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { put, takeEvery } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const middleWareSaga = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery("GET_CATEGORIES", getCategories);
    yield takeEvery("SEARCH_GIF", gifForm);
}
function* getCategories(action) {
    try {
        const results = yield axios.get("/api/category");
        yield put({
            type: "GET_CATEGORIES",
            payload: results.data,
        });
    } catch (err) {
        console.log("Error in getCategories", err);
    }
}

function* gifForm(action) {
    try {
        console.log("this is the action", action);
        const response = yield axios.post(`/api/search`, { data: action.payload });
        yield put({
            type: "GIF_RED",
            payload: response.data
        });
    } catch (err) {
        console.log("ERROR IN ", err);
    }
}

function categoryReducer(state = [], action) {
    if (action.type === "GET_CATEGORIES") {
        return action.payload;
    }
    return state;
}

function gifReducer(state = [], action) {
    if (action.type === "GIF_RED") {
        return action.payload;
    }
    return state;
}

function favoriteReducer(state = [], action) {
    if (action.type === "GET_FAVORITES") {
        return action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers({
        gifReducer,
        categories: categoryReducer,
        favorites: favoriteReducer,
    }),
    applyMiddleware(logger, middleWareSaga)
);
middleWareSaga.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
