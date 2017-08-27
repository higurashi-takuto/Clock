cheet('↑ ↑ ↓ ↓ ← → ← → b a', function (){
	clearInterval(clock_int)
	clock_rand = setInterval(rand, 100);
	setTimeout('stop()',2000)
});
window.onload = function(){
	document.body.onclick = function(){
		if(this.webkitRequestFullscreen){
			this.webkitRequestFullscreen();
		} else if(this.mozRequestFullScreen){
			this.mozRequestFullScreen();
		} else if(this.msRequestFullscreen){
			this.msRequestFullscreen();
		} else if(this.requestFullscreen){
			this.requestFullscreen();
		} else{
			return;
		}
	}
}

function split_number(num){
	var ten;
	var one;
	ten = Math.floor(num / 10);
	one = num % 10;
	return [ten, one];
}

function make_tag(basename){
	return "<img src=\"assets/images/" + basename + ".png\">"
}

function clock(){
	var time = new Date();
	var month = split_number(time.getMonth()+1);
	var day = split_number(time.getDate());
	var hour = split_number(time.getHours());
	var min  = split_number(time.getMinutes());
	var sec  = split_number(time.getSeconds());
	document.getElementById("month_ten").innerHTML = make_tag(month[0]);
	document.getElementById("month_one").innerHTML = make_tag(month[1]);
	document.getElementById("slash").innerHTML = make_tag("slash");
	document.getElementById("day_ten").innerHTML = make_tag(day[0]);
	document.getElementById("day_one").innerHTML = make_tag(day[1]);
	document.getElementById("hour_ten").innerHTML = make_tag(hour[0]);
	document.getElementById("hour_one").innerHTML = make_tag(hour[1]);
	document.getElementById("colon1").innerHTML = make_tag("colon");
	document.getElementById("minute_ten").innerHTML = make_tag(min[0]);
	document.getElementById("minute_one").innerHTML = make_tag(min[1]);
	document.getElementById("colon2").innerHTML = make_tag("colon");
	document.getElementById("second_ten").innerHTML = make_tag(sec[0]);
	document.getElementById("second_one").innerHTML = make_tag(sec[1]);
}

function rand(){
	var rand_num = new Array(8);
	for(var i=0;i<rand_num.length;i++){
		rand_num[i] = Math.floor(Math.random() * 10)
	}
	rand_num[1] = "dot"
	document.getElementById("month_ten").innerHTML = make_tag("0");
	document.getElementById("month_one").innerHTML = make_tag("0");
	document.getElementById("slash").innerHTML = make_tag("0");
	document.getElementById("day_ten").innerHTML = make_tag("0");
	document.getElementById("day_one").innerHTML = make_tag("0");
	document.getElementById("hour_ten").innerHTML = make_tag(rand_num[0]);
	document.getElementById("hour_one").innerHTML = make_tag(rand_num[1]);
	document.getElementById("colon1").innerHTML = make_tag(rand_num[2]);
	document.getElementById("minute_ten").innerHTML = make_tag(rand_num[3]);
	document.getElementById("minute_one").innerHTML = make_tag(rand_num[4]);
	document.getElementById("colon2").innerHTML = make_tag(rand_num[5]);
	document.getElementById("second_ten").innerHTML = make_tag(rand_num[6]);
	document.getElementById("second_one").innerHTML = make_tag(rand_num[7]);
}

function stop(){
	clearInterval(clock_rand)
	setTimeout(function(){clock_int = setInterval(clock, 100);}, 2000)
}

var clock_int = setInterval('clock()', 100);