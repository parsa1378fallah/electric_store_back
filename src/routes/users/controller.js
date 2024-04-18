import controller from "../../controller.js";

export default new (class extends controller {
  async getUsers(req, res) {
    const users = await this.User.findAll();
    console.log(users);
    this.response({
      status: 200,
      message: "this a forward step",
      res,
      data: users,
    });
  }
})();
