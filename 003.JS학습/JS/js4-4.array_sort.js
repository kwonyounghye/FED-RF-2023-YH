// JS4-4. 배열의 정렬과 검색 JS

// DOM메서드
import dFn from "./dom.js";

// console.log(dFn);

/******************************************************** 
                [ JS 배열의 정렬 ]
            -> 용어의 정의: 정렬이란?
            : 배열의 값을 기준으로 순서를 다시 정하는것!
            배열의 정렬은 sort() 메서드 사용!
            sort() 메서드를 사용하여 배열의값을 오른차순,내림차순으로
            정렬할 수 있음!

                [ sort() 메서드의 특징 ]
            1. 기본정렬 :  오름차순(1,2,3,.../a,b,c,...)
                -> 기본 내림차순 메서드 -> reverse()
            2. 원리 : 배열값을 문자열로 캐스팅(형변환)한후
                    변환된 문자열을 비교하여 순서를 결정함
            (참고: undefined 값일 경우 배열 맨뒤에 배치함)
            -> 주의 : 숫자를 비교해도 문자열로 비교하기 때문에
            "25"와 "100" 중 큰 숫자는 100이지만 25를 더 큰
            데이터로 인식한다! -> sort() 메서드 비교함수로 처리!

            [ sort() 메서드 비교함수 ]
            -> sort() 메서드 내부에 2개의 전달값을 가지는 함수를 쓰면
            sort메서드 자체에서 값을 비교하여 배열값의 순서를 바꾼다!
            -> 숫자일 경우 빼기 연산을 함!
            숫자데이터배열.sort(function(a,b){return a-b;}) 오름차순
            숫자데이터배열.sort((a,b)=>a-b;) 오름차순
            숫자데이터배열.sort(function(a,b){return b-a;}) 내림차순
            숫자데이터배열.sort((a,b)=>b-a;) 내림차순
            -> a는 앞데이터, b는 뒷데이터

            [-> 기준정렬 : 오름차순]
            배열변수.sort() -> 기본정렬

            [-> 기준정렬 : 내림차순]
            배열변수.reverse() -> 기본정렬
             ++++++++++++++++++++++++++++++++++++++++++++++

    ->>> 숫자형, 문자형에 무관하게 하나로 처리하기!!!
     [ sort() 메서드만 사용하여 정렬잡기 ]

    ((비교함수사용))
    배열변수.sort(function(x,y){
        if(x>y) return 1;
        if(x<y) return -1;
        return 0;
    })
    
    -> 단순화하기(삼항연산자사용!)

    배열변수.sort(function(x,y){
        return x == y ? 0 : x > y ? 1 : -1;
    })

    -> 더 줄이기! (화살표함수 사용!)

    배열변수.sort((x,y)=> x == y ? 0 : x > y ? 1 : -1)


    -> 리턴값의 의미(오름차순)
    1) if(x>y) return 1; -> x가 y뒤에 옴 (리턴값 양수)
    2) if(x<y) return -1; -> x가 y앞에 옴 (리턴값 음수)
    3) return 0; -> x,y 정렬을 유지 (리턴값 0)

    -> 내림차순은 양수/음수만 반대로 써주면 된다!

    [ 정렬시 데이터 유의사항 ]

    1. 문자형일 경우 대소문자가 섞여있으면 대문자나 소문자중
    하나로 통일하여 비교해야함(toUpperCase()/toLowerCase())

    예)
        배열변수.sort((x,y)=>{
            let a = x.toUpperCase(),
                b = y.toUpperCase();
            
            return a == b ? 0 : a > b ? 1 : -1;
        })

    2. 날짜정렬도 숫자와 동일함
    (날짜데이터 자체가 숫자형으로 되어있음)

    3. 특정언어의 특수문자일 경우 
    localeCompare() 메서드로 문자열 비교를 한다!

    예) 특수문자 x변수를 y변수와 변환후 비교 
        x.localeCompare(y)
********************************************************/

// 숫자값 배열
const arrNumber = [4, 5, 8, 10, 2, 1, 9, 3, 7, 6];
// 문자값 배열
const arrString = ["파", "타", "하", "가", "바", "사", "다", "라", "차"];

// console.log('숫자 배열: ', arrNumber);
// console.log('숫자 배열.sort(): ', arrNumber.sort());
// console.log('숫자 배열.reverse(): ', arrNumber.reverse());
// console.log('문자 배열: ', arrString);
// console.log('문자 배열.sort(): ', arrString.sort());
// console.log('문자 배열.reverse(): ', arrString.reverse());

//////////////////////////////////////////////
// 배열데이터 화면 출력하기 ///////////////////

// 1. 숫자로만 된 배열의 화면 뿌리기 ////////////////////////////
// map() 메서드로 배열값을 태그로 감싸서 출력하기
// (1) 출력 대상 : .showNum
const showNum = dFn.qs('.showNum');
// (2) 배열 숫자 데이터만큼 이미지로 변환하여 출력
// map().join() 맴조인
showNum.innerHTML = arrNumber.map(val=>`<img src="./images/num/num_0${val}.png" alt="숫자 이미지">`).join('');

// (3) 정렬 기준에 선택 박스 변경 이벤트 발생 시
// 정렬 변경하기 (오름차순/내림차순)
// (3-1) 대상: #sel
const selBox2 = dFn.qs("#sel2");
// (3-2) 이벤트 연결하기 : 이벤트 종류 - change
dFn.addEvt(selBox2, "change", function () {
  // 1. 선택 option value값
  let optVal = this.value;
  console.log("숫자정렬변경:", optVal);
  // 2. 정렬 분기 : 1 - 오름차순 / 2 - 내림차순
  if (optVal == 1) {
    // 오름차순
    // [sort()메서드 내부함수사용법]
    // a > b 일때 true이면 1처리 -> 순서바꿈!
    arrString.sort((a, b) => (a == b ? 0 : a > b ? 1 : -1));

    // 오름차순 기본 메서드 sort() 사용
    // arrString.sort();
  } /////// if ///
  else if (optVal == 2) {
    // 내림차순
    // [sort()메서드 내부함수사용법]
    // a > b 일때 true이면 -1처리 -> 순서안바꿈!
    arrString.sort((a, b) => (a == b ? 0 : a > b ? -1 : 1));

    // 내림차순 기본 메서드 reverse() 사용
    // arrString.reverse();
  } ///// else if ////

  // 화면출력
  // -> 원본 배열의 정렬이 변경된 후 다시 출력
  showScreen2();
}); ///// change 이벤트 함수 //////////
