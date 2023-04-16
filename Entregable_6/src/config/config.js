const { connect } = require("mongoose");
const url =
  "mongodb+srv://mdmercado6:mdmercado1622@cluster0.zg1jhgn.mongodb.net/?retryWrites=true&w=majority";
const objConfig = {
  connectDB: async () => {
    try {
      await connect(url);
      console.log("bd conectada");
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = { objConfig };
