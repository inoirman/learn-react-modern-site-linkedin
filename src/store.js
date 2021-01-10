import {createStore, combinateReducers } from 'redux';

const reducers = {}

const rootReducer = combinateReducers(reducers);

export const configureStore = () => createStore(rootReducer);