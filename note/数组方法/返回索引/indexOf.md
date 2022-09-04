##Array.prototype.indexOf()
**indexOf()**方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
###DEMO
```javascript
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
```
###语法
```javascript
arr.indexOf(searchElement[, fromIndex])
```
#####参数
searchElement
- 要查找的元素

fromIndex 可选
- 开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回 -1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即 -1 表示从最后一个元素开始查找，-2 表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于 0，则整个数组都将会被查询。其默认值为 0。
#####返回值
首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1
###描述
indexOf 使用strict equality (en-US) (无论是 ===, 还是 triple-equals 操作符都基于同样的方法) 进行判断 searchElement 与数组中包含的元素之间的关系。