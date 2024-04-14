import controller from "../../controller.js";
export default new (class extends controller {
  async register(req, res) {
    console.log(this.Users);
    const users = await this.Users.getUsers();
    this.response({
      status: 200,
      message: "this a forward step",
      res,
      data: users,
    });
  }
  async login(req, res) {}
})();
