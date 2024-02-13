import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    value: AuthState;
}

type AuthState = {
    isAuth: boolean,
    email: string,
    username: string,
    uid: string,
    avatarUrl: string,
    isModerator: boolean
}

type LoginPayload = {
    email: string,
    username: string,
    uid: string,
    avatarUrl: string
}

const initialState = {
    value: {
        isAuth: false,
        email: "",
        uid: "",
        isModerator: false,
    } as AuthState
} as InitialState

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        logIn: (state, action: PayloadAction<LoginPayload>) => {
            return {
                value: {
                    isAuth: true,
                    email: action.payload.email,
                    username: action.payload.username,
                    uid: action.payload.uid,
                    avatarUrl: action.payload.avatarUrl,
                    isModerator: false
                }
            }
        }
    }
})

export const { logIn, logOut } = auth.actions;

export const selectUser = (state: InitialState) => state.value.email;

export default auth.reducer;
