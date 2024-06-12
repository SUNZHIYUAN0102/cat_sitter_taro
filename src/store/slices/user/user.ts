import { ClientDto } from "@/apis/client";
import { createSlice } from "@reduxjs/toolkit";
import Taro from "@tarojs/taro";

interface UserState {
    email: string;
    name: string;
    avatar: string;
    token: string;
}

let user = Taro.getStorageSync('user');

const initialState: UserState = {
    email: user.email,
    name: user.name,
    avatar: user.avatar,
    token: user.token
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.avatar = action.payload.avatar;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            state.email = '';
            state.name = '';
            state.avatar = '';
            state.token = '';
        }
    }
})

export const { setUser, clearUser } = UserSlice.actions;