export class CategoryController {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async getCategories(req, res) {
    try {
      const categories = await this.categoryRepository.getCategories();
      return !categories || categories.length === 0
        ? res.status(404).json({ message: "Categories not found" })
        : res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getCategoryById(req, res) {
    try {
      const category = await this.categoryRepository.getCategoryById(
        req.params.id
      );
      return category
        ? res.status(200).json(category)
        : res.status(404).json({ message: "Category not found" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getPagedCategories(req, res) {
    try {
      const { take, skip } = req.query;
      const categories = await this.categoryRepository.getPagedCategories(
        take,
        skip
      );
      return !categories || categories.length === 0
        ? res.status(404).json({ message: "Categories not found" })
        : res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
