// JS4-5. 배열의 복사.js

// 일반적으로 변수에 값을 할당 후 다른 변수에 할당하면
// 값이 할당된다!

// 원본 kk
let kk = 10;
// tt변수에 kk변수를 할당하면 값복사일까? 주소복사일까?
let tt = kk;
console.log('할당 후 최초 상태: \nkk', kk, '\ntt', tt);
tt = 200;
console.log('tt 변경 후 상태: \nkk', kk, '\ntt', tt);
// 일반적인 값은 값복사가 맞다!
// 그러나! 배열/객체일 경우 컬렉션 집합을 만들고
// 주소로 관리가 되기 때문에 변수에 변수를 할당할 때
// 값이 아닌 주소가 복사된다!! 헐~~

// 1. 일반배열의 얕은 복사
console.log('1.일반배열의 얕은복사');
let aa = [11, 22, 33];
console.log("원본aa", aa);

let bb = aa;
// 단순할당은 얕은복사임!

bb[0] = 777;

console.log("aa:", aa, "\nbb:", bb);

// 2.일반배열의 깊은복사
console.log('\n2.일반배열의 깊은복사');
let cc = [55, 66, 77];
console.log("원본cc", cc);

// 스프레드 연산자로 배열의값만 새배열에 넣으면
// 새로운 주소지가 만들어져서 깊은 복사가 된다!
let dd = [...cc];

dd[0] = 888;

console.log("cc:", cc, "\ndd:", dd);

// 3.객체 배열의 얕은복사
console.log('\n3.객체 배열의 얕은복사');
let ee = [{ 김: 55 }, { 이: 66 }, { 박: 77 }];
console.log("원본ee", ee);
let ff = ee;

ff[0]["김"] = 999;

console.log("ee:", ee, "\nff:", ff);


// 4.객체 배열의 깊은복사
console.log('\n4.객체 배열의 깊은복사');
let gg = [{ 송: 99 }, { 정: 87 }, { 최: 54 }];
console.log("원본gg", gg);
// let hh = [...gg]; -> 값이 객체이므로 효과없음!
// 깊은 복사방법은 
// -> JSON.parse(JSON.stringify(배열값))
// 원리: 문자화하는 순간 배열이 값으로 변경되어 새로운 주소지가 된다!
// 다시 이 값을 배열로 복원하면 깊은 복사 완성!
// 객체값을 가지는 배열로 검색/정렬할 때 복사는 깊은 복사를 해야 
// 원본 손상이 없다!

// 배열이나 객체는 주소지로 할당됨
// 배열안이 객체 
// 데이터를 문자화해서 다시 객체화하고 다시 넣으면 새로운 주소지가 넣어짐

let hh = JSON.parse(JSON.stringify(gg));

hh[0]["송"] = 888;

console.log("gg:", gg, "\nhh:", hh);