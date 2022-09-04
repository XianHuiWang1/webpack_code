## Eslint
可组装的javascript和JSX检查工具
即用来检测js和jsx语法的工具，可以配置各项功能
使用Eslint，关键是写Eslint配置文件，里面写上各种rules规则，将来运行Eslint时就会以写的规则对代码进行检查
### 1.配置文件
配置文件有很多种写法
- .eslintrc.*
    - .eslintrc
    -  .eslintrc.js
    - .eslintrc.json
    - 区别在于配置格式不一样
- package.json中eslintConfig:不需要创建文件，在原有文件上写Eslint会查找和自动读取他们，所以以上配置文件只需存在一个即可


