##Array.prototype.forEach()
forEach() 方法对数组的每个元素执行一次给定的函数。
###DEMO
```javascript
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```
###语法
```javascript
arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
```
#####参数
callback
- 为数组中每个元素执行的函数，该函数接收一至三个参数：
- currentValue
  - 数组中正在处理的当前元素。
- index可选
  - 数组中正在处理的当前元素的索引。
- array可选
  - forEach() 方法正在操作的数组。
thisArg可选
- 可选参数。当执行回调函数 callback 时，用作 this 的值。
#####返回值
undefined。
###描述
forEach() 方法按升序为数组中含有效值的每一项执行一次 callback 函数，那些已删除或者未初始化的项将被跳过（例如在稀疏数组上）。

可依次向 callback 函数传入三个参数：
1. 数组当前项的值
2. 数组当前项的索引
3. 数组对象本身
如果 thisArg 参数有值，则每次 callback 函数被调用时，this 都会指向 thisArg 参数。如果省略了 thisArg 参数，或者其值为 null 或 undefined，this 则指向全局对象。按照函数观察到 this 的常用规则，callback 函数最终可观察到 this 值。

forEach() 遍历的范围在第一次调用 callback 前就会确定。调用 forEach 后添加到数组中的项不会被 callback 访问到。如果已经存在的值被改变，则传递给 callback 的值是 forEach() 遍历到他们那一刻的值。已删除的项不会被遍历到。如果已访问的元素在迭代时被删除了（例如使用 shift()），之后的元素将被跳过——参见下面的示例。

forEach() 为每个数组元素执行一次 callback 函数；与 map() 或者 reduce() 不同的是，它总是返回 undefined 值，并且不可链式调用。其典型用例是在一个调用链的最后执行副作用（side effects，函数式编程上，指函数进行 返回结果值 以外的操作）。

forEach() 被调用时，==不会改变原数组==，也就是调用它的数组（尽管 callback 函数在被调用时可能会改变原数组）。（译注：此处说法可能不够明确，具体可参考 EMCA 语言规范：'forEach does not directly mutate the object on which it is called but the object may be mutated by the calls to callbackfn.'，==即 forEach 不会直接改变调用它的对象，但是那个对象可能会被 callback 函数改变。==）