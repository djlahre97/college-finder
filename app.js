const express = require("express");
const mongoose = require("mongoose");
const router = require("./src/routes");

const URL =
  "mongodb+srv://djlahre:xIemfElBsGmdZag8@cluster0.xwbmm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

main()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URL);
}

const app = express();
app.use("/", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
