// DC.com 배너 컴포넌트

// 배너 데이터
import { banData } from "../data/banner";

// 배너 CSS
import "../../css/banner.css";
import { useEffect } from "react";
// 제이쿼리 + 제이쿼리 UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 배너 컴포넌트 //
export function Banner(props) {
    // category - 카테고리 분류명(배너 데이터 선택)
    
      // 1. 변수설정 //////////////////
      // (1) 애니시간
      const A_TM = 600;
      // (2) 애니이징
      const A_ES = "easeInOutQuint";
      // (3) 광클상태변수(1-불허용,0-허용)
      let cSts = 0;
      // (4) 슬라이드순번
      let sNum = 0;
    
    //// 2. 슬라이드 이동구현 함수 ///////
/////// 이벤트 설정 및 함수 호출은 리액트 파트에서 처리함!
// -> 그래야 다중 컴포넌트 배치 시 개별화를 할 수 있다!
// 할당형 변수 선언
const goSlide = (e) => {
    // 1. 이벤트가 발생한 요소
    const tg = e.target;
    // console.log(e.target);

    // 2. 대상선정
    // (1) 슬라이드 : 클릭된 버튼으로부터 잡아줌!
    const sldBox = $(tg).siblings(".slider");
    // (2) 슬라이드 블릿
    const indic = $(tg).siblings(".indic").find("li");
    // console.log('블릿',indic);
    // (3) 슬라이드 개수
    const sCnt = sldBox.find('li').length;

    // 3. 기능구현
    // 0. 광클금지
    if (cSts) return;
    cSts = 1; // 잠금
    setTimeout(() => (cSts = 0), A_TM);
    
    // 1. 오른쪽 버튼 여부
    let isR = $(tg).is(".rb");
    console.log("버튼클릭!", isR);
    
    // 2. 버튼별 분기
    // 2-1. 오른쪽 버튼
    if (isR) {
        // 슬라이드가 왼쪽으로 이동함
        // left값이 -100%
        sldBox.animate({ left: "-100%" }, A_TM, A_ES, () => {
            // 콜백함수(애니 후)
            // 맨앞 li 맨뒤로 이동
            sldBox
                .append(sldBox.find("li").first())
                // 동시에 left값은 0으로 초기화함!
                .css({ left: "0" });
        });
        // 슬라이드 순번 증가(끝번호보다 크면 0)
        sNum++;
        if (sNum >= sCnt) sNum = 0;
    } //////////// if ////////////////
    // 2-2. 왼쪽 버튼
    else {
        // 맨뒤 li 맨앞으로 이동
        sldBox
            .prepend(sldBox.find("li").last())
            // left값 -100%
            .css({ left: "-100%" })
            // left값을 0으로 애니메이션
            .animate({ left: "0" }, A_TM, A_ES);
    
        // 슬라이드 순번 감소(0보다 작으면 끝번호)
        sNum--;
        if (sNum < 0) sNum = sCnt - 1;
    } /////////////// else //////////////
    
    // 블릿 해당 순번 클래스 'on'넣기
    
    indic.eq(sNum).addClass("on")
    .siblings().removeClass("on");

} ///////////// goSlide함수 /////////////
    
    
    // 선택 데이터
    const selData = banData[props.category];
    
// 페이지 렌더링 후 실행구역
    // useEffect((data) => {
    //     console.log("랜더링 후~!");
    //     // 슬라이드 기능구현함수 호출 : 선택데이터가 1초과일때
    //      if(selData.length>1) slideFn();
    // });

    // 리스트 만들기 함수 ///////
    const makeList = (data) => {
        return data.map((v, i) => (
            <li key={i}>
                {/* 배너이미지 */}
                <img src={process.env.PUBLIC_URL+v.src} alt="하하" />
                {/* 배너정보 */}
                <section className="bantit">
                    <h3>{v.tit1}</h3>
                    <h2>{v.tit2}</h2>
                    <p>{v.cont}</p>
                    {v.btn!=''&&<button>{v.btn}</button>}
                </section>
            </li>
        ));
    };

    // 코드리턴 ////////////////
    return (
        <div className="banner">
            {/* 이동 슬라이드 */}
            <ul className="slider">{makeList(selData)}</ul>
            {/* 이동버튼 _ 슬라이드 블릿 : 
        슬라이드 2개 이상일 때 보임 */}

            {/* 중괄호 안에 <></>를 넣어야 에러가 없음 */}
            {
                // 조건식 && 코드 : 조건식이 true일 때 코드 출력
                // 배열.length는 배열개수
                selData.length > 1 && (
                    <>
                        {/* 양쪽 이동 버튼 */}
                        <button className="abtn lb" onClick={goSlide}>
                            ＜
                        </button>
                        <button className="abtn rb" onClick={goSlide}>
                            ＞
                        </button>
                        {/* 블릿 인디케이터 - 선택데이터의 개수만큼 만들기 */}
                        <ol className="indic">
                            {selData.map((v, i) => (
                                <li className={i == 0 ? "on" : ""} key={i}></li>
                            ))}
                        </ol>
                    </>
                )
            }
        </div>
    );
} ////////// Banner 컴포넌트 /////////
