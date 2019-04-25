//添加canvas大小自适应
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
let isAllowDrawLine = false

const windowToCanvas = (canvas, x, y) => {
    //获取canvas元素距离窗口的一些属性，MDN上有解释
    let rect = canvas.getBoundingClientRect()
    //x和y参数分别传入的是鼠标距离窗口的坐标，然后减去canvas距离窗口左边和顶部的距离。
    return {
        x: x - rect.left * (canvas.width/rect.width),
        y: y - rect.top * (canvas.height/rect.height)
    }
}

myCanvas.onmousedown = e => {
    //获得鼠标按下的点相对canvas的坐标。
    let ele = windowToCanvas(myCanvas, e.clientX, e.clientY)
    //es6的解构赋值
    let { x, y } = ele
    //绘制起点。
    ctx.moveTo(x, y)
    isAllowDrawLine = true;
    //鼠标移动事件
    myCanvas.onmousemove = e => {
        //移动时获取新的坐标位置，用lineTo记录当前的坐标，然后stroke绘制上一个点到当前点的路径
        if(isAllowDrawLine){
            let ele = windowToCanvas(myCanvas, e.clientX, e.clientY)
            let { x, y } = ele
            ctx.lineTo(x, y)
            ctx.stroke()
        }
    }
}

myCanvas.onmouseup = _ =>{
    isAllowDrawLine = false;
}

document.getElementById("lineColor").onchange = e => {
        // document.getElementById('lineColor').click();
        // document.body.style.background = this.value;
        // console.log("haha")
        console.log(this.value);
        // document.getElementById("colorIcon").color = this.value;
    };