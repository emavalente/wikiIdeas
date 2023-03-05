export class ArticleService {
  constructor(articleRepository) {
    this.articleRepository = articleRepository;
  }

  async getArticles() {
    return await this.articleRepository.getArticles();
  }

  async getArticleById(id) {
    return await this.articleRepository.getArticleById(id);
  }

  async getPagedArticles(take, skip) {
    if (take && !skip) skip = 0;
    else if (!take && skip) take = 0;

    return await this.articleRepository.getPagedArticles(take, skip);
  }

  async getArticlesByCategory(categoryId) {
    return await this.articleRepository.getArticlesByCategory(categoryId);
  }

  async getArticleSortByLike() {
    return await this.articleRepository.getArticleSortByLike();
  }
}
