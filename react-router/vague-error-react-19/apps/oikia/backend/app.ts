import { createRequestHandler } from "@react-router/express";
import express from "express";


import "react-router";

declare module "react-router" {
  interface AppLoadContext {
    VALUE_FROM_EXPRESS: string;
  }
}

export async function createApp() {
  const app = express();

  app.use(
    createRequestHandler({
      build: () => import("virtual:react-router/server-build"),
      async getLoadContext(req, res) {
        return {
          VALUE_FROM_EXPRESS: "Hello from Express",
        };
      },
    })
  );

  return app;
}
