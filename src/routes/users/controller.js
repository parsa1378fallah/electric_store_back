import controller from "../../controller.js";

export default new (class extends controller {
  async getUsers(req, res) {
    const users = await this.User.findAll();
    console.log(users);
    this.response({
      code: 200,
      message: "this a forward step",
      res,
      data: users,
    });
  }
  async editUser(req, res) {
    const { userId } = req.params;
    const user = await this.User.findByPk(userId);
    const { firstName, lastName, address, password, birthDate, gender } =
      req.body;
    if (!user)
      return this.response({
        code: 400,
        message: "کاربر یافت نشد",
        res,
        data: {},
      });
    user.firstName = firstName;
    user.lastName = lastName;
    user.address = address;
    user.password = password;
    user.birthDate = birthDate;
    user.gender = gender;
    const editedUser = await user.save();
    console.log(editedUser);
    return this.response({
      code: 200,
      message: "اطلاعات کاربر به روز رسانی شد",
      res,
      data: editedUser,
    });
  }
})();
