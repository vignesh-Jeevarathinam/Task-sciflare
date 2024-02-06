import express, { Express, Response, Application, json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { createServer } from "node:http";
import cors from "cors";
import apiRoutes from "./api";
import passport, { use } from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import flash from "connect-flash/lib/flash";
import { Strategy as LocalStrategy } from "passport-local";
import userModel from "./models/user";

//For env File
dotenv.config();

function startServer() {
  const app: Application = express();
  const httpServer = createServer(app);
  const port = process.env.PORT || 8000;

  app.use(cors());
  app.use(json());

  app.use(
    session({
      secret: "sciflare",
      resave: false,
      saveUninitialized: false,
      cookie: { secure: true },
    })
  );

  passport.use(new LocalStrategy(userModel.authenticate()));
  passport.serializeUser(userModel.serializeUser());
  passport.deserializeUser(userModel.deserializeUser());
  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/api", apiRoutes());

  const server = httpServer
    .listen(port, () => {
      console.log(`Server is started at http://localhost:${port}`);
    })
    .on("error", (error) => {
      console.log(`Error ::::: ${error}`);
      throw error;
    });

  const dbUrl = "mongodb://localhost:27017"; // specify host and port
  const dbName = "test"; // specify the database name separately

  mongoose.connect(`${dbUrl}`, { dbName });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
    // Your code here
  });

  server.setTimeout(10000);
}

startServer();
