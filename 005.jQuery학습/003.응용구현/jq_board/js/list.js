// 리스트 페이지 JS - list.js

// 게시판 데이터 불러오기
import bData from "./data.json" assert { type: "json" };

// console.log(bData);

// 데이터 idx의 내림차순으로 정렬 변경하기!
bData.sort((a, b) => (Number(a.idx) == Number(b.idx) ? 0 : Number(a.idx) > Number(b.idx) ? -1 : 1));
// idx는 숫자데이터로 형변환 비교하여
// a.idx>b.idx 즉 앞에 것이 크면 그대로 -1, 작으면 바꾸기 1

// 데이터를 화면 리스트 코드로 변환하여 적용한다!
// 대상: #board tbody
const board = $("#board tbody");

// 리스트 번호 변수
let listNum = 1;

// 숫자 1씩 증가 함수
const addNum = () => {
    listNum += 1;
    return listNum;
};

// console.log('증가수: ',addNum(listNum));

// 페이징의 기본 원리:
// 1. 한페이지당 리스트수를 정하여 전체페이지 개수 구하기
// 2. 개수만큼 리스트에 데이터를 반복문으로 생성함
// 3. 페이지 번호에 따라 시작번호를 업데이트한다

// 페이징 관련 변수들 ////
// [1] 한 페이지당 리스트 수 : pgBlock
const pgBlock = 10;
// [2] 페이지 순번 : pgNum
let pgNum = 1;
// [3] 전체 레코드 수 : totalCnt
const totalCnt = bData.length;
// [4] 페이징 블록 계산하기
let pagingBlock = Math.floor(totalCnt/pgBlock);
// [5] 나머지 리스트 여부 : 0이면 다음페이지 없음!
let addOver = totalCnt % pgBlock;

let hcode = '';
// 리스트 블록으로 리스트 소스 만들기
for (let i = (pgNum-1)*pgBlock; i < pgBlock*pgNum.length; i++) {
    // i가 전체 개수보다 같거나 크면 break(for문 나가기!)
    if(i >= totalCnt) break; 
    hcode +=
        `
        <tr>
            <td>${addNum()}</td>
            <td>${bData[i].tit}</td>
            <td>${bData[i].writer}</td>
            <td>${bData[i].date}</td>
            <td>${bData[i].cnt}</td>
        </tr>
        `
    ;
    
} ////////////// for /////////////

// 코드 반영하기 ////////
board.hcode()
console.log(`
    pgBlock:${pgBlock}\npgNum:${pgNum}
    \ntotalCnt:${totalCnt}\npagingBlock:${pagingBlock}
    \naddOver:${addOver}`);

// 데이터 태그 생성 후 태그넣기
// board.html(
//     bData
//         .map(
//             (v) => `
//     <tr>
//         <td>${addNum(0)}</td>
//         <td>${v.tit}</td>
//         <td>${v.writer}</td>
//         <td>${v.date}</td>
//         <td>${v.cnt}</td>
//     </tr>
//     `
//         )
//         .join("")
// );

// 데이터를 태그로 구성함
// 태그 구조: <tr><td></td>...</tr>
/* 
    <tr>
        <td>번호 - idx</td>
        <td>글 제목 - tit</td>
        <td>글 쓴이 - writer</td>
        <td>등록일자 - date</td>
        <td>조회수 - cnt</td>
    </tr>
*/
