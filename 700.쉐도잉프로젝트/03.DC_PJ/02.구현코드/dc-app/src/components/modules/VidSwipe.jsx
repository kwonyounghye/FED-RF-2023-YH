// DC PJ 비디오스와이프 컴포넌트
import "../../css/vid_swipe.css";

{/* 
[ 구조정의 ]
Root > 
section.vidswbox >
    (h2.tit+<SwiperVid /> ) + 
    (section.vidbx>
        div.playvid>
            h2.ifrtit+iframe+button)
             */}
// 비디오스와이프 CSS 불러오기
export function VidSwipe(props) {
    // props.cat - 카테고리명

    const catTit = {
        main:"LATEST TRAILERS, CLIPS & MORE",
        movies:"TRAILERS, CLIPS AND MORE",
    }
    return (
        <>
        {/* 모듈코드 */}
        <section className="vidswbox">
            {/* 1. 모듈 타이틀 */}
            <h2 className="tit">
                {catTit[props.cat]}
            </h2>
            {/* 2. 스와이퍼 컴포넌트 : SwiperVid
            -> 전달속성 cat은  */}
            {/* <SwiperVid /> */}
            {/* 3. 비디오 재생창 */}
            <section className="vidbx">
                {/* 비디오 중앙 박스 */}
                <div className="playvid">
                    {/* 비디오 타이틀 */}
                    <h2 className="ifrtit"></h2>
                    {/* 아이프레임 */}
                    <iframe src="" allow="autoplay" frameborder="0"></iframe>
                    {/* 닫기버튼 */}
                    <button></button>
                    </div>
            </section>
        </section>
        </>
    );
} /////////// VidSwipe 컴포넌트 ////////////////