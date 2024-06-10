import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    name: string;
    avatar: string;
    token: string;
}

const initialState: UserState = {
    name: '',
    avatar: '',
    token: ''
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.avatar = action.payload.avatar;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            state.name = '';
            state.avatar = '';
            state.token = '';
        }
    }
})

export const { setUser, clearUser } = UserSlice.actions;