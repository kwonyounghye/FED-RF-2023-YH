// 메인페이지 컨텐츠 컴포넌트
import { Banner } from "../modules/banner"

export function MainCont() {
    return(
        <>
        {/* 1. 배너페이지 */}
            <section className="page" style={{background:"lightblue"}}>
                <Banner />
            </section>
            <section className="page" style={{background:"lightgray"}}></section>
            <section className="page" style={{background:"lightblue"}}></section>
            <section className="page" style={{background:"lightblue"}}></section>
            <section className="page" style={{background:"lightblue"}}></section>
        </>
    )
} /////////////// MainCont 컴포넌트 /////////////////