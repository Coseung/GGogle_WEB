function login(){
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    let check = document.querySelector("#idSaveCheck");

	
    form.action = "../index_login.html";
    form.method = "get";
    
	 if(check.checked == true) { // 아이디 체크 o
            alert("쿠키를 저장합니다.");
            setCookie("id", id.value, 1); // 1일 저장
            alert("쿠키 값 :" + id.value);
        } 
    else { // 아이디 체크 x
            setCookie("id", id.value, 0); //날짜를 0 - 쿠키 삭제
    }
	
    if(id.value.length === 0 || password.value.length === 0 ){
        alert("아이디와 비밀번호를 모두 입력해주세요.");
    }else if(login_check()){
		
	session_set(); // 세션 생성

	}
    
	
	
}

function logout(){
	logout_count();
	session_del();
    location.href='../index.html';
}

function login_check(){
	let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput").value;
    let password = document.querySelector("#floatingPassword").value;
    let idcheck =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()-=_+])[A-Za-z\d!@#$%^&*()-=_+]{5,}$/;
	let passcheck =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	
	if(idcheck.test(id)== false){
		alert("아이디를 다시 입력해주세요 영어 5글자이상, 특수문자1개이상, 숫자1개이상");
		login_countx();
		return false;
		
	}else if(passcheck.test(password)== false){
		alert("비밀번호를 다시 입력해주세요 영어 8글자이상, 숫자 1이상");
		login_countx();
		return false;
	}
	else{
		if(login_countx() == false){
			alert("로그인이 되지않습니다");
		}else{
		form.submit();
		return true;
		}
	}
	
}

function login_count() {
  var loginCount = parseInt(getCookie("logincnt")); // 기존 로그인 횟수 가져오기
  loginCount = isNaN(loginCount) ? 0 : loginCount; // 기존 로그인 횟수가 없는 경우 0으로 초기화
  loginCount++; // 로그인 횟수 증가
  setCookie("logincnt", loginCount, 30); // 로그인 횟수를 쿠키에 저장 (유효기간: 30일)
}

// 로그아웃 횟수 증가 함수 - logout_count()
function logout_count() {
  var logoutCount = parseInt(getCookie("logoutcnt")); // 기존 로그아웃 횟수 가져오기
  logoutCount = isNaN(logoutCount) ? 0 : logoutCount; // 기존 로그아웃 횟수가 없는 경우 0으로 초기화
  logoutCount++; // 로그아웃 횟수 증가
  setCookie("logoutcnt", logoutCount, 30); // 로그아웃 횟수를 쿠키에 저장 (유효기간: 30일)
}

function login_countx() {
    var loginCountx = parseInt(getCookie("logincntx"));
    loginCountx = isNaN(loginCountx) ? 0 : loginCountx;
    loginCountx++;
    setCookie("logincntx", loginCountx, 30);
    if (loginCountx >= 4) {
        setTimeout(login_stop, 5*1000);
        alert("4분동안 로그인 차단");
		return false;
    }
	
}

function login_stop(){
    alert("로그인 가능.");
    setCookie("logincntx", 0, 1);
}


function get_id(){
	setCookie("logincntx", 0, 1);
	setTimeout(logout, 5*60*1000);
	alert(" 5분 후 로그아웃 됩니다 ");
	
	
	    if(true){
        decrypt_text();
    }
    else{
    var getParameters = function(paramName){ // 변수 = 함수(이름)
    var returnValue; // 리턴값을 위한 변수 선언
    var url = location.href; // 현재 접속 중인 주소 정보 저장
	

    var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
        for(var i = 0; i < parameters.length; i++) { 
		    var varName = parameters[i].split('=')[0];
            
            if (varName.toUpperCase() == paramName.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
            // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
		    }
	    } // 2중 for문 끝
}; // 함수 끝
		
alert(getParameters('id') + '님 방갑습니다!'); // 메시지 창 출력
		
}
}









function addJavascript(jsname) { // 자바스크립트 외부 연동
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}




addJavascript('/js/security.js'); // 암복호화 함수
addJavascript('/js/session.js'); // 세션 함수
addJavascript('/js/cookie.js'); // 쿠키 함수

