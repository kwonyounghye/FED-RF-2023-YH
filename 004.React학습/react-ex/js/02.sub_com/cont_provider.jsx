export const 누구냐 = React.createContext();
// 화면 출력 ///////
ReactDOM.

/******************************************
  2. 컨텍스트 프로바이더를 사용하여 산정보
******************************************/

function 큰집(params) {
    return(
        <누구냐.provider value={{}}>
            <할아버지 />
        </누구냐.provider>
    );
}

function 할아버지(params) {
    return(<div></div>);
}