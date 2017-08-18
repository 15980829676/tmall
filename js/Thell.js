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


})

