import axios from "axios";

const KEY = "20cb157ccaa2dfd7df6e991ab91bfe8c";
const ENDPOINTS = {
  MOVIE_API: `https://api.themoviedb.org/3/search/movie`
};

class ThirdPartyService {
  searchForMovies = title => {
    return axios.get(ENDPOINTS.MOVIE_API, {
      params: {
        api_key: KEY,
        query: title,
        include_adult: false
      }
    });
  };
}
export const thirdPartyService = new ThirdPartyService();
