import React from "react";
import graph from "/src/assets/graph.png";
import recent from "/src/assets/recent.png";
import feed from "/src/assets/feed.png";
import downArrow from "/src/assets/down-arrow.png";
import menu from "/src/assets/menu.png";
import styled from "styled-components";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    padding: 16px 20px;
  }
  @media (max-width: 700px) {
    padding: 10px 8px;
  }
`;

const NavbarLeft = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: 1200px) {
    gap: 16px;
  }
`;

const NavbarItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  color: gray;
  font-size: 18px;
  font-weight: 700;
  border-bottom: ${(props) => (props.selected ? "2px solid black" : "none")};
  &:hover {
    color: #4f46e5;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  @media (max-width: 1200px) {
    gap: 8px;
  }
`;

const DropdownBox = styled.div`
  display: flex;
  align-items: center;
  background: #f3f4f6;
  border-radius: 8px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  gap: 10px;
  transition: background 0.2s;
  &:hover {
    background: #e0e7ff;
  }
`;

const MenuIcon = styled.img`
  margin-left: 8px;
  cursor: pointer;
`;

const NavigationBar = () => {
  return (
    <Navbar>
      <NavbarLeft>
        <NavbarItem selected>
          <img src={graph} width={30} height={30} />
          <p>트렌딩</p>
        </NavbarItem>
        <NavbarItem>
          <img src={recent} width={30} height={30} />
          <p>최신</p>
        </NavbarItem>
        <NavbarItem>
          <img src={feed} width={30} height={30} />
          <p>피드</p>
        </NavbarItem>
      </NavbarLeft>
      <NavbarRight>
        <DropdownBox>
          <p>이번 달</p>
          <img src={downArrow} width={15} height={15} />
        </DropdownBox>
        <MenuIcon src={menu} width={20} height={20} />
      </NavbarRight>
    </Navbar>
  );
};

export default NavigationBar;
