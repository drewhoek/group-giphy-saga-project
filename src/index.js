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
    yield takeEvery("GET_FAVORITES", getFavorites);
    yield takeEvery("GET_CATEGORIES", getCategories);
    yield takeEvery("SEARCH_GIF", gifForm);
    yield takeEvery("ADD_FAVORITE", addFavorite);
    yield takeEvery("UPDATE_CATEGORY", updateCategory);
}

function* updateCategory(action) {
    try {
        yield axios.put(`/api/favorite/${action.payload.id}`, {
            category_id: action.payload.category_id
        });
        yield put({
            type: "GET_FAVORITES",
            payload: action.payload,
        });
    } catch (err) {
        console.log("Error in updating favorite category", err);
    }
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
    console.log("in gifForm", action);
    try {
        console.log("this is the action", action);
        const response = yield axios.post(`/api/search`, { data: action.payload });
        yield put({
            type: "GIF_RED",
            payload: response.data,
        });
    } catch (err) {
        console.log("ERROR IN ", err);
    }
}

function* getFavorites(action) {
    try {
        const response = yield axios.get("/api/favorite");
        yield put({ type: "FETCH_FAVORITES", payload: response.data });
        console.log("response in getfavorites", response.data);
    } catch (error) {
        console.log("error in getFavorites", error);
    }
}

function* addFavorite(action) {
    const newFavorite = {
        name: action.payload.name,
        url: action.payload.url,
    };
    console.log(newFavorite);
    try {
        console.log("this is the action", action);
        yield axios.post(`/api/favorite`, newFavorite);
        yield put({
            type: "SET_FAVORITES",
            payload: newFavorite,
        });
    } catch (err) {
        console.log("ERROR IN ", err);
    }
}

function categoryReducer(state = [], action) {
    if (action.type === "SET_CATEGORIES") {
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
    switch (action.type) {
        case "FETCH_FAVORITES":
            return action.payload;
        case "SET_FAVORITES":
            return [...state, action.payload];
        default:
            return state;
    }
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
