const { userModel } = require("../models/user.model");

class usersMongo {
  async getUser() {
    await userModel.find();
  }

  async createUser(item) {
    return await userModel.create(item);
  }
}

module.exports = usersMongo;
