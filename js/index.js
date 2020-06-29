
//定义一个数组 每个数组对应的 是我的图片地址
var urls=new Array("img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg");
//获取 banner下面的所有 li
var lis=document.getElementById("banners").getElementsByTagName("li");
//获取 img元素
var Img=document.getElementById("img");
//定义一个 长度 等于lis的元素个数
var len=lis.length;
for(var i=0;i<len;i++){
    /*鼠标移入事件*/
    lis[i].onmouseover=function (){
        for(var j=0;j<len;j++){
            //判断当前鼠标停留的位置是否是当前lis[j]
            if(this==lis[j]){
                //给当前lis添加样式
                lis[j].className="b_li_over";
                //并且切换当前的 img 元素的 src图片路径j
                //这个图片路径就是上面定义的数组[j]
                Img.src=urls[j];
            }
        }
    }
    /*鼠标移出事件*/
    lis[i].onmouseout=function () {
        for(var j=0;j<len;j++){
            if(this==lis[j]){
                //当鼠标离开添加离开样式
                lis[j].className="b_li_out";
            }
        }
    }
}