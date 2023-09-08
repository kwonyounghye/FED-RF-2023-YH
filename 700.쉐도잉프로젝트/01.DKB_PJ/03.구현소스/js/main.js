window.addEventListener("DOMContentLoaded", loadFn);

// 로딩 구역 함수 //////////////////////////////////////////////
function loadFn() {
    // 로딩 확인
    console.log("로딩 확인");

    startSS();

    // 부드러운 스크롤 때문에 마우스휠 이벤트 막기

    // 대상: .desc-box
    let desc_box = document.querySelectorAll(".desc-box");

    // 모든 캐릭터 설명박스는 이벤트 버블링 막기
    // -> 여기서 마우스휠 됨!
    desc_box.forEach((ele) => {
        /* ele - 요소 자신 */
        ele.onwheel = (e) => e.stopPropagation();
    });

    /**********************************************
    [ 현장포토 파트 데이터 구성하기 ]
    - 배열 데이터를 이용하여 HTML 코드 구성
**********************************************/

    // 1. 대상 선정 : .live-box
    const liveBox = domFn.qs(".live-box");
    console.log("대상: ", liveBox);

    // 2. 현장포토 데이터를 기반으로 HTML코드 만들기
    let hcode = "<ul>";

    // 반복코드 만들기 //////////
    // 현장포토 데이터 - data_drama.js에서 가져옴
    liveData.forEach(val=>{
        // html 변수에 계속 넣기
        hcode +=
        `   
                <li>
                    <figure>
                        <img src="images/live_photo/${val.imgName}" alt="${val.title}">
                        <figcaption>${val.title}</figcaption>
                    </figure>
                </li>
        `;
    })
} ////////////// loadFn 함수 ///////////////////////
hcode += '</ul>';

console.log('hcode: ', hcode);
////////////////////////////////////////////////////
