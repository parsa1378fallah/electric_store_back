import sequelize from "../../utiles/db.js";
import { DataTypes } from "@sequelize/core";

const Product = sequelize.define("Product", {
  productId: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  productDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  productQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productManufacturerId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  brandId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  productManufactureDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  productRating: {
    type: DataTypes.FLOAT,
    allowNull: true,
    defaultValue: 0,
  },
  productIsActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  productImageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
export default Product;
