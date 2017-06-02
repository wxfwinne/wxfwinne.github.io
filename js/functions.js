window.onload = function () {

    /**************************  百度搜索  ***************************************/
    (function () {

        var oSearch = document.getElementById('search');
        var oInput = oSearch.getElementsByTagName('input')[0];
        var oList = oSearch.getElementsByTagName('ul')[0];
        var oDiv = oSearch.getElementsByClassName('btn')[0];
        var Ahref = oDiv.getElementsByTagName('a')[0];
        var oBody = document.body;
        var aScript = oBody.getElementsByTagName('script');
        var btnContent = "";
        oInput.onkeyup = function () {    //当搜索框的键盘抬起事件触发
            for (var i = 0; i < aScript.length; i++) {
                oBody.removeChild(aScript[i]);
            }
            
            if (this.value) {             //如果搜索框中有内容，那么就向页面添加script标签，然后触发上面函数的调用
                var oScript = document.createElement('script');
                oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + this.value + "&cb=xf"; //此处的xf要和获取远程文件的函数名一样（在toTop.js中），才能对应调用相应的函数
                document.body.appendChild(oScript);
                
                btnContent = '<a target="_blank" href="https://www.baidu.com/s?wd=' + this.value + '">百度搜索</a>';
                oDiv.innerHTML = btnContent;
            } else {
                oList.style.display = "none";
                btnContent = '<a target="_blank" href="https://www.baidu.com">百度搜索</a>';
                oDiv.innerHTML = btnContent;
            }

        }

        document.onclick = function () {   //当搜索输入框失去焦点的时候就隐藏ul

            oList.style.display = "none";
        }



    })();



    /***************************** 新闻区立方体旋转、左边阴影自动切换效果  ********************************************/
    (function () {
        var oChange = document.getElementsByClassName('hot-change')[0];
        var oDiv1 = document.getElementsByClassName('side-img')[0];
        var oDiv2 = document.getElementsByClassName('side-img-show')[0];
        var aImg1 = oDiv1.getElementsByTagName('img');
        var aImg2 = oDiv2.getElementsByTagName('img');
        var iNow = 0;                                                    //标识图片位置
        var iDeg = 0;                                                    //记录旋转度数
        change();                                                        //初始化
        oChange.timer = setInterval(change, 3000);
        oChange.onmouseover = function () {
            clearInterval(oChange.timer);
        };
        oChange.onmouseout = function () {
            oChange.timer = setInterval(change, 3000);
        };

        function change() {                                              // 自动切换函数
            for (var i = 0; i < aImg1.length; i++) {
                aImg1[i].className = "";
            }
            if (iNow > aImg1.length - 1) {
                iNow = 0;
            }
            oDiv2.style.WebkitTransform = "rotateY(" + iDeg * 90 + "deg)"; //立方体向右自动旋转
            oDiv2.style.transform = "rotateY(" + iDeg * 90 + "deg)";
            oDiv2.style.MsTransform = "rotateY(" + iDeg * 90 + "deg)";
            aImg1[iNow].className = "active";
            iNow++;
            iDeg++;
        }
    })();

    /**********************************  交朋友处的选项卡切换  ****************************************************/

    (function () {
        var Doc = document;
        var oDiv = Doc.getElementsByClassName('friends')[0];
        var oUl = oDiv.getElementsByTagName('ul')[0];
        var aLi = oUl.getElementsByTagName('li');
        var aImg = oDiv.getElementsByTagName('img');
        tab(aLi, aImg);
    })();

    /***************************   工具选项卡   *******************************************************************/

    (function () {
        var Doc = document;
        var oUl = Doc.querySelector("#tool .tool-nav");
        var aLi = oUl.getElementsByTagName('li');
        var aDiv = Doc.querySelectorAll("#tool .tool-content>div");

        tab(aLi, aDiv);
    })();


    ////////////////////////////////////封装选项卡///////////////////////////////////////
    function tab(obj1, obj2) {
        for (var i = 0; i < obj1.length; i++) {
            obj1[i].index = i;
            obj1[i].onclick = function () {
                for (var i = 0; i < obj1.length; i++) {

                    obj1[i].className = "";
                    obj2[i].style.display = "none";
                }
                this.className = "active";
                obj2[this.index].style.display = "block";

            }

        }

    }



    /******************************************** 时钟 **************************************/
    (function () {
        var Dov = document;  //提高性能
        var oTime = Dov.getElementById('time');
        var oP = oTime.querySelector("p");
        var oUl = oTime.querySelector("ul");
        var oHour = oTime.querySelector(".hour");
        var oMin = oTime.querySelector(".min");
        var oSec = oTime.querySelector(".sec");
        var my_day = null;
        var my_month = null;
        var my_year = null;
        toDial(oUl);
        toTime(oHour, oMin, oSec);
        setInterval(function () {
            toTime(oHour, oMin, oSec);
        }, 1000);
        var str = oP.innerHTML;
        oP.innerHTML = str + "Lucky Day：" + my_year + "年" + my_month + "月" + my_day + "日";

        function toTime(oHour, oMin, oSec) {
            var oDate = new Date();
            my_day = oDate.getDate();
            my_month = oDate.getMonth() + 1;
            my_year = oDate.getFullYear();
            var iSec = oDate.getSeconds();
            var iMin = oDate.getMinutes() + iSec / 60; //一般时钟转动都不是会正正指对，需要加上之前的秒钟
            var iHour = (oDate.getHours() % 12) + iMin / 60;  //同理
            oSec.style.WebkitTransform = "rotate(" + (iSec * 360 / 60) + "deg)";
            oMin.style.WebkitTransform = "rotate(" + (iMin * 360 / 60) + "deg)";
            oHour.style.WebkitTransform = "rotate(" + (iHour * 360 / 12) + "deg)";
            oSec.style.MsTransform = "rotate(" + (iSec * 360 / 60) + "deg)";
            oMin.style.MsTransform = "rotate(" + (iMin * 360 / 60) + "deg)";
            oHour.style.MsTransform = "rotate(" + (iHour * 360 / 12) + "deg)";
            oSec.style.transform = "rotate(" + (iSec * 360 / 60) + "deg)";
            oMin.style.transform = "rotate(" + (iMin * 360 / 60) + "deg)";
            oHour.style.transform = "rotate(" + (iHour * 360 / 12) + "deg)";
        }
        function toDial(obj) {
            var sHtml = "";
            var iDeg = 6;
            for (var i = 0; i < 60; i++) {
                sHtml += "<li style='transform:rotate(" + iDeg * i + "deg);-webkit-transform:rotate(" + iDeg * i + "deg);-ms-transform:rotate(" + iDeg * i + "deg)'></li>"
            }
            obj.innerHTML = sHtml;
        }
    })();

    /*************** 回到顶部效果（已经独立封装成一个函数在另外一个文件夹中，此处调用）  ***************************/
    (function () {
        backTop();
    })();

    /****************************************** 标签旋转  ********************************************/
    (function () {

        var radius = 100;
        var d = 200;
        var dtr = Math.PI / 180;
        var mcList = [];
        var lasta = 1;
        var lastb = 1;
        var distr = true;
        var tspeed = 11;
        var size = 200;
        var mouseX = 0;
        var mouseY = 10;
        var howElliptical = 1;
        var aA = null;
        var oDiv = null;


        var i = 0;
        var oTag = null;
        var oLabel = document.getElementById('label');
        oDiv = oLabel.getElementsByClassName('label-content')[0];
        aA = oDiv.getElementsByTagName('a');
        for (i = 0; i < aA.length; i++) {
            oTag = {};
            aA[i].onmouseover = (function (obj) {
                return function () {
                    obj.on = true;
                    this.style.zIndex = 9999;
                    this.style.color = '#fff';
                    this.style.background = '#0099ff';
                    this.style.padding = '5px 5px';
                    this.style.filter = "alpha(opacity=100)";
                    this.style.opacity = 1;
                }
            })(oTag)
            aA[i].onmouseout = (function (obj) {
                return function () {
                    obj.on = false;
                    this.style.zIndex = obj.zIndex;
                    this.style.color = '#fff';
                    this.style.background = '#30899B';
                    this.style.padding = '5px';
                    this.style.filter = "alpha(opacity=" + 100 * obj.alpha + ")";
                    this.style.opacity = obj.alpha;
                    this.style.zIndex = obj.zIndex;
                }
            })(oTag)
            oTag.offsetWidth = aA[i].offsetWidth;
            oTag.offsetHeight = aA[i].offsetHeight;
            mcList.push(oTag);
        }
        sineCosine(0, 0, 0);
        positionAll();
        (function () {
            update();
            setTimeout(arguments.callee, 40);
        })();




        function update() {
            var a, b, c = 0;
            a = (Math.min(Math.max(-mouseY, -size), size) / radius) * tspeed;
            b = (-Math.min(Math.max(-mouseX, -size), size) / radius) * tspeed;
            lasta = a;
            lastb = b;
            if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
                return;
            }
            sineCosine(a, b, c);
            for (var i = 0; i < mcList.length; i++) {
                if (mcList[i].on) {
                    continue;
                }
                var rx1 = mcList[i].cx;
                var ry1 = mcList[i].cy * ca + mcList[i].cz * (-sa);
                var rz1 = mcList[i].cy * sa + mcList[i].cz * ca;

                var rx2 = rx1 * cb + rz1 * sb;
                var ry2 = ry1;
                var rz2 = rx1 * (-sb) + rz1 * cb;

                var rx3 = rx2 * cc + ry2 * (-sc);
                var ry3 = rx2 * sc + ry2 * cc;
                var rz3 = rz2;

                mcList[i].cx = rx3;
                mcList[i].cy = ry3;
                mcList[i].cz = rz3;

                per = d / (d + rz3);

                mcList[i].x = (howElliptical * rx3 * per) - (howElliptical * 2);
                mcList[i].y = ry3 * per;
                mcList[i].scale = per;
                var alpha = per;
                alpha = (alpha - 0.6) * (10 / 6);
                mcList[i].alpha = alpha * alpha * alpha - 0.2;
                mcList[i].zIndex = Math.ceil(100 - Math.floor(mcList[i].cz));
            }
            doPosition();
        }
        function positionAll() {
            var phi = 0;
            var theta = 0;
            var max = mcList.length;
            for (var i = 0; i < max; i++) {
                if (distr) {
                    phi = Math.acos(-1 + (2 * (i + 1) - 1) / max);
                    theta = Math.sqrt(max * Math.PI) * phi;
                } else {
                    phi = Math.random() * (Math.PI);
                    theta = Math.random() * (2 * Math.PI);
                }
                //坐标变换
                mcList[i].cx = radius * Math.cos(theta) * Math.sin(phi);
                mcList[i].cy = radius * Math.sin(theta) * Math.sin(phi);
                mcList[i].cz = radius * Math.cos(phi);

                aA[i].style.left = mcList[i].cx + oDiv.offsetWidth / 2 - mcList[i].offsetWidth / 2 + 'px';
                aA[i].style.top = mcList[i].cy + oDiv.offsetHeight / 2 - mcList[i].offsetHeight / 2 + 'px';
            }
        }
        function doPosition() {
            var l = oDiv.offsetWidth / 2;
            var t = oDiv.offsetHeight / 2;
            for (var i = 0; i < mcList.length; i++) {
                if (mcList[i].on) {
                    continue;
                }
                var aAs = aA[i].style;
                if (mcList[i].alpha > 0.1) {
                    if (aAs.display != '')
                        aAs.display = '';
                } else {
                    if (aAs.display != 'none')
                        aAs.display = 'none';
                    continue;
                }
                aAs.left = mcList[i].cx + l - mcList[i].offsetWidth / 2 + 'px';
                aAs.top = mcList[i].cy + t - mcList[i].offsetHeight / 2 + 'px';
                aAs.filter = "alpha(opacity=" + 100 * mcList[i].alpha + ")";
                aAs.zIndex = mcList[i].zIndex;
                aAs.opacity = mcList[i].alpha;
            }
        }
        function sineCosine(a, b, c) {
            sa = Math.sin(a * dtr);
            ca = Math.cos(a * dtr);
            sb = Math.sin(b * dtr);
            cb = Math.cos(b * dtr);
            sc = Math.sin(c * dtr);
            cc = Math.cos(c * dtr);
        }

    })();












    /************************************* HTML5游戏 无缝切换  ****************************************************/

    (function () {

        var Doc = document;
        var oDiv = Doc.getElementById('HTML5-games');
        var oUl = oDiv.getElementsByTagName('ul')[0];
        var aLi = oDiv.getElementsByTagName('li');
        var aSpan = oDiv.getElementsByTagName('span');
        var OneSizeLi = aLi[0].offsetWidth + 16;
        var iNow = 1;
        var onOff = true; //设置开关，防止按钮多次快速点击时会向ul内添加多个li
        function updateWidth() {
            oUl.style.width = OneSizeLi * aLi.length + 'px';

        }

        updateWidth();

        aSpan[0].onclick = function () {                         //点击左边按钮，图片组向右运动

            if (onOff) {                                        //初始开关为true 能执行代码
                onOff = false;                                  //然后马上设置为false，一直到一次运动完成，才能继续添加
                for (var i = 0; i < iNow; i++) {                //先把后面要显示的li复制到当前li的前面
                    var oLi1 = aLi[aLi.length - (1 + i)].cloneNode(true);
                    oUl.insertBefore(oLi1, aLi[0]);
                    updateWidth();

                }
                for (var i = 0; i < iNow; i++) {
                    oUl.removeChild(aLi[aLi.length - 1]);
                    oUl.style.left = -iNow * OneSizeLi + 'px';  //这一步的值设置很关键

                }
                startMove(oUl, { "left": 0 }, function () {
                    onOff = true;                              //运动完成设置开关为true
                });
            }
        }
        aSpan[1].onclick = function () {                      //点击右边按钮，图片组向左滑动

            run();
        }

        oDiv.onmouseover = function () {
            clearInterval(oUl.timer);
        }
        oDiv.onmouseout = function () {
            oUl.timer = setInterval(function () { run(); }, 3000);
        }


        oUl.timer = setInterval(function () { run(); }, 3000); //开启定时器，让图片在3秒钟轮播

        function run() {                                       //图片组向左运动
            if (onOff) {                                       //初始开关为true 能执行代码

                onOff = false;                                 //然后马上设置为false，一直到一次运动完成，才能继续添加
                for (var i = 0; i < iNow; i++) {               //把前面移动消失后的li复制到当前所有li的后面
                    var oLi = aLi[i].cloneNode(true);
                    oUl.appendChild(oLi);
                    updateWidth();

                }
                startMove(oUl, { "left": -iNow * OneSizeLi }, function () {

                    for (var i = 0; i < iNow; i++) {
                        oUl.removeChild(aLi[0]);
                        oUl.style.left = 0;

                    }
                    onOff = true;                               //运动完成设置开关为true
                });
            }

        }

    })();








}

