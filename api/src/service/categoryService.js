export class CategoryService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async getCategories() {
    return await this.categoryRepository.getCategories();
  }

  async getCategoryById(id) {
    return await this.categoryRepository.getCategoryById(id);
  }

  async getPagedCategories(take, skip) {
    if (take && !skip) skip = 0;
    else if (!take && skip) take = 0;

    return await this.categoryRepository.getPagedCategories(take, skip);
  }
}
