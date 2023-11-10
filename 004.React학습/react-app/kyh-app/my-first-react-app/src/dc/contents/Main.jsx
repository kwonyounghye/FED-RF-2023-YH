// 메인페이지 메인 컨텐츠

import { Banner } from "./Banner";

export function Main(props) {
    // cat 속성으로 메뉴 분류 전달
    return(
        <>
        <h1 style={{textAlign:'center'}}>메인 페이지</h1>
        <Banner category="main" />
        </>
    )
}