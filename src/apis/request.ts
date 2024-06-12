import request from "@/utils/request"
import { CatDto } from "./cat"
import { ServiceDto } from "./service"
import { SitterDto } from "@/pages/requestDetail"

export interface ServiceRequestDto {
    requestDate: string,
    price: number,
    catids: Array<string>,
    serviceids: Array<string>
}

export interface ServiceResponseDto {
    cats: Array<CatDto>,
    date: string
    message: string,
    price: number,
    requestid: string,
    services: Array<ServiceDto>,
    sitters: Array<SitterDto>
    status: string
}

export const getServiceRequest = (id: string) => {
    return request(`/requests/${id}`, 'GET', {})
}

export const postServiceRequest = (data: ServiceRequestDto) => {
    return request('/requests', 'POST', data)
}