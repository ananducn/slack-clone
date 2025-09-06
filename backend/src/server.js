import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { functions, inngest } from "./config/inngest.js";
import { serve } from "inngest/express";

const app = express();

app.use(express.json());
app.use(clerkMiddleware());

app.use(cors());

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const startServer = async () => {
  try {
    connectDB();

   if (ENV.NODE_ENV === "development") {
      app.listen(ENV.PORT, () => {
        console.log(`Server running on port : http://localhost:${ENV.PORT}`);
      });
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer();

export default app;


//  app.listen(ENV.PORT, () => {
//       console.log(
//         "Server is running on port :",
//         ENV.PORT,
//         `http://localhost:${ENV.PORT}`
//       );
//     });