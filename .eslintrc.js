/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-04 09:25:33
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-04 09:31:45
 * @FilePath: /webpack_learing/webpack_code/.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    // 继承 Eslint 规则
    extends: ["eslint:recommended"],
    env: {
      node: true, // 启用node中全局变量
      browser: true, // 启用浏览器中全局变量
    },
    parserOptions: {
      ecmaVersion: 6,//es6
      sourceType: "module",//es module
    },
    rules: {
      "no-var": 2, // 不能使用 var 定义变量
    },
  };
  