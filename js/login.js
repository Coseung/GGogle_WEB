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

	login_count();	
    
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
    let idcheck =/^[a-zA-Z0-9!@#$%^&*()]{4,12}$/;
	let passcheck =/^[a-zA-Z0-9]{6,16}$/;
	
	if(idcheck.test(id)== false){
		alert("아이디를 다시 입력해주세요");
		return false;
		
	}else if(passcheck.test(password)== false){
		alert("비밀번호를 다시 입력해주세요");
		return false;
	}
	else{
		form.submit();
		return true;
	}
	
}

function login_count() {
  var loginCount = parseInt(getCookie("login_cnt")); // 기존 로그인 횟수 가져오기
  loginCount = isNaN(loginCount) ? 0 : loginCount; // 기존 로그인 횟수가 없는 경우 0으로 초기화
  loginCount++; // 로그인 횟수 증가
  setCookie("login_cnt", loginCount, 30); // 로그인 횟수를 쿠키에 저장 (유효기간: 30일)
}

// 로그아웃 횟수 증가 함수 - logout_count()
function logout_count() {
  var logoutCount = parseInt(getCookie("logout_cnt")); // 기존 로그아웃 횟수 가져오기
  logoutCount = isNaN(logoutCount) ? 0 : logoutCount; // 기존 로그아웃 횟수가 없는 경우 0으로 초기화
  logoutCount++; // 로그아웃 횟수 증가
  setCookie("logout_cnt", logoutCount, 30); // 로그아웃 횟수를 쿠키에 저장 (유효기간: 30일)
}

function get_id(){
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

