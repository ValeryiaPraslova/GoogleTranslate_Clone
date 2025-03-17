import viteConfig from "./vite.config";
import { defineConfig, configDefaults, mergeConfig } from "vitest/config";

// https://vitest.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      ...configDefaults,
      globals: true,
      environment: "jsdom",
      // setupFiles: "./test/setup.ts",
      outputFile: "coverage/junit.xml",
      include: ["src/js/tests/**/*.{test,spec}.{js,ts,jsx,tsx}"],
      reporters: ["junit", "default"],
      coverage: {
        provider: "v8",
        include: ["src/js/tests"],
        reporter: ["text", "lcov"],
      },
    },
  })
);
