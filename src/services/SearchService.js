
const search = (content, offset) =>
    fetch("/search/?api_key=609b66edd3d828492cadbe8b2cc825f2d712aaef&sort=name:asc" +
          "&resources=issue&format=json&offset=" + offset + "&query=" + content, {mode: 'cors'})
        .then(response => response.json())

export default {
    search
}