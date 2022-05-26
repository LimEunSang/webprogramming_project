<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>kakaomap API 응용하기</title>

    <!-- css, bootstrap -->
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />

    <!-- axios, kakaomap API, bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb7f443bad11a1319b9315c49c73e826&libraries=services"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  </head>

  <body>
    <div class="background">
      <div class="list_wrapper">
        <ul id="accommodation_list" class="list-group"></ul>
      </div>
      <div class="information_wrapper">
        <p id="information">숙박업소 정보</p>
      </div>
      <div id="map" style="width: 40vw; height: 50vh"></div>
    </div>
    <script src="accommodations.js"></script>
  </body>
</html>
