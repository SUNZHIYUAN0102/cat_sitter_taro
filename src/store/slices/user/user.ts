import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    name: string;
    avatar: string;
    token: string;
}

const initialState: UserState = {
    name: 'littleyuanyuan',
    avatar: 'https://picsum.photos/id/1/40/40',
    token: '123'
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})