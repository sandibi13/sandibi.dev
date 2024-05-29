import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import dotenv from "dotenv";
import vercel from "@astrojs/vercel/serverless";
dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  output: "server",
  adapter: vercel(),
});
