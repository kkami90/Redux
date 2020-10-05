//파일들을 따로 store로 관리하기위해 만든 파일

//액션

//return 값의 첫번쨰로 타입을 설정해주고 그것기준으로 그아래 reducer에서 구분을해주고있다
//2번째는 원하는 아무것이나 가능
export const increase = (size) => {
  return { type: "INCREMENT", size: size };
};

const initstate = {
  number: 0,
};

// state와 action 2가지를 받아서 작업을 실행후 반환
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { number: state.number + action.size };
    default:
      return state;
  }
};

export default reducer;
