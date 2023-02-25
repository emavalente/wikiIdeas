export class ArticleController {
  constructor(articleService) {
    this.articleService = articleService;
  }

  async getArticles(req, res) {
    try {
      const articles = await this.articleService.getArticles();
      res.status(200).send(articles);
    } catch (err) {
      res.status(500).send({ message: "Internal server error" });
    }
  }

  async getArticleById(req, res) {
    try {
      const article = await this.articleService.getArticleById(req.params.id);
      res.status(200).send(article);
    } catch (err) {
      res.status(500).send({ message: "Internal server error" });
    }
  }

  async getPagedArticles(req, res) {
    try {
      const { take, skip } = req.query;
      const articles = await this.articleService.getPagedArticles(take, skip);
      res.status(200).send(articles);
    } catch (err) {
      res.status(500).send({ message: "Internal server error" });
    }
  }
}
