import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  padding: 20px 0;
`;
export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  overflow: hidden;
  .active {
    background: #f8fafc;
    color: #1890ff;
    & path {
      fill: #1890ff;
    }
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid blue;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 44px;
  background-color: white;
  padding-left: 33px;
  text-decoration: none;
  color: #000000;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  & path {
    fill: #bbc3cd;
  }
  &:hover {
    & path {
      fill: #1890ff;
    }
    color: #1890ff;
  }
  .sub-icon {
    margin-right: 18px;
    fill: inherit;
  }
  &:hover {
    background-color: #f8fafc;
  }
`;
