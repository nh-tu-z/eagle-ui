import axios, { AxiosInstance } from 'axios'

// TODO - default url might need to be initialized in config file
const defaultUrl = ""
export const getBaseUrl = (api = defaultUrl): string => {
    return api ? api.replace(/\/$/, '') : ''; // Remove the last character if it's "/"
}

// TODO - inspect the lifecyle of 'store'
let store: any
export const injectStore = (_store: any): void => {
    store = _store
}

const axiosInstance = (): AxiosInstance => {
    const instance = axios.create({
        baseURL: getBaseUrl()
    })

    // TODO - interceptor for request and response might be implemented 
    instance.interceptors.request.use( 
        config => {

        // TODO - adding something before request is sent

        return config
        },
        err => Promise.reject(err)
    )

    instance.interceptors.response.use(
        res => {
            
            // TODO - do someting with the respose data

            return res
        },
        err => Promise.reject(err) 
    )

    return instance
}

export default axiosInstance