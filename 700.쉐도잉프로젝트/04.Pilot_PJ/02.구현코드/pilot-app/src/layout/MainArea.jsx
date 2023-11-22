import { Fashion } from "../pages/Fashion";
import { MainCont } from "../pages/MainCont";

// 라우터역할을 하는 MainArea 컴포넌트
export function MainArea(props) {
    // props.page 속성값으로 main/men/women/style
    return(
        <>
            {props.page=='main' ? <MainCont /> : 
            <Fashion cat={props.page} />}
           
        </>
    )
} /////////////////// MainArea 컴포넌트 //////////////////