
const keys = ["609b66edd3d828492cadbe8b2cc825f2d712aaef", "971f0a256125594e6f379a72403456bfcc63ea88",
              "d4535690785075fdbe9edf27e73d8f2d6092a74f"];

const proxy = "https://cv-proxy.herokuapp.com/"

var searchApi = 0;
var issueApi = 0;
var issuesApi = 0;
var characterApi = 0;

const search = (content, page, amountPerPage) => {
    searchApi = (searchApi + 1) % keys.length;
    return fetch(proxy + "https://comicvine.gamespot.com/api/" +
                 "search/?api_key=" + keys[searchApi] + "&sortBy=name:asc" +
                 "&resources=issue&format=json&limit=" + amountPerPage + "&page=" + page + "&query=" + content)
        .then(response => response.json())}

const findIssueById = (id) => {
    issueApi = (issueApi + 1) % keys.length;
    return fetch(proxy + "https://comicvine.gamespot.com/api/issue/4000-" +
            id + "/?api_key=" + keys[issueApi] + "&format=json")
        .then(response => response.json())}

const findCharacterById = (id) => {
    characterApi = (characterApi + 1) % keys.length;
    return fetch(proxy + "https://comicvine.gamespot.com/api/character/4005-" +
                 id + "/?api_key=" + keys[characterApi] + "&format=json")
        .then(response => response.json())}

const findRelatedIssues = (issue) => {
    issuesApi = (issuesApi + 1) % keys.length;
    var json = JSON.parse(JSON.stringify(issue.cover_date))
    var date = new Date(json);
    var begin = new Date(json);
        begin.setFullYear(date.getFullYear() - 1);
    var end = new Date(json);
        end.setFullYear(date.getFullYear() + 1);
    return fetch(proxy + "https://comicvine.gamespot.com/api/issues/" +
                 "?api_key=" + keys[issuesApi] + "&format=json&limit=5&filter=volume:" +
                 issue.volume.id + ",cover_date:" + begin.toISOString().substring(0, 10) + "|" +
                 end.toISOString().substring(0, 10))
        .then(response => response.json())}

const findNextIssue = (issue) => {
    issuesApi = (issuesApi + 1) % keys.length;
    return fetch(proxy + "https://comicvine.gamespot.com/api/issues/" +
                 "?api_key=" + keys[issuesApi] + "&format=json&limit=1&filter=volume:" +
                 issue.volume.id + ",issue_number:" + (JSON.parse(issue.issue_number) + 1))
        .then(response => response.json())}

const findPrevIssue = (issue) => {
    issuesApi = (issuesApi + 1) % keys.length;
    return fetch(proxy + "https://comicvine.gamespot.com/api/issues/" +
                 "?api_key=" + keys[issuesApi] + "&format=json&limit=1&filter=volume:" +
                 issue.volume.id + ",issue_number:" + (issue.issue_number - 1))
        .then(response => response.json())}

const randomComics = () => {
    issuesApi = (issuesApi + 1) % keys.length;
    var current_date = new Date();
    return fetch(proxy + "https://comicvine.gamespot.com/api/issues/" +
                 "?api_key=" + keys[issuesApi] + "&format=json&limit=5&offset=" +
                 current_date.getMilliseconds() + "&filter=cover_date:1938-06-30|1941-06-06", {headers: { 'Content-Type': 'application/json' }})
            .then(response => response.json())}

const characterRelated = (content) => {
    searchApi = (searchApi + 1) % keys.length;
    return fetch(proxy + "https://comicvine.gamespot.com/api/" +
                 "search/?api_key=" + keys[searchApi] + "&sortBy=name:asc" +
                 "&resources=issue&format=json&limit=12&query=" + content)
        .then(response => response.json())}

export default {
    search,
    findIssueById,
    findCharacterById,
    findRelatedIssues,
    findNextIssue,
    findPrevIssue,
    randomComics,
    characterRelated
}