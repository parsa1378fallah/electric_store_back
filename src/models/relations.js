import Category from "./categories.js";
import User from "./users.js";
import Product from "./products.js";
import ShoppingCart from "./shoppingCart.js";
export function setRelations() {
  Category.hasMany(Product, {
    foreignKey: {
      name: "categoryId",
      allowNull: false,
    },
    sourceKey: "categoryId",
  });

  User.hasMany(ShoppingCart, {
    foreignKey: "userId",
    sourceKey: "userId",
  });

  Product.hasMany(ShoppingCart, {
    foreignKey: "productId",
    sourceKey: "productId",
  });
}
