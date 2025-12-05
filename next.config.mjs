import { withBotId } from "botid/next/config";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

// @ts-check
/** @type {import("next").NextConfig} */
const nextConfig = {
	cacheComponents: true,
	reactStrictMode: true,
	serverExternalPackages: ["esbuild-wasm"],
};

export default withBundleAnalyzer(withBotId(withMDX(nextConfig)));
