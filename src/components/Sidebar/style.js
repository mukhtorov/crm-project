import styled from "styled-components";
import arrow from "../../assets/icons/rightArrow.svg?react";
import exit from "../../assets/icons/exit.svg?react";
import { NavLink } from "react-router-dom";

const Arrow = styled(arrow)`
  display: flex;
  margin-left: auto;
  transform: ${({ active }) => active === "true" && `rotate(90deg)`};
  transition: all 0.1s;
  /* z-index: 0; */
`;

const Container = styled.div`
  display: flex;
`;
const Side = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 280px;
  max-width: 280px;
  min-width: 280px;
  background-color: white;
  /* border: 2px solid red; */
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const Body = styled.div`
  flex: 1;
  height: 100vh;
  min-width: calc(1440px - 280px);
  /* border: 2px solid blue; */
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  /* border: 2px solid blue; */
  margin: 16px;
  background-color: white;
  border-radius: 8px;
`;
const Logo = styled.div`
  position: sticky;
  top: 0;
  font-weight: 600;
  size: 20px;
  line-height: 28px;
  color: rgba(24, 144, 255, 1);
  padding: 16px 24px;
  border-bottom: 1px solid rgba(222, 225, 227, 1);
  cursor: pointer;
  background-color: white;
  z-index: 999;
`;

const LogOut = styled(Logo)`
  display: flex;
  align-items: center;
  margin-top: auto;
  width: 100%;
  position: sticky;
  bottom: 0;
  border-top: 1px solid rgba(222, 225, 227, 1);
  border-bottom: 0;
`;

// PROFILE
const ProfileContaier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 23px 24px 32px 24px;
`;

ProfileContaier.Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 16px;
`;
ProfileContaier.Name = styled.div`
  width: 168px;
  font-weight: 600;
  size: 14px;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--primaryColor);
`;
ProfileContaier.Email = styled.div`
  width: 168px;
  font-weight: 500;
  size: 12px;
  line-height: 20px;
  color: var(--secondaryColor);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// MENU
const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: rgba(248, 250, 252, 1);
  }
  padding-right: 24px;
  text-decoration: none;

  background-color: ${({ active }) =>
    active === "true" && `rgba(248, 250, 252, 1)`};
  color: ${({ active }) =>
    active === "true" ? `var(--activeColor)` : `var(--primaryColor)`};
`;

MenuItem.Title = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-weight: 500;
  size: 14px;
  line-height: 20px;
  padding: 12px 0 12px 24px;

  &:hover {
    color: var(--activeColor);
    & path {
      fill: var(--activeColor);
    }
  }
  & path {
    fill: ${({ active }) => active === "true" && " var(--activeColor)"};
  }
  .icon {
    margin-right: 16px;
  }
`;

const ChildWrapper = styled.div`
  margin-left: 35px;
  height: ${({ active }) => (active === "true" ? "auto" : "0px")};
  overflow: hidden;
`;

const ExitIcon = styled(exit)`
  margin-right: 16px;
`;

export {
  Container,
  ChildWrapper,
  MenuItem,
  Side,
  Body,
  Menu,
  Wrapper,
  Logo,
  LogOut,
  ProfileContaier,
  Arrow,
  ExitIcon,
};
