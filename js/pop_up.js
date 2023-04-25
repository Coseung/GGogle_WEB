function pop_up(){
	window.open("../pop_up/pop_up.html","팝업 테스트", "width =400, height =300, top=10, left=10")
}

function showclock(){
	let currentDate = new Date();
	let divClock = document.getElementById("divClock");
	let msg = "현재시간: ";
	
	if (currentDate.getHours()>12){
		msg += "오후";
		msg += currentDate.getHours()-12 +"시";
		
		
	}else if(currentDate.getHours() == 12){
		msg += "오후";
		msg += currentDate.getHours() +"시";
	}
	else {		
		msg +="오전";
		msg += currentDate.getHours()+ "시";
		 }
	msg += currentDate.getMinutes()+"분";
	msg += currentDate.getSeconds()+"초";
	
	
	if(currentDate.getMinutes()>58){
		divClock.style.color ="red";
	}
	divClock.innerHTML = msg;
	setTimeout(showclock, 1000);
	
}




















/*function showclock(){
	let currentDate = new Date;
	let divClock = document.getElementById('divClock');
	let msg ="현재시간 : ";
	
	
	if (currentDate.getHours() >=12){
		msg += "오후";
		msg += currentDate.getHours() -12 +"시";
		
		
	}
	else{
		msg+= "오전";
		msg += currentDate.getHours() + "시";
		
	}
	
	if(currentDate.getMinutes() >=59){
		msg.style.color ="red"
	}
	msg +=currentDate.getMinutes() +"분";
	msg += currentDate.getSeconds() +"초";
	divClock.innerHTML = msg;
	setTimeout(showclock, 1000);//1000초 단위 갱신, 10000 10초 단위 갱신  5000 5초단위 갱신 
	
}*/