import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios'

enum METHOD {
    GET = 'get',
    POST = 'post',
    PATCH = 'patch',
    PUT = 'put',
    DELETE = 'delete'
}

const getDefaultHeader = (
    token: string | null,
    method: string | undefined
): AxiosRequestHeaders => ({
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type':
                method === METHOD.PATCH
                ? 'application/json-patch+json'
                : 'application/json'
})

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
 
    instance.interceptors.request.use( 
        config => {
            let token /* dummy */
            // token will be got in store redux
            // const { token } = store.getState().user.auth
            if(false/* token */) {
                config.headers = {
                    ...config.headers,
                    ...getDefaultHeader(token, config.method)
                }
            }

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