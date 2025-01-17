import controller from "../../controller.js";
export default new (class extends controller {
  async uploadProfileImage(req, res) {
    const { userId } = req.params;
    let user = await this.User.findOne({ where: { userId: userId } });
    user.profileImage = `http://localhost:3000/profile/${req.file.filename}`;
    user = await user.save();
    return this.response({
      code: 200,
      res,
      message: "عکس پروفایل شما آپلود شد .",
      data: {
        filename: req.file.filename,
        url: `http://localhost:3000/profile/${req.file.filename}`,
        user,
      },
    });
  }
  async uploadCategoryImage(req, res) {
    const { categoryId } = req.params;
    let category = await this.Category.findOne({
      where: { categoryId: categoryId },
    });
    category.imageUrl = `http://localhost:3000/category/${req.file.filename}`;
    category = await category.save();
    return this.response({
      code: 200,
      res,
      message: "عکس دسته بندی آپلود شد",
      data: {
        filename: req.file.filename,
        url: `http://localhost:3000/category/${req.file.filename}`,
        category,
      },
    });
  }
  async uploadProductImage(req, res) {
    const { productId } = req.params;
    let product = await this.Product.findOne({
      where: { productId: productId },
      include: [{ model: this.Category }],
    });
    product.productImageUrl = `http://localhost:3000/product/${req.file.filename}`;
    product = await product.save();
    return this.response({
      code: 200,
      res,
      message: "عکس محصول شما آپلود شد",
      data: {
        filename: req.file.filename,
        url: `http://localhost:3000/product/${req.file.filename}`,
        product,
      },
    });
  }
})();
