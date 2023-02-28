import { Router } from "express";

import { categoryController } from "../container/loC.js";
import { verifyPagination } from "../middleware/verifyPagination.js";

const router = Router();

router
  .get(
    "/getCategories",
    categoryController.getCategories.bind(categoryController)
  )
  .get(
    "/getCategory/:id",
    categoryController.getCategoryById.bind(categoryController)
  )
  .get(
    "/getPagedCategories",
    [verifyPagination],
    categoryController.getPagedCategories.bind(categoryController)
  );

export default router;
