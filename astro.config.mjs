import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  site: 'https://jdneira21.github.io',
  base: '/rosita-web',
})