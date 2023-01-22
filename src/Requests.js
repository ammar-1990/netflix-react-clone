const API_KEY = '22b8ce84984ef92c7b8557faa4045066';

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_generes=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_generes=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_generes=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_generes=18`,


}
export default requests