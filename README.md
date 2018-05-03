# Front-end-automation-unit-testing

## 所需要的工具

  要想完成一个单元测试，我们至少需要三个方向的工具。假设我们的代码是流水线上的一个个“待检验”的物品。

  - 1: 测试管理工具: 它能够将测试框架，断言库，测试浏览器，测试代码等组织起来，并且运行测试代码进行测试。我们可以将之理解为: ‘工厂的厂房，承载流水线的房间’。

  - 2: 测试框架: 提供了单元测试所需的各种API。可以理解为“流水线上的测试机器”。
  
  - 3: 断言库: 提供了描述你具体测试的API，也就是你的测试逻辑本身。 可以理解为测试机器里面运行的具体测试逻辑。


  目前这个练习，使用的默认工具列表分别是：

  ```
  测试管理工具：Karma

  测试框架：Mocha

  断言库：Chai

  测试浏览器：PhantomJs

  测试覆盖率统计工具：Karma-Coverage 
  ```

  （先不去着急去熟悉每一个，后面会懂的） 

  ## npm基础包配置

  首先，第一步肯定是初始化我们的npm并且安装所需要的包。

  ```
  yarn init

  yarn add [你所需的包名称] [如果有多个包，就依次继续写] --dev
  ```

  一切安装完后，我们的`package.json`中的`“devDependencies”`应该会是如下样子：

  ```
  "devDependencies": {
    "chai": "^4.1.2",
    "karma": "^2.0.2",
    "karma-chai": "^0.1.0",
    "karma-coverage": "^1.1.1",
    "karma-mocha": "^1.3.0",
    "karma-phantomjs-launcher": "^1.0.4",
    "mocha": "^5.1.1"
  }
  ```

  ## 
  
  ![karma init](https://github.com/getcleanbaby/Front-end-automation-unit-testing/raw/master/img/1525335236617.jpg)

