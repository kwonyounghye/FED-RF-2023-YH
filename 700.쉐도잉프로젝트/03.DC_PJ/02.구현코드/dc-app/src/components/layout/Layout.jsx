// DC.com 레이아웃 컴포넌트 : 실제적인 최상위 컴포넌트임!

import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";

// Context API 불러오기
import { dcCon } from "../modules/dcContext";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

export function Layout() {

  // 랜더링 후 실행구역 /////////////////////
  useLayoutEffect(()=>{
    // 페이지 이동 시 스크롤 위치 상단이동
    window.scrollTo(0,0);
  })

  // 라우터 이동객체 설정 -> 컨텍스트 API 사용!
   const goNav = useNavigate();
  // 라우터 이동함수
   const chgPage = (txt) => goNav(txt);

   /****************************************
     [ 컨텍스트 API 공유값 설정 ]
     1. chgPage함수 : 라우터 이동 기능
   ****************************************/
  //  리턴 코드 //////////////////////////
    return (
      // 담은 것이 여러개일지라도 다 전달됨
      <dcCon.Provider value={{chgPage}}> 
      <TopArea />
      <MainArea />
      <FooterArea />
      </dcCon.Provider>
    );
} ////////// Layout 컴포넌트 ///////////////////