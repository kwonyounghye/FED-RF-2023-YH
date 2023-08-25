// for문 연습1 : 외부JS파일 - for_ex.js
// JS외부파일은 html문서에 직접 들어가
// 작동되므로 CSS처럼 'utf-8' 인코딩
// 설정이 필요없음

// 1. 이벤트 대상 선정

// 1-1. 미니언즈
var mini = document.querySelectorAll(".mini");

// 1-2. 출력 대상: 파란박스
var blue_box = document.querySelector(".mini-space");

// 1-3. 개수출력 대상: .stxt span
var cnt_spot = document.querySelector('.stxt span');

// 1-4. 초기화 버튼: .rbtn
var btn_reset = document.querySelector('.rbtn');

console.log("미니언즈: ", mini, blue_box, btn_reset);

// 2. 이벤트 연결하기 /////////////////

// 2-1. 미니언즈 이미지 클릭 시 넣기함수 호출
// mini[0].onclick = insertMini;

// 기본 for문으로 반복하여 개수만큼 이벤트 셋팅하기
// for(시;한;증){코드}
// (0부터 시작; 개수보다 작을 때까지 반복; 1씩 증가)
for(var i=0;i<mini.length;i++) {
    mini[i].addEventListener('click', insertMini);
    console.log('for문 내 i: ', i);
} /////// for ///////////

console.log('for문 밖 i: ', i);

// 2-2. 리셋 버튼 함수와 연결
btn_reset.addEventListener('click', resetMini);

// 3. 함수만들기 //////////////////

// 3-1. 미니언즈 넣기 함수

/******************************************
함수명: insertMini
기능: 미니언즈 이미지 개수만큼 넣기
******************************************/

function insertMini() {
    // 1. 호출확인
    console.log("미니넣어.", this);
    // this 나자신! -> 호출한 .mini

    // 2. 셋팅된 개수 속성(data-cnt) 가져오기
    var cnt = this.getAttribute('data-cnt');
    // getAttribute(속성명) -> 속성값 가져오기! 내장함수
    // console.log('data-cnt: ', cnt);

    // 3. 미니언즈 넣기
    // 대상: .Bcase -> blue_box
    // for(시;한;증){코드}
    // (0부터; 개수보다 작을 때까지; 1씩 증가)
    for(var j=0;j<cnt;j++) {
        // 대입연산자(+=)로 기존 데이터에 합침
        blue_box.innerHTML += `<img src="./images/Minions.png" alt="미니언즈" class="mini" title="나를 클릭하면 한개씩 가방에 들어갈꼬얌~!" data-cnt="1">`;
    } /////////// for /////////////////////

    // 현재 박스에 있는 미니언즈 개수 찍기
    // 대상: .mini-space -> blue_box 변수
    var count_mini 
    = blue_box.querySelectorAll('img').length;
    // querySelectorAll() 전체 하위 이미지 수집
    // length -> 전체개수읽기

    console.log('미니개수: ', count_mini, typeof count_mini);
    // typeof 변수 -> 변수의 데이터형 출력!

    // 출력 대상: .stxt span -> cnt_spot 변수
    // 미니언즈가 개당 3개씩이므로 *3
    cnt_spot.innerText = count_mini*3;

} //////////// insertMini 함수 /////////////////

/**********************************************************
함수명: resetMini
기능: 파란박스의 미니언즈 이미지 삭제
    + 미니언즈 숫자 초기화!
**********************************************************/
function resetMini(){
    // 1. 호출확인
    console.log('리셋이야~');
    // 2. 파란박스 미니언즈 이미지삭제
    // 대상: blue_box 변수
    blue_box.innerHTML = '';

    // 3. 미니언즈 개수 초기화
    // 대상: cnt_spot 변수
     cnt_spot.innerText = '0';
} /////////////// resetMini함수 /////////////////
///////////////////////////////////////////////////////
