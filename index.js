
var onduty = ["小明","王大锤","李逍遥","牛魔王","张飞","紫金山"];


var html = "<div class = 'duty'><h2>hihihi</h2></div>"

function create() {
    let el = createTable();
    var fa = document.getElementById("ondutys");
    console.log(fa);
    fa.appendChild(el);
}

function createOnduty(){
    //判断输入
    let inp = document.getElementById("onduty_name");
    let war = document.getElementById("warn");
    console.log(inp.value);
    if(inp.value){
        war.style.visibility= "hidden";
        create();
    } else {
        war.style.visibility= "visible";
    }
}

function createTable () {
    let el = document.createElement("table");
    el.style.margin = "auto";
    el.setAttribute("border","1px");
    let trh = document.createElement("tr");
    var week = ["星期一","星期二","星期三","星期四","星期五"]
    for(let i = 0; i< 5; i++) {
        let th = document.createElement("th");
        th.innerText = week[i];
        trh.appendChild(th);
    }
    el.appendChild(trh);

    let onduty_xp = getDuty(onduty);
    let tr = document.createElement("tr");
    for(let i = 0; i< 5; i++) {
        let td = document.createElement("td");
        td.innerText = onduty_xp[i];
        tr.appendChild(td);
    }
    el.appendChild(tr);
    
    return el;
}

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