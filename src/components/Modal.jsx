import React, {useCallback, useState} from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
    // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: auto;
    width: ${(props) => props.isMobile ? "20%" : "10%"};
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
    role: 'dialog',
}))`
    // Modal창 CSS를 구현합니다.
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    width: 500px;
    height: 200px;
    background-color: #ffffff;

    > div.desc {
        margin: 50px;
        font-size: 20px;
        color: #000000;
    }
`;

export const SearchInput = styled.input`
    // 검색창을 구현하는데 필요한 CSS를 구현
    width: 80%;
    height: 30px;
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
`;

export const Modal = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [keyword, setKeyword] = useState('');

    const handleClickModalBtn = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen, setIsOpen]);

    return (
        <>
            <ModalContainer isMobile={props.isMobile}>
                <ModalButton onClick={handleClickModalBtn}>
                    <img src="/images/search-button.png" alt="search-button"/>
                </ModalButton>
                {isOpen ?
                    <ModalBackdrop onClick={handleClickModalBtn}>
                        <ModalView onClick={(e) => e.stopPropagation()}>
                            <SearchInput placeholder="검색어를 입력해주세요"
                                         onChange={(e) => {
                                             setKeyword(e.target.value)
                                         }}>
                                <img src="/images/search-button.png" alt="search-button"/>

                            </SearchInput>
                        </ModalView>
                    </ModalBackdrop>
                    : null
                }
            </ModalContainer>
        </>
    );
};