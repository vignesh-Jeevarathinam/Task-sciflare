import express, { Express, Response, Application, json } from "express";
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

  // app.get('/', (req: Request, res: Response) => {
  //   res.send('Welcome to Express & TypeScript Server');
  // });
  app.use(cors());
  app.use(json())

  app.use('/api', apiRoutes());

   httpServer
    .listen(port, () => {
      console.log(`Server is started at http://localhost:${port}`);
    })
    .on("error", (error) => {
      console.log(`Error ::::: ${error}`);
      throw error;
    });

}

startServer();
