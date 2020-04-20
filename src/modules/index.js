import { combineReducers } from "redux";
import auth from "./auth";

// 루트 리듀서
// Ducks 패턴을 사용하여 액션타입, 액션 생성 함수, 리듀서가 하나의 파일에 다 정의되어있는 리덕스 모듈을 작성
const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
