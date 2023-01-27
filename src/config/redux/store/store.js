import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import getApi from './getGithubApiSlice';

const combineReducer = combineReducers({
    getApi,
});

export const makeStore = () =>
    configureStore({
        reducer: combineReducer,
    });

export const wrapper = createWrapper(makeStore);