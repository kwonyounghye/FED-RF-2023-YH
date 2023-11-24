// DC PJ 검색 모듈 컴포넌트

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SchCatList } from "./SchCatList";

// 검색모듈용  CSS 불러오기
import "../../css/searching.css";

export function Searching(props) {
    // props.kword - 검색어 전달
    console('전달검색어: ',props.kword);

    // 검색리스트 만들기 함수
    const schList = () => {};

    // 엔터키 반응 함수 
    const enterKey = () => {};

    // 체크박스 검색 함수 ////////////
    const chkSearch = () => {};

    // 리스트 정렬 함수
    const sortList = () => {};

    // 리턴코드 /////////////
    return(
        <>
            {/* 전체 검색 모듈 코드 */}
            <section className="schbx">
                {/* 1. 옵션 선택 박스 */}
                <div className="schopt">
                    {/* 1-1. 검색박스 */}
                    <div className="searching">
                            {/* 검색버튼 돋보기 아이콘 */}
                            <FontAwesomeIcon 
                            icon={faSearch}
                            className="schbtnGnb"
                            title="Open search" />
                            {/* 입력창 */}
                            <input 
                            id="schinGnb"
                            type="text"
                            placeholder="Filter by Keyword"
                            onKeyUp={enterKey}
                            />
                            </div>
                          <ul>
                            <li>
                                <ol>
                                    <li>
                                        Heroes
                                        {/* 숨긴 체크박스 */}
                                        <input 
                                        type="checkbox"
                                        id="hero"
                                        className="chkhdn"
                                        onChange={chkSearch}
                                         />
                                        {/* 디자인 노출 라벨 */}
                                        <label 
                                        htmlFor="hero"
                                        className="chklb"></label>
                                    </li>
                                </ol>
                            </li>
                          </ul>
                    </div>
                {/* 2. 결과 리스트 박스 */}
                <div className="listbx">
                    {/* 2-1. 결과 카이클 */}
                    <h2 className="restit">
                    BROWSE CHARACTERS (total)
                    </h2>
                    {/* 2-2. 정렬 선택 박스 */}
                    <aside className="sortbx">
                        <select name="sel" id="sel" className="sel" onChange={sortList}>
                            <option value="0">A-Z</option>
                            <option value="1">Z-A</option>
                        </select>
                    </aside>
                    {/* 2-3. 캐릭터 리스트 컴포넌트 */}
                    <SchCatList />
                </div>
            </section>
        </>
    )
} ///////////// Searching 컴포넌트 ///////////