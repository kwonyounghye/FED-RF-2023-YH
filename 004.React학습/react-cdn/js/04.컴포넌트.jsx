// 04.리액트 컴포넌트 JSX

import Avengers from "./avengers";
// import 시에 CDN에서도 js/jsx 확장자는 생략 가능하다!
/************************************************* 
    [ 리액트 컴포넌트 ]
    - 컴포넌트는 HTML요소를 반환하는 함수다!

    [ 특징 ]
    1. 컴포넌트는 독립적이고 재사용이 가능한 코드집합
    2. JS함수와 비슷하지만
        HTML코드 반환이 필수라는 점이 다름!
    3. 컴포넌트는 다음 2가지로 생성가능함
        1) 클래스형 컴포넌트
        2) 함수형 컴포넌트
        (-> 우리는 함수형 컴포넌트에 집중할 예정!)

    -> 클래스형 컴포넌트는 리액트 초중기에 주로
    사용되었으나... React 16.8버전에서 Hooks와
    함께는 더 이상 사용되지 않는다!
    Hooks는 함수형 컴포넌트에서만 사용가능하다!

    ____________________________________________

    [ 첫번째 컴포넌트 만들기! ]
    - 리액트 컴포넌트 이름은 반드시 첫글자가 대문자로 만든다!
    (안지키면 적용안됨!!!)

    [ 클래스 컴포넌트 ]
    클래스 컴포넌트에서는 
    extends React.Component 상속문이 포함돼야함!

    -> 컴포넌트에서도 메서드가 필요함
    render() 메서드는 HTML을 반환함
    (함수형 컴포넌트의 return 키워드를 
        사용할 수 있는 역할을 함!)

*************************************************/

// [ 클래스형 컴포넌트 만들기 ]
class Gogh extends React.Component {
    // render() 메서드 사용하여 리턴함!
    render(){
        // html 태그 리턴
        return(
            <React.Fragment>
                <h2>안녕! 나는 고흐 그림</h2>
                
                <MakeImg iname="01.png" />
                {/* 홀로태그는 반드시 스스로 닫아준다!! */}
            </React.Fragment>
        );
    }
} //////////////////// Gogh 클래스 컴포넌트 //////////////

// 첫번째 #root1에 출력하기
// ReactDOM.render(컴포넌트 리턴코드, 찍을 요소)
// 컴포넌트 리턴코드는 어떻게 쓰나?
// <컴포넌트명 />
ReactDOM.render(<Gogh />, document.querySelector('#root1'));

// [ 함수명 컴포넌트 만들기 ] ///////////////////////
// 첫글자는 대문자!
function IronMan() {
    return(
        <div>
            <h2>안녕, 나는 아이언맨이다!!</h2>
            <MakeImg iname="ab1.jpg" />
        </div>
    );
} /////////////////////// IronMan 컴포넌트 ////////////////

// 이미지 생성 컴포넌트 /////////////
function MakeImg(props) {
    return(
        <img src={"./images/"+props.iname} alt="아이언맨" />

    );
} ///////////////// MakeImg 컴포넌트 /////////////////////
// 두번째 #root2에 출력하기
ReactDOM.render(<IronMan />, document.querySelector('#root2'));

/************************************************* 
    [ Props 사용하기 ]
    props는 properties 에서 나온말
    속성들... 즉, 변수에 값을 할당하여 전달하는 방법
    함수의 전달값과 같고 속성으로 컴포넌트에 보낸다!
    -> props는 05번 다음번에 자세히 다룬다!
*************************************************/

// 내가 좋아하는 색 표시하기 컴포넌트 ////////////////
function Favorite(헐) {/* 헐에 props를 많이 쓰지만 쓰고 싶은대로 쓰면 됨. */
    return(
        <h2>
            내가 좋아하는 색은 {헐.color}이야! <br />
            그리고 내가 좋아하는 음식은 {헐.food}야~ <br />
            취미는 {헐.hobby}야. 알겠니???
        </h2>
    )
} ///////////////// Favorite 컴포넌트 //////////////////

// 좋아하는 색과 음식, 취미를 각각 속성명으로 생성하여
// 컴포넌트를 호출하면 개별적으로 속성을 구분할 수 있다!
// 출력: #root3
ReactDOM.render(<Favorite color="빨간색" food="피자" hobby="게임" />,
document.querySelector('#root3')); // 여기에 출력시킴.
// 속성명과 값을 내가 정해서 보내면 됨.

// 함수 컴포넌트에서는 표현식 안에서 
// {props.호출 시 사용한 속성명} 이 형식으로 전달된 값을 읽음!

// 컴포넌트 재사용하기!
// #root4에 다른사람이 좋아하는 색, 음식, 취미를 출력한다.
ReactDOM.render(<Favorite color="파란색" food="알리오올리오" hobby="야구" />,
document.querySelector('#root4')); // 여기에 출력시킴.

/******************************************************************************
    컴포넌트 내부에서 다른 컴포넌트를 호출 할 수 있다!!!
******************************************************************************/ 
function Who() {
    return(
        <div>
            <h1>김똑팔이가 누구야?</h1>
            {/* 다른 컴포넌트 넣기 */}
            <Ans />
        </div>
    );
} //////////////// Who 컴포넌트 //////////////////////////////

// 컴포넌트 내부에서 호출 할 컴포넌트
function Ans() {
    return(
        <h2>김씨가 똑하고 팔이 뿌러졌대!!</h2>
    )
} /////////////////// Ans 컴포넌트 ////////////////////

// #root5에 출력하기
ReactDOM.render(<Who />, document.querySelector('#root5'));

// #root6에 외부 JSX 파일 컴포넌트 출력하기
ReactDOM.render(<Avengers />, document.querySelector('#root6'));

/*************************************************** 
    [ 컴포넌트의 파일분리 ]
    리액트는 코드를 재사용하는 것이므로
    컴포넌트를 별도의 파일로 분할 하는것 일반적이다!

    {분할방법}
    1. jsx의 새파일을 생성한다.
    2. 대문자로 시작하는 컴포넌트를 구현한다.
    3. 분할구현된 jsx파일을 import하여 호출한다.

    -> 일반적으로 js파일 상단에 import 키워드로 불러오면
    되는데 지금 사용하는 CDN방식의 바벨모듈에서는
    주의 사항이 있으니 참고 바란다!(아래참고)

***************************************************/
/************************************************* 
[ 바벨을 사용할때 모듈로 파일 호출시 주의사항! ]
  ____________________________________________

  설치형이 아닌 CDN방식의 바벨은 호출셋업의 시차로
  바로 모듈을 호출하면 에러가 발생한다!
  따라서 모듈을 사용할 파일을 아래와 같은 형식으로
  메인 html 상단에 호출해 줘야만 한다!!!

  -> 상단에 모듈화한 JS를 먼저 불러준다!

  <script src="모듈화한js" 
  data-plugins="transform-es2015-modules-umd" 
  type="text/babel"></script>

  -> 아래쪽에 모듈을 호출하는 JS를 불러준다!

  <script src="모듈을 호출하는 JS" 
  data-plugins="transform-es2015-modules-umd" 
  type="text/babel"></script>

  ->>> 위의 호출 속성 중 기본적으로
  type="text/babel" 은 당연히 해야하고

  ->>> 여기에 더하여 하나의 속성을 추가한다!
  data-plugins="transform-es2015-modules-umd"

  이 속성과 값이 바벨에서 모듈을 사용하게 하는
  es2015 즉 ES6버전에서의 모듈문법을 사용하게끔 해준다!
*************************************************/