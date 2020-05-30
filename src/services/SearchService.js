
const search = (content, page, amountPerPage) => {
    return fetch("https://cv-proxy.herokuapp.com/https://comicvine.gamespot.com/api/" +
                 "search/?api_key=609b66edd3d828492cadbe8b2cc825f2d712aaef&sortBy=name:asc" +
                 "&resources=issue&format=json&limit=" + amountPerPage + "&page=" + page + "&query=" + content)
        .then(response => response.json())}

const findIssueById = (id) =>
    fetch("https://cv-proxy.herokuapp.com/https://comicvine.gamespot.com/api/issue/4000-" +
          id + "/?api_key=609b66edd3d828492cadbe8b2cc825f2d712aaef&format=json")
        .then(response => response.json())

const findRelatedIssues = (issue) => {
    var json = JSON.parse(JSON.stringify(issue.cover_date))
    var date = new Date(json);
    var begin = new Date(json);
        begin.setFullYear(date.getFullYear() - 1);
    var end = new Date(json);
        end.setFullYear(date.getFullYear() + 1);
    return fetch("https://cv-proxy.herokuapp.com/https://comicvine.gamespot.com/api/issues/" +
                 "?api_key=609b66edd3d828492cadbe8b2cc825f2d712aaef&format=json&limit=5&filter=volume:" +
                 issue.volume.id + ",cover_date:" + begin.toISOString().substring(0, 10) + "|" +
                 end.toISOString().substring(0, 10))
        .then(response => response.json())}

const findNextIssue = (issue) =>
    fetch("https://cv-proxy.herokuapp.com/https://comicvine.gamespot.com/api/issues/" +
                 "?api_key=609b66edd3d828492cadbe8b2cc825f2d712aaef&format=json&limit=1&filter=volume:" +
                 issue.volume.id + ",issue_number:" + (JSON.parse(issue.issue_number) + 1))
        .then(response => response.json())

const findPrevIssue = (issue) =>
    fetch("https://cv-proxy.herokuapp.com/https://comicvine.gamespot.com/api/issues/" +
                 "?api_key=609b66edd3d828492cadbe8b2cc825f2d712aaef&format=json&limit=1&filter=volume:" +
                 issue.volume.id + ",issue_number:" + (issue.issue_number - 1))
        .then(response => response.json())

const randomComics = () => {
    var current_date = new Date();
    return fetch("https://cv-proxy.herokuapp.com/https://comicvine.gamespot.com/api/issues/" +
                 "?api_key=609b66edd3d828492cadbe8b2cc825f2d712aaef&format=json&limit=5&offset=" +
                 current_date.getMilliseconds() + "&filter=cover_date:1938-06-30|1941-06-06")
            .then(response => response.json())}

export default {
    search,
    findIssueById,
    findRelatedIssues,
    findNextIssue,
    findPrevIssue,
    randomComics
}