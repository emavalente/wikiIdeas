import * as prisma from "@prisma/client";

const { PrismaClient } = prisma;

export class ArticleRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async getArticles() {
    try {
      //return all articles and your thumbail
      return await this.prisma.article.findMany({
        include: {
          thumbnail: true,
          category: true,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async getArticleById(id) {
    try {
      return await this.prisma.article.findUnique({
        where: {
          id: parseInt(id),
        },
        include: {
          thumbnail: true,
          category: true,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async getPagedArticles(take, skip) {
    try {
      return await this.prisma.article.findMany({
        skip: parseInt(skip),
        take: parseInt(take),
        include: {
          thumbnail: true,
          category: true,
        },
      });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  async getArticlesByCategory(categoryId) {
    try {
      return await this.prisma.article.findMany({
        where: {
          category: {
            id: parseInt(categoryId),
          },
        },
        include: {
          thumbnail: true,
          category: false,
        },
      });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
}
