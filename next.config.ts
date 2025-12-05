// @ts-check
/** @type {import("next").NextConfig} */
const nextConfig = {
	// cacheComponents: true,
	reactStrictMode: true,
	serverExternalPackages: ["esbuild-wasm"],
};

export default nextConfig;
