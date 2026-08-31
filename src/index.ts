import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const app = new Elysia()
  .get("/", async () => {
    try {
      const allUsers = await db.select().from(users);
      return {
        message: "Hello Elysia + Drizzle + MySQL!",
        data: allUsers,
      };
    } catch (e: any) {
      return {
        error: "Failed to fetch from DB",
        message: e.message
      }
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
