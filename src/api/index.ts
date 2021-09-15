import axios, {AxiosInstance, AxiosPromise} from "axios";

const axiosInstance: AxiosInstance = axios.create();

export const get = (url: string, payload = {}): AxiosPromise => {
    return axiosInstance({
        method: "get",
        url,
        data: payload
    })
}

export const post = (url: string, payload = {}): AxiosPromise => {
    return axiosInstance({
        method: "post",
        url,
        data: payload
    })
}