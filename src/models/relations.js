import Category from "./categories.js";
import Product from "./products.js";

export function setRelations() {
  Category.hasMany(Product, {
    foreignKey: {
      name: "categoryId",
      allowNull: false,
    },
    sourceKey: "categoryId",
  });
}
