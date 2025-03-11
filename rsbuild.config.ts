import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [pluginReact()],
	output: {
		assetPrefix: "/doc-gising-na-siya/",
	},
});
