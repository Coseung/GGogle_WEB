document.getElementById("search_btn").addEventListener('click', search_message);

var search_array=[]; // 빈 배열 – 전역 변수


function search_message(){
	let Fword_str ="개새끼";
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
    
    let search_str = document.querySelector("#search_txt");
    if(search_str.value.length === 0){
       alert("검색어가 비었습니다. 입력해주세요"); 
    }
    else{
		if(search_array.length >=10){
			search_array.shift();
			search_array.push();
			search_array.sort();
		}
		
       alert("검색을 수행합니다!"); 
		search_array.push(search_str.value);
		let text = document.getElementById("search_message").innerHTML =search_array.toString();
		document.querySelector("#form_main").submit();
    }
	

		
	
	
	
}