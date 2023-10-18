import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.NanoUPS.com",
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
