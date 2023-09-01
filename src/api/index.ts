


import axios from 'axios'
import { AxiosHeaders } from 'axios'


const defaultHeaders = {
    'content-type': 'application/json',
    'uuid': new Date().getTime()
}

export const get = async <T>(url: string, headers?: AxiosHeaders) => {
    const response = await axios.get<T>(url, {headers: {...defaultHeaders, ...headers}})
    return response.data
}