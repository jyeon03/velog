import React from "react";
import alram from "/src/assets/alarm.png";
import search from "/src/assets/search.png";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
  min-width: 0;
  @media (max-width: 1200px) {
    padding: 16px 20px;
  }
  @media (max-width: 700px) {
    padding: 10px 8px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  @media (max-width: 1200px) {
    font-size: 28px;
  }
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const Btns = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 20px;
  @media (max-width: 1200px) {
    gap: 10px;
  }
  @media (max-width: 700px) {
    gap: 6px;
  }
`;

const BtnIcon = styled.img`
  width: 30px;
  height: 30px;
  @media (max-width: 700px) {
    width: 25px;
    height: 25px;
  }
`;

const CreateBtn = styled.div`
  color: white;
  background-color: black;
  padding: 5px 20px;
  border-radius: 40px;
  @media (max-width: 1200px) {
    padding: 4px 17px;
    font-size: 0.95rem;
  }
  @media (max-width: 700px) {
    padding: 3px 13px;
    font-size: 0.85rem;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>velog</Title>
      <Btns>
        <BtnIcon id="alrma-icon" src={alram} alt="alram-image" />
        <BtnIcon id="search-icon" src={search} alt="search-image" />
        <CreateBtn>로그인</CreateBtn>
      </Btns>
    </HeaderWrapper>
  );
};

export default Header;
