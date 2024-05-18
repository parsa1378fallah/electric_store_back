import autoBind from "auto-bind";
import User from "./models/users.js";
import Product from "./models/products.js";
import Category from "./models/categories.js";
import ShoppingCart from "./models/shoppingCart.js";

const controller = class {
  constructor() {
    autoBind(this);
    this.User = User;
    this.Product = Product;
    this.Category = Category;
    this.ShoppingCart = ShoppingCart;
  }

  response({ res, message, code = 200, data = {} }) {
    res.status(code).json({
      message,
      data,
    });
  }
};

export default controller;
