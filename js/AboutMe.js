window.onload = function () {

    /********************** 雪花飘落  ************************************/
    (function () {

        function snowFlow(left, height, src) {
            var snowFlow = document.getElementById('snow');
            var container = document.createElement('div');
            var pic = document.createElement('img');
            pic.className = 'pic';
            pic.src = src;
            container.className = 'container';
            container.appendChild(pic);
            snowFlow.appendChild(container);
            container.style.left = left + 'px';
            container.style.height = height + 'px';
            setTimeout(function () {
                snowFlow.removeChild(container);
            }, 5000);
        }
        setInterval(function () {
            var left = Math.random() * window.innerWidth;
            var height = Math.random() * window.innerHeight;
            var src = 'images/s.png';
            snowFlow(left, height, src);
        }, 500)
    })();


    /********************** 全屏滚动  ***********************************/

   (function () {
        var wrap = document.getElementById("wrap");
        var divHeight = window.innerHeight;

        wrap.style.height = divHeight + "px";

        var content = $(".content");

        content.height(divHeight);

        var startTime = 0, //开始翻屏时间  
        endTime = 0,
        now = 0;

        if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
            //for firefox;  
            document.addEventListener("DOMMouseScroll", scrollFun, false);

        }
        else if (document.addEventListener) {

            document.addEventListener("mousewheel", scrollFun, false);  //标准浏览器下的事件绑定

        }
        else if (document.attachEvent) {

            document.attachEvent("onmousewheel", scrollFun); //ie非标准浏览器下的事件绑定（其实都不用考虑了）

        }
        else {

            // document.onmousewheel = scrollFun;

        }

        //滚动事件处理函数  
        function scrollFun(event) {

            startTime = new Date().getTime(); //返回当前Date对象所表示的时间距1970年1月1日午夜的毫秒数。

            var delta = event.detail || (-event.wheelDelta); //记录鼠标滚动的值（向下滚动变为正数了）
            // console.log("end"+endTime);
           // console.log("start"+startTime);
            if ((endTime - startTime) < -1000) { //初始endTime为0
                //1秒内执行一次翻页  //防止一直滚动滚轮时连续触发滚动事件

                if (delta > 0 && parseInt(main.style.top) > -divHeight * (content.length - 1)) { //向下翻页  

                    now += divHeight;

                    turnPage(now);

                }

                if (delta < 0 && parseInt(main.style.top) < 0) { //向上翻页  

                    now -= divHeight;

                    turnPage(now);

                }

                endTime = new Date().getTime();  // 滚动事件完成后给endTime赋值当前事件

            }
            else {

                event.preventDefault();  //阻止默认事件

            }

        }

        //翻页函数  
        function turnPage(now) {
           // startMove(oMain, { "top": -now });//运动框架引入进去有点颤动，不用
            $("#main").animate({ top: (-now + 'px') }, 1000);
        }  
    })();



  







}







