
const server = "http://localhost:8080/api";

const createComicBook = (comicBook) =>
    fetch(server + "/comic-books", {
        method: 'POST',
        body: JSON.stringify(comicBook),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const updateComicBook = (comicBookId, comicBook) =>
    fetch(server + "/comic-books/" + comicBookId, {
        method: 'PUT',
        body: JSON.stringify(comicBook),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteComicBook = (comicBookId) =>
    fetch(server + "/comic-books/" + comicBookId, {
        method: 'DELETE'
    })

const findComicBookById = (comicBookId) =>
    fetch(server + "/comic-books/" + comicBookId)
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
    updateComicBook,
    deleteComicBook,
    findComicBookById,
    findComicBooksForUser,
    findComicBooksForUserSorted,
    findComicBooksForUserSortedSearch
}