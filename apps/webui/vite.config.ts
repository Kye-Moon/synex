import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig((configEnv) => {
	return {
		plugins: [react()],
		resolve: {
			alias: [
				{ find: "@/Assets", replacement: "/src/assets" },
				{ find: "@/Components", replacement: "/src/components" },
				{ find: "@/Pages", replacement: "/src/pages" },
				{ find: "@/Primitives", replacement: "/src/primitives" },
				{ find: "@/Lib", replacement: "/src/lib" },
				{ find: "@/Services", replacement: "/src/services" },
				{ find: "@/State", replacement: "/src/state" },
				{ find: "@/Constants", replacement: "/src/constants" },
				{ find: "@/Context", replacement: "/src/context" },
				{ find: "@/Hooks", replacement: "/src/hooks" },
			],
		},
	};
});
