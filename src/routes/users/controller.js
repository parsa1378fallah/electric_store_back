import controller from "../../controller.js";

export default new (class extends controller {
  async getUsers(req, res) {
    const users = await this.User.findAll();
    this.response({
      code: 200,
      message: "تمامی کاربران سایت ",
      res,
      data: users,
    });
  }
  async editUser(req, res) {
    const { userId } = req.params;
    const user = await this.User.findByPk(userId);
    const { firstName, lastName, address, password, birthDate, gender, level } =
      req.body;
    if (!user)
      return this.response({
        code: 400,
        message: "کاربر یافت نشد",
        res,
        data: {},
      });
    if (firstName !== undefined) user.firstName = firstName;
    if (lastName !== undefined) user.lastName = lastName;
    if (address !== undefined) user.address = address;
    if (password !== undefined) user.password = password;
    if (birthDate !== undefined) user.birthDate = birthDate;
    if (gender !== undefined) user.gender = gender;
    if (level !== undefined) user.level = level;
    const editedUser = await user.save();
    return this.response({
      code: 200,
      message: "اطلاعات کاربر به روز رسانی شد",
      res,
      data: editedUser,
    });
  }
})();
