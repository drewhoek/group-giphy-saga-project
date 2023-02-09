import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
//import { put, takeEvery } from 'redux-saga/effects';
import createSagaMiddleware from "redux-saga";
//import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
//import logger from 'redux-logger';


const middleWareSaga = createSagaMiddleware();

function* rootSaga() {

}

//Reducer


//Redux store
// const store = createStore(
//     combineReducers({

//     }),
//     applyMiddleware(logger, middleWareSaga),
// );
middleWareSaga.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.getElementById('root'));
//registerServiceWorker();
