import { where } from "@sequelize/core";
import controller from "../../controller.js";
export default new (class extends controller {
  async register(req, res) {
    const data = await this.User.create(req.body);
    if (!data)
      return this.response({
        status: 400,
        message: "عملیات ناموفق",
        res,
        data: data,
      });
    this.response({
      status: 200,
      message: "کاربر با موفقیت ثبت نام شد",
      res,
      data: data,
    });
  }
  async login(req, res) {
    const { email, password } = req.body;
    const user = await this.User.findOne({ where: { email: email } });

    if (user.dataValues.passwor != password)
      return this.response({
        status: 400,
        message: "عملیات ناموفق",
        res,
        data: user,
      });
    return this.response({
      status: 400,
      message: "عملیات موفق",
      res,
      data: user,
    });
    // console.log(user);
  }
})();
