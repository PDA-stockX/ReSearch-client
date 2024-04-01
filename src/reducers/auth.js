import {createSlice} from "@reduxjs/toolkit";
import {getAuthContext} from "~/utils/persist.js";

const initialState = {
    authContext: getAuthContext(),
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        authenticate: (state, action) => {
            if (action.payload.token === null) {
                state.authContext = {
                    isAuthenticated: false,
                    token: null,
                    user: null,
                };
                return;
            }
            state.authContext = {
                isAuthenticated: true,
                token: action.payload.token,
                user: {
                    id: action.payload.id,
                    email: action.payload.email,
                    nickname: action.payload.nickname,
                },
            };
        },
    },
});

export const {authenticate} = authSlice.actions;
export default authSlice.reducer;
