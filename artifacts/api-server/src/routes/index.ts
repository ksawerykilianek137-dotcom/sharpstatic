import { Hono } from "hono";
import healthRouter from "./health";

const app = new Hono();

app.route("/", healthRouter);

export default app;
