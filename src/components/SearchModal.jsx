import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { searchReports } from "~/api/reports.js";
import { searchAnalysts } from "~/api/analysts.js";
import { searchFirms } from "~/api/firms.js";
import SearchResult from "~/components/SearchResult.jsx";
import { useDispatch } from "react-redux";
import { setAnalysts, setFirms, setReports } from "~/reducers/search.js";

export const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: auto;
  width: ${(props) => (props.isMobile ? "20%" : "10%")};
  position: relative;
`;

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalButton = styled.button`
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: "dialog",
}))`
  // Modal창 CSS를 구현합니다.
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 20px;
  width: 500px;
  height: 600px;
  background-color: #ffffff;
  overflow: scroll;
`;

export const InputContainer = styled.div`
  // Input을 구현하는데 필요한 CSS를 구현
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #000000;
  padding: 15px;
  margin: 10px;
  box-sizing: border-box;
  position: absolute;
  top: 50px;
`;

export const SearchInput = styled.input`
  // 검색창을 구현하는데 필요한 CSS를 구현
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 20px;
  margin-right: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
  color: #000000;
  border-radius: 10px;
  padding: 10px;
`;

export const SearchButton = styled.button`
  // 검색 버튼을 구현하는데 필요한 CSS를 구현
  text-decoration: none;
  border: none;
  color: white;
  border-radius: 30px;
  cursor: grab;
  width: 10%;
`;

export const SearchModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const handleClickModalBtn = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const handleSearch = useCallback(async () => {
    const reports = await searchReports(keyword);
    const analysts = await searchAnalysts(keyword);
    const firms = await searchFirms(keyword);

    dispatch(setReports(reports));
    dispatch(setAnalysts(analysts));
    dispatch(setFirms(firms));
  }, [keyword, dispatch, setReports, setAnalysts, setFirms]);

  const handleEnter = useCallback(
    async (e) => {
      if (e.key === "Enter") {
        await handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <>
      <ModalContainer isMobile={props.isMobile}>
        <ModalButton onClick={handleClickModalBtn}>
          <img src="/images/search-button.png" alt="search-button" />
        </ModalButton>
        {isOpen ? (
          <ModalBackdrop onClick={handleClickModalBtn}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <InputContainer>
                <SearchInput
                  placeholder="검색어를 입력해주세요"
                  onChange={(e) => {
                    setKeyword(e.target.value);
                  }}
                  onKeyDown={handleEnter}
                />
                <SearchButton onClick={handleSearch}>
                  <img src="/images/search-button.png" alt="search-button" />
                </SearchButton>
              </InputContainer>
              <SearchResult />
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
