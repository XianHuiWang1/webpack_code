##Array.prototype.map()
map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
###DEMO
```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```
###语法
```javascript
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array
}[, thisArg])
```
#####参数
callback
- 生成新数组元素的函数，使用三个参数：
- currentValue
  - callback 数组中正在处理的当前元素。
- index可选
  - callback 数组中正在处理的当前元素的索引。
- array可选
  - map 方法调用的数组。
thisArg可选
- 执行 callback 函数时值被用作this
#####返回值
一个由原数组每个元素执行回调函数的结果组成的新数组。
###描述
map 方法会给原数组中的每个元素都按顺序调用一次 callback 函数。callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。 callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。

因为map生成一个新数组，==当你不打算使用返回的新数组却使用map是违背设计初衷的，请用forEach或者for-of替代==。你不该使用map: A) 你不打算使用返回的新数组，或/且 B) 你没有从回调函数中返回值。

callback 函数会被自动传入三个参数：数组元素，元素索引，原数组本身。

如果 thisArg 参数提供给map，则会被用作回调函数的this值。否则 undefined 会被用作回调函数的this值。this的值最终相对于callback函数的可观察性是依据the usual rules for determining the this seen by a function决定的

map 不修改调用它的原数组本身（当然可以在 callback 执行时改变原数组）

map 方法处理数组元素的范围是在 callback 方法第一次调用之前就已经确定了。调用map方法之后追加的数组元素不会被callback访问。如果存在的数组元素改变了，那么传给callback的值是map访问该元素时的值。在map函数调用后但在访问该元素前，该元素被删除的话，则无法被访问到。

根据规范中定义的算法，==如果被 map 调用的数组是离散的，新数组将也是离散的保持相同的索引为空==。