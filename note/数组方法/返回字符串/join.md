##Array.prototype.join()
join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
###DEMO
```javascript
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```
###语法
```javascript
arr.join([separator])
```
#####参数
separator 可选
- 指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。==如果缺省该值，数组元素用逗号（,）分隔。如果separator是空字符串 ("")，则所有元素之间都没有任何字符==。 
#####返回值
一个所有数组元素连接的字符串。如果 arr.length 为 0，则返回空字符串。
###描述
所有的数组元素被转换成字符串，再用一个分隔符将这些字符串连接起来。
***警告： 如果一个元素为 undefined 或 null，它会被转换为空字符串。***