import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import router from "./routes";

const app = new Hono();

// Middleware
app.use("*", logger());
app.use("*", cors());

// Routes
app.route("/api", router);

export default app;
