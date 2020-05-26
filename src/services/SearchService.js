
const search = (content, page) =>
    fetch("/search/?api_key=609b66edd3d828492cadbe8b2cc825f2d712aaef&sortBy=name:asc" +
          "&resources=issue&format=json&limit=24&page=" + page + "&query=" + content, {mode: 'cors'})
        .then(response => response.json())

export default {
    search
}