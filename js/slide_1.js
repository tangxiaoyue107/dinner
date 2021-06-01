// var slideBox = document.getElementById("slide-box");
// 返回与指定的选择器组匹配的文档中的元素列表.
var img = document.querySelectorAll(".img-box img");
var dot = document.getElementsByClassName("dot");
// console.log(dot);
var pre = 0;
var now = 0;   //当前下标
var timeId;
img[0].style.opacity ="1";
dot[0].style.opacity ="1";
this.inter();  //浏览器加载完毕后开始轮播
// 上一张
function preImg(){
    clearInterval(timeId);  //清除由set..控制的时间
    pre=now;
    now--;
    if(now==-1)now=4;  //首尾相接
    this.change();   //图片的切换效果
    this.changeDot();
    this.inter();
}
// 下一张
function nextImg(){
    clearInterval(timeId);
    pre=now;
    now++;
    if(now==5)now=0;
    this.change();
    this.changeDot();
    this.inter();
}

// 自动轮播
function inter(){
    // console.log("aaa");
    timeId=setInterval(()=>{
        // console.log("bbb");
        pre=now;
        now++;
        if(now==5) now=0;
        this.change();
        this.changeDot();
    },2000);
}

// 样式改变
function change(){
    this.img[pre].style.opacity="0"; //当前图片的上一个图片
    this.img[now].style.opacity="1";
}

// 切换图片小点点改变
function changeDot(){
    this.dot[pre].style.opacity="0";
    this.dot[now].style.opacity="1";
}

// 点击小点点切换图片
function Dot(id){
    clearInterval(timeId);
    pre=now;
    now=id;
    this.changeDot();
    this.change();
    this.inter();
}


function todinner(){
    window.open('./pages/dinner.html','_self');
}

