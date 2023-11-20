// 무비페이지 메인 컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";
import { VidSwipe } from "../modules/VidSwipe";


export function Movies() {
    return(
        <>
        <Banner category="MOVIES" />  
        <VidIntro cat="MOVIES" cls="on" />     
        <VidSwipe tit="LATEST TRAILERS, CLIPS & MORE" />
        </>
    )
} /////////////// Comics 컴포넌트 ////////// 