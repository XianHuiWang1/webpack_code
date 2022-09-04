<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-04 09:40:49
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-04 09:43:31
 * @FilePath: /webpack_learing/webpack_code/note/Webpack5/Babel.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## Babel
JavaScript 编译器。

主要用于将 ES6 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中
### 1.配置文件
配置文件由很多种写法
- babel.config.*：新建文件，位于项目根目录
    - babel.config.js
    - babel.config.json
- .babelrc.*：新建文件，位于项目根目录
    - .babelrc
    - .babelrc.js
    - .babelrc.json
- package.json 中 babel：不需要创建文件，在原有文件基础上写
Babel 会查找和自动读取它们，所以以上配置文件只需要存在一个即可