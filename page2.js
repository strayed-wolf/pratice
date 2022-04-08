//不同浏览器坐标的兼容函数
function getMouse(element) { 
    //内部var不能改成let
    var mouse = { x: 0, y: 0 };
    element.addEventListener("mousedown", function (e) { 
        var e = e || window.event;
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY;
        }
        else { 
            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        x -= element.offsetLeft;
        y -= element.offsetTop;

        mouse.x = x;
        mouse.y = y;
    })
    return mouse;
}
let draw = document.getElementById("draw");

draw.onclick = function () {
    var a = 0;
    alert("请从视频区域左上角开始顺时针标出计分区域点")
    let cnv = document.getElementById("canvas");
    let cxt = cnv.getContext("2d");
    let txt = document.getElementById("txt");
    let mouse = getMouse(cnv);
    
    cnv.addEventListener("mousedown", function () {
        if (a> 3) {
            //判断是否采集完点，同时提交场地坐标数据，清零计数器
            alert("已完成区域采集，请核对。若误触，请重新采集");
            a = 0;
        }
        else {
            txt.innerHTML = "鼠标指针坐标：(" + mouse.x + "," + mouse.y + ")";
            a = a + 1;
        }
    }, false);
}

start.onclick = function () { 

    var myVideo=document.getElementById("video1"); 
	if (myVideo.paused) 
	  myVideo.play(); 
	else 
	  myVideo.pause(); 
}
