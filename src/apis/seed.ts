import request from "@/utils/request"

export const initialDB = () => {
    return request('/seed', 'GET', {})
}

export const migrateMongo = () => {
    return request('/migrate', 'GET', {})
}