function pop_up(){
	window.open("../pop_up/pop_up.html", "팝업테스트",  "width =400, height= 300, top =10, left =100");
}



function showclock(){
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
	
	msg +=currentDate.getMinutes() +"분";
	msg += currentDate.getSeconds() +"초";
	divClock.innerText = msg;
	setTimeout(showclock, 1000);
	
	
	
}