# datepicker.mobile
日期选择demo

###demo预览

![默认主题](https://github.com/OldGuys/datepicker.mobile/raw/master/demo2.png)

![蓝色主题](https://github.com/OldGuys/datepicker.mobile/raw/master/demo1.png)

![预览](https://github.com/OldGuys/datepicker.mobile/raw/master/demo3.png)

###如何使用？

1. demo/index.html中样例所示，引入如下js
```html
	<script type="text/javascript" src="./js/util.js"></script>
    <script type="text/javascript" src="./js/date.js"></script>
```
> util.js工具类，date.js主要操作js

> date.js中一些日期操作展依赖util.js

2. 创建date
```js
/**
 * 初始化传入参数说明
 * 
 * @param  {[date]}      [设置日期]
 * @param  {[theme]}     [主题设置：目前白蓝两种主题，默认白色主题]
 * @param  {[onSelect]}  [日期选中后回调函数 参数date为选中日期]
 */
date.init(
    {
        date : '2016-01-07',
        theme : 'blue',
        onSelect : function(date){
        console.log(date);
    }}
);
```
3. 配置参数
```js
{
	date : '2016-01-07',//传入初始化日期
    theme : 'blue',//目前白蓝两种主题，默认白色主题
    onSelect : function(date){
    	console.log(date);//日期选中后回调函数 参数date为选中日期
	}
}
```
