import ApiService from "./ApiService";

const ENDPOINTS = {
  MOVIES: "/api/movies",
  PAGINATED_MOVIES: "/api/movies/?page=",
  GENRES: "/api/genres"
};

class MovieService extends ApiService {
  getMovies = (pageNumber, numOfEl, title, genreId) => {
    return this.apiClient.get(ENDPOINTS.MOVIES, {
      params: {
        page: pageNumber,
        elementsPerPage: numOfEl,
        title,
        genreId
      }
    });
  };
  getMovie = movieId => {
    return this.apiClient.get(`${ENDPOINTS.MOVIES}/${movieId}`);
  };
  likeMovie = (movieId, reaction) => {
    return this.apiClient.post(`${ENDPOINTS.MOVIES}/${movieId}/like`, {
      reaction: reaction
    });
  };
  getGenres = () => {
    return this.apiClient.get(ENDPOINTS.GENRES);
  };
}

export const movieService = new MovieService();
