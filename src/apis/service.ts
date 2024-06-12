import request from "@/utils/request";

export interface ServiceDto {
    id: string,
    name: string,
    description: string,
    image: string,
    price: number
}

export const getServices = () => {
    return request('/services', 'GET', {})
}