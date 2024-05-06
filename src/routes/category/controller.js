import controller from "../../controller.js";
export default new (class extends controller {
  async addCategory(req, res) {
    const { categoryName } = req.body;
    let category = this.Category.findOne({
      where: { categoryName: categoryName },
    });
    if (!category)
      return this.response({
        code: 400,
        message: "این دسته بندی قبلا ثبت شده است",
        res,
        data: {},
      });
    category = await this.Category.create({ categoryName: categoryName });
    this.response({
      code: 200,
      message: "دسته بندی جدید ثبت شد",
      res,
      data: category,
    });
  }
  async getCategories(req, res) {
    const categories = await this.Category.findAll();
    this.response({
      code: 200,
      message: "تمامی دسته بندی های موجود",
      res,
      data: categories,
    });
  }
  async deleteCategory(req, res) {
    const { categoryId } = req.params;
    const category = await this.Category.destroy({
      where: { categoryId: categoryId },
    });
    if (!category)
      return this.response({
        code: "404",
        res,
        message: "این دسته بندی وجود ندارد",
        data: {},
      });
    return this.response({
      code: 200,
      res,
      message: "دسته بندی با موفقیت حذف شد",
      data: category,
    });
  }
  async editCategory(req, res) {
    const { categoryId } = req.params;
    const { categoryName } = req.body;
    let category = await this.Category.findByPk(categoryId);
    if (!category)
      return this.response({
        code: 404,
        res,
        message: "دسته بندی مورد نظر یافت نشد",
        data: {},
      });
    if (!categoryName)
      return this.response({
        code: 404,
        res,
        message: "متاسفانه خطایی رخ داده بعدا دوباره امتحان کنید",
        data: {},
      });
    category.categoryName = categoryName;
    category = await category.save();
    return this.response({
      code: 200,
      res,
      message: "دسته بندی به روزرسانی شد",
      data: category,
    });
  }
})();
