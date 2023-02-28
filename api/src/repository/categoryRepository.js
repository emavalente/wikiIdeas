import * as prisma from "@prisma/client";

const { PrismaClient } = prisma;

export class CategoryRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async getCategories() {
    try {
      return await this.prisma.category.findMany();
    } catch (err) {
      throw new Error(err);
    }
  }

  async getCategoryById(id) {
    try {
      return await this.prisma.category.findUnique({
        where: {
          id: parseInt(id),
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async getPagedCategories(take, skip) {
    try {
      return await this.prisma.category.findMany({
        skip: parseInt(skip),
        take: parseInt(take),
      });
    } catch (err) {
      throw new Error(err);
    }
  }
}
