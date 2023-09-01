window.addEventListener('DOMContentLoaded', loadFn);

// 로딩 구역 함수 //////////////////////////////////////////////
function loadFn() {
    // 로딩 확인
    console.log('로딩 확인');

    startSS();

    // 부드러운 스크롤 때문에 마우스휠 이벤트 막기

    // 대상: .desc-box
    let desc_box = document.querySelectorAll('.desc-box');

    // 모든 캐릭터 설명박스는 이벤트 버블링 막기
    // -> 여기서 마우스휠 됨!
    desc_box.forEach(ele=>{ /* ele - 요소 자신 */
        ele.onwheel=e=>e.stopPropagation()
});
} ////////////// loadFn 함수 ///////////////////////
////////////////////////////////////////////////////