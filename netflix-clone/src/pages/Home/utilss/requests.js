const API_KEY = process.env.REACT_APP_API_KEY;
const accountId = process.env.REACT_APP_TMDB_ACCOUNT_ID;

const Requests = {
  // Banner / Rows
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  // Account API
  accountDetails: `https://api.themoviedb.org/3/account/${accountId}?api_key=${API_KEY}`,
  favorite: `https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=${API_KEY}`,
  watchlist: `https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=${API_KEY}`,
  favoriteMovies: `https://api.themoviedb.org/3/account/${accountId}/favorite/movies?api_key=${API_KEY}`,
  favoriteTV: `https://api.themoviedb.org/3/account/${accountId}/favorite/tv?api_key=${API_KEY}`,
  lists: `https://api.themoviedb.org/3/account/${accountId}/lists?api_key=${API_KEY}`,
  ratedMovies: `https://api.themoviedb.org/3/account/${accountId}/rated/movies?api_key=${API_KEY}`,
  ratedTV: `https://api.themoviedb.org/3/account/${accountId}/rated/tv?api_key=${API_KEY}`,
  ratedEpisodes: `https://api.themoviedb.org/3/account/${accountId}/rated/tv/episodes?api_key=${API_KEY}`,
  watchlistMovies: `https://api.themoviedb.org/3/account/${accountId}/watchlist/movies?api_key=${API_KEY}`,
  watchlistTV: `https://api.themoviedb.org/3/account/${accountId}/watchlist/tv?api_key=${API_KEY}`,
};

export default Requests;
