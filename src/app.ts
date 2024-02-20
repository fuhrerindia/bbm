import express, { Request, Response, Express } from "express";

const app: Express = express();
const port: number = 3300;
app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
  console.log(req);
});

app.listen(port, () => {
  console.log("Running,,,");
});
