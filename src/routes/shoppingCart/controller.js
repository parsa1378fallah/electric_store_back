import controller from "../../controller.js";
export default new (class extends controller {
  async addShoppingCart(req, res) {
    const { userId, productId } = req.body;
    let shoppingCart = await this.ShoppingCart.findOne({
      where: { userId: userId, productId: productId },
    });
    if (shoppingCart)
      return this.response({
        code: 400,
        res,
        message: "این مورد قبلا به سبد خرید اضافه شده است",
        data: {},
      });
    const newShoppingCart = await this.ShoppingCart.create(req.body);
    return this.response({
      code: 200,
      res,
      message: "به کارت سبد خرید اضافه شد",
      data: newShoppingCart,
    });
  }
  async getShoppingCarts(req, res) {
    const shoppingCarts = await this.ShoppingCart.findAll({
      include: this.Product,
    });
    return this.response({
      code: 200,
      res,
      message: "همه ی کالاهای سبد خرید کاربر",
      data: shoppingCarts,
    });
  }

  async deleteShoppingCart(req, res) {
    const { shoppingCartId } = req.params;
    let shoppingCart = await this.ShoppingCart.findOne({
      where: { shoppingCartId: shoppingCartId },
    });
    if (!shoppingCart)
      return this.response({
        code: 404,
        res,
        message: "محصول مورد نظر در سبد خرید شما یافت نشد",
        data: {},
      });

    shoppingCart = await this.ShoppingCart.destroy({
      where: { shoppingCartId: shoppingCartId },
    });
    return this.response({
      code: 200,
      res,
      message: "کالا با موفقیت از سبد خرید حذف شد",
      data: shoppingCart,
    });
  }
  async editShoppingCart(req, res) {}
})();
