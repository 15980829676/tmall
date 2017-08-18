///<reference path="js/jquery-1.7.2.min.js"/>
$(function(){

	$('.music').click(function(){
	var music = document.getElementById("music"); 
    if(music.paused){ 
        music.play(); 
        $(this).addClass('active');
       // $("#music_btn").attr("src","play.gif"); 
    }else{ 
     music.pause();  
      $(this).removeClass('active'); 
       // $("#music_btn").attr("src","pause.gif"); 
    } 
		
	})
	//loading
		$(document).ready(function(){
var canvas = document.getElementById("myCanvas_1");

//var progressText = new createjs.Text("","20px Arial", "#dd4814");


//定义相关JSON格式文件列表
function setupManifest() {
    manifest = [{
        src:  "mp3/da.mp3",
        id: "music"
    },{
    	src:'img/zhiling1.jpg',
    	 id: "t"
    },{
    	src:'img/zhiling2.jpg',
    	id: "tq"
    },{
    	src:'img/zhiling3.jpg',
    	id: "tw"
    }
 
    ];

}

//开始预加载
function startPreload() {
    preload = new createjs.LoadQueue(false);
    //注意加载音频文件需要调用如下代码行
    preload.installPlugin(createjs.Sound);         
    preload.on("fileload", handleFileLoad);
    preload.on("progress", handleFileProgress);
    preload.on("complete", loadComplete);
    preload.on("error", loadError);
    preload.loadManifest(manifest);
 
}

//处理单个文件加载
function handleFileLoad(event) {
    console.log("文件类型: " + event.item.type);
    if(event.item.id == "logo"){
        console.log("logo图片已成功加载");
    }
}
 
//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
function loadError(evt) {
    console.log("加载出错！",evt.text);
}
 
//已加载完毕进度 
var tip='';
var ko='';
function handleFileProgress(event) {
    //console.log((preload.progress*100|0) + " %");
   tip=(preload.progress*100|0)+'%';
  //var hi=$('.inner').html(tip);
    ko=tip;
  	 $('#myCanvas_1').animate({
 	'width':ko,
 },10)
 

 
}
 
//全度资源加载完毕
var timr=null;

function loadComplete(event) {
    console.log("已加载完毕全部资源");
    timr=setInterval(function(){
	 if(tip===100+'%'){
    	$('.loading').fadeOut();
    	$('.loading').remove();
    
   }
     },500)
   
}

setupManifest();
startPreload();
})
})

