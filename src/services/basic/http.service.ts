import Axios from 'axios'
import { Survey } from '../../data/survey'
import { AxiosError } from 'axios'
import { RegisteredVote } from '../../cmps/vote/voting-platform'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/survey/'
    : 'http://localhost:3030/api/'


var axios = Axios.create({
    withCredentials: true
})

type Data = Survey | Survey[] | null | RegisteredVote
interface Err {
    response: {
        status: number
    }
}



export const httpService = {
    get(endpoint: string, data = null) {

        return ajax(endpoint, 'GET', data)
    },
    post(endpoint: string, data: Survey) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint: string, data: Data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint: string, data: Data) {
        return ajax(endpoint, 'DELETE', data)
    },
    patch(endpoint: string, data: Data) {
        return ajax(endpoint, 'PATCH', data)
    }
}

async function ajax(endpoint: string, method = 'GET', data: Data) {
    console.log(data);

    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params: (method === 'GET' || method === 'PATCH') ? data : null
        })
        return res.data
    } catch (error) {
        const err = error as AxiosError
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
        console.dir(err)
        if (err.response && err.response.status === 401) {
            // sessionStorage.clear()
            // window.location.assign('/')
        }
        throw err
    }
}