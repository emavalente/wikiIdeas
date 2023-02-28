export class ArticleController {
  constructor(articleService) {
    this.articleService = articleService;
  }

  async getArticles(req, res) {
    try {
      const articles = await this.articleService.getArticles();
      return !articles || articles.length === 0
        ? res.status(404).send({ message: "Articles not found" })
        : res.status(200).send(articles);
    } catch (err) {
      res.status(500).send({ message: "Internal server error" });
    }
  }

  async getArticleById(req, res) {
    try {
      const article = await this.articleService.getArticleById(req.params.id);
      !article || article.length === 0
        ? res.status(404).send({ message: "Article not found" })
        : res.status(200).send(article);
    } catch (err) {
      res.status(500).send({ message: "Internal server error" });
    }
  }

  async getPagedArticles(req, res) {
    try {
      const { take, skip } = req.query;
      const articles = await this.articleService.getPagedArticles(take, skip);
      return !articles || articles.length === 0
        ? res.status(404).send({ message: "Articles not found" })
        : res.status(200).send(articles);
    } catch (err) {
      res.status(500).send({ message: "Internal server error" });
    }
  }
}
