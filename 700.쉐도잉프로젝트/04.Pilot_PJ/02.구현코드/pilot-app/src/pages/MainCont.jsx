// 메인페이지 컨텐츠 컴포넌트
import { useEffect } from "react";
import { Banner } from "../modules/banner";

// 자동스크롤 JS 불러오기
import { autoScroll } from "../func/jquery-autoScroll";
import { dragBanner } from "../func/drag_banner";
import { FashionIntro } from "../modules/FashionIntro";
///////////////////////// 위아래 순서 ////////

export function MainCont() {
    // 메인페이지일 때만 자동스크롤 기능 적용함!
    useEffect(() => {
        //////////// 랜더링 후 한번만 적용!
        // console.log('렌더링 OK');
        // 자동 스크롤 호출
        autoScroll();

        // 드래그배너 호출
        dragBanner();
    }, []); ///////////// useEffect ///////////////
    return (
        <>
            {/* 1. 배너페이지 */}
            <section id="ban" className="page none-sel" style={{ background: "lightblue" }}>
                <Banner />
            </section>
            <section className="page" style={{ background: "lightcoral" }}>
                <FashionIntro cat="men" />
            </section>
            {/* 3. 여성패션페이지 */}
            <section className="page" style={{ background: "lightgreen" }}>
                <FashionIntro cat="women" />
            </section>
            {/* 4. 스타일패션 페이지 */}
            <section className="page" style={{ background: "lightseagreen" }}>
                <FashionIntro cat="style" />
            </section>
            {/* 메인에만 나오는 사이드 인디케이터 */}
            <nav className="indic">
                <ul>
                    <li className="on">
                        <a href="#ban">
                            <span>배너</span>
                        </a>
                    </li>
                    <li>
                        <a href="#men">
                            <span>남성의류</span>
                        </a>
                    </li>
                    <li>
                        <a href="#women">
                            <span>여성의류</span>
                        </a>
                    </li>
                    <li>
                        <a href="#style">
                            <span>스타일</span>
                        </a>
                    </li>
                </ul>
            </nav>
            
        </>
    );
} /////////////// MainCont 컴포넌트 /////////////////
