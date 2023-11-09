// index.js는 public/index.html 페이지에 적용되는 컴포넌트다! -> 루트 컴포넌트
import React from 'react';
import ReactDOM from 'react-dom/client';
// css도 불러온다!
import './css/index.css';
import { TopArea } from './dc/TopArea';
import { MainArea } from './dc/layout/MainArea';
import { FooterArea } from './dc/FooterArea';

function App() {
  // 상단메뉴 클릭 시 메인 컨텐츠 변경을 위해
  // 후크관리변수를 생성한다!
  const [menu, setMenu] = useState('main');

  // 메뉴 업데이트함수
  const chgMenu = () => {
    console.log('메뉴 업데이트!',txt);
    // 상태관리변수 변경
    setMenu(txt);
  }; /////// chgMenu함수 /////////
  return (
    <>
    <TopArea chgFn={chgMenu} />
    <MainArea menu={menu} />
    <FooterArea />
    </>
  )
}

// 컴포넌트 출력 ///////
// 먼저 root객체를 만들고
const root = ReactDOM.createRoot(document.querySelector('#root'));
// render메서드로 출력
root.render(<App />);