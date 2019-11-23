var i=0;
var time;
$(document).ready(function(){
	$('.ig').eq(0).show().siblings().hide();
	timer();
	$('.banner-left').click(function(){
		clearInterval(time);
		if(i==0){
			i=4;
		}
		i--;
		time_show();
		timer();
	})
	$('.banner-right').click(function(){
		clearInterval(time);
		if(i==3){
			i=-1;
		}
		++i;
		time_show();
		timer();
	})
})
function timer(){
	time=setInterval(function(){
		time_show();
		i++;
		if(i==4){
			i=0;
		}
	},2000);
}
function time_show(){
	$('.ig').eq(i).fadeIn(300).siblings().fadeOut(300);
}