// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt =
    (ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window, "DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/
// 전역변수구역 ////
// 1. 광클금지 상태 변수 : 0 - 허용, 1 - 불허용
let clickSts = 0;
// 2. 슬라이드 이동 시간 : 상수로 설정
const TIME_SLIDE = 400;

/* 
    (참고: JS에서 이름 짓는 일반 규칙)
    1. 변수/함수 : 캐믈케이스(첫단어 소문자 뒷단어 대문자 시작
    2. 생성자 
*/
/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
    console.log("로딩완료!");

    // 1. 대상 선정
    // 1-1. 이벤트 대상 : .abtn
    const abtn = qsa('.abtn');
    // 1-2. 변경 대상: #slide
    const slide = qs('#slide');
    // 1-3. 블릿박스 대상
    const indic = qsa('.indic li');

    // 대상 확인
    console.log('대상', abtn, slide, indic);
    // 1-5. li 리스트에 순번 속성 만들어 넣기
    // 만드는 이유: 블릿 변경 등에 현재 슬라이드 순번 필요!
    // 사용자 정의 속성은 반드시 'data-'로 시작해야 함!(W3C 규칙)
    // data-seq로 순번 속성 넣을 것임!
    slide.querySelectorAll('li').forEach((ele, idx)=> ele.setAttribute('data-seq', idx));
    // setAttribute(속성명, 속성값) -> 속성셋팅 JS 내장 메서드
    
    // 2. 이벤트 설정하기 : 버튼 요소들 -> forEach()
    abtn.forEach(ele => addEvt(ele, 'click', goSlide));

    // 3. 함수 만들기
    function goSlide() {
        // 광클금지
        if (clickSts) return; // 나가
        clickSts = 1; // 잠금
        setTimeout(() => clickSts = 0, TIME_SLIDE); // 해제

        
        // 인터발 지우기 함수 호출
        if(stsI) clearAuto();
        
        // 호출 확인
        console.log('나야나.', this, this.classList.contains('ab2'));

        // clssList.contains(클래스명)
        // 선택요소에 해당 클래스가 있으면 true

        // 1. 오른쪽 버튼 여부 알아내기
        let isRight = this.classList.contains('ab2');
        // 2. 슬라이드 li 새로 읽기
        let eachOne = slide.querySelectorAll('li');
        // 3. 버튼 분기하기 '.ab2'이면 오른쪽 버튼
        if (isRight) { // 오른쪽 버튼
        //    오른쪽에서 들어오는 슬라이드 함수 호출
        rightSlide();
        } ////////////// if ///////////////
        else { //왼쪽 버튼
            // 1. 맨뒤 li 맨앞으로 이동
            // 놈.놈.놈 -> insertBefore(넣을놈,넣을놈전놈)
            slide.insertBefore(eachOne[eachOne.length - 1], eachOne[0]);
            // 2. left값 -100% 만들기: 들어올 준비 위치!
            slide.style.left = '-100%';
            // 3. 트랜지션 없애기
            slide.style.transition = 'none';
            // 같은 left값을 동시에 변경하면 효과가 없음!
            // 비동기적으로 처리해야함!
            // ->setTimeout으로 싸주기!
            // 시간은 0이어도 비동기처리이므로 효과 있음!
            setTimeout(() => {
                // 4. left값 0으로 들어오기
                slide.style.left = '0';
                // 5. 트랜지션 주기
                slide.style.transition = TIME_SLIDE + 'ms ease-in-out';
            }, 0);
        } //////////// else //////////////

        // 4. 블릿순번 변경 함수 호출
        chgIndic(isRight); // 방향값을 보냄!
        // 5. 자동넘김 멈춤 함수 호출하기
        clearAuto();
        

  


        
    } ////////// goSlide 함수 ///////////////////

    // 블릿순번 변경 함수 ///////////////////////////
    function chgIndic(isRight) { // isRight(0 - 왼쪽, 1 - 오른쪽)
        // 4. 슬라이드 순번과 일치하는 블릿에 클래스 넣기
        // 대상: .indic li -> indic변수
        // 맨앞 슬라이드 li의 'data-seq'값 읽어오기
        // isRight값이 true면 오른쪽 버튼이고 순번은 [1]
        // isRight값이 false면 왼쪽 버튼이고 순번은 [0]
        let nowSeq = slide.querySelectorAll('li')[isRight ? 1 : 0].getAttribute('data-seq');
        console.log('슬라이드 순번: ', nowSeq);
        // 2. 해당 순번 블릿 li에 클래스 on 넣기
      // 블릿 전체 순회 시 해당 순번에 on 넣고 나머지는 on 빼기
      indic.forEach((ele, idx)=>{
          if(idx==nowSeq) ele.classList.add('on');
          else ele.classList.remove('on')
      }); // forEach ///////////////  
    } ////////////////// chgIndic 함수 //////////////////

    // 슬라이드 오른쪽 방향 함수 //////////////////
    function rightSlide() {
         // 1. 대상 이동하기
         slide.style.left = '-100%';
         // 2. 트랜지션 주기
         slide.style.transition = TIME_SLIDE + 'ms ease-in-out';
         // 이동시간 후 맨앞 li 잘라서 맨뒤로 이동하기
         // appendChild(요소)
         setTimeout(() => {
             // 3. 맨앞 li 맨뒤로 이동
             slide.appendChild(eachOne[0]);
             // 4. slide left값 0
             slide.style.left = '0';
             // 5. 트랜지션 없애기
             slide.style.transition = 'none';
         }, TIME_SLIDE);
    } //////////// rightSlide 함수 ///////////////////////////

/***************************************************
    자동넘기기 기능 구현
    -> 일정 시간 간격으로 오른쪽 버튼 클릭
    -> 사용 JS 내장 함수 : setInterval()
    -> 버튼 클릭 실행 메서드 : click()
    대상 : 오른쪽 버튼 - .ab2 -> abtn[1]
***************************************************/ 
// 인터발변수
let autoI;
// 타임아웃변수
// 인터발타이밍함수를 변수에 할당 후
// clearInterval(할당변수)해야 멈출 수 있다!
let autoT;
// 타임아웃도 마찬가지임!
// clearTimeout(할당변수) 해야 실행 쓰나미를 막을 수 있다!

// 인터발호출 함수 ////////////////////////
function slideAuto() {
    autoI = setInterval(() => {
        // 오른쪽 이동 슬라이드 함수 호출
        rightSlide();
        // 블릿변경 함수 호출(오른쪽은 1)
        chgIndic(1);
        
        // console.log('실행');
        // 오른쪽 버튼 클릭 이벤트 강제 발생!
        // 선택 요소.click()
        abtn[1].click()
    },3000);
} /////////////// slideAuto 함수 ///////////////////////


    //  인터발함수 최초 호출!
    slideAuto();


// 버튼을 클릭할 경우를 구분하여 자동넘김을 멈춰준다!
function clearAuto() {
    // 자동 넘김 지우기
    // clearInterval(인터발할당변수)
    console.log('멈춤!');

    // 1. 인터발 지우기
        clearInterval(autoI);
    // 2. 타임아웃 지우기(재실행호출 쓰나미 방지)
    clearTimeout(autoT);
        // 3. 일정시간 후 다시 인터발호출셋팅하기!
        autoT = setTimeout(slideAuto, 5000);/* clearTimeout이 없으면 반대로 마구 누르고 몇 초 후 원래 방향으로 마구 넘어가게 됨 */
        // 결과적으로 5초 후 인터발 재실행은 하나만 남는다!

    } //////////////////// clearAuto 함수 /////////////////////

} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////
