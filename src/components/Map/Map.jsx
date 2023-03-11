import React, { useEffect } from "react";
const { kakao } = window;

const Map = () => {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.513314100557, 126.895787743236), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); // 지도를 생성합니다

    // 마커가 표시될 위치입니다
    const markerPosition = new kakao.maps.LatLng(
      37.513314100557,
      126.895787743236
    );

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, []);
  return (
    <div
      id="map"
      style={{ width: "300px", height: "300px", margin: "20px" }}
    ></div>
  );
};

export default Map;
