import autoBind from "auto-bind";
import User from "./models/users.js";

const controller = class {
  constructor() {
    autoBind(this);
    this.User = User;
  }

  response({ res, message, code = 200, data = {} }) {
    res.status(code).json({
      message,
      data,
    });
  }
};

export default controller;
