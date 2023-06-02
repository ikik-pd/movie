/*
 * File       : main.js
 * Author     : 김선익
 *
 * SUMMARY:
 * 1) TMDP API
 * 2) BUTTON
 */

/* **************************************** *
 * TMDP API
 * **************************************** */

const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzNhYWVkN2JmYmYwMmZkNzA3MjVlYWY0YjA3N2VlNCIsInN1YiI6IjY0NzkzZTVkOTM4MjhlMDEzMzc2YjBkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1LNm99rIE54CXYQ8BW1cka-hLB3qyvt9DjNdI7G8p6s'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))
