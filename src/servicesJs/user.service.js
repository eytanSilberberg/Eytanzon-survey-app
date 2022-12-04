import { asyncStorageService } from './basic/async-storage.service'
// import { httpService } from './basic/http.service'
// import { socketService, SOCKET_EVENT_USER_UPDATED } from './basic/socket.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
}

window.userService = userService


function getUsers() {
    return asyncStorageService.query('user')
    // return httpService.get(`user`)
}

async function getById(userId) {
    const user = await asyncStorageService.get('user', userId)
    // const user = await httpService.get(`user/${userId}`)
    // gWatchedUser = user;
    return user;
}
function remove(userId) {
    return asyncStorageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function update(user) {
    user = await asyncStorageService.put('user', user)
    // user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user;
}

async function login(userCred) {
    const users = await asyncStorageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    // return saveLocalUser(user)
    // const user = await httpService.post('auth/login', userCred)
    if (user) {
        // socketService.login(user._id)
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    // userCred.score = 10000;
    const user = await asyncStorageService.post('user', userCred)
    // const user = await httpService.post('auth/signup', userCred)
    // socketService.login(user._id)
    return saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.logout()
    // return await httpService.post('auth/logout')
}



function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

