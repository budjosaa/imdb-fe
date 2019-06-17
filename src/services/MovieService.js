import ApiService from "./ApiService";

const ENDPOINTS = {
  MOVIES: "/api/movies",
  PAGINATED_MOVIES: "/api/movies/?page="
};

class MovieService extends ApiService {
  getMovies = (pageNumber, numOfEl) => {
    return this.apiClient.get(
      ENDPOINTS.PAGINATED_MOVIES + `${pageNumber}&elementsPerPage=${numOfEl}`
    );
  };
  getMovie = movieId => {
    return this.apiClient.get(ENDPOINTS.MOVIES + `/${movieId}`);
  };
}

export const movieService = new MovieService();
