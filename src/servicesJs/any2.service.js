import { httpService } from '../basic/http.service'

const BASE_URL = (process.env.NODE_ENV === 'production')
    ? '/api/any2'
    : 'http://localhost:3030/api/any2/'

export const any2Service = {
    query,
    getById,
    remove,
    save,

}

async function query() {
    return httpService.get('any2')
}

async function getById(any2Id) {
    return await httpService.get(`any2/${any2Id}`)
}

async function remove(any2Id) {
    return httpService.delete(`any2/${any2Id}`)
}

async function save(any2) {
    if (any2._id) return httpService.put(`any2/${any2._id}`, any2)
    else return httpService.post('any2', any2)
}



