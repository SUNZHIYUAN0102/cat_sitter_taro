import request from "@/utils/request"

export const getOrder = (orderId: string) => {
    return request(`/orders/${orderId}`, 'GET', {})
}

export const postOrder = ({ requestid, sitterid }) => {
    return request('/orders', 'POST', { requestid, sitterid })
}