## Translate number to `Bengali`

**Installation**

```bash
npm install bnnum
```

**Example**

```js
import bnNum from 'bnnum'

console.log(bnNum(4587))
// => ৪৫৮৭

console.log(bnNum(4587, true))
// => ৪,৫৮৭
```

**Parameters**

| Name  | Data Type | Description                                    |
| ----- | --------- | ---------------------------------------------- |
| num   | `int`     | Number to convert in Bengali                   |
| komma | `boolean` | (**Default:**`false`) Komma notation on number |

**Returns**

```
@return {string} Translated bangla number
```

### Known Issue

This package will not works in backend

## Issue fixer credits

Solved issue #1 by [jobayerarman](https://github.com/jobayerarman)
