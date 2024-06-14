import request from "@/utils/request"


export const getReport1 = () => {
    return request("/reports/reportServices", 'GET', {})
}

export const getReport2 = () => {
    return request("/reports/reportSitters", 'GET', {})
}