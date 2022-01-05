import express from "express";
import bodyParser from "body-parser";
import companyRoutes from "./routes/index.js";

const app = express();

app.use(bodyParser.json());

app.listen(5000, () => {
    console.log("Server running at port 5000...")
});

app.use("/api", companyRoutes);