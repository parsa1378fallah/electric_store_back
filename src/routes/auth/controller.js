import controller from "../../controller.js";
export default new (class extends controller {
  async register(req, res) {
    const user = await this.User.findOne({ where: { email: req.body.email } });
    if (user)
      return this.response({
        code: 400,
        message: "این ایمیل قبلا ثبت شده است",
        res,
        data: {},
      });
    const data = await this.User.create(req.body);
    if (!data)
      return this.response({
        code: 400,
        message: "عملیات ناموفق",
        res,
        data: data,
      });

    return this.response({
      code: 200,
      message: "کاربر با موفقیت ثبت نام شد",
      res,
      data: data,
    });
  }
  async login(req, res) {
    const { email, password } = req.body;
    const user = await this.User.findOne({
      where: {
        email: email,
      },
    });
    if (!user)
      return this.response({
        code: 400,
        message: "برای ورورد ابتدا ثبت نام کنید",
        res,
        data: {},
      });
    console.log(user.dataValues.password);
    if (user.dataValues.password != password)
      return this.response({
        code: 400,
        message: "ایمیل یا رمز عبور اشتباه است",
        res,
        data: user,
      });
    return this.response({
      code: 200,
      message: "کاربر گرامی با موفقیت وارد شدید",
      res,
      data: user,
    });
  }
})();
