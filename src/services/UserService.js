
const server = "http://localhost:8080/api";

const createUser = (user) =>
    fetch(server + "/users", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const updateUser = (userId, user) =>
    fetch(server + "/users/" + userId, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteUser = (userId) =>
    fetch(server + "/users/" + userId, {
        method: 'DELETE'
    })

const findUserById = (userId) =>
    fetch(server + "/users/" + userId)
        .then(response => response.json())

const findAllUsers = () =>
    fetch(server + "/users")
        .then(response => response.json())

const findIdFromLogin = (username, password) =>
    fetch(server + "/users/login/" + username + "/" + password)
        .then((res) => res.text())
        .then((text) => text.length ? JSON.parse(text) : {})

const findUserHistory = () =>
    fetch(server + "/users/history")
        .then(response => response.json())

export default {
    createUser,
    updateUser,
    deleteUser,
    findUserById,
    findAllUsers,
    findIdFromLogin,
    findUserHistory
}