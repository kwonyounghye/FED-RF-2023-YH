// JS3-4. for문 연습2 : 쇼핑몰 상품 리스트 - for_ex2.js

// 1. 변경 대상 : .list-box
var list_box = document.querySelector('.list-box');

console.log('요소: ', list_box);

// 2. 입력코드 만들어 넣기
// 코드 변수(문자형 -> += 사용 시 에러 방지)
var hcode = '';

hcode += '<ul>';

// 반복코드
// for(시;한;증) {코드}
for(var i=0;i<50;i++) {
    hcode += `
            <li>
                <img src="./images/dress/${i+1}.jpg" alt="dress" srcset="">
                <div class="item-info>    
                    <h3>상품명${i+1}</h3>
                    <h4>가격${i+1}</h4>
                </div>
                </img>
            </li>
    `;
} ///////////// for ////////////////////

// 코드 마무리
hcode += '</ul>';

// 3. 대상에 넣기
list_box.innerHTML = hcode;
