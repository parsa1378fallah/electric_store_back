import controller from "../../controller.js";
export default new (class extends controller {
  async uploadProfileImage(req, res) {
    const { image } = req.body;
    console.log(req.body);
    return this.response({
      code: 200,
      res,
      message: "این یک تست است",
      data: image,
    });
  }
})();
