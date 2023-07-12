import axios from 'axios'
// import {useEffect, useState} from "react";

const API_URL = 'localhost:8080/auth/register'

let axiosInstance = axios.create({
    baseURL: API_URL,
})
// const [data, setData] =useState<string>();
// useEffect(() => {
//     getInfo(API_URL).then(value => {
//         console.log(value)
//     });
// }, );


function configAxios() {
    axiosInstance = axios.create({
        baseURL: API_URL,
    })
}

function getHeaders() {
    const token = 'Token get from Store'
    return {
        Authorization: token && `Token ${token}`,
    }
}

export function post( url:string, data:any, headers = true) {
    configAxios()
    return axiosInstance({
        method: 'POST',
        url,
        data,
        headers: headers ? getHeaders() : {},
    })
}

export function del(url:string) {
    configAxios()
    return axiosInstance({
        method: 'DELETE',
        url,
        headers: getHeaders(),
    })
}


export async function getInfo(url:string) {
//    updateAxios()
    const { data } = await axiosInstance({
        method: 'GET',
        url,
        headers: getHeaders(),
    })
    return data.data;
}

export function patch(url:string, data:any) {
    configAxios()
    return axiosInstance({
        method: 'PATCH',
        url,
        data,
        headers: getHeaders(),
    })
}