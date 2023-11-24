// 공통 패션 서브페이지 컨텐츠 컴포넌트

import { useContext, useEffect } from "react"

// 공통 서브 CSS 불러오기
import "../css/fashion.css";
import { SwiperApp } from "../plugin/SwiperApp";

import { pCon } from "../modules/PoliotContext";
import $ from 'jquery';

export function Fashion(props) {
    // props.cat - 서브 카테고리명
    // cat에 담아서 넘김
    const myCon = useContext(pCon);
    useEffect(()=>{
        // 스크롤바 생성
        $('html,body').css({overflow:'visible'});
        // 로고 클릭 시 페이지 이동 : pgName 변경 -> setPgName()
        $("#logo a").click(()=>myCon.chgPgName('main'));

    },[])
    
    return(
        <>
        {/* 1. 배너영역 */}
        <section id="ban" className="page">
            <SwiperApp cat={myCon.pgName} />
        </section>
        {/* 2. 신상품영역 */}
        <section id="c1" className="cont c1 men"></section>
        {/* 2.5. 상세보기박스 */}
        <div className="bgbx"></div>
        {/* 3. 패럴랙스 */}
        <section id="c2" className="cont c2 men"></section>
        {/* 4. 단일상품영역 */}
        <section id="c3" className="cont c3"></section>
        {/* 5. 스타일상품영역 */}
        <section id="c4" className="cont c4"></section>
        </>
    )
} /////////////// Fashion 컴포넌트 /////////////////