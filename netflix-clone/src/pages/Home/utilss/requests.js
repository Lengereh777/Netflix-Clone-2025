


const API_KEY = process.env.REACT_APP_API_KEY;

const accountId = process.env.REACT_APP_TMDB_ACCOUNT_ID;
// oder du übergibst die ID später dynamisch

const Request = {
  Details: `https://api.themoviedb.org/3/account/${accountId}?api_key=${API_KEY}`,

  AddFavorite: `https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=${API_KEY}`,

  AddToWatchlist: `https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=${API_KEY}`,

  FavoriteMovies: `https://api.themoviedb.org/3/account/${accountId}/favorite/movies?api_key=${API_KEY}`,

  FavoriteTV: `https://api.themoviedb.org/3/account/${accountId}/favorite/tv?api_key=${API_KEY}`,

  Lists: `https://api.themoviedb.org/3/account/${accountId}/lists?api_key=${API_KEY}`,

  RatedMovies: `https://api.themoviedb.org/3/account/${accountId}/rated/movies?api_key=${API_KEY}`,

  RatedTVEpisodes: `https://api.themoviedb.org/3/account/${accountId}/rated/tv/episodes?api_key=${API_KEY}`,

  WatchlistMovies: `https://api.themoviedb.org/3/account/${accountId}/watchlist/movies?api_key=${API_KEY}`,

  WatchlistTV: `https://api.themoviedb.org/3/account/${accountId}/watchlist/tv?api_key=${API_KEY}`,
};

export default Request;



// import Request from './Request';

// const myAccountId = 123456;

// // Get URL for favorite movies
// const url = Request.FavoriteMovies(myAccountId);
// console.log(url);
// // Output: https://api.themoviedb.org/3/account/123456/favorite/movies?api_key=e618a3dbfa981f67cf3097be8992e318


