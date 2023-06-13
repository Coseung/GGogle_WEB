const getJSON = function(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    const status = xhr.status;
    if(status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

getJSON('https://api.openweathermap.org/data/2.5/weather?q=anyang&appid=b5d1be74c7c4fa5d812095a956d86c01',
function(err, data) {
  if(err !== null) {
    alert('예상치 못한 오류 발생.' + err);
  } else {
    alert(`현재
      온도는 ${parseInt(data.main.temp)-273}°
      풍속은 ${data.wind.speed}m/s
      습도는 ${data.main.humidity}%
입니다.
`)
  }
});