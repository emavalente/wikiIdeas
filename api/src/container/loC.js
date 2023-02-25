import { ArticleController } from "../controller/articleController.js";

import { ArticleService } from "../service/articleService.js";

import { ArticleRepository } from "../repository/articleRepostory.js";

export const articleController = new ArticleController(
  new ArticleService(new ArticleRepository())
);
