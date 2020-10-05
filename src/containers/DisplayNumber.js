import React from "react";
import DisplayNumberR from "../components/DisplayNumber";
import { connect } from "react-redux";

// const DisplayNumber = () => {
//   return <DisplayNumberR />;
// };

const reduxProps = (state) => {
  return {
    number: state.number,
  };
};

// connect의 1번째인는 상태 2번째는 함수이다
// 그리고 2번쨰 괄호가 전달할곳의 명칭인데 원래 문법이 이렇다고합니다..
export default connect(reduxProps, null)(DisplayNumberR);
