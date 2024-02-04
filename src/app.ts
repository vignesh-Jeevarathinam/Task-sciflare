import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import { createServer } from "node:http";

//For env File
dotenv.config();

function startServer() {
  const app: Application = express();
  const httpServer = createServer(app);
  const port = process.env.PORT || 8000;

  // app.get('/', (req: Request, res: Response) => {
  //   res.send('Welcome to Express & TypeScript Server');
  // });

  const server = httpServer
    .listen(port, () => {
      console.log(`Server is started at http://localhost:${port}`);
    })
    .on("error", (error) => {
      console.log(`Error ::::: ${error}`);
      throw error;
    });

}

startServer();
