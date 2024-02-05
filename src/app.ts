import express, { Express, Response, Application, json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { createServer } from "node:http";
import cors from "cors";
import apiRoutes from "./api";

//For env File
dotenv.config();

function startServer() {
  const app: Application = express();
  const httpServer = createServer(app);
  const port = process.env.PORT || 8000;

  app.use(cors());
  app.use(json());

  app.use("/api", apiRoutes());

  const server =httpServer
    .listen(port, () => {
      console.log(`Server is started at http://localhost:${port}`);
    })
    .on("error", (error) => {
      console.log(`Error ::::: ${error}`);
      throw error;
    });

  mongoose
    .connect(`mongodb://localhost//:27017/taskDemo`)
    .then(() => {
      console.log("Database connected Successfully ::::: ");
    })
    .catch((err) => console.log("Error connecting to DB", err));

  server.setTimeout(10000);
}

startServer();
