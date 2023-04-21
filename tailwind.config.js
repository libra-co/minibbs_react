/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-04-21 10:56:15
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-21 11:47:42
 * @FilePath: /minibbs_react/tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

let size = {}
for (let i = 1; i <= 200; i += 0.25) {
  let key = String(i)
  let value = `${(i * 4) / 16}rem`
  size[key] = value
}

module.exports = {
  important: 'body',
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        blue: '#2CBCFF',
        gray: {
          bg: '#f5f5f5',
        },
      },
      height: size,
      minHeight: size,
      maxHeight: size,
      width: size,
      minWidth: size,
      maxWidth: size,
    },
  },
  corePlugins: {
    preflight: false,
  },
}
