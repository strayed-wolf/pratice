window.lvye = {};
window.tools.getMouse = function (element) { 
    var mouse = { x: 0, y: 0 };
    element.addEventListener("mousemove", function (e) { 
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
