import { PrismaClient } from "@prisma/client";

import { ARTICLE_LIST } from "./mocks/articles.js";
import { CATEGORIES_DATA } from "./mocks/categories.js";
import { THUMBNAILS_DATA } from "./mocks/thumbnails.js";
const prisma = new PrismaClient();

async function main() {
  const allCategories = await prisma.category.createMany({
    data: CATEGORIES_DATA,
    skipDuplicates: true,
  });

  console.log(allCategories);

  const allThumbnails = await prisma.thumbnail.createMany({
    data: THUMBNAILS_DATA,
    skipDuplicates: true,
  });

  console.log(allThumbnails);

  const allArticles = await prisma.article.createMany({
    data: ARTICLE_LIST,
    skipDuplicates: true,
  });

  console.log(allArticles);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
