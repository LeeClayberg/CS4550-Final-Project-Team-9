
const server = "http://localhost:8080/api";

const findRecentHistory = () =>
    fetch(server + "/history/recent")
        .then(response => response.json())

export default {
    findRecentHistory
}