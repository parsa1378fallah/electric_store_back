import autoBind from "auto-bind";
import Users from "./models/users.js";

const controller = class {
  constructor() {
    autoBind(this);
    this.Users = Users;
  }

  response({ res, message, code = 200, data = {} }) {
    res.status(code).json({
      message,
      data,
    });
  }
};

export default controller;
