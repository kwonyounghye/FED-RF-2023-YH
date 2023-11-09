// MainArea 컴포넌트
import { Banner } from "../contents/Banner";

export function MainArea(params) {
    // 
    return (
        <main className="cont">
            {props.cat == "main" && <Main cat={props.cat} />}
            {props.cat == "CHARACTERS" &&
            <Character cat={props.cat} />}
            {props.cat == "COMICS" &&
            <Comics cat={props.cat} />}
            {props.cat == "GAMES" &&
            <Games cat={props.cat} />}
            {props.cat == "MOVIES" &&
            <Movies cat={props.cat} />}
            {props.cat == "NEWS" &&
            <News cat={props.cat} />}
            {props.cat == "VIDEO" &&
            <Video />}
        </main>
    );
} ///////////// MainArea 컴포넌트 ////////