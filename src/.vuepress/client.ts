// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import Nebulon from "./components/Nebulon/index.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("Nebulon", Nebulon);
  },
});
