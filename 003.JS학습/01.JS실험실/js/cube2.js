// 회전제어 JS - cube2.js //////////////

/************************************************
    [구현내용]
    - 마우스 휠 이벤트에 따라 기본 기능은 막고 큐브를 
    회전하는 속성인 transform의 rotateY(각도)의 
    값 변경을 이용한 큐브 회전을 적용함!
    - 대상: window
    - 사용이벤트: wheel
    - 단위 각도: 360도 / 9개 = 40도
    - CSS 이징 적용: ease-out
************************************************/
// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////

// 0. 변수 셋팅
// 단위 각도
const DEG = 40;
// 광휠상태변수(0-허용, 1-금지)
let stsWheel = 0;
// 휠 단위 수(휠할 때 증감하는 수)
let numWheel = 0;
// 휠 제어 시간
const TIME_WHEEL = 20; // 대문자는 함수
// 휠 단위수(휠할 때 증감하는 수)
let nowWheel=0;

// 1. 대상 선정 : .cube
const cube = domFn.qs('.cube');
console.log('대상: ', cube);

// 2. 이벤트 설정하기
domFn.addEvt(window,'wheel',rotateMem);

// 3. 함수 만들기 //////////
function rotateMem() {
    // 0. 휠 이벤트 발생수 조절하기(광휠금지)
    if(stsWheel) return; // 막기
    stsWheel = 1; // 잠금!
    setTimeout(()=>stsWheel=0,)

    // 1. 휠 방향 알아내기 : 휠 델타
    let delta = event.wheelDelta;
    
    // 2. 방향에 따른 회전 각도 만들기
    if(delta<0) {
        // 휠 단위수 증가
        numWheel++;
    }
    else {
        // 휠 단위수 감소
        numWheel--;
    }
    // 호출 확인
    console.log('휠~~~~~~~~~~~~~~~~~~~~', delta,numWheel);

    // 3. 회전 대상 요소에 각도 적용하기
    // 적용각도 = 단위 각도 * 휠 단위수
    cube.style.transform = `rotateY(${numWheel*DEG}deg)`;
    
} ////////// rotateMem 함수 //////////
/************************************* 
    [구현내용]
    - "돌아!"버튼을 클릭하면 멈춰있던
    큐브가 돌아감. 이때 버튼이 "멈춰!"
    버튼으로 변경되어 있음!
    - "멈춰!" 버튼을 클릭하면 돌고있던
    큐브가 멈춤. 이때 버튼이 "돌아!"
    버튼으로 변경되어 있음!

*************************************/


///////////////////////////////////////////