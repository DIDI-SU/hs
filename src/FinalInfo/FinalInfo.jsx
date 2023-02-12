import React from "react";

const TEXT = [
  "특전의 경우 주최자의 상황에따라 변경될 수있습니다",
  "이 모임은 정말 재미를 위해 진행되오니 가벼운 마음으로 참여부탁드립니다",
  "호영의 생일이벤트에 따라 모임시간이 변경될 수 있습니다",
  "뒷풀이가 있을경우 🇰🇷🐓에서 진행됩니다",
  "포스터는 lily(@suicideroom4two)님의 커미션으로 제작되었습니다",
];

const FinalInfo = () => {
  return (
    <div className=" flex flex-col mx-4">
      <h3 className=" text-white font-semibold  mx-4">공지문</h3>

      {TEXT.map((item) => (
        <span className=" flex  text-white/60 text-xs my-2">
          <p className=" mx-2  ">💙</p> {item}
        </span>
      ))}
    </div>
  );
};

export default FinalInfo;
