// Pilot PJ - 패션 인트로 컴포넌트 /////////////////////
import { useContext, useLayoutEffect } from "react";
import { pCon } from "./PilotContext";
// 패션 인트로 데이터 불러오기
import { fsData } from "../data/fashion_intro";

// 패션 인트로 CSS 불러오기
import "../css/fashion_intro.css";

export function FashionIntro(props) {
    // props.cat - 카테고리 분류명
    // props.subcat - 서브페이지 분류명
    // console.log('props.cat:',props.cat,'/props.subcat:',props.subcat);

    // pcon이라는 컨텍스트 api 사용 -> 객체로 만듦
    const myCon = useContext(pCon);
    // pCon에 Provider value 속성에 공개한 변수/함수를 사용함!
    // 선택데이터
    let selData = fsData[props.cat];

    // 만약 서브페이지 데이터일 경우 다시 선택함
    if (props.subcat !== "etc") {
        //  selData값을 덮어씀 : props.cat값이 'sub'임
        // props.subcat값은 배열로 전달됨 : [카테고리, 순번]
        selData = fsData[props.cat][props.subcat[0]][props.subcat[1]];
        // 예컨데 fs['sub']['men'][0]
    } ////////// if /////////

    // console.log('selData:',selData);

    // 새로 적용할 스타일 객체
    const newStyle = {};
    // 'women'일 경우 값을 셋팅
    if (props.cat == "women") newStyle.flexDirection = "row-reverse";

   
    
    

    // 리턴코드 ////////////////////////////////////////////////
    return (
        <div id={props.cat} className="fs-page">
            <ul
                className="pgc"
                style={newStyle}
                // style={props.cat=='women' ? {flexDirection:'row-reverse'} : {}}
            >
                {/* 스타일일 때 이미지경로는 배열! */}
                {/* 메인에소 호출하는 subcat이 etc인 경우만 해당! */}
                {props.subcat === "etc" && (
                    <li className="imgc">
                        <img
                            src={props.cat == "style" ? selData.isrc[0] : selData.isrc}
                            alt={props.cat == "style" ? selData.ialt[0] : selData.ialt}
                        />
                    </li>
                )}
                {/* 스타일이면 타이틀 2개, 아니면 1개 */}
                {props.subcat === "etc" && (
                    <li className="txtc">
                        {props.cat != "style" && (
                            <h2>
                                <a href="#" onClick={() => myCon.chgPgName(props.cat)}>
                                    {selData.tit[0]}
                                    <br />
                                    {selData.tit[1]}
                                </a>
                            </h2>
                        )}
                        {props.cat == "style" && (
                            <>
                                <h2 className="tm">
                                    <a href="#" onClick={() => myCon.chgPgName(props.cat)}>
                                        {selData.tit[0][0]}
                                        <br />
                                        {selData.tit[0][1]}
                                    </a>
                                </h2>
                                <h2 className="tw">
                                    <a href="#" onClick={() => myCon.chgPgName(props.cat)}>
                                        {selData.tit[1][0]}
                                        <br />
                                        {selData.tit[1][1]}
                                    </a>
                                </h2>
                            </>
                        )}
                    </li>
                )}
                {/* 스타일 패션에서만 나오는 이미지 */}
                {props.cat == "style" && (
                    <li className="imgc">
                        <img src={selData.isrc[1]} alt={selData.ialt[1]} />
                    </li>
                )}
                {/* 서브페이지용 구성 */}
                {/* sub이고 첫번째 sub분류데이터 사용! */}
                {props.cat == "sub" && props.subcat[1] === 0 && (
                    <>
                        {/* 글자박스 */}
                        <li className="txtc">
                            <h2 className="sc-ani">
                                <a href="#">
                                    {selData.tit[0]}
                                    <br />
                                    {selData.tit[1]}
                                </a>
                            </h2>
                        </li>
                        {/* 이미지박스 */}
                        <li className="imgc sc-ani">
                            <img src={selData.isrc} alt={selData.ialt} />
                        </li>
                    </>
                )}
                {/* sub이고 첫번째 sub분류데이터 사용! */}
                {props.cat == "sub" && props.subcat[1] === 1 && (
                    <>
                        {/* 이미지박스 */}
                        <li className="imgc sc-ani">
                            <img src={selData.isrc[0]} alt={selData.ialt[0]} />
                        </li>
                        <li className="txtc">
                            <h2 className="tm sc-ani">
                                <a href="#">
                                    {selData.tit[0][0]}
                                    <br />
                                    {selData.tit[0][1]}
                                </a>
                            </h2>
                            <h2 className="tw sc-ani">
                                <a href="#">
                                    {selData.tit[1][0]}
                                    <br />
                                    {selData.tit[1][1]}
                                </a>
                            </h2>
                        </li>
                        <li className="imgc sc-ani">
                            <img src={selData.isrc[1]} alt={selData.ialt[1]} />
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
} /////////// FashionIntro 컴포넌트 /////////
