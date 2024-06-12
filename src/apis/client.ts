import request from "@/utils/request"


export interface ClientDto {
    message: string,
    clientId: string,
    username: string,
    avatar: string,
    bonuses: string
}

export const signIn = async ({ email, password }) => {
    return request('/login', 'POST', { email, password })
}