const accommodations = [];

axios({
  method: "get",
  url: "https://api.odcloud.kr/api/15093438/v1/uddi:84907450-ad9f-47c9-992e-85c44c52a044?page=1&perPage=100&returnType=JSON&serviceKey=%2FEZ%2FTz3fodh0RrXokEzsSguYg6%2B6ayxYayOLK%2FTJeL4pMgzfZHCY7d3lFGLIqqvEIPanQEzl9mhMWjJwbXYGZw%3D%3D",
  responseType: "json",
}).then((response) => {
  for (var i = 0; i < response.data.data.length; i++) {
    accommodations.push({
      객실수: response.data.data[i].객실수,
      업소명: response.data.data[i].업소명,
      전화번호: response.data.data[i].전화번호,
      주소: response.data.data[i].주소,
      주차: response.data.data[i].주차,
      홈페이지: response.data.data[i].홈페이지,
    });
  }

  let list = document.getElementById("accommodation_list");
  let info = document.getElementById("information");
  for (var i = 0; i < accommodations.length; i++) {
    // 객체의 정보를 변수에 저장합니다
    const 객실수 = accommodations[i].객실수;
    const 업소명 = accommodations[i].업소명;
    const 전화번호 = accommodations[i].전화번호;
    const 주소 = accommodations[i].주소;
    const 주차 = accommodations[i].주차;
    const 홈페이지 = accommodations[i].홈페이지;

    // listitem을 생성합니다
    let listitem = document.createElement("li");

    // 생성한 listitem을 정의합니다
    listitem.className = "list-group-item";
    listitem.innerText =
      accommodations[i].업소명 + "\n" + accommodations[i].주소;
    listitem.onclick = () => {
      info.innerText =
        "업소명: " +
        업소명 +
        "\n주소: " +
        주소 +
        "\n객실수: " +
        객실수 +
        "\n주차: " +
        주차 +
        "\n전화번호: " +
        전화번호 +
        "\n홈페이지: " +
        홈페이지;

      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(주소, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${업소명}</div>`,
          });
          infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.panTo(coords);
        }
      });
    };

    // 정의한 listitem을 추가합니다
    list.appendChild(listitem);
  }

  var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(35.846758, 127.129401), // 지도의 중심좌표
      level: 4, // 지도의 확대 레벨
    };

  // 지도를 생성합니다
  var map = new kakao.maps.Map(mapContainer, mapOption);

  // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
  var mapTypeControl = new kakao.maps.MapTypeControl();

  // 지도 타입 컨트롤을 지도에 표시합니다
  map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

  // 주소-좌표 변환 객체를 생성합니다
  var geocoder = new kakao.maps.services.Geocoder();
});
