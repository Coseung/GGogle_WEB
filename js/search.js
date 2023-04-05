document.getElementById("search_btn").addEventListener('clik',search_message);

function search_message(){
	alert("검색을 수행합니다!");
	let search_str = document.querySelector("#search_txt"); // 변수에 저장
    document.getElementById("search_message").innerHTML = search_str.value; // 태그에 값 추가
    console.log(search_str.value); // 콘솔에 출력

} 