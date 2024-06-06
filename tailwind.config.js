/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('tailwindcss-rem2px-preset').createPreset({
      // 32 意味着 1rem = 32rpx
      fontSize: 32,
      // 转化的单位,可以变成 px / rpx
      unit: 'rpx'
    })
  ],
  // 不在 content glob表达式中包括的文件，在里面编写tailwindcss class，是不会生成对应的css工具类的
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    // require("./node_modules/@tailwindcss/line-clamp")
  ],
  corePlugins: {
    // 小程序不需要 preflight，因为这主要是给 h5 的，如果你要同时开发多端，你应该使用 process.env.TARO_ENV 环境变量来控制它
    preflight: true,
  },
}

