import express from "express";
import router from "./routers/passengers.router.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
});