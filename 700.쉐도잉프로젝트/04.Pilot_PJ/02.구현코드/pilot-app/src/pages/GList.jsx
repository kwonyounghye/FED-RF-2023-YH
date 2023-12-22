// 상품 전체 리스트 페이지
import { useEffect, useRef, useState } from "react";
import "../css/glist.css";

// 상품데이터 불러오기
import gdata from "../data/glist-items";
import { ItemDetail } from "../modules/ItemDetail";

import $ from "jquery";

export function GList() {
    // 상태관리 변수
    // 1. 아이템코드(m1,m2,m3,...)
    const item = useRef("m1");
    // 2. 카테고리명(men,women,style)
    const catName = useRef("men");
    // 리랜더링을 위한 상태변수 : 무조건 리랜더링 설정 목적
    const [force, setForce] = useState(null);
    // 데이터 상태관리 변수
    const [currData, setCurrData] = useState(gdata);

    // 리스트만들기 함수 ///////////
    const makeList = () =>
        gdata.map((v, i) => (
            <div key={i}>
                <a href="#" onClick={() => showDetail(v.ginfo[0], v.cat)}>
                    [{i + 1}]
                    <img src={"./images/goods/" + v.cat + "/" + v.ginfo[0] + ".png"} alt="dress" />
                    <aside>
                        <h2>{v.ginfo[1]}</h2>
                        <h3>{addComma(v.ginfo[3])}원</h3>
                    </aside>
                </a>
            </div>
        )); ////////// makeList ////////////

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //정규식함수(숫자 세자리마다 콤마해주는 기능)
    function addComma(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    //   상품클릭시 상세보기 보여주는 함수 //////
    const showDetail = (gCode, catCode) => {
        // gCode - 상품코드, catCode - 분류명
        console.log("상세보여!", gCode, catCode);
        // 값 업데이트
        item.current = gCode;
        catName.current = catCode;

        // 2. 리랜더링 상태 변경
        setForce(Math.random());
        // -> 리랜더링 시 변경된 부분만 업데이트한다!
        // -> ItemDetail 컴포넌트 파트가 업데이트됨!

        // 대상보이기
        $(".bgbx").slideDown(600);
    }; ////// showDetail 함수 //////////////

    /*********************************************
     * 함수명: changeList
     * 기능: 체크박스에 따른 리스트 변경하기
     *********************************************/
    const changeList = (e) => {
        console.log("나야나 체크?", e.currentTarget);
        // 1. 체크박스 아이디
        const cid = e.target.id;

        // 2. 체크박스 체크 여부 : checked(true/false)
        const chked = e.target.checked;
        console.log("아이디: ", cid, chked);

        // 3. 체크박스 체크개수 세기 : 1개 초과 시 배열 합치기
        let num = $(".chkbx.checked").length;
        console.log("체크개수: ", num);

        // 4. 기존 입력 데이터 가져오기
        // selData의 첫번째 배열값
        let temp = selData;

        // 결과 집합 배열 변수 : 최종결과 배열
        const lastList = [];

        // 5. 체크박스 체크 유무에 따른 분기
        // 체크박스가 true일 때 해당 검색어로 검색하기
        if (chked) {
            // 현재데이터 변수에 담기
            // 원본에서 돌려야 함. : gData(원본데이터)
            const nowList = gdata.filter((v) => {
                if (v.alignment == cid) return true;
            }); ///////// filter ///////////
            // 체크개수가 1초과일 때 배열 합치기
            if (num > 1) {
                // 스프레드 연산자(...) 사용!
                lastList = [...temp, ...nowList];
            } ///// if ///////
            // (2) 체크박스가 false일 때 데이터 지우기
            else {
                console.log("지울 데이터: ", cid);
                // for문을 돌면서 배열데이터 중 해당값을 지운다!
                for (let i = 0; i < temp.length; i++) {
                    // -> 삭제 대상:
                    // 데이터 중 cat 항목값이 아이디명과 같은 것
                    if (temp[i].cat == cid) {
                        // 해당항목 지우기
                        // 배열 지우기 메서드 :splice(순번,개수)
                        temp.splice(i, 1);
                        // 주의! 배열을 지우면 전체 개수가 1씩 줄어든다!
                        // 반드시 줄임 처리할 것!
                        i--;

                        // 참고테스트 : 배열삭제 delete는 무엇인가?
                        // delete배열지우기는 값만지우고 주소는 남는다!
                        // 지운후 값은 undefined로 남아진다!
                        // delete temp[i];
                        // -> 리스트처리시 에러발생함!
                        // 여기서는 splice를 반드시 사용할것!

                    } //// if /////
                } ///// for /////
                console.log("삭제 처리된 배열: ", temp);

                // 결과처리하기 : 삭제처리된 temp를 결과에 넣기!
                lastList = temp;

                // 6. 검색결과 리스트 업데이트하기
                // setCurrData(temp);
            } ////////// else //////////
        } ///////// if //////////////

        // 데이터 변경하기
        const newData = currData.filter((v) => {
            if (v.cat === cid) return true;
        });

        console.log("필터 후: ", newData);
    }; ////////// changeList 함수 ////////////////

    // 리턴코드 ///////////////
    return (
        <main id="cont">
            <h1 className="tit">All ITEMS LIST</h1>
            <section>
                <div id="optbx">
                    <label for="men">남성</label>
                    <input type="checkbox" className="chkbx" id="men" onChange={changeList} defaultChecked />
                    <label for="women">여성</label>
                    <input type="checkbox" className="chkbx" id="women" onChange={changeList} defaultChecked />
                    <label for="style">스타일</label>
                    <input type="checkbox" className="chkbx" id="style" onChange={changeList} defaultChecked />
                </div>
                <div class="grid">{makeList()}</div>
            </section>
            {
                /* 2.5. 상세보기박스 */
                <div
                    className="bgbx"
                    style={{
                        position: "fixed",
                        top: 0,
                        paddingTop: "12vh",
                        backdropFilter: "blur(8px)",
                        height: "100vh",
                        zIndex: 9999,
                    }}
                >
                    <ItemDetail goods={item.current} cat={catName.current} />
                </div>
            }
        </main>
    );
} ////////// GList 컴포넌트 /////////
