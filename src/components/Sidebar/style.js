import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Side = styled.div`
  width: 280px;
  max-width: 280px;
  min-width: 280px;
  background-color: white;
  border: 2px solid red;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const Body = styled.div`
  flex: 1;
  /* border: 2px solid blue; */
`;
const Wrapper = styled.div`
  border: 2px solid blue;
  margin: 16px;
  background-color: white;
`;

export { Container, Side, Body, Wrapper };
