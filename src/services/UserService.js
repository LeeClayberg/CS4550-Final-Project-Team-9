
const server = "https://wbdv-generic-server.herokuapp.com/api/001458299/comicstack"

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
        .then(response => response.json())

const findUserById = (userId) =>
    fetch(server + "/users/" + userId)
        .then(response => response.json())

const findAllUsers = () =>
    fetch(server + "/users")
        .then(response => response.json())

export default {
    createUser,
    updateUser,
    deleteUser,
    findUserById,
    findAllUsers
}