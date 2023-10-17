// 보그 PJ 메인 페이지 JS - main.js

import dFn from "./dom.js";

// [1] 메인 페이지 등장 액션 클래스 넣기
// 대상: .main-area section
const hideBox = $('.main-area section') ;
// const hideBox = dFn.qsa('.main-area section') ;

// 첫번째 박스 빼고 모두 숨김 클래스 넣기
// 제이쿼리 사용 코드 : each((idx,ele)=>{코드})
hideBox.each((idx,ele)=>{
    if(idx!=0) $(ele).addClass('scAct');
}); //////////////// each /////////////////


// JS용 오리지널 코드 ///////////////
// hideBox.forEach((ele,idx)=>{
//     if(idx!=0) ele.classList.add('scAct');
// }); //////////// forEach /////////////

// 1. 스크롤 등장 액션 구현하기 ///////////
// 대상: window
// 이벤트: scroll
// 기준값 사용: getBoundingClientRect() -> dFn.getBCR()
// console.log(dFn);
// 기준값: 
let winH = $(window).height()/3*2;
console.log('윈도우 높이값:',winH);

// 스크롤 메뉴 적용대상: #top-area
const topArea = $('#top-area');

// 탑버튼 : .tbtn
const tbtn = $('.tbtn');


$(window).scroll(()=>{
      // 세로방향 스크롤 위치값
    let scTop = $(window).scrollTop();
    console.log("스크롤~~!!!",scTop);

    // 1. 스크롤 위치값이 100을 초과하면 슬림 상단 클래스 넣기
    if(scTop>100) topArea.addClass('on');
    else topArea.removeClass('on');

    // 2. 맨위로 이동버튼 300 초과 시 보이고
    // 300미만일 때 숨기기
    // 대상: .tbtn
    if(scTop>300) tbtn.addClass('on');
    else tbtn.removeClass('on');

    // 등장액션 클래스 적용하기
    hideBox.each((idx,ele)=>{
        if(idx!=0) {
         let val = dFn.getBCR(ele);   
            // console.log(`대상요소  getBCR top값[${idx}]: `, dFn.getBCR(ele));
            if(val<winH) $(ele).addClass('on');
        } ///////////// if ////////////////
        
    })
}); ////////// scroll //////////////

// 맨위로 버튼 클릭 시 맨위로 가기
// 부드러운 스크롤 사용하므로 그쪽함수를 이용함!
tbtn.click((e)=>{
    // 1. a요소 기본 이동 막기
    e.preventDefault();
    // 2. 부드러운 스크롤 위치값 변경(0으로)
    setPos(0);
    console.log('나클릭');
}); ///////////// click ///////////////////
