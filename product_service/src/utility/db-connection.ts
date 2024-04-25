import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const ConnectDB = async () => {
  const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/product-service";

  try {
    await mongoose.connect(DB_URL);
  } catch (err) {
    console.log(err);
  }
};

export { ConnectDB };
