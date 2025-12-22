import { createSerwistRoute } from "@serwist/turbopack";
import { execSync } from "node:child_process";

// Get the git revision for cache busting
const revision = (() => {
  try {
    return execSync("git rev-parse HEAD").toString().trim();
  } catch {
    // Fallback if git is not available or not in a git repo
    return Date.now().toString();
  }
})();

export const { dynamic, dynamicParams, revalidate, generateStaticParams, GET } = createSerwistRoute({
  swSrc: "app/sw.ts",
  // Precache the offline fallback page
  additionalPrecacheEntries: [
    {
      url: "/~offline",
      revision,
    },
  ],
  nextConfig: {
    basePath: "/",
  },
});
