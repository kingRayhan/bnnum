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

**Parameters and returns**

```
   @param  {int}                            num Number to convert in Bengali
   @param  {boolean | false} [komma=false]  komma notation on number
   @return {string}                         Translated bangla number
```

### Attension

This package will not works in backend
