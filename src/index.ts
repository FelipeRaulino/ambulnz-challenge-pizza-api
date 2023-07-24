import express from "express";
import { routers } from "./routes";
import { AppDataSource } from "./db/AppDataSource";

const app = express();

app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

app.use("/api", routers);

export { app };