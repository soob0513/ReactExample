// 여러 개의 context를 관리하기 편하도록 파일 새로 만들기
// 확장자 js 나 jsx 상관 없음. 기능상 차이 없음
// java script, node, 리액트 모두 js 사용 => 협력할 때 구별 쉽도록 리액트는 jsx 사용 (내가 만든 컴포넌트는 jsx 파일로 구별)
import { createContext } from "react";

export const ColorContext = createContext(null);