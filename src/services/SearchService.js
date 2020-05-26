
const search = (content, offset) =>
    fetch("https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/search/?api_key=609b66edd3d828492cadbe8b2cc825f2d712aaef&sort=name:asc" +
          "&resources=issue&format=jsonp&offset=" + offset + "&query=" + content, {mode: 'cors'})
        .then(response => response.json())

export default {
    search
}