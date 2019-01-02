//洗牌算法
function getDuty(duty) {
    let arr = JSON.parse(JSON.stringify(duty));
    for(let i = arr.length -1; i>0; i--) {
        let rdindex = Math.floor(Math.random()*(i));
        let curr = arr[i];
        arr[i] = arr[rdindex];
        arr[rdindex] = curr;
    }
    return arr;
}
//输入此方法
module.exports = getDuty;