import { spawnSync } from "node:child_process";
import { createSerwistRoute } from "@serwist/turbopack";

// Using `git rev-parse HEAD` might not be the most efficient
// way of determining a revision. You may prefer to use
// the hashes of every extra file you precache.
const revision = spawnSync("git", ["rev-parse", "HEAD"], { encoding: "utf-8" }).stdout ?? crypto.randomUUID();

export const { dynamic, dynamicParams, revalidate, generateStaticParams, GET } = createSerwistRoute({
  additionalPrecacheEntries: [
    { url: "/~offline", revision },
    { url: "/manifest.json", revision },
    { url: "/favicon.ico", revision },
  ],
  swSrc: "app/sw.ts",
  // Disable automatic file globbing for serverless environments
  // where file paths are unpredictable
  globPatterns: [],
  // Copy relevant Next.js configuration (assetPrefix,
  // basePath, distDir) over if you've changed them.
  nextConfig: {},
});
