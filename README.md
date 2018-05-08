# Front-end-automation-unit-testing


## 所需要的工具

  :cloud::rocket:要想完成一个单元测试，我们至少需要三个方向的工具。假设我们的代码是流水线上的一个个“待检验”的物品。

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


  ## 测试软件初始化

  前往本项目的根目录，运行`karma init`进行测试软件的初始化。
  （如果此时提示`command not found: karma`,你需要将karma全局安装一下。`yarn global add karma` ）
  （`chai`,`mocha`,`karma-chai`,`karma-coverage`都需要全局安装）

  然后会出现连续的一些设置选项，具体设置如图：
  
  ![karma init](https://github.com/getcleanbaby/Front-end-automation-unit-testing/raw/master/img/1525335236617.jpg)

图片里面需要注意的是：我们需要选择我们的 “待测代码” 和 “测试代码”。

待测代码我们放在根目录`src`文件夹下，测试代码放在`test`文件夹下

根目录中生成的`karma.conf.js`还不够完善，在其中的`frameworks`中增加`chai`，

```
frameworks: ['mocha','chai'],
```

在 `config.set({})`中添加：

```
plugins : [
  'karma-chai',
  'karma-mocha',
  'karma-phantomjs-launcher'
],
```


## 编写被测试的代码和测试代码

在上面初始化的截图中，我们已经设置了被测试代码和测试代码的位置`src/`和`test/`。

在被测试js文件中写两个函数：

```
function isNum (num) {
  return typeof num === 'number'
}
function isString (str) {
  return typeof str === 'string'
}
```

在测试代码中输入如下的测试代码：

```
describe('index.js的测试', function () {
  it('1应该是数字', function() {
      // expect(isNum(1)).to.be.true
      isNum('1').should.equal(true)
  })
  it('"1" 应该是字符', function() {
      // expect(isString('1')).to.be.true
      isString('1').should.equal(true)
  })
})
```

其中有两个东西我们不认识： `describe`与`it`。他们都是由测试框架`mocha`（流水线上的测试机器）提供的API。

`describe`被称为‘测试套件’，表示内部的都是一组相关联的测试。第一个参数是测试套件的名字，第二个参数是要具体执行的函数。

`it`叫做‘测试用例’。是测试的具体最小单位。和`describe`类似，第一个参数是自身的名字，第二个参数是具体执行函数。


## 运行测试

此时准备工作已经完成，可以开始测试了，命令行输入`karma start`，开始测试。如图：

![karma start result](https://github.com/getcleanbaby/Front-end-automation-unit-testing/raw/master/img/1525402872172.jpg)

从图上可以看到，我们的两个测试用例均得到了通过。

更改我们的测试用例，单元测试会在保存代码后自动运行。


## 统计测试覆盖率

我们使用`karma-coverage`去统计测试覆盖率

修改`karma.conf.js`:

```
preprocessors: {
  'src/*.js': ['coverage']
}
```
```
reporters: ['progress', 'coverage']
```

再次运行`karma start`,我们的项目中就会多出一个coverage文件夹。
浏览器打开它内部PhantomJS文件夹下面的index.html，
就可以看到测试覆盖率了，如图：

![karma-coverage](https://github.com/getcleanbaby/Front-end-automation-unit-testing/raw/master/img/1525418258321.jpg)

