import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const getGithubApiSlice = createSlice({
    name: "getApi",
    initialState,
    reducers: {
        getData(state, action){
            return {
                ...state,
                data: action.payload
            }
        }
    }
})

export const { getData } = getGithubApiSlice.actions

export default getGithubApiSlice.reducer