import * as prisma from "@prisma/client";

const { PrismaClient } = prisma;

export class ArticleRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async getArticles() {
    try {
      return await this.prisma.article.findMany();
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
      });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
}
