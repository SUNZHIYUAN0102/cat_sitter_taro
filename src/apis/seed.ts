import request from "@/utils/request"

export const initialDB = () => {
    return request('/seed', 'GET', {})
}