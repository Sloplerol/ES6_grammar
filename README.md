# ES6_grammar


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
  1. Let declared variables are valid only within the code block in which they are located
    ```
    if (true) {
      let a = 10
    }
    console.log(a) // a is not defined

  ```
  2. Let does not have variable promotion
    ```
    console.log(a)  // a is not deined
    let a = 10
    ```
  3. Let declared variables have transient dead-band characteristics
  ```
    var a = 10
    if (true) { // 在块级作用域中有 let 关键字声明的变量，这个变量就和这个块级进行绑定
      console.log(a)
      let a = 20
    }
    // 报错 Cannot access 'a' before initialization

  ```
### Const


