import controller from "../../controller.js";
export default new (class extends controller {
  async uploadProfileImage(req, res) {
    const { userId } = req.params;
    let user = await this.User.findOne({ userId: userId });
    user.profileImage = `http://localhost:3000/${req.file.filename}`;
    user = await user.save();
    console.log(user);
    return this.response({
      code: 200,
      res,
      message: "این یک تست است",
      data: {
        filename: req.file.filename,
        url: `http://localhost:3000/${req.file.filename}`,
        user,
      },
    });
  }
})();
