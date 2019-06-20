import ApiService from "./ApiService";

const ENDPOINTS = {
  MOVIES: "/api/movies",
  PAGINATED_MOVIES: "/api/movies/?page="
};

class MovieService extends ApiService {
  getMovies = (pageNumber, numOfEl, title) => {
    return this.apiClient.get(ENDPOINTS.MOVIES, {
      params: {
        page: pageNumber,
        elementsPerPage: numOfEl,
        title: title
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
}

export const movieService = new MovieService();
