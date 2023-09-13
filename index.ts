import express = require('express');
import { Request, Response, Application } from "express";
const app: Application = express();
const port: number = 80;
import * as path from "path";

app.use(express.static('views'))

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.listen(port, (): void => {
  console.log(`Server started on port ${port}`);
});
