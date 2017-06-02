/************************ 百度搜索，远程获取文件函数  ********************************/
function xf(data) {  //返回的远程文件的数据放在data里面了（要清楚返回的数据是什么格式（可以在浏览器中看），才能对他进行处理和使用）
    var oSearch = document.getElementById('search');    //函数中需要用到的元素就要获取
    var oList = oSearch.getElementsByTagName('ul')[0];
    var oInput = oSearch.getElementsByTagName('input')[0];
    var oDiv = oSearch.getElementsByClassName('btn')[0];
    var Ahref = oDiv.getElementsByTagName('a')[0];
    var html = "";
    if (data.s.length) {  //如果后台返回的内容有搜索数据
        oList.style.display = "block";
        for (var i = 0; i < data.s.length; i++) {
            html += '<li><a target="_blank" href="https://www.baidu.com/s?wd=' + data.s[i] + '">' + data.s[i] + '</a></li>'; //把获取到的数据添加到li中                 
           
        }
        oList.innerHTML = html;
    } else {  //如果没有数据了就隐藏ul
        oList.style.display = "none";
    }
}





/*******************  回顶部效果   ********************************/
function backTop() {
    var oDiv = document.getElementById('back-to-top');
    var stop = 0;
    setTop();
    window.onscroll = function () {

        setTop();           //初始化的时候就调用设置top值
        if (stop != 0) {   //如果不是定时器触发，也就是其他事件触发滚动条值的变化时就设置标志变量值为1，并清除定时器，让滚动条停在那个位置

            clearInterval(oDiv.timer);
        }
        stop = 1;

    }
    oDiv.onclick = function () {                                                    //点击回顶部元素时让它有运动效果的把滚动条top值变为0
        clearInterval(oDiv.timer);
        var iCur = speed = 0;
        oDiv.timer = setInterval(function () {
            iCur = document.documentElement.scrollTop || document.body.scrollTop;  //获取当前滚动条的值
            speed = Math.floor((0 - iCur) / 7);
            if (iCur == 0) {
                clearInterval(oDiv.timer);

            } else {
                document.documentElement.scrollTop = document.body.scrollTop = iCur + speed;

            }
            stop = 0;                                                             //定时器触发滚动条滚动时设置标志变量的值为0

        }, 30);

    }
    function setTop() {                                                           //设置回顶部元素的位置
        var scroll = document.documentElement.scrollTop || document.body.scrollTop;  //滚动条的top值
        if (scroll > 200) {
            oDiv.style.display = "block";
        } else {
            oDiv.style.display = "none";
        }
    

    }





}