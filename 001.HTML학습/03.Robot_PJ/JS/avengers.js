// 어벤저스 JS - avengers.js

// 공통 DOM 선택 함수
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

// 새로고침 시 맨 위로 이동
setTimeout(()=>{window.scrollTo(0,0)},500);

window.addEventListener('wheel', (e)=>{
    // 기본 기능 막기 : preventDefault()
    e.preventDefault();
    // 이벤트 호출 확인
    console.log('휠~', e.wheelDelta);
    // event.wheelDelta는 휠방향 알림(마이너스 아랫방향)
    // 휠방향 분기
    // 페이지 이동하기 : scrollTo(x스크롤 위치값, y스크롤 위치값)
    window.scrollTo(0,window.innerHeight*(e.wheelDelta<0?1:0));
    // 윈도우 높이값*음수면 1곱하고 양수면 0곱함
    // 아랫방향은 윈도우 높이값만큼 가고 윗방향은 위치값이 0임!

    // 두번째 페이지일 때 동영상 플레이하기
    if(e.wheelDelta<0) { // 아래로 내려갈 때 - 자동 플레이
        qs('.trailer-box iframe').src='https://www.youtube.com/embed/Ko2NWhXI9e8?autoplay=1'
    } /////////////////// if ///////////////////////
    else { // 위로 올라올 때 - 멈춤
        qs('.trailer-box iframe').src='https://www.youtube.com/embed/Ko2NWhXI9e8'
    } //////////////////////// else ////////////////////////////
}, {passive:false});

// passive:false 설정값 변경을 해야
// window, document, body 이 세가지 중요 객체에 대하여
// 막기 설정을 할 수 있다(모바일 때문 passive:true로 기본값이 바뀜)
// 추가: 위의 기능 자동 스크롤 이동 시
// 유튜브 동영상 박스 위에서 스크롤하면 자동 스크롤 기능이 안됨!
// 따라서 유튜브 박스 영역에서 wheel하면 휠을 막아줘야 함!
// 이벤트는 위로 전달되므로 (이벤트버블링) 이를 막아준다!
// 막는 방법은
// 그만해 stop!
// 전파를 propagation ->>> event.stopPropagation()

// 초기 데이터 셋팅하기
// 데이터 : 어벤저스 데이터 - data.js > character

// console.log(character);

// 어벤저스 캐릭터 박스 셋팅하기
// 대상 선정 : .avengers-box

const avengers = qs('.avengers-box');

console.log('대상: ', avengers);

// 2. 데이터 자동 순회하여 태그 만들기
// html 코드 변수
let hcode = '';

// 주석 순번
let num = 1;

// 3. html 코드를 만들어준다!
for(let x in character) {
// 변수x는 객체의 속성이다
// 객체 같은 객체 변수 {x}
// 
    // console.log(x, '/', character[x]);

    // num이 3이상일 때는 .txt에 .right을 추가함!

        hcode += 
        // ${num}. ${x}
                `  
                    <div class="hero">
                        <!-- 이미지 -->
                        <img src="./ab_img/${character[x]['이미지명']}.png" alt="${x}">
                        <!-- 소개글박스 -->
                        <article class="txt${num>=3?' right':''}">
                            <div>
                                <h3>${x}</h3>
                                <p>${character[x]['설명']}</p>
                            </div>
                        </article>
                    </div>`;

    // 주석 번호 증가
    num++;
                    
} //////////////// for in //////////////////////

// 생성된 html 확인
console.log(hcode);

// 3. 대상에 html 넣어 출력하기
avengers.innerHTML = hcode;

// 4. 로딩 후 2초 후 avengers 박스에 클래스 on 넣기
setTimeout(()=>{
    avengers.classList.add('on');
}, 2000);
// 5. 타이틀 애니 위해 한 글자씩 싸기

// 대상: .t1
let mytit = qs('.t1');
let my_text = mytit.innerText;
// 글자 담기 변수
let tit_one = '';
// for of문으로 한 글자씩 순회하기
for(let x of my_text) {
    console.log(x);
    tit_one += `<span>${x}</span>`;
}

console.log(tit_one);

// 다시 타이틀에 넣기
mytit.innerHTML = tit_one;

// 셋팅된 span 요소를 돌면서 하나씩 transition-delay 시간
// 일정시간 간격으로 주기!
let new_span = qsa('.t1 span');
new_span.forEach((ele, idx)=>{
    ele.style.transitionDelay = (.2*idx)+'s';
});
// 어벤저스 박스 나올 때까지(5초) 기다린 후
// span의 tranform 변경하기
// + .hero 오버 시 설정 적용되도록 어벤저스 박스에
// 클래스 active 넣기!
setTimeout(()=>{
    // for(let x of new_span) x.style.transform = 'translateY(0) scale(1)';
    // console.log(x);
    mytit.classList.add('on');
    avengers.classList.add('active');
}, 5000);

 /************************************************* 
                [ 객체를 위한 for in 문 ]

                - 구문: 
                for(변수 in 객체){코드}

                - 작동원리:
                객체의 개수만큼 순서대로 속성명과 속성값을 가져옴

                - 변수는 객체의 속성명이다!

                - 객체의 값을 사용하려면 for in 문 안에
                    객체[변수] 로 쓰면됨!

            *************************************************/