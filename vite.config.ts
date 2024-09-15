import path from "node:path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { type Plugin, defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { getContentPosts } from "./src/lib/getPosts";

async function getPostsData() {
  const contentDir = path.resolve(__dirname, "src/content");
  return await getContentPosts(contentDir);
}

function postsPlugin(): Plugin {
  return {
    name: "posts-plugin",
    async config() {
      const postsData = await getPostsData();
      return {
        define: {
          "import.meta.env.POSTS": JSON.stringify(postsData),
        },
      };
    },
  };
}

export default defineConfig({
  plugins: [
    TanStackRouterVite({}),
    react({ include: /\.(mdx|tsx|ts)$/ }),
    tsconfigPaths(),
    postsPlugin(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        importer: (url: string) => {
          if (url.startsWith("@/")) {
            return { file: path.resolve(__dirname, "src", url.slice(2)) };
          }
          return null;
        },
      },
    },
  },
});
