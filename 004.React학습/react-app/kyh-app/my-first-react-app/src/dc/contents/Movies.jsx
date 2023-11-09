// 비디오페이지 메인 컨텐츠

export { isrc } from "./data/imgSrc";

export function Movies() {
    return(
        <>
        <h1 style={{textAlign:'center'}}>무비 페이지</h1>
        <Banner category={props.cat} />        
        </>
    )
} /////////////// 