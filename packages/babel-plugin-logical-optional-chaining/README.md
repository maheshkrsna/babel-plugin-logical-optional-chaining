# babel-plugin-logical-optional-chaining
> Transform Optional Chaining operators into a series of logical checks

> Supports Optional Chaining features specified by [MDN Web Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

Official Babel plugin for Optional Chaining ([babel-plugin-proposal-optional-chaining](https://www.npmjs.com/package/@babel/plugin-proposal-optional-chaining)) converts the `?.` operator into a series of Ternary operations, which is **L-E-N-G-T-H-Y**.

For instance, lookup for a deeply nested object property `b`
```
const b = obj?.a?.b
```
using Babel's plugin transpiles to:
```
var _obj$a;

const b = obj === null || obj === void 0 ? void 0 : (_obj$a = obj.a) === null || _obj$a === void 0 ? void 0 : _obj$a.b;
```
That's exhausting...😫
<br/>

The original approach for Lookup isn't short either. It consisted of **REPEATING** Object expressions:
```
const b = obj.a && obj.a.b;
```
NOPE!!! 🙅‍♂️  
<br/>

A better approach that is **EXPRESSIVE** yet **SHORT** is as shown.

```
const b = (obj.a || {}).b;
```
😊👍

### Example Usage
___

*obj?.prop*
```
// INPUT
obj.a?.b;

// OUTPUT
(obj.a || {}).b;

```
<br/>

*obj?.[expr]*
```
// INPUT
obj?.['a'];

// OUTPUT
(obj || {})['a'];
```
<br/>

*arr?.[index]*
```
// INPUT
arr?.[0];

// OUTPUT
(arr || [])[0];


// 2D ARRAY INPUT
arr?.[0]?.[1]

// 2D ARRAY OUTPUT
((arr || [])[0] || [])[1];
```
<br/>

*func?.(args)*
```
// INPUT
func?.(a);

// OUTPUT
(func && typeof func === "function") && func(a);
```


### Install
___

Using npm:
```
npm install --save-dev babel-plugin-logical-optional-chaining
```

Add this plugin inside of babel.config.js or .babelrc
```
{
    "plugins": [
        "babel-plugin-logical-optional-chaining"
    ]
}
```

### Contributors
___
[John Simon](https://twitter.com/Doctor_Vamp)
[Mahesh Krishna Kumar](https://twitter.com/fsdevkris)