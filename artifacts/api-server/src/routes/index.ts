import { Hono } from "hono";
import healthRouter from "./health";
import contactRouter from "./contact";

const app = new Hono();

app.route("/", healthRouter);
app.route("/contact", contactRouter);

export default app;
