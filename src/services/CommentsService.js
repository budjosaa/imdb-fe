import ApiService from "./ApiService";

const ENDPOINTS = {
  COMMENTS: "/api/movies/"
};

class CommentsService extends ApiService {
  getComments = movieId => {
    return this.apiClient.get(`${ENDPOINTS.COMMENTS}${movieId}/comments/`);
  };
  createComment = (content, movieId) => {
    return this.apiClient.post(
      `${ENDPOINTS.COMMENTS}${movieId}/comments/create`,
      content
    );
  };
}
export const commentsService = new CommentsService();
