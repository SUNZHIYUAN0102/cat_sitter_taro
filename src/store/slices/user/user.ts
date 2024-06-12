import { ClientDto } from "@/apis/client";
import { createSlice } from "@reduxjs/toolkit";
import Taro from "@tarojs/taro";

interface UserState {
    name: string;
    avatar: string;
    token: string;
}

let user = Taro.getStorageSync('user');

const initialState: UserState = {
    name: user.name,
    avatar: user.avatar,
    token: user.token
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