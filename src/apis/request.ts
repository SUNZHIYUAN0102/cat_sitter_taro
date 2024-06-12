import request from "@/utils/request"

export interface ServiceRequestDto {
    requestDate: string,
    price: number,
    catids: Array<string>,
    serviceids: Array<string>
}

export const getServiceRequest = (id: string) => {
    return request('/requests', 'GET', { id })
}

export const postServiceRequest = (data: ServiceRequestDto) => {
    return request('/requests', 'POST', data)
}