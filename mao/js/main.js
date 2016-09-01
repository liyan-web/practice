window.onload=function() {
	//顶部导航鼠标事件绑定
	var nav_box=document.getElementById('nav_box');
	var ahover=getClass(document.getElementById("nav_box"),"ahover");
	for (var i = 0; i < ahover.length; i++) {
		addEvent(ahover[i],"mouseover",function () {
			this.style.color="#c40000";
		});
		addEvent(ahover[i],"mouseout",function () {
			this.style.color="#999";
		})
	}
	var menu_a=getClass(document.getElementById("nav_right"),"menu-a");
	var a_bT=null;
	var rot=0;
	for (var i = 0; i < menu_a.length; i++) {
		var a_b=menu_a[i].getElementsByTagName("b")[0];
		addEvent(menu_a[i],"mouseover",function () {
			this.style.color="#c40000";
			this.style.backgroundColor="#FFF";
			this.style.textDecoration="underline";
			this.style.borderColor="#EEE";
			this.style.borderBottom="1px solid #FFF";
			this.parentNode.getElementsByTagName('div')[0].style.display="block";
			var b=this.getElementsByTagName("b")[0];
			//使用边框属性，实现下拉箭头反转
			b.style.borderColor="transparent #bbb transparent transparent";
			b.style.top="14.5px";
			b.style.right="7.5px";
			clearTimeout(a_bT);
			a_bT=setTimeout(function () {
				b.style.borderColor="transparent transparent #bbb";
				b.style.top="13px";
				b.style.right="6px";
			},100);
			b.style.transition="width 2s";
		})
		addEvent(menu_a[i],"mouseout",function () {
			this.style.color="#999";
			this.style.backgroundColor="";
			this.style.textDecoration="none";
			this.style.borderColor="#F2F2F2";
			this.style.borderBottom="";
			this.parentNode.getElementsByTagName('div')[0].style.display="none";
			var b=this.getElementsByTagName("b")[0];
			//使用边框属性，实现下拉箭头恢复原位
			b.style.borderColor="#bbb transparent transparent ";
			b.style.top="16px";
			b.style.right="6px";
		})
	}//顶部鼠标事件绑定结束
	//搜索框热词加色
	var head_sh=getClass(document,"header_searsh");
	var head_sh_ul=head_sh[0].getElementsByTagName("ul")[0];
	var head_sh_ul_lis=head_sh_ul.getElementsByTagName("li");
	var li_index=[1,3,6];
	for (var i = 0; i < li_index.length; i++) {
		head_sh_ul_lis[li_index[i]].style.color='#c40000';
	}
	//第一页透明度事件绑定
	var con_ad1=getClass(document,'con_ad1');
	for (var i = 0; i < con_ad1.length; i++) {
			con_ad1[i].timer=null;
		addEvent(con_ad1[i],"mouseover",function () {
			startMove(this,{opacity:100});
		});
		addEvent(con_ad1[i],"mouseout",function () {
			startMove(this,{opacity:70});
		})
	}
	var con_ad2=getClass(document,'con_ad2');
	for (var i = 0; i < con_ad2.length; i++) {
		con_ad2[i].timer=null;
		addEvent(con_ad2[i],"mouseover",function () {
			startMove(this,{opacity:100});
		});
		addEvent(con_ad2[i],"mouseout",function () {
			startMove(this,{opacity:70});
		})
	}
	//导航菜单事件绑定
	var menu_lis=document.getElementById("left_nav").getElementsByTagName("ul")[0].getElementsByTagName("li");
	var menu_hidden=getClass(document.getElementById("con_right"),'pannel-con');
	for (var i = 0; i < menu_lis.length; i++) {
		menu_lis[i].index=i;
		addEvent(menu_lis[i],"mouseover",function () {			
			for (var i = 0; i < menu_hidden.length; i++) {
				this.style.backgroundColor="#FFF";
			 	menu_hidden[i].style.display="none";
			 	menu_hidden[this.index].style.display="block";
			 } 
		});
		addEvent(menu_lis[i],"mouseout",function () {	
			this.style.backgroundColor="";		
			for (var i = 0; i < menu_hidden.length; i++) {
			 	menu_hidden[i].style.display="none";
			 } 
		});
	}
	for (var i = 0; i < menu_hidden.length; i++) {
		menu_hidden[i].index=i;
		addEvent(menu_hidden[i],"mouseover",function () {			
			this.style.display="block";
			menu_lis[this.index].style.backgroundColor="#FFF";
		});
		addEvent(menu_hidden[i],"mouseout",function () {			
			for (var i = 0; i < menu_hidden.length; i++) {
			 	menu_hidden[i].style.display="none";
			 } 
			 menu_lis[this.index].style.backgroundColor="";
		});
	}
	//图片运动事件绑定
	var img_con=getClass(document,'img-con');
	for (var i = 0; i < img_con.length; i++) {
		img_con[i].timer=null;
		addEvent(img_con[i],"mouseover",function () {
			var img_c=this.getElementsByTagName("img")[0];
			startMove(img_c,{width:140});
		});
		addEvent(img_con[i],"mouseout",function () {
			var img_c=this.getElementsByTagName("img")[0];
			startMove(img_c,{width:133});
		})
	}
	var cont4_a=getClass(document,'cont4-a');
	for (var i = 0; i < cont4_a.length; i++) {
		cont4_a[i].timer=null;
		addEvent(cont4_a[i],"mouseover",function () {
			var img_c2=this.getElementsByTagName("img")[0];
			startMove(img_c2,{right:10});
		});
		addEvent(cont4_a[i],"mouseout",function () {
			var img_c2=this.getElementsByTagName("img")[0];
			startMove(img_c2,{right:0});
		})
	}
	var con_column_1=getClass(document,'con-column-1');
	for (var i = 0; i < con_column_1.length; i++) {
		con_column_1[i].timer=null;
		addEvent(con_column_1[i],"mouseover",function () {
			var img_m=this.getElementsByTagName("a")[0].getElementsByTagName("img")[0];
			startMove(img_m,{opacity:75});
		});
		addEvent(con_column_1[i],"mouseout",function () {
			var img_m=this.getElementsByTagName("a")[0].getElementsByTagName("img")[0];
			startMove(img_m,{opacity:100});
		})
	}
	//信息滚动条 
	var con_c1_a_1=getClass(document,'con-c1-a-1');
	for (var i = 0; i < con_c1_a_1.length; i++) {
		(function (a) {
			var con_scr=getClass(a,"con-scr") ;	
			for (var j = 0; j < con_scr.length; j++) {
			 	con_scr[j].timer=null;
			} 
			setInterval(function () {
				startMove(con_scr[0],{marginTop:-30},function () {
					con_scr[0].style.marginTop="0px";
					con_scr[0].parentNode.appendChild(con_scr[0]);
				});	
			},3000)
		})(con_c1_a_1[i]);
	} 
	//右侧固定导航事件绑定
	var fb=getClass(document.getElementById("fixed_box"),"fb");
	for (var i = 0; i < fb.length; i++) {
		fb[i].timer=null;
		var dh=fb[i].getElementsByTagName('div')[0];
		addEvent(fb[i],"mouseover",function () {
			this.style.backgroundColor="#c40000";
			var dh=this.getElementsByTagName('div')[0];
			dh.style.display="block";
			startMove(dh,{opacity:100,left:-90});						
		}); 
		addEvent(fb[i],"mouseout",function () {
			this.style.backgroundColor="#000";
			var dh=this.getElementsByTagName('div')[0];
			startMove(dh,{opacity:0,left:-125},function () {
				dh.style.display="none";
			});
		}); 
	}
	var fb1=getClass(document,"fb1_2")[0];
	fb1.timer=null;
	var dh1=fb1.getElementsByTagName('div')[0];
	addEvent(fb1,"mouseover",function () {
		dh1.style.display="block";
		startMove(dh1,{opacity:100,left:-90});				
	}); 
	addEvent(fb1,"mouseout",function () {
		startMove(dh1,{opacity:0,left:-125},function () {
		dh1.style.display="none";
		});
	}); //右侧导航事件绑定结束
	//左侧回到顶部按钮绑定
	var goup=document.getElementById("goup");
	addEvent(goup,'click',function (event) {
		var t=null;
		var sTop=document.body.scrollTop||document.documentElement.scrollTop;
		clearInterval(t);
		t=setInterval(function() {
			sTop-=450;
			if (sTop<=0) {
				clearInterval(t);
				sTop=0;
			}		
			console.log(sTop);
			document.body.scrollTop=sTop;
			document.documentElement.scrollTop=sTop;
		}, 1000/60);		
	})	
	//图片轮播方法调用
	var photos=getClass(document,"photoP");
	var tim=3500;
	var con_button=document.getElementById("con_button");
	var p_nav_li=con_button.getElementsByTagName("li");
	objplay.beginPaly(photos,tim,p_nav_li);
}
function startMove(obj,json,fn) {	
	clearInterval(obj.timer);
	obj.timer=setInterval(function() {
		var flag=true;
		for(var attr in json){
			var icur=0;
			if (attr=="opacity") {
				icur=Math.round(parseFloat(getStyle(obj,attr))*100);
			} else {
				icur=parseInt(getStyle(obj,attr));
			}
			if (icur!=json[attr]) {
				flag=false;
			} 
			var speed=(json[attr]-icur)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);	
			if (attr=="opacity") {
				obj.style.filter="alpha(opacity:"+(icur+speed)+")";
				obj.style.opacity=(icur+speed)/100;
			} else {
				obj.style[attr]=icur+speed+"px";
			}		
		}
		if(flag){
			clearInterval(obj.timer);	
			fn&&fn();	
		}
	}, 1000/60);
}
//页面滚动事件，
window.onscroll=function () {
	var sTop=document.body.scrollTop||document.documentElement.scrollTop;
	var cont3Top=document.getElementById("cont3").offsetTop||0;
	var iheight=document.documentElement.clientHeight;
	var c_parent_h=document.getElementById("cont3").offsetParent.offsetTop;
	var c_l=c_parent_h+cont3Top-sTop-iheight/2;
	var n_f_r=document.getElementById("nav_fixed_right");
	var scroll_search=document.getElementById("scroll_search");
	var search_bgc=getClass(document,'search_bgc')[0];
	//顶部搜索栏运动判断
	if(sTop>=iheight){
		startMove(scroll_search,{top:0})
		startMove(search_bgc,{top:0})
	}else{
		startMove(scroll_search,{top:-50})
		startMove(search_bgc,{top:-50})
	}
	//左侧导航栏运动判断
	if(c_l<=0){
		n_f_r.style.display="block";
		startMove(n_f_r,{opacity:100,height:333,width:36})
	}else{
		startMove(n_f_r,{height:0,width:0,opacity:0},function () {
			n_f_r.style.display="none";
		})	
	}
	//导航栏当前模块检测
	var cont4=getClass(document.getElementById("content2"),'cont4');
	for (var i = 0; i < cont4.length; i++) {
		(function (cont4,index) {
			if(c_parent_h+cont4.offsetTop-sTop-iheight/2<0){
				var nav_color=getClass(document,'nav-color');
				for (var i = 0; i < nav_color.length; i++) {
					nav_color[i].style.backgroundColor="";
				}
				nav_color[index].style.backgroundColor="red";
			}
		})(cont4[i],i)	
	}
	var oldTop=document.body.scrollTop||document.documentElement.scrollTop;
}
//获取元素属性
function getStyle(obj,attr) {
	if (getComputedStyle) {
		return getComputedStyle(obj,false)[attr];
	} else {	
		return obj.currentStyle[attr];
	}
}
//事件绑定函数定义
function addEvent(e,type,fn) {
	if (e.addEventLinstener) {
		e.addEventListener(type,fn,false);
	} else 
	if (e.attachEvent) {
		e.attachEvent('on'+type,fn);
	} else {
		e['on'+type]=fn;
	}
}
//定义class名获取元素函数
function getClass(parent,cls) {
	if (document.getElementsByClassName) {
		return parent.getElementsByClassName(cls);
	} else{
		var arr=[];
		var e_cl=[];
		var e=parent.getElementsByTagName('*');
		for (var i = 0; i < e.length; i++) {
			if(e[i].nodeType==1){
				e_cl=e[i].className.split(" ");
				for (var j = 0; j < e_cl.length; j++) {
					if(e_cl[j]==cls){
						arr.push(e[i]);
					}
				}
			}
		}
		return arr;	
	}	
}
//封装轮播方法
objplay={
	index:0,
	timer:null,
	//开始轮播时绑定按钮鼠标事件，然后调用轮播函数
	beginPaly:function (obj,time,nav) {
		for (var i = 0; i < nav.length; i++) {
			nav[i].index=i;
			addEvent(nav[i],"mouseover",function () {
				objplay.index=this.index;
				for (var j = 0; j < obj.length; j++) {
					obj[j].style.display="none";
					nav[j].style.backgroundColor="rgba(0,0,0,.5)";
					nav[j].style.borderColor="transparent";
				}
				obj[objplay.index].style.display="block";	
				nav[objplay.index].style.backgroundColor="rgba(255,255,255,.5)";
				nav[objplay.index].style.borderColor="rgba(0,0,0,.5)";
				clearInterval(objplay.timer);
				objplay.timer=setInterval(function () {
					objplay.Play(obj,nav)
				},time);
			});
		}
		clearInterval(objplay.timer);
		objplay.timer=setInterval(function () {
			objplay.Play(obj,nav)
		},time);
	},
	//轮播函数定义
	Play:function(obj,nav) {
		if (objplay.index < obj.length - 1) objplay.index++; 
	    else objplay.index = 0; 
		for (var i = 0; i < obj.length; i++) {
			obj[i].style.display="none";
			nav[i].style.backgroundColor="rgba(0,0,0,.5)";
			nav[i].style.borderColor="transparent";
		}
		obj[objplay.index].style.display="block";	
		nav[objplay.index].style.backgroundColor="rgba(255,255,255,.5)";
		nav[objplay.index].style.borderColor="rgba(0,0,0,.5)";
	}
}
