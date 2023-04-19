document.getElementById("search_btn").addEventListener('click', search_message);
var search_array = []; // 빈 배열 – 전역 변수


function search_message(){
    let search_str = document.querySelector("#search_txt"); // 변수에 저장
	/*let Fword_str ="개새끼";
	let Fword2_str ="씨발";
	let Fword3_str ="병신";
	
	if (search_str.value === Fword_str){
		alert("이쁘고 고운말을 사용합시다.");
		
	}
	else if (search_str.value === Fword2_str){
		alert("이쁘고 고운말을 사용합시다.");
	}
	else if (search_str.value === Fword3_str){
		alert("이쁘고 고운말을 사용합시다.");
	}
    */
	if(search_str.value.length === 0){
		alert("검색어가 없습니다. 입력해주세요!");
	}
	else{
		alert("검색을 수행하겠습니다!");
		search_array.push(search_str.value); // 배열에 검색어 추가

		let text = document.getElementById("search_massege").innerHTML = search_array.toString(); // 값 변환
		document.querySelector("#form_main").sumbit();
		
	}
}