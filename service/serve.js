// TODO: write somthing.
var getDuty = require('./mylib')
//main method
// 导入http模块:
// var http = require('http');

// // 创建http server，并传入回调函数:
// var server = http.createServer(function (request, response) {
//     // 回调函数接收request和response对象,
//     // 获得HTTP请求的method和url:
//     console.log(request.method + ': ' + request.url);
//     // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     // 将HTTP响应的HTML内容写入response:
//     response.end('<h1>Hello world!</h1>');
// });

// // 让服务器监听8080端口:
// server.listen(8080);

// console.log('Server is running at http://127.0.0.1:8080/');

var onduty = ["小明","王大锤","李逍遥","牛魔王","张飞","紫金山"];

var arr_rd = getDuty(onduty);

console.log("old:"+onduty);
console.log("new:"+arr_rd);













// ac-1de/fg  转换为   ca-1ed/gf
function unstr () {
//带转换字符串
var str = "2ac-1de/fg1";
var result = [];
var arr_str = str.split("");

var s = [];
arr_str.map(function(value, index){
    if(((value <= 'z' && value >= 'a') || (value <= 'Z' && value >= 'A'))){
        s.unshift(value);
    } else {
        result.push(s.join(""));
        result.push(value);
        s = [];
    }
})

console.log(result.join(""));
}