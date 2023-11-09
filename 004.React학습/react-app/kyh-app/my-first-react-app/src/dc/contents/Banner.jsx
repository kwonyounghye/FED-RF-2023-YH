// DC.com 배너 컴포넌트

// 배너 데이터
import { banData } from "../data/banner";

// 배너 CSS
import "../css/banner.css";

// 배너 컴포넌트 //
export function banner(props) {
    // category - 카테고리 분류명
    // 리스트 만들기 함수 ///////
    const makeList = (data)=>{
        data.map((v,i)=> (
        <li key={i}>
            <img src={data.main.src} alt="ㅎㅎ" />
        </li>));
    };
    return(
        <div className="banner">
        // 이동 슬라이드
        <ul className="slider">
        {makeList(banData[props.category])}
        </ul>
        </div>
    );
} ////////// Banner 컴포넌트 /////////