import sequelize from "../../utiles/db.js";
import { DataTypes } from "@sequelize/core";

const Category = sequelize.define("Category", {
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Category;
