
## Catalogue
  * let,const
  * Deconstructed assignment 
  * arrow function
  * Generator(Iterator)
  * Extension operator
  * Added Array ways
  * Template string
  * Set,Map
  * Promis
  * Async

### Let
  * Let declared variables are valid only within the code block in which they are located
  ```
    if (true) {
      let a = 10
    }
    console.log(a) // a is not defined

  ```
  * Let does not have variable promotion
  ```
  console.log(a)  // a is not deined
  let a = 10
  ```
  * Let declared variables have transient dead-band characteristics
  ```
  var a = 10
  if (true) { // 在块级作用域中有 let 关键字声明的变量，这个变量就和这个块级进行绑定
    console.log(a)
    let a = 20
  }
  // 报错 Cannot access 'a' before initialization
  ```
###const 
  * Has a block-level scope
  ```
  if (true) {
  const a = 10
  }
  console.log(a) // a is not defined
  ```
  * Constants must be assigned when they are declared
  ```
  const a //  Missing initializer in const declaration
  ```
  * After a constant is assigned, the value cannot be modified
  ```
  const a = 10
  a = 20
  console.log(a) // Assignment to constant variable.
  ```
---
### let,const distinguish with var
  1. Added block area
  2. let exists variable hoisting
  3. Be defined with const value could not to modificate




