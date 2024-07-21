import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgBox = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
  border-radius: 8px;
  background: #f8fafc;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FileUpload = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
`;
