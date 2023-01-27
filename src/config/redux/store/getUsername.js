import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const getUsername = createSlice({
    name: "getUsername",
    initialState,
    reducers: {
        getData(state, action) {
            return {
                ...state,
                data: action.payload
            }
        }
    }
})

export const { getData } = getUsername.actions

export default getUsername.reducer