
const server = "https://comicstack.herokuapp.com/api";

const findRecentHistory = () =>
    fetch(server + "/history/recent")
        .then(response => response.json())

export default {
    findRecentHistory
}