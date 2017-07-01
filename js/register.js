window.onload = function(){

var oDiv = document.getElementById('reg-detail');
var aInput = oDiv.getElementsByTagName('input');
var aP = oDiv.getElementsByTagName('p');
var oSpan = oDiv.getElementsByTagName('span')[0];
var name = aInput[0];  //用户名
var psw = aInput[1];   //密码
var re_psw = aInput[2]; //确认密码
var email = aInput[3];  //邮箱
var login = aInput[4];  //立即注册
var name_mes = aP[0];   //用户名信息提示
var psw_mes = aP[1];    //密码信息提示
var re_psw_mes = aP[2];  //确认密码信息提示
var email_mes = aP[3];   //邮箱信息提示
var oSave = document.querySelector('.intensity');
var aEm = oSave.getElementsByTagName('em')   //密码强度等级


//////用户名////
name.onfocus = function(){
	name_mes.innerHTML = '<i class="iconfont icon-tishi"></i>用户名可以由中文、字母、数字、_和.组成';
}
name.onkeyup = function(){
	 oSpan.innerHTML = name.value.length + "个字符";
}
name.onblur = function(){
	 var re = /[^\w\u4e00-\u9fa5\.]/g;  //匹配非字母，数字，中文，点 ，下划线
	 if(re.test(name.value)){
	 	name_mes.innerHTML = '<i class="iconfont icon-cuowu1"></i>用户名中存在非法字符！';
	 }else if(name.value.length == 0){
        name_mes.innerHTML = '<i class="iconfont icon-cuowu1"></i>用户名不能为空！';
	 }else if(name.value.length < 5 && name.value != "" ){
        name_mes.innerHTML = '<i class="iconfont icon-cuowu1"></i>用户名字符数不能小于5！';
	 }else if(name.value.length > 20){
        name_mes.innerHTML = '<i class="iconfont icon-cuowu1"></i>用户名字符数不能大于20！';
	 }else{
	 	name_mes.innerHTML = '<i class="iconfont icon-chenggong2icon"></i>用户名设置成功~';
	 }
}
/////////密码/////

psw.onfocus = function(){
  psw_mes.innerHTML = '<i class="iconfont icon-tishi"></i>6-20位字符。由字母和数字组成。';
}

psw.onkeyup = function(){
 var re1= /\d+[a-z]+|\d+[A-Z]+|[a-z]+[A-Z]+|[a-z]+\d+|[A-Z]+\d+|[A-Z]+[a-z]/; //匹配中等密码强度
 var re2 = /\d+[a-z]+[A-Z]+|\d+[A-Z]+[a-z]+|[a-z]+\d+[A-Z]+|[a-z]+[A-Z]+\d+|[A-Z]+[a-z]+\d+|[A-Z]+\d+[a-z]+/; //匹配强密码强度
 var re3 = /^\d{6,20}$|^[a-z]]{6,20}$|^[A-Z]]{6,20}$/; //匹配弱密码强度
 var re = /[^\w]/;  //匹配非字母，数字，下划线
if(re3.test(psw.value) && psw.value.length >= 6 && !re.test(psw.value)){
 aEm[0].className = "active"; //弱 --高亮
 } 
if(re1.test(psw.value) && psw.value.length >= 6 && !re.test(psw.value)){
 aEm[1].className = "active"; //中--高亮
 }else{
  aEm[1].className = "";
 }
if(re2.test(psw.value) && psw.value.length >= 6 && !re.test(psw.value)){
 aEm[2].className = "active"; //强--高亮
 }else{
  aEm[2].className = "";
 }

 if(re.test(psw.value)){  //如果存在非法字符，则所有的强度等级都不高亮
 	aEm[0].className = "";
 	aEm[1].className = "";
 	aEm[2].className = "";
 }

//控制下面的确认密码是否能输入
if(psw.value.length >= 6){
	re_psw.removeAttribute("disabled");
	re_psw_mes.style.display = "inline-block";
}else{
	re_psw.setAttribute("disabled","");
	re_psw_mes.style.display = "none";
}




}
psw.onblur = function(){
var re = /[^\w]/;
if(psw.value.length < 6 && psw.value != ""){
psw_mes.innerHTML = '<i class="iconfont icon-cuowu1"></i>密码位数不能小于6！';
}else if(psw.value == ""){
psw_mes.innerHTML = '<i class="iconfont icon-cuowu1"></i>密码不能为空！';
}else if(psw.value.length > 20){
	psw_mes.innerHTML = '<i class="iconfont icon-cuowu1"></i>密码位数不能大于20！';
}else if(re.test(psw.value)){
    psw_mes.innerHTML = '<i class="iconfont icon-cuowu1"></i>密码存在无效字符！';
}else
{
	psw_mes.innerHTML = '<i class="iconfont icon-chenggong2icon"></i>密码设置成功~';   
}


}

//////////确认密码/////

re_psw.onfocus = function(){
  re_psw_mes.innerHTML = '<i class="iconfont icon-tishi"></i>请再次输入密码';
}

re_psw.onblur = function(){

if(re_psw.value != psw.value){
re_psw_mes.innerHTML = '<i class="iconfont icon-cuowu1"></i>密码不一致！';
}else{
	re_psw_mes.innerHTML = '<i class="iconfont icon-chenggong2icon"></i>确认密码成功~';
}


}

//////////邮箱////


email.onfocus = function(){
  email_mes.innerHTML = '<i class="iconfont icon-tishi"></i>请正确输入邮箱';
}

email.onblur = function(){ 
var re = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;
if(!re.test(email.value) && email.value != ""){
email_mes.innerHTML = '<i class="iconfont icon-cuowu1"></i>邮箱格式不对！';
}else if(email.value == ""){
email_mes.innerHTML = '<i class="iconfont icon-cuowu1"></i>邮箱不能为空！';
}else{
	email_mes.innerHTML = '<i class="iconfont icon-chenggong2icon"></i>邮箱填写成功~';
}


}





}