import path from "node:path";
import { cwd } from "node:process";
import express from "express";
import serveStatic from "serve-static";

const serve = serveStatic(path.join(cwd(), "dist"));
const app = express();

app.use("/trimps-x", serve);

app.listen(4173);
