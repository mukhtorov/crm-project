import styled from "styled-components";
import filter from "../../../assets/icons/filter.svg?react";
import imp from "../../../assets/icons/import.svg?react";
import add from "../../../assets/icons/add.svg?react";

export const Icons = styled.div``;

Icons.Filter = styled(filter)`
  & path {
    fill: white;
  }
`;
Icons.Impprt = styled(imp)``;
Icons.Plus = styled(add)``;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid var(--primaryColor);
  border-radius: 8px;
  padding: 10px 16px;
  color: var(--primaryColor);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  gap: 8px;
  white-space: nowrap;

  &:active {
    transform: scale(0.98);
    opacity: 0.8;
  }
  -webkit-user-select: none; /* Safari */
  user-select: none; /* Standard syntax */
`;

Button.Import = styled(Button)`
  border: 0;
  background-color: white;
`;

Button.Add = styled(Button)`
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "#1890ff")};
  color: white;
  border: 0;
`;

Button.Filter = styled(Button)`
  background-color: var(--primaryColor);
  color: white;
  border: 0;
`;

Button.Primay = styled(Button)`
  border: 0;
  background-color: #1890ff;
  color: white;
`;

Button.Delete = styled(Button)`
  border-color: #ffa39e;
  color: #f5222d;
  border: 1px solid;
`;

export { Button };
export default Button;
