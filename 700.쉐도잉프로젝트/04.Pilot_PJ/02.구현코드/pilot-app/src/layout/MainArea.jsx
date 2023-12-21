import { Fashion } from "../pages/Fashion";
import { GList } from "../pages/GList";
import { MainCont } from "../pages/MainCont";

// 라우터역할을 하는 MainArea 컴포넌트
export function MainArea(props) {
    // props.page 속성값으로 main/men/women/style
    return(
        <>
            {
                // main or glistrk 아니면
                // 서브 Fashion으로 이동
            props.page=='main' ? <MainCont /> : 
            props.page=='glist' ? <GList /> : 

            <Fashion cat={props.page} />}
           
        </>
    );
} /////////////////// MainArea 컴포넌트 //////////////////