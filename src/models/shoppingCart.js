import sequelize from "../../utiles/db.js";
import { DataTypes } from "@sequelize/core";

const ShoppingCart = sequelize.define("ShoppingCart", {
  cartId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "1",
  },
});

export default ShoppingCart;
