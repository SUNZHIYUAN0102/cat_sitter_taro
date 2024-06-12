import request from "@/utils/request"

export interface CatDto {
    id: string,
    name: string,
    age: number,
    photo: string,
}

export const getCats = (mail: string) => {
    return request('/cats', 'POST', { mail })
}