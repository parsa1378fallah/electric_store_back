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
    product = await this.Product.create(req.body);
    this.response({
      code: 200,
      message: "محصول جدید ثبت شد",
      res,
      data: product,
    });
  }
  async getProducts(req, res) {
    const products = await this.Product.findAll();
    this.response({
      code: 200,
      message: "تمامی محصول های موجود",
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
    return this.response({
      code: 200,
      res,
      message: "محصول به روزرسانی شد",
      data: product,
    });
  }
})();
