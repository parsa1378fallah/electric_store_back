import controller from "../../controller.js";
export default new (class extends controller {
  async addProduct(req, res) {
    const { productName } = req.body;
    let product = await this.Product.findOne({
      where: { productName: productName },
    });
    if (product)
      return this.response({
        code: 400,
        message: "این محصول قبلا ثبت شده است",
        res,
        data: {},
      });
    await this.Product.create(req.body);
    product = this.Product.findOne(
      { where: { productName: productName } },
      { include: this.Category }
    );
    this.response({
      code: 200,
      message: "محصول جدید ثبت شد",
      res,
      data: product,
    });
  }
  async getProducts(req, res) {
    let products = null;
    const { categoryId } = req.query;
    console.log(categoryId);
    if (categoryId) {
      products = await this.Product.findAll({
        where: { categoryId: categoryId },
        include: this.Category,
      });

      return this.response({
        code: 200,
        message: "محصولات مربوط به دسته‌بندی مورد نظر",
        res,
        data: products,
      });
    }
    products = await this.Product.findAll({ include: this.Category });
    return this.response({
      code: 200,
      message: "تمامی محصول‌های موجود",
      res,
      data: products,
    });
  }

  async deleteProduct(req, res) {
    const { productId } = req.params;
    const product = await this.Product.findOne({
      where: { productId: productId },
    });
    if (!product)
      return this.response({
        code: "404",
        res,
        message: "این محصول وجود ندارد",
        data: {},
      });
    await this.Product.destroy({ where: { productId: productId } });
    return this.response({
      code: 200,
      res,
      message: "محصول با موفقیت حذف شد",
      data: product,
    });
  }
  async editProduct(req, res) {
    const { productId } = req.params;
    let product = await this.Product.findByPk(productId);
    if (!product)
      return this.response({
        code: 404,
        res,
        message: "محصول مورد نظر یافت نشد",
        data: {},
      });

    product = await product.update(req.body);
    product = await this.Product.findByPk(productId, {
      include: this.Category,
    });
    return this.response({
      code: 200,
      res,
      message: "محصول به روزرسانی شد",
      data: product,
    });
  }
})();
