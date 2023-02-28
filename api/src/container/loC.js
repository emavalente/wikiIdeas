import { ArticleController } from "../controller/articleController.js";
import { ArticleService } from "../service/articleService.js";
import { ArticleRepository } from "../repository/articleRepostory.js";

import { CategoryController } from "../controller/categoryController.js";
import { CategoryService } from "../service/categoryService.js";
import { CategoryRepository } from "../repository/categoryRepository.js";

export const articleController = new ArticleController(
  new ArticleService(new ArticleRepository())
);

export const categoryController = new CategoryController(
  new CategoryService(new CategoryRepository())
);
