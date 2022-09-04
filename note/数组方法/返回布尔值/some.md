##Array.prototype.some()
some() 方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。它返回的是一个 Boolean 类型的值。
备注： 如果用一个空数组进行测试，在任何情况下它返回的都是false。
###DEMO
```javascript
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
```
###语法
```javascript
arr.some(callback(element[, index[, array]])[, thisArg])
```
#####参数
callback
- 用来测试每个元素的函数，它可以接收三个参数：
- element
  - 数组中正在处理的元素。
- index可选
  - 数组中正在处理的元素的索引值。
- array可选
  - some()被调用的数组
  
thisArg可选
- 执行 callback 时使用的 this 值。
#####返回值
数组中有至少一个元素通过回调函数的测试就会返回**true**；所有元素都没有通过回调函数的测试返回值才会为 false。
###描述
some() 为数组中的每一个元素执行一次 callback 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。如果找到了这样一个值，some() 将会立即返回 true。否则，some() 返回 false。callback 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。

callback 被调用时传入三个参数：元素的值，元素的索引，被遍历的数组。

如果一个thisArg参数提供给 some()，它将被用作调用的 callback的 this 值。否则， 它的 this value 将是 undefined。this的值最终通过 callback 来观察，根据 the usual rules for determining the this seen by a function的 this 判定规则来确定。

some() 被调用时不会改变数组。

some() 遍历的元素的范围在第一次调用 callback. 前就已经确定了。在调用 some() 后被添加到数组中的值不会被 callback 访问到。如果数组中存在且还未被访问到的元素被 callback 改变了，则其传递给 callback 的值是 some() 访问到它那一刻的值。已经被删除的元素不会被访问到。