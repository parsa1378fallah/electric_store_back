import controller from "../../controller.js";
export default new (class extends controller {
  async register(req, res) {
    const data = await this.User.create(req.body);
    this.response({
      status: 200,
      message: "this a forward step",
      res,
      data: data,
    });
  }
  async login(req, res) {}
})();
