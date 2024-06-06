// postcss.config.js
// postcss 插件是 object 方式注册的话，是按照由上到下的顺序执行的，相关实现见 postcss-load-config
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}