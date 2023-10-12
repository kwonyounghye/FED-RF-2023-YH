// 달력구현 JS - calendar.js ////////////

// DOM 메서드 //////
const dFn = {
    qs: (x) => document.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    cg: (x) => console.log(x),
    addZero: x => x<
    fm: (x) => `
        ${x.getFullYear()}-${x.getMonth() + 1 < 10 ? "0" + (x.getMonth() + 1) : x.getMonth() + 1}-${
        x.getDate() < 10 ? "0" + x.getDate() : x.getDate()
    }(${week[x.getDay()]})`,
}; ///////// dFn 객체 //////////

// 요일변경배열 ////
const week = ["일", "월", "화", "수", "목", "금", "토"];

// 달력함수 호출
makeDallyeok();

function makeDallyeok() {
    dFn.cg("달력만들어!");

    // 1. 변수셋팅 ////////////////////
    // (1) 변경할 현재날짜 객체
    const currDate = new Date();
    // (2) 오늘날짜 객체
    const today = new Date();
    // (3) 년도요소 : .yearTit
    const yearTit = dFn.qs(".yearTit");
    // (4) 월요소 : .monthTit
    const monthTit = dFn.qs(".monthTit");
    // (5) 날짜요소 : .dates
    const dates = dFn.qs(".dates");
    // (6)
    const dateSet = [];

    // dFn.cg(yearTit);
    // dFn.cg(monthTit);
    // dFn.cg(dates);

    // 2. 함수 만들기 ///////////////////
    // (1) 달력 초기화구성 함수 ///////
    const initDallyeok = () => {
        // [선택달  끝날짜, 첫날짜 알아오기]
        // new Date(년도,월,옵션)
        // (1) 년도
        // (2) 월
        // (3) 옵션 : 0 - 선택달끝날짜 / 1 - 다음달첫날짜

        // 1. 전달 마지막 날짜(옵션:0)
        // -> 달력처음 전달끝쪽날짜표시

        // 5. 월 표시하기
        monthTit.innerHTML = cMT + 2;
        // 6. 날짜 데이터 태그 구성하기
        // 6-1. 전달 날짜 앞쪽 채우기
        // 조건: 현재달 첫날짜 요일이 0이 아니면 내용 있음!
        // -> 왜 0인가? 0은 일요일이므로 0이면 앞에 내용 없음!
        let fDay = thisFirst.getDay();
        dFn.cg("이번달 첫날 요일: " + fDay);
        if (fDay != 0) {
            // 만약 요일번호가 0이 아니면 for문 돌림
            for (let i = 0; i < fDay; i++) {
                // 반복횟수만큼 배열 앞쪽에 추가
                // 앞에 추가 메서드: unshift()
                dateSet.unshift(`
            <span style="color:#ccc" class="bm">
                        ${prevLast.getDate() - i}
            </span>
            `);
            } /////////// for ////////////
        } ////////////// if ////////////////////

        // 6-3. 다음달 나머지 칸 삽입하기 ///////
        // 다음달은 클래스 'am'으로 구분
        // 반복구성: 1부터 2주 분량정도 넣는다!
        for(let i = 1; i <= 14; i++) {
            dateSet.push(i);
        } ////////////// for ///////////

        dFn.cg('날짜 배열: '+dateSet);

        // 7. 날짜 배열로 날짜 태그 구성하여 출력하기
        // 7일 * 6주 = 42개
        dates.innerHTML = dateSet.map((v,i)=>i<42?`<div class="date">${v}</div>`:'').join('');
    }; /////// initDallyeok 함수 ////////

    // 초기 셋팅 함수 호출
    initDallyeok();
} /////////////// makeDallyeok함수 ////////////
