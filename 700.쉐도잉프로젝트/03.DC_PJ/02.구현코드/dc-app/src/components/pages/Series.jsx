// 무비페이지 메인 컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";
import { VidSwipe } from "../modules/VidSwipe";


export function Series() {
    return(
        <>
        {/* 1. 무비페이지 배너 */}
        <Banner category="Series" />  
        {/* 2. 무비페이지 비디오 소개 */}
        <VidIntro cat="Series" cls="on" />     
        {/* 3. 무비페이지 비디오 스와이프 */}
        <VidSwipe cat="Series" />
        </>
    )
} /////////////// Comics 컴포넌트 ////////// 