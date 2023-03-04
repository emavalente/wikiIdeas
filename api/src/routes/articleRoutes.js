import { Router } from "express";

import { articleController } from "../container/loC.js";
import { verifyPagination } from "../middleware/verifyPagination.js";

const router = Router();

router
  .get("/getArticles", articleController.getArticles.bind(articleController))
  .get(
    "/getArticle/:id",
    articleController.getArticleById.bind(articleController)
  )
  .get(
    "/getPagedArticles",
    [verifyPagination],
    articleController.getPagedArticles.bind(articleController)
  )
  .get(
    "/getArticlesByCategory/:categoryId",
    articleController.getArticlesByCategory.bind(articleController)
  );

export default router;
