// 따라다니는 원 JS - following.js

// 1. 이벤트 동록하기
window.addEventListener('DOMContentLoaded', loadFn);

// 2. 함수 만들기
// DOM 선택 함수
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

// 2-1. 로드함수 ////////
function loadFn() {
    console.log('로드 완료!');

    // [1] html 코드 넣기 //////////////////
    // 1. 대상 선정
    // 변경 대상: .cont-box
    const cont_box = qs('.cont-box');
    console.log('대상: ', cont_box);

    // 2. html 태그 만들기
    // 50개 이미지 만들기
    let hcode = '';

    // for(시;한;증) {코드}
    for(let i=1;i<50;i++) {
        hcode +=
        `<div>
            <img src="../images/dress/${i}.jpg" alt="dress">
                <a href="#" class="link">이것은 너의 드레스야!</a>
        </div>`;
    } ///////// for //////////////
    console.log('코드: ', hcode);

    // 3. 대상에 html 넣기
    cont_box.innerHTML = hcode;

    // [2] 따라다니는 원 셋팅하기
    // 1. 대상선정: 
    // (1) 움직일 대상: .mover
    const mover = qs('.mover');

    // (2) 이벤트 대상 : document.body
    const myBody = document.body;
    
    // console.log('요소: ', mover, myBody);

       //     ★[[ 이벤트발생시 위치값 ]]★
    // 1. clientX, clientY
    //     -> 현재 보이는 브라우저 화면이 기준
    //     -> 화면을 기준한 fixed 포지션에서 주로 사용!

    // 2. offsetX, offsetY
    //     -> 이벤트 대상이 기준
    //     -> 특정 박스에 부모자격 박스로부터 위치를 사용할 경우

    // 3. pageX, pageY
    //     -> 전체 문서를 기준(스크롤 화면을 포함)
    //     -> 화면을 기준한 앱솔루트 포지션에서 주로 사용!

    // 4. screenX, screenY
    //     -> 모니터 화면을 기준

    // 무버 크기의 절반 계산
    let gap = mover.clientWidth/2;
    // 선택 요소의 크기 JS
    // width는 clientWidth, height는 clientHeight
    console.log('무버 width: ', gap);

    // 2. 이벤트 대상에 마우스 무브 이벤트가 적용될 때
    // 무버가 따라다니게 기능 구현
    myBody.onmousemove = e => {// e - 이벤트 전달 변수
        // 1. 위치값 가져오기(박스 중앙 위치로 보정)
        let posx = e.pageX-gap;
        let posy = e.pageY-gap;
        // let posy = e.clientY -page;
        // -> 만약 .mover가 fixed 포지션이면
        // 브라우저가 화면에서의 위치인 clientY를 사용한다.

        // 2. 무버에 위치값 적용하기
        mover.style.top = posy + 'px';
        mover.style.left = posx + 'px';

        // console.log('pageX: ', e.pageX, '/pageY: ', e.pageY);/* 맨 위부터 끝까지 */
        // console.log('screenX: ', e.screenX, '/screenY: ', e.screenY);
        // console.log('offsetX: ', e.offsetX, '/offsetY: ', e.offsetY);
        // console.log('clientX: ', e.clientX, '/clientY: ', e.clientY);/* 브라우저 보이는 화면에서만 */



    }; ////////// onmousemove /////////////////////

    // 이벤트 구역 들어올 때만 보이기 / 나가면 숨기기
    myBody.onmouseenter=()=>{
            mover.style.opacity = 1;
    } //////////// mouseenter ///////////////////////
    myBody.onmouseleave=()=>{
            mover.style.opacity = 0;/* 숫자형도 가능 */
    } //////// mouseleave ///////////////

    // [3] a요소에 오버 시 원 크게 만들기
    // 대상: .link
    const link = qsa('.link');
    console.log('링크: ', link);

    // 한번에 셋팅하기
    link.forEach(ele=>{
        // a요소에 마우스 들어올 때
        ele.onmouseenter = ()=>mover.style.transform='scale(2)';
        // a요소에 마우스 나갈 때
        ele.onmouseleave = ()=>mover.style.transform='scale(1)';
    }); /////////////// forEach ////////////////////////
} //////////// 로드 함수 ///////////////////

