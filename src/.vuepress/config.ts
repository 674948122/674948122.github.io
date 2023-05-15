import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  head: [
    ['script', { type: 'text/javascript', charset: 'utf-8', src: '/assets/js/require.js', 'data-main': '/assets/js/nebulon.js' }]
  ],
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
  ],
});
