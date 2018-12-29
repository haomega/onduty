// TODO: write somthing.

// ac-1de/fg  转换为   ca-1ed/gf

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