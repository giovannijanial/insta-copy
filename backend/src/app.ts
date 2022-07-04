import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import endpoint from "../config/endpoints.config";
import router from "./routes/router";

dotenv.config();
const app = express();

// config json and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

const port = endpoint.port;
app.listen(port, () => {
	console.log(`srv rodando na porta ${port}`);
});
