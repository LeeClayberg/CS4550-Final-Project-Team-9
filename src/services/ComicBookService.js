
const server = "http://localhost:8080/api";

const createComicBook = (comicBook) =>
    fetch(server + "/api/comic-books", {
        method: 'POST',
        body: JSON.stringify(comicBook),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteComicBook = (comicBookId) =>
    fetch(server + "/api/comic-books/" + comicBookId, {
        method: 'DELETE'
    })
        .then(response => response.json())

const findComicBookById = (comicBookId) =>
    fetch(server + "/api/comic-books/" + comicBookId)
        .then(response => response.json())

const findComicBooksForUser = (userId) =>
    fetch(server + "/users/" + userId + "/collection")
        .then(response => response.json())

const findComicBooksForUserSorted = (userId, sortBy) =>
    fetch(server + "/users/" + userId + "/collection?sort=" + sortBy)
        .then(response => response.json())

const findComicBooksForUserSortedSearch = (userId, sortBy, resource, query) =>
    fetch(server + "/users/" + userId + "/collection?sort=" + sortBy + "&resource=" + resource + "&query=" + query)
        .then(response => response.json())

export default {
    createComicBook,
    deleteComicBook,
    findComicBookById,
    findComicBooksForUser,
    findComicBooksForUserSorted,
    findComicBooksForUserSortedSearch
}