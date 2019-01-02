var users  = ["xiaoming","xiaohong",]

var html = "<div class = 'duty'><h2>hihihi</h2></div>"
function create() {
    const el = document.createElement("div");
    el.innerHTML = html;
    var fa = document.getElementById("ondutys");
    fa.appendChild(el);
}

function createOnduty(){
    //判断输入
    let inp = document.getElementById("onduty_name");
    console.log(inp.value);
    if(inp){
        create();
    }
}