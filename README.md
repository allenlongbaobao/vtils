<p align="center"><img width="200" src="https://raw.githubusercontent.com/fjc0k/vtils/master/logo.png" alt="logo"></p>

<p align="center"><a href="https://www.npmjs.com/package/vtils"><img src="https://badge.fury.io/js/vtils.svg" alt="NPM Version"></a> <a href="https://travis-ci.org/fjc0k/vtils"><img src="https://travis-ci.org/fjc0k/vtils.svg?branch=master" alt="Build Status"></a> <a href="https://codecov.io/gh/fjc0k/vtils"><img src="https://codecov.io/gh/fjc0k/vtils/branch/master/graph/badge.svg" alt="Coverage Status"></a> <img src="https://badgen.net/bundlephobia/min/vtils" alt="Size"> <img src="https://badgen.net/bundlephobia/minzip/vtils" alt="Gzip Size"> <img src="https://badgen.net/github/license/fjc0k/vtils" alt="License"></p>

<h2 align="center">小巧实用的 JavaScript 工具类库。</h2>

<p align="center">
  <a href="https://fjc0k.github.io/vtils/">https://fjc0k.github.io/vtils/vtils</a>
</p>

## 特性

- 源于日常项目实践，更实用
- 使用 TypeScript 编写，类型友好
- 支持摇树优化(Tree Shaking)，只引入使用到的工具
- 浏览器、Node、小程序多端兼容

## 说明

`vtils` 自身并不包括一些已有成熟库的工具，如时间处理、网络请求等，在此做下推荐：

- 时间处理：[dayjs](https://github.com/iamkun/dayjs)
- 网络请求：[axios](https://github.com/axios/axios)、[taro-axios](https://github.com/fjc0k/taro-axios)

## 安装

```bash
# yarn
yarn add vtils

# or, npm
npm i vtils --save
```

你也可通过 CDN 安装，然后使用全局变量 `vtils` 访问相关工具：

```html
<script src="https://cdn.jsdelivr.net/npm/vtils@2.57.0/lib/index.umd.min.js" crossorigin="anonymous"></script>

<script>
  if (vtils.inBrowser()) {
    alert('您在浏览器中...')
  }
</script>
```

## 使用

在线体验：[https://stackblitz.com/edit/vtils](https://stackblitz.com/edit/vtils)

```js
import { inBrowser, shuffle } from 'vtils'

if (inBrowser()) {
  alert('您在浏览器中...')
}

alert(shuffle([1, 2, 3, 4, 5]))
```

<!-- TYPEDOC -->

## 目录

### 📦 工具函数

<!-- 工具函数!目录 -->
👇 | 👇 | 👇 | 👇
--- | --- | --- | ---
[assign](#assign) | [base64Decode](#base64decode) | [base64Encode](#base64encode) | [base64UrlDecode](#base64urldecode)
[base64UrlEncode](#base64urlencode) | [castArray](#castarray) | [chunk](#chunk) | [clamp](#clamp)
[combine](#combine) | [createURIQuery](#createuriquery) | [debounce](#debounce) | [dedent](#dedent)
[defaultIndexTo](#defaultindexto) | [defaultTo](#defaultto) | [endsWith](#endswith) | [entries](#entries)
[escapeRegExp](#escaperegexp) | [expectType](#expecttype) | [fill](#fill) | [flat](#flat)
[flexible](#flexible) | [forOwn](#forown) | [getAbsoluteUrl](#getabsoluteurl) | [getGlobal](#getglobal)
[getType](#gettype) | [groupBy](#groupby) | [has](#has) | [ii](#ii)
[inAndroid](#inandroid) | [inBrowser](#inbrowser) | [inIOS](#inios) | [inNode](#innode)
[inRange](#inrange) | [inWechatMiniProgram](#inwechatminiprogram) | [inWechatWebview](#inwechatwebview) | [includes](#includes)
[indent](#indent) | [isArguments](#isarguments) | [isArray](#isarray) | [isBoolean](#isboolean)
[isChineseIDCardNumber](#ischineseidcardnumber) | [isDate](#isdate) | [isEmail](#isemail) | [isEmpty](#isempty)
[isEqualArray](#isequalarray) | [isFinite](#isfinite) | [isFunction](#isfunction) | [isHan](#ishan)
[isInteger](#isinteger) | [isNaN](#isnan) | [isNegativeInteger](#isnegativeinteger) | [isNil](#isnil)
[isNull](#isnull) | [isNumber](#isnumber) | [isNumeric](#isnumeric) | [isObject](#isobject)
[isPlainObject](#isplainobject) | [isPositiveInteger](#ispositiveinteger) | [isPossibleChineseMobilePhoneNumber](#ispossiblechinesemobilephonenumber) | [isPossibleChineseName](#ispossiblechinesename)
[isPromiseLike](#ispromiselike) | [isRegExp](#isregexp) | [isString](#isstring) | [isUndefined](#isundefined)
[isUrl](#isurl) | [jestExpectEqual](#jestexpectequal) | [keyBy](#keyby) | [keys](#keys)
[last](#last) | [loadResource](#loadresource) | [loop](#loop) | [mapValues](#mapvalues)
[memoize](#memoize) | [noop](#noop) | [omit](#omit) | [orderBy](#orderby)
[padEnd](#padend) | [padStart](#padstart) | [parallel](#parallel) | [parseCSSValue](#parsecssvalue)
[parseURIQuery](#parseuriquery) | [partial](#partial) | [partialBy](#partialby) | [pick](#pick)
[placeKitten](#placekitten) | [pluck](#pluck) | [randomString](#randomstring) | [range](#range)
[remove](#remove) | [removeByValue](#removebyvalue) | [repeat](#repeat) | [result](#result)
[round](#round) | [roundDown](#rounddown) | [roundUp](#roundup) | [safeGet](#safeget)
[sample](#sample) | [sequential](#sequential) | [shuffle](#shuffle) | [startsWith](#startswith)
[sum](#sum) | [sumBy](#sumby) | [throttle](#throttle) | [times](#times)
[tryGet](#tryget) | [unique](#unique) | [uniqueBy](#uniqueby) | [values](#values)
[wait](#wait) |  |  | 
<!-- 工具函数i目录 -->

### 📦 工具类

<!-- 工具类!目录 -->
👇 | 👇 | 👇
--- | --- | ---
[Disposer](#disposer) | [EasyStorage](#easystorage) | [EasyStorageAdapter](#easystorageadapter)
[EasyStorageAdapterBrowser](#easystorageadapterbrowser) | [EasyStorageAdapterBrowserLocalStorage](#easystorageadapterbrowserlocalstorage) | [EasyStorageAdapterBrowserSessionStorage](#easystorageadapterbrowsersessionstorage)
[EasyStorageAdapterMemory](#easystorageadaptermemory) | [EasyStorageAdapterWeapp](#easystorageadapterweapp) | [EasyValidator](#easyvalidator)
[EventBus](#eventbus) | [StructuredListTransformer](#structuredlisttransformer) | [Wechat](#wechat)
[XUrl](#xurl) |  | 
<!-- 工具类i目录 -->

### 📦 工具类型

<!-- 工具类型!目录 -->
👇 | 👇 | 👇 | 👇 | 👇 | 👇 | 👇 | 👇 | 👇
--- | --- | --- | --- | --- | --- | --- | --- | ---
[AnyFunction](#anyfunction) | [AnyObject](#anyobject) | [AsyncOrSync](#asyncorsync) | [AsyncReturnType](#asyncreturntype) | [Brand](#brand) | [Defined](#defined) | [If](#if) | [IsNever](#isnever) | [LiteralUnion](#literalunion)
[Merge](#merge) | [Omit](#omit) | [OneOrMore](#oneormore) | [PartialBy](#partialby) | [RequiredBy](#requiredby) | [ValueOf](#valueof) |  |  | 
<!-- 工具类型i目录 -->

## 工具列表

### 📦 工具函数

<!-- 工具函数!内容 -->
#### assign

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/assign.ts#L22) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#assign) | [回目录](#目录)</small>

分配来源对象的可枚举属性到目标对象上。

来源对象的应用规则是从左到右，随后的下一个对象的属性会覆盖上一个对象的属性。

```ts
assign(
  {},
  { x: 1 },
  { y: 2 },
  { x: 5, z: 9 },
)
// => { x: 5, y: 2, z: 9 }
```

#### base64Decode

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/base64.ts#L141) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#base64decode) | [回目录](#目录)</small>

返回 `base64` 解码后的字符串。

```ts
base64Decode('dnRpbHM=') // => vtils
base64Decode('5Lit5Zu9') // => 中国
base64Decode('8J+RqOKAjfCfkrs=') // => 👨‍💻
```

#### base64Encode

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/base64.ts#L119) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#base64encode) | [回目录](#目录)</small>

返回 `base64` 编码后的字符串。

```ts
base64Encode('vtils') // => dnRpbHM=
base64Encode('中国') // => 5Lit5Zu9
base64Encode('👨‍💻') // => 8J+RqOKAjfCfkrs=
```

#### base64UrlDecode

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/base64.ts#L185) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#base64urldecode) | [回目录](#目录)</small>

返回 `base64url` 解码后的字符串。

```ts
base64UrlDecode('dnRpbHM') // => vtils
base64UrlDecode('5Lit5Zu9') // => 中国
base64UrlDecode('8J-RqOKAjfCfkrs') // => 👨‍💻
```

#### base64UrlEncode

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/base64.ts#L165) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#base64urlencode) | [回目录](#目录)</small>

返回 `base64url` 编码后的字符串。

```ts
base64UrlEncode('vtils') // => dnRpbHM
base64UrlEncode('中国') // => 5Lit5Zu9
base64UrlEncode('👨‍💻') // => 8J-RqOKAjfCfkrs
```

#### castArray

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/castArray.ts#L14) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#castarray) | [回目录](#目录)</small>

如果 `value` 是数组，直接返回；如果 `value` 不是数组，返回 `[value]`。

```ts
castArray([123, 456]) // => [123, 456]
castArray(123) // => [123]
castArray('hello') // => ['hello']
castArray(null) // => [null]
```

#### chunk

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/chunk.ts#L21) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#chunk) | [回目录](#目录)</small>

将 `arr` 拆分成多个 `size` 长度的区块，并将它们组合成一个新数组返回。

如果 `arr` 无法等分，且设置了 `filler` 函数，剩余的元素将被 `filler` 函数的返回值填充。

```ts
const arr = [1, 2, 3, 4, 5, 6]
chunk(arr, 2) // => [[1, 2], [3, 4], [5, 6]]
chunk(arr, 3) // => [[1, 2, 3], [4, 5, 6]]
chunk(arr, 4) // => [[1, 2, 3, 4], [5, 6]]
chunk(arr, 4, index => index) // => [[1, 2, 3, 4], [5, 6, 0, 1]]
```

#### clamp

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/clamp.ts#L16) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#clamp) | [回目录](#目录)</small>

返回限制在最小值和最大值之间的值。

```ts
clamp(50, 0, 100) // => 50
clamp(50, 0, 50) // => 50
clamp(50, 0, 49) // => 49
clamp(50, 51, 100) // => 51
```

#### combine

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/combine.ts#L15) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#combine) | [回目录](#目录)</small>

创建一个对象，用一个数组的值作为其键名，另一个数组的值作为其值。

```ts
combine(
  [1, 'hi'],
  [0, false],
) // => { 1: 0, hi: false }
```

#### createURIQuery

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/URI.ts#L15) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#createuriquery) | [回目录](#目录)</small>

创建 URI 查询字符串。

```ts
createURIQuery({ x: 1, y: 'z' }) // => x=1&y=z
```

#### debounce

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/debounce.ts#L24) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#debounce) | [回目录](#目录)</small>

创建一个去抖函数，将触发频繁的事件合并成一次执行。

该函数被调用后，计时 `wait` 毫秒后调用 `fn` 函数。若在 `wait` 毫秒内该函数再次被调用，则重新开始计时。

一个应用场景：监听输入框的 `input` 事件发起网络请求。

```ts
document.querySelector('#input').oninput = debounce(
  e => {
    console.log(e.target.value)
  },
  500,
)
```

#### dedent

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/dedent.ts#L21) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#dedent) | [回目录](#目录)</small>

首先，每一行紧跟前导空白的插入值为多行时，保持缩进。

然后，移除每一行的公共前导空白。

```ts
const text = 'hello\nworld'
dedent`
  ${text}
    -.-
` // => 'hello\nworld\n  -.-'
```

移除文本中每一行的公共前导空白。

```ts
dedent(`
  hello
  world
    -.-
`) // => 'hello\nworld\n  -.-'
```

#### defaultIndexTo

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/defaultIndexTo.ts#L14) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#defaultindexto) | [回目录](#目录)</small>

当 `index` 为 `-1` 时，返回 `defaultIndex`。

```ts
defaultIndexTo(-1, 0) // => 0
defaultIndexTo(0, 0) // => 0
defaultIndexTo(1, 0) // => 1
```

#### defaultTo

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/defaultTo.ts#L21) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#defaultto) | [回目录](#目录)</small>

检查 `value` 是否是 `null`、`undefined`、`NaN`，或者是否在 `extraPredictions` 中（若提供了 `extraPredictions`），是则返回 `defaultValue`，否则返回 `value`。

```ts
defaultTo(1, 2) // => 1
defaultTo(1, 2, [1]) // => 2
defaultTo(NaN, 2) // => 2
defaultTo(null, 2) // => 2
defaultTo(undefined, 2) // => 2
```

#### endsWith

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/endsWith.ts#L13) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#endswith) | [回目录](#目录)</small>

检查 `str` 是否以 `needle` 结尾。

```ts
endsWith('hello', 'llo') // => true
endsWith('hello', 'he') // => false
```

#### entries

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/entries.ts#L17) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#entries) | [回目录](#目录)</small>

创建一个 `data` 对象自身可枚举属性的键值对数组，但不保证每次创建的数组顺序一致。

```ts
entries({
  x: 1,
  y: 2,
}) // => [['x', 1], ['y', 2]]
```

#### escapeRegExp

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/escapeRegExp.ts#L11) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#escaperegexp) | [回目录](#目录)</small>

转义正则表达式中的特殊字符。

```ts
escapeRegExp('github.com') // => 'github\\.com'
```

#### expectType

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceJest.ts#L14) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#expecttype) | [回目录](#目录)</small>

#### fill

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/fill.ts#L28) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#fill) | [回目录](#目录)</small>

使用 `value` 来填充（替换） `arr`，从 `start` 位置开始, 到 `end` 位置结束（但不包括 `end` 位置）。

```ts
fill(Array(5), () => 1) // => [1, 1, 1, 1, 1]
fill(Array(3), (value, index) => index) // => [0, 1, 2]
```

#### flat

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/flat.ts#L14) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#flat) | [回目录](#目录)</small>

提取数组中所有子数组的元素合并为一个新数组返回。

```ts
flat([
  [1, 2, '3'],
  ['', 0],
]) // => [1, 2, '3', '', 0]
```

#### flexible

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/flexible.ts#L17) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#flexible) | [回目录](#目录)</small>

移动端屏幕适配。

#### forOwn

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/forOwn.ts#L35) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#forown) | [回目录](#目录)</small>

遍历对象的可枚举属性。若遍历函数返回 `false`，遍历会提前退出。

注：基于你传入的 `obj`，遍历函数中 `key` 的类型可能为 `number`，但在运行时，`key` 始终为 `string`，因此，你应该始终把 `key` 当作 `string` 处理。（为什么会这样？https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208）

```ts
forOwn(
  { x: '1', y: 2 },
  (value, key) => {
    console.log(key, value)
  }
)
```

#### getAbsoluteUrl

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/getAbsoluteUrl.ts#L7) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#getabsoluteurl) | [回目录](#目录)</small>

获取链接的绝对地址。

#### getGlobal

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/env.ts#L15) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#getglobal) | [回目录](#目录)</small>

获取全局对象。

```ts
// 浏览器中
getGlobal() // => window
// Node 中
getGlobal() // => global
```

#### getType

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/getType.ts#L40) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#gettype) | [回目录](#目录)</small>

检测 `value` 的类型。

```ts
getType(1) // => 'Number'
getType(true) // => 'Boolean'
getType([]) // => 'Array'
getType(/hello/) // => 'RegExp'
```

#### groupBy

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/groupBy.ts#L45) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#groupby) | [回目录](#目录)</small>

根据 `iteratee` 返回的值对 `data` 进行分组。

```ts
groupBy(
  [
    { type: 1, name: '石头' },
    { type: 3, name: '花生' },
    { type: 2, name: '鲸鱼' },
    { type: 1, name: '树木' },
    { type: 2, name: '鲨鱼' },
  ],
  item => item.type,
)
// => {
// =>   1: [
// =>     { type: 1, name: '石头' },
// =>     { type: 1, name: '树木' },
// =>   ],
// =>   2: [
// =>     { type: 2, name: '鲸鱼' },
// =>     { type: 2, name: '鲨鱼' },
// =>   ],
// =>   3: [
// =>     { type: 3, name: '花生' },
// =>   ],
// => }
```

#### has

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/has.ts#L17) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#has) | [回目录](#目录)</small>

检查 `key` 是否是对象 `obj` 自身的属性。

```ts
const obj = { x: 1, 2: 'y' }
has(obj, 'x') // => true
has(obj, 2) // => true
has(obj, 'toString') // => false
```

#### ii

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/ii.ts#L15) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#ii) | [回目录](#目录)</small>

立即调用函数并返回其返回值。

注：`ii = immediately invoke`

```ts
ii(() => 1) // => 1
```

#### inAndroid

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/env.ts#L204) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#inandroid) | [回目录](#目录)</small>

检查是否在 `Android` 设备中。

```ts
// Android 设备中
inAndroid() // => true
inAndroid(
  () => console.log('你在 Android 设备中'),
)
```

#### inBrowser

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/env.ts#L49) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#inbrowser) | [回目录](#目录)</small>

检查是否在浏览器环境中。

```ts
// 浏览器中
inBrowser() // => true
inBrowser(
  () => console.log('你在浏览器中'),
)
```

#### inIOS

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/env.ts#L173) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#inios) | [回目录](#目录)</small>

检查是否在 `iOS` 设备中。

```ts
// iOS 设备中
inIOS() // => true
inIOS(
  () => console.log('你在 iOS 设备中'),
)
```

#### inNode

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/env.ts#L80) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#innode) | [回目录](#目录)</small>

检查是否在 `Node` 环境中。

```ts
// Node 中
inNode() // => true
inNode(
  () => console.log('你在 Node 中'),
)
```

#### inRange

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/inRange.ts#L36) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#inrange) | [回目录](#目录)</small>

检查 `value` 是否在某区间内。

```ts
// 2 是否在区间 (0, 2) 内
inRange(2, 0, 2, InRangeIntervalType.open) // => false

// 2 是否在区间 [0, 2] 内
inRange(2, 0, 2, InRangeIntervalType.closed) // => true

// 2 是否在区间 [0, 2) 内
inRange(2, 0, 2, InRangeIntervalType.leftClosedRightOpen) // => false

// 2 是否在区间 (0, 2] 内
inRange(2, 0, 2, InRangeIntervalType.leftOpenRightClosed) // => true
```

#### inWechatMiniProgram

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/env.ts#L112) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#inwechatminiprogram) | [回目录](#目录)</small>

检查是否在微信小程序环境中。

```ts
// 微信小程序中
inWechatMiniProgram() // => true
inWechatMiniProgram(
  () => console.log('你在微信小程序中'),
)
```

#### inWechatWebview

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/env.ts#L143) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#inwechatwebview) | [回目录](#目录)</small>

检查是否在微信浏览器环境中。

```ts
// 微信浏览器中
inWechatWebview() // => true
inWechatWebview(
  () => console.log('你在微信浏览器中'),
)
```

#### includes

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/includes.ts#L18) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#includes) | [回目录](#目录)</small>

检索值 `value` 是否在数组 `arr` 中。

```ts
includes([1, 2, 3], 1) // => true
includes([NaN, 2, 3], NaN) // => true
includes([1, 2, 3], 4) // => false
```

检索可枚举属性值 `value` 是否在对象 `obj` 中。

```ts
includes({ x: 1, y: 2 }, 1) // => true
includes({ x: 1, y: 2 }, 3) // => false
```

检索值 `value` 是否在字符串 `str` 中。

```ts
includes('hello', 'h') // => true
includes('hello', 'll') // => true
includes('hello', '123') // => false
```

#### indent

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/indent.ts#L15) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#indent) | [回目录](#目录)</small>

每一行紧跟前导空白的插入值为多行时，保持缩进。

```ts
const text = 'hello\nworld'
indent`  ${text}` // => '  hello\n  world'
```

给文本每一行的开始加上一个前导字符串。

```ts
indent('hello\nworld', '-> ')
// => '-> hello\n-> world'
```

给文本每一行的开始加上一个前导字符串，前导字符串由回调函数返回。

```ts
indent(
  'hello\nworld',
  (lineStr, lineIndex) => `${lineIndex + 1}. `,
)
// => '1. hello\n2. world'
```

#### isArguments

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L551) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isarguments) | [回目录](#目录)</small>

检查 `value` 是否是一个 `arguments` 对象。

```ts
function myFunction() {
  console.log(isArguments(arguments)) // true
}
```

#### isArray

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L16) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isarray) | [回目录](#目录)</small>

检查 `value` 是否是一个数组。

```ts
isArray(['x']) // => true
isArray('x') // => false
```

#### isBoolean

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L32) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isboolean) | [回目录](#目录)</small>

检查 `value` 是否是一个布尔值。

```ts
isBoolean(true) // => true
isBoolean(false) // => true
isBoolean('true') // => false
```

#### isChineseIDCardNumber

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L48) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#ischineseidcardnumber) | [回目录](#目录)</small>

检查 `value` 是否是合法的中国大陆居民 `18` 位身份证号码。

```ts
isChineseIDCardNumber('123456') // => false
```

#### isDate

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L159) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isdate) | [回目录](#目录)</small>

检查 `value` 是否是一个日期。

```ts
isDate(new Date()) // => true
```

#### isEmail

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L175) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isemail) | [回目录](#目录)</small>

检查 `value` 是否是一个邮件地址。

```ts
isEmail('hello@foo.bar') // => true
isEmail('hello@foo') // => false
```

#### isEmpty

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L196) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isempty) | [回目录](#目录)</small>

检查 `value` 是否是空值，包括：`undefined`、`null`、`''`、`false`、`true`、`[]`、`{}`。

```ts
isEmpty(undefined) // => true
isEmpty(null) // => true
isEmpty('') // => true
isEmpty(false) // => true
isEmpty(true) // => true
isEmpty([]) // => true
isEmpty({}) // => true
```

#### isEqualArray

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L222) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isequalarray) | [回目录](#目录)</small>

检查给定的数组的各项是否相等。

```ts
isEqualArray([1], [1]) // => true
isEqualArray([1], [5]) // => false
```

#### isFinite

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L257) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isfinite) | [回目录](#目录)</small>

检查 `value` 是否是原始有限数值。

```ts
isFinite(1) // => true
isFinite(Infinity) // => false
```

#### isFunction

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L272) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isfunction) | [回目录](#目录)</small>

检查 `value` 是否是一个函数。

```ts
isFunction(() => {}) // => true
isFunction(2000) // => false
```

#### isHan

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L287) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#ishan) | [回目录](#目录)</small>

检查 `value` 是否全是汉字。

```ts
isHan('hello') // => false
isHan('嗨咯') // => true
```

#### isInteger

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L305) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isinteger) | [回目录](#目录)</small>

检查 `value` 是否是一个整数。

```ts
isInteger(1) // => true
isInteger(1.2) // => false
isInteger(-1) // => true
```

#### isNaN

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L350) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isnan) | [回目录](#目录)</small>

检查 `value` 是否是 `NaN`。

```ts
isNaN(NaN) // => true
isNaN(2) // => false
```

#### isNegativeInteger

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L335) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isnegativeinteger) | [回目录](#目录)</small>

检查 `value` 是否是一个负整数。

```ts
isNegativeInteger(-1) // => true
isNegativeInteger(1) // => false
```

#### isNil

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L365) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isnil) | [回目录](#目录)</small>

检查 `value` 是否是 `null` 或 `undefined`。

```ts
isNil(null) // => true
isNil(undefined) // => true
```

#### isNull

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L379) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isnull) | [回目录](#目录)</small>

检查 `value` 是否是 `null`。

```ts
isNull(null) // => true
```

#### isNumber

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L397) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isnumber) | [回目录](#目录)</small>

检查 `value` 是否是一个数字。

注：`NaN` 不被认为是数字。

```ts
isNumber(1) // => true
isNumber(0.1) // => true
isNumber(NaN) // => false
```

#### isNumeric

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L414) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isnumeric) | [回目录](#目录)</small>

检查 `value` 是否是一个数值。

注：`Infinity`、`-Infinity`、`NaN` 不被认为是数值。

```ts
isNumeric(1) // => true
isNumeric('1') // => true
```

#### isObject

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L430) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isobject) | [回目录](#目录)</small>

检查 `value` 是否是一个对象。

```ts
isObject({}) // => true
isObject(() => {}) // => true
isObject(null) // => false
```

#### isPlainObject

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L447) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isplainobject) | [回目录](#目录)</small>

检查 `value` 是否是一个普通对象。

```ts
isPlainObject({}) // => true
isPlainObject(Object.create(null)) // => true
isPlainObject(() => {}) // => false
```

#### isPositiveInteger

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L320) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#ispositiveinteger) | [回目录](#目录)</small>

检查 `value` 是否是一个正整数。

```ts
isPositiveInteger(1) // => true
isPositiveInteger(-1) // => false
```

#### isPossibleChineseMobilePhoneNumber

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L122) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#ispossiblechinesemobilephonenumber) | [回目录](#目录)</small>

检测 `number` 是否可能是中国的手机号码。

```ts
isPossibleChineseMobilePhoneNumber(18000030000) // => true
isPossibleChineseMobilePhoneNumber(10086) // => false
```

#### isPossibleChineseName

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L138) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#ispossiblechinesename) | [回目录](#目录)</small>

检测 `value` 是否可能是中国人的姓名，支持少数名族姓名中间的 `·` 号。

```ts
isPossibleChineseName('鲁') // => false
isPossibleChineseName('鲁迅') // => true
isPossibleChineseName('买买提·吐尔逊') // => true
```

#### isPromiseLike

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L469) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#ispromiselike) | [回目录](#目录)</small>

检查 `value` 是否像 `Promise`。

```ts
isPromiseLike(Promise.resolve()) // => true
```

#### isRegExp

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L487) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isregexp) | [回目录](#目录)</small>

检查 `value` 是否是一个正则对象。

```ts
isRegExp(/hello/) // => true
isRegExp(new RegExp('hello')) // => true
```

#### isString

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L502) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isstring) | [回目录](#目录)</small>

检查 `value` 是否是一个字符串。

```ts
isString('') // => true
isString('hello') // => true
```

#### isUndefined

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L517) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isundefined) | [回目录](#目录)</small>

检查 `value` 是否等于 `undefined`。

```ts
isUndefined(undefined) // => true
isUndefined(void 0) // => true
```

#### isUrl

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/is.ts#L533) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isurl) | [回目录](#目录)</small>

检查 `value` 是否是一个有效的网址，仅支持 `http`、`https` 协议，支持 `IP` 域名。

```ts
isUrl('http://foo.bar') // => true
isUrl('https://foo.bar/home') // => true
```

#### jestExpectEqual

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceJest.ts#L7) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#jestexpectequal) | [回目录](#目录)</small>

这是一个 jest 测试辅助函数，等同于 `expect(actual).toEqual(expected)`，只不过是加上了类型。

#### keyBy

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/keyBy.ts#L37) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#keyby) | [回目录](#目录)</small>

根据 `iteratee` 返回的键对 `data` 进行分组，但只保留最后一个结果。

```ts
keyBy(
  [
    { type: 1, name: '石头' },
    { type: 3, name: '花生' },
    { type: 2, name: '鲸鱼' },
    { type: 1, name: '树木' },
    { type: 2, name: '鲨鱼' },
  ],
  item => item.type,
)
// => {
// =>   1: { type: 1, name: '树木' },
// =>   2: { type: 2, name: '鲨鱼' },
// =>   3: { type: 3, name: '花生' },
// => }
```

#### keys

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/keys.ts#L18) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#keys) | [回目录](#目录)</small>

返回 `obj` 的可枚举属性组成的数组。

注：基于你传入的 `obj`，返回的 `key` 的类型可能为 `number`，但在运行时，`key` 始终为 `string`，因此，你应该始终把 `key` 当作 `string` 处理。（为什么会这样？https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208）

```ts
keys({ x: 1, 2: 'y' }) // => ['x', '2'] 或 ['2', 'x']
```

#### last

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/last.ts#L13) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#last) | [回目录](#目录)</small>

返回数组 `arr` 的最后一项。

```ts
last([1, 2, 3]) // => 3
```

#### loadResource

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/loadResource.ts#L82) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#loadresource) | [回目录](#目录)</small>

加载图片、代码、样式等资源。

```ts
loadResource([
  'https://foo.bar/all.js',
  'https://foo.bar/all.css',
  'https://foo.bar/logo.png',
  {
    type: LoadResourceUrlType.js,
    path: 'https://s1.foo.bar/js/full',
    alternatePath: 'https://s2.foo.bar/js/full',
  },
]).then(() => {
  // 资源加载完成后的操作
})
```

#### loop

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/loop.ts#L16) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#loop) | [回目录](#目录)</small>

每隔 `interval` 毫秒执行一次 `callback`。

```ts
// 每隔 1000 毫秒输出一次 hello
const stop = loop(
  1000,
  () => console.log('hello'),
)
```

#### mapValues

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/mapValues.ts#L31) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#mapvalues) | [回目录](#目录)</small>

映射对象的可枚举属性值为一个新的值。

```ts
mapValues(
  { x: 1, y: 2 },
  value => value + 10,
)
// => { x: 11, y: 12 }
```

#### memoize

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/memoize.ts#L49) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#memoize) | [回目录](#目录)</small>

函数结果缓存。

```ts
let i = 0
const fn = memoize(() => i++)
fn() // => 0
fn() // => 0
```

#### noop

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/noop.ts#L9) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#noop) | [回目录](#目录)</small>

无操作函数。

```ts
noop() // => undefined
```

#### omit

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/omit.ts#L16) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#omit) | [回目录](#目录)</small>

创建一个从 `obj` 中剔除选中的可枚举属性的对象。

```ts
omit({ x: 1, y: 2 }, ['x']) // => { y: 2 }
```

#### orderBy

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/orderBy.ts#L43) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#orderby) | [回目录](#目录)</small>

允许指定一个或多个规则对数据进行排序。

```ts
orderBy(
  ['x', 'xyz', 'xy'],
  {
    iteratee: item => item.length,
    type: OrderByRuleType.desc,
  },
)
// => ['xyz', 'xy', 'x']
```

#### padEnd

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/pad.ts#L41) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#padend) | [回目录](#目录)</small>

在 `str` 右侧填充字符。

```ts
padEnd('姓名', 4, '*') // => 姓名**
```

#### padStart

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/pad.ts#L16) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#padstart) | [回目录](#目录)</small>

在 `str` 左侧填充字符。

```ts
padStart('姓名', 4, '*') // => **姓名
```

#### parallel

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/parallel.ts#L19) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#parallel) | [回目录](#目录)</small>

并行执行任务，`同步任务`、`异步任务` 皆可。

```ts
parallel([
  () => 1,
  async () => 'hello',
]).then(res => {
  // => [1, 'hello']
})
```

#### parseCSSValue

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/parseCSSValue.ts#L21) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#parsecssvalue) | [回目录](#目录)</small>

解析 `CSS` 值的数值和单位。

```ts
parseCSSValue('12px') // => { value: 12, unit: 'px' }
parseCSSValue(12) // => { value: 12, unit: 'px' }
parseCSSValue('12%') // => { value: 12, unit: '%' }
```

#### parseURIQuery

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/URI.ts#L50) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#parseuriquery) | [回目录](#目录)</small>

解析 URI 查询字符串。

兼容以 `?` 开头的查询字符串，因此你可以直接传入 `location.search` 的值。

```ts
parseURIQuery('x=1&y=z') // => { x: '1', y: 'z' }
parseURIQuery('?x=1&y=z') // => { x: '1', y: 'z' }
parseURIQuery(
  'x=1&y=z',
  parameters => ({
    ...parameters,
    x: Number(parameters.x),
  }),
) // => { x: 1, y: 'z' }
```

#### partial

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/partial.ts#L13) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#partial) | [回目录](#目录)</small>

TypeScript 中 `Partial` 的函数版本。

```ts
partial({ x: 1 } as const) // => { x?: number }
```

#### partialBy

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/partialBy.ts#L17) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#partialby) | [回目录](#目录)</small>

TypeScript 中 `PartialBy` 的函数版本。

```ts
partialBy(
  { x: 1, y: 2 } as const,
  ['x'],
) // => { x?: number, y: number }
```

#### pick

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/pick.ts#L16) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#pick) | [回目录](#目录)</small>

创建一个从 `obj` 中选中的可枚举属性的对象。

```ts
pick({ x: 1, y: 2 }, ['x']) // => { x: 1 }
```

#### placeKitten

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/placeKitten.ts#L11) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#placekitten) | [回目录](#目录)</small>

给定大小获取占位猫咪图片，图片来自：https://placekitten.com/

```ts
placeKitten(100) // => https://placekitten.com/100/100
```

给定宽高获取占位猫咪图片，图片来自：https://placekitten.com/

```ts
placeKitten(100, 200) // => https://placekitten.com/100/200
```

#### pluck

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/pluck.ts#L25) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#pluck) | [回目录](#目录)</small>

将数据中每一项的迭代值组合成一个数组返回。

```ts
pluck(
  [{ id: 1, name: 'Jay' }, { id: 2, name: 'Lily' }],
  item => item.name,
) // => ['Jay', 'Lily']
```

将数据中每一项的迭代值组合成一个对象返回，后者会覆盖前者。

```ts
pluck(
  [{ id: 1, name: 'Jay' }, { id: 2, name: 'Lily' }],
  item => item.name,
  item => item.id,
) // => { 1: 'Jay', 2: 'Lily' }
```

#### randomString

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/randomString.ts#L10) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#randomstring) | [回目录](#目录)</small>

生成一个随机字符串。

```ts
randomString() // => m481rnmse1m
```

#### range

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/range.ts#L14) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#range) | [回目录](#目录)</small>

创建一个包含从 `start` 到 `end`，但不包含 `end` 本身范围数字的数组。

```ts
range(0, 5) // => [0, 1, 2, 3, 4]
range(0, -5, -1) // => [0, -1, -2, -3, -4]
```

#### remove

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/remove.ts#L12) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#remove) | [回目录](#目录)</small>

根据索引原地删除数组中指定的值。

```ts
remove([1, 2, 3], 1) // => [1, 3]
```

#### removeByValue

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/removeByValue.ts#L12) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#removebyvalue) | [回目录](#目录)</small>

原地删除数组中第一次出现的指定值。

```ts
removeByValue([1, 2, 3], 1) // => [2, 3]
```

#### repeat

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/repeat.ts#L14) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#repeat) | [回目录](#目录)</small>

重复 `n` 次给定字符串。

```ts
repeat('a', 5) // => aaaaa
```

#### result

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/result.ts#L17) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#result) | [回目录](#目录)</small>

以数组的方式返回异步操作的结果。

```ts
// 异步操作成功
const [err, res] = await result(new Promise(resolve => resolve('ok'))) // => [null, 'ok']

// 异步操作出错
const [err, res] = await result(new Promise((resolve, reject) => reject('err'))) // => ['err']
```

以数组的方式返回函数执行的结果，如果函数返回一个异步操作，将会执行该异步操作并将其结果作为函数执行的结果返回。

```ts
// 函数执行成功
const [err, res] = await result(() => 'ok') // => [null, 'ok']
const [err, res] = await result(() => new Promise(resolve => resolve('ok'))) // => [null, 'ok']

// 函数执行出错
const [err, res] = await result(() => { throw 'err' }) // => ['err']
const [err, res] = await result(() => new Promise((resolve, reject) => reject('err'))) // => ['err']
```

#### round

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/round.ts#L35) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#round) | [回目录](#目录)</small>

对传入的数字按给定的精度四舍五入后返回。

```ts
round(3.456) // => 3
round(3.456, 1) // => 3.5
round(3.456, 2) // => 3.46
round(345, -2) // => 300
```

#### roundDown

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/round.ts#L71) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#rounddown) | [回目录](#目录)</small>

对传入的数字按给定的精度向下取值后返回。

```ts
roundDown(3.456) // => 3
roundDown(3.456, 1) // => 3.4
roundDown(3.456, 2) // => 3.45
roundDown(345, -2) // => 300
```

#### roundUp

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/round.ts#L53) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#roundup) | [回目录](#目录)</small>

对传入的数字按给定的精度向上取值后返回。

```ts
roundUp(3.456) // => 4
roundUp(3.456, 1) // => 3.5
roundUp(3.456, 2) // => 3.46
roundUp(345, -2) // => 400
```

#### safeGet

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/safeGet.ts#L4) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#safeget) | [回目录](#目录)</small>

#### sample

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/sample.ts#L15) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#sample) | [回目录](#目录)</small>

从数组中随机获取一个元素。

```ts
sample([1, 2, 3]) // => 1 或 2 或 3
```

从对象中随机获取一个可枚举属性的值。

```ts
sample({ x: 1, y: 2, z: 3 }) // => 1 或 2 或 3
```

#### sequential

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/sequential.ts#L18) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#sequential) | [回目录](#目录)</small>

顺序执行任务，`同步任务`、`异步任务` 皆可。

```ts
sequential([
  () => 1,
  async () => 'hello',
]).then(res => {
  // => [1, 'hello']
})
```

#### shuffle

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/shuffle.ts#L12) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#shuffle) | [回目录](#目录)</small>

打乱一个数组。

```ts
shuffle([1, 2]) // => [1, 2] 或 [2, 1]
```

#### startsWith

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/startsWith.ts#L13) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#startswith) | [回目录](#目录)</small>

检查 `str` 是否以 `needle` 开头。

```ts
startsWith('hello', 'he') // => true
startsWith('hello', 'llo') // => false
```

#### sum

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/sum.ts#L13) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#sum) | [回目录](#目录)</small>

计算传入值的总和。

```ts
sum([1, 2, 3]) // => 6
```

#### sumBy

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/sum.ts#L54) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#sumby) | [回目录](#目录)</small>

根据 `iteratee` 返回的结果计算传入值的总和。

```ts
sumBy(
  [
    { count: 1 },
    { count: 2 },
    { count: 3 },
  ],
  item => item.count,
)
// => 6
```

#### throttle

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/throttle.ts#L30) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#throttle) | [回目录](#目录)</small>

创建一个节流函数，给函数设置固定的执行速率。

- 该函数首次被调用时，会立即调用 `fn` 函数，并记录首次调用时间。
  - 该函数第二次被调用时：
    - 如果该次调用时间在首次调用时间的 `wait` 区间内，`timer = setTimeout(操作, 时间差)`；
      - 该函数再次被调用时：
        - 如果该次调用时间在首次调用时间的 `wait` 区间内，什么都不做；
        - 否则，清除首次调用时间和计时器，回到第一步。
    - 否则，清除首次调用时间，回到第一步。

一个应用场景：监听窗口的 `resize` 事件响应相关操作。

```ts
window.addEventListener(
  'resize',
  throttle(
    () => console.log('窗口大小改变后的操作'),
    1000,
  ),
)
```

#### times

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/times.ts#L14) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#times) | [回目录](#目录)</small>

调用函数 `n` 次，将每次的调用结果存进数组并返回。

```ts
times(4, () => {
  // 这里将会执行 4 次
})
```

#### tryGet

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/tryGet.ts#L18) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#tryget) | [回目录](#目录)</small>

尝试执行 `accessor` 返回值，若其报错，返回默认值 `defaultValue`。

```ts
const obj = { x: 1 }
tryGet(() => obj.x, 2) // => 1
tryGet(() => obj.x.y, 2) // => 2
```

尝试执行 `accessor` 返回值，若其报错，返回 `undefined`。

```ts
const obj = { x: 1 }
tryGet(() => obj.x) // => 1
tryGet(() => obj.x.y) // => undefined
```

#### unique

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/unique.ts#L13) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#unique) | [回目录](#目录)</small>

将给定的数组去重后返回。

```ts
unique([1, 2, 1, 3]) // => [1, 2, 3]
```

#### uniqueBy

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/unique.ts#L34) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#uniqueby) | [回目录](#目录)</small>

通过 `iteratee` 返回的值将给定的数组去重后返回。

```ts
uniqueBy([1, 2, 1, 3], item => item < 3) // => [1, 3]
```

#### values

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/values.ts#L14) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#values) | [回目录](#目录)</small>

返回 `obj` 自身可枚举属性值组成的数组。

```ts
values({ x: 1, 2: 'y' }) // => [1, 'y'] 或 ['y', 1]
```

#### wait

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/wait.ts#L19) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#wait) | [回目录](#目录)</small>

等待一段时间。

```ts
wait(1000).then(() => {
  // 等待 1000 毫秒后执行
})
```
<!-- 工具函数i内容 -->

### 📦 工具类

<!-- 工具类!内容 -->
#### Disposer

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/Disposer.ts#L25) | [API](https://fjc0k.github.io/vtils/vtils/classes/disposer.html) | [回目录](#目录)</small>

资源释放器。

```js
const disposer = new Disposer()
const timer = setInterval(
  () => console.log('ok'),
  1000,
)
disposer.add(() => clearInterval(timer))
document.querySelector('#stop').onclick = () => {
  disposer.dispose()
}
```

#### EasyStorage

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/EasyStorage/EasyStorage.ts#L4) | [API](https://fjc0k.github.io/vtils/vtils/classes/easystorage.html) | [回目录](#目录)</small>

#### EasyStorageAdapter

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/EasyStorage/EasyStorageAdapter.ts#L1) | [API](https://fjc0k.github.io/vtils/vtils/classes/easystorageadapter.html) | [回目录](#目录)</small>

#### EasyStorageAdapterBrowser

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/EasyStorage/EasyStorageAdapterBrowser.ts#L3) | [API](https://fjc0k.github.io/vtils/vtils/classes/easystorageadapterbrowser.html) | [回目录](#目录)</small>

#### EasyStorageAdapterBrowserLocalStorage

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/EasyStorage/EasyStorageAdapterBrowser.ts#L47) | [API](https://fjc0k.github.io/vtils/vtils/classes/easystorageadapterbrowserlocalstorage.html) | [回目录](#目录)</small>

#### EasyStorageAdapterBrowserSessionStorage

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/EasyStorage/EasyStorageAdapterBrowser.ts#L53) | [API](https://fjc0k.github.io/vtils/vtils/classes/easystorageadapterbrowsersessionstorage.html) | [回目录](#目录)</small>

#### EasyStorageAdapterMemory

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/EasyStorage/EasyStorageAdapterMemory.ts#L3) | [API](https://fjc0k.github.io/vtils/vtils/classes/easystorageadaptermemory.html) | [回目录](#目录)</small>

#### EasyStorageAdapterWeapp

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/EasyStorage/EasyStorageAdapterWeapp.ts#L12) | [API](https://fjc0k.github.io/vtils/vtils/classes/easystorageadapterweapp.html) | [回目录](#目录)</small>

微信小程序 `Storage` 适配器。

由于微信小程序的 `wx.getStorageSync` 方法对于不存在的项目会返回 `空字符串`，导致无法判断项目是否存在，因此，该适配器对存储的内容做了一层封装，以保证相关操作的结果可确定。

#### EasyValidator

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/EasyValidator.ts#L131) | [API](https://fjc0k.github.io/vtils/vtils/classes/easyvalidator.html) | [回目录](#目录)</small>

数据对象验证器。

```ts
interface Data {
  name: string,
  phoneNumber: string,
  pass1: string,
  pass2: string,
}
const ev = new EasyValidator<Data>([
  {
    key: 'name',
    type: 'chineseName',
    message: '请输入真实姓名',
  },
  {
    key: 'phoneNumber',
    type: 'chineseMobilePhoneNumber',
    message: '请输入正确的手机号码',
  },
  {
    key: 'phoneNumber',
    test: async ({ phoneNumber }, { updateMessage }) => {
      const result = await checkPhoneNumberAsync(phoneNumber)
      if (!result.valid) {
        updateMessage(result.message)
        return false
      }
    },
    message: '请输入正确的手机号码'
  },
  {
    key: 'pass1',
    test: ({ pass1 }) => pass1.length > 6,
    message: '密码应大于6位',
  },
  {
    key: 'pass2',
    test: ({ pass1, pass2 }) => pass2 === pass1,
    message: '两次密码应一致',
  },
])
ev.validate({
  name: '方一一',
  phoneNumber: '18087030070',
  pass1: '1234567',
  pass2: '12345678'
}).then(res => {
  // => { valid: false, ... }
})
```

#### EventBus

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/EventBus.ts#L28) | [API](https://fjc0k.github.io/vtils/vtils/classes/eventbus.html) | [回目录](#目录)</small>

事件巴士，管理事件的发布与订阅。

```ts
const bus = new EventBus<{
  success: () => void,
  error: (message: string) => void,
}>()
const unbindSuccessListener = bus.on('success', () => {
  console.log('成功啦')
})
const unbindErrorListener = bus.once('error', message => {
  console.error(message)
})
bus.emit('success')
bus.emit('error', '出错啦')
unbindSuccessListener()
bus.off('error')
```

#### StructuredListTransformer

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/StructuredListTransformer.ts#L19) | [API](https://fjc0k.github.io/vtils/vtils/classes/structuredlisttransformer.html) | [回目录](#目录)</small>

结构化列表数据转换器。

#### Wechat

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/Wechat.ts#L245) | [API](https://fjc0k.github.io/vtils/vtils/classes/wechat.html) | [回目录](#目录)</small>

对微信 JSSDK 的封装。

```ts
const wechat = new Wechat()
getWechatConfigAsync().then(config => {
  wechat.config(config)
})
wechat.updateShareData({
  title: '分享标题',
  desc: '分享描述',
  link: '分享链接',
  imgUrl: '缩略图地址',
})
wechat.invoke('scanQRCode').then(res => {
  // => API 调用结果
})
```

#### XUrl

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/XUrl.ts#L6) | [API](https://fjc0k.github.io/vtils/vtils/classes/xurl.html) | [回目录](#目录)</small>

将 File 转换为字符串。
<!-- 工具类i内容 -->

### 📦 工具类型

<!-- 工具类型!内容 -->
#### AnyFunction

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceType.ts#L4) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#anyfunction) | [回目录](#目录)</small>

任意函数类型。

#### AnyObject

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceType.ts#L9) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#anyobject) | [回目录](#目录)</small>

任意对象类型。

#### AsyncOrSync

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceType.ts#L45) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#asyncorsync) | [回目录](#目录)</small>

```ts
// before
type X = PromiseLike<string> | string
// after
type X = AsyncOrSync<string>
```

#### AsyncReturnType

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceType.ts#L152) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#asyncreturntype) | [回目录](#目录)</small>

类似 `ReturnType`，不过会返回 `Promise<R>` 中的 `R`。

```ts
type Result0 = ReturnType<() => Promise<number>> // => Promise<number>
type Result1 = AsyncReturnType<() => Promise<number>> // => number
```

#### Brand

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceType.ts#L23) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#brand) | [回目录](#目录)</small>

名义化类型。

```ts
type User = { id: Brand<number, User>, name: string }
type Post = { id: Brand<number, Post>, title: string }
type UserIdIsNumber = User['id'] extends number ? true: false // => true
type PostIdIsNumber = Post['id'] extends number ? true: false // => true
type PostIdIsNotUserId = Post['id'] extends User['id'] ? false : true // => true
```

#### Defined

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceType.ts#L141) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#defined) | [回目录](#目录)</small>

从 `T` 中排除 `undefined` 类型。

```ts
interface User {
  gender?: 'male' | 'female',
}
// before
type UserGender = Exclude<User['gender'], undefined>
// after
type UserGender = Defined<User['gender']>
```

#### If

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceType.ts#L125) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#if) | [回目录](#目录)</small>

条件类型。

```ts
type X = 'x'
// before
type IsX = X extends 'x' ? true : false
// after
type IsX = If<X extends 'x', true, false>
```

#### IsNever

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceType.ts#L111) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#isnever) | [回目录](#目录)</small>

检查 `T` 是否是 `never` 类型。

```ts
type X = never
// before
type XIsNever = [X] extends [never] ? true : false
// after
type XIsNever = IsNever<X>
```

#### LiteralUnion

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceType.ts#L97) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#literalunion) | [回目录](#目录)</small>

字面量联合类型。

```ts
// before: China, American 将得不到类型提示
type Country = 'China' | 'American' | string
// after: China, American 将得到类型提示
type Country = LiteralUnion<'China' | 'American', string>
```

#### Merge

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceType.ts#L84) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#merge) | [回目录](#目录)</small>

合并两个类型，后一个类型的定义将覆盖前一个类型的定义。

```ts
type X = Merge<
  { x: number, y: number },
  { x: string, z: string }
>
// => { x: string, y: number, z: string }
```

#### Omit

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceType.ts#L70) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#omit) | [回目录](#目录)</small>

从接口 `T` 中去除指定的属性。

```ts
type X = Omit<
  { x: number, y: string, z: boolean },
  'x' | 'z'
>
// => { y: string }
```

#### OneOrMore

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceType.ts#L34) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#oneormore) | [回目录](#目录)</small>

```ts
// before
type X = number | number[]
// after
type X = OneOrMore<number>
```

#### PartialBy

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceType.ts#L174) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#partialby) | [回目录](#目录)</small>

令 `T` 中的 `K` 可选。

```ts
interface User {
  id: number,
  age: number,
}
type UserWithOptionalAge = PartialBy<User, 'age'>
// type UserWithOptionalAge = {
//   id: number,
//   age?: number,
// }
```

#### RequiredBy

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceType.ts#L192) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#requiredby) | [回目录](#目录)</small>

令 `T` 中的 `K` 必填。

```ts
interface UserWithOptionalAge {
  id: number,
  age?: number,
}
type User = RequiredBy<UserWithOptionalAge, 'age'>
// type User = {
//   id: number,
//   age: number,
// }
```

#### ValueOf

<small>[源码](https://github.com/fjc0k/vtils/blob/master/packages/vtils/src/enhanceType.ts#L56) | [API](https://fjc0k.github.io/vtils/vtils/globals.html#valueof) | [回目录](#目录)</small>

返回接口 `T` 属性值的类型。

```ts
type V = ValueOf<{ x: number, y: string, z: boolean }>
// => number | string | boolean
```
<!-- 工具类型i内容 -->

## 许可

MIT ©️ Jay Fong


