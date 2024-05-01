import styled from "styled-components";

const getValue = (value) => {
  switch (typeof value) {
    case "string":
      return value;
    case "number":
      return `${value}px`;
    default:
      return "none";
  }
};

export const Container = styled.div`
  display: flex;
  border: 1px solid var(--secondaryColor);
  align-items: center;
  overflow: hidden;
  flex: 1;
  border-radius: ${({ borderRadius }) => getValue(borderRadius)};
  width: ${({ width }) => getValue(width)};
  height: ${({ height }) => getValue(height)};
  max-width: ${({ width }) => getValue(width)};
`;

export const Input = styled.input`
  border: 0;
  outline: none;
  flex: 1;
  width: ${({ width }) => getValue(width)};
  height: ${({ height }) => getValue(height)};
  max-width: ${({ width }) => getValue(width)};
  font-size: ${({ fontSize }) => getValue(fontSize)};
  font-weight: ${({ fontWeight }) => getValue(fontWeight)};
  line-height: ${({ lineHeight }) => getValue(lineHeight)};
  color: ${({ color }) => (color ? color : "#bbc3cd")};
  border-radius: ${({ borderRadius }) => getValue(borderRadius)};

  &::placeholder {
    font-size: ${(placeholderStyle) => getValue(placeholderStyle?.fontSize)};
    font-weight: ${(placeholderStyle) =>
      getValue(placeholderStyle?.fontWeight)};
    line-height: ${(placeholderStyle) =>
      getValue(placeholderStyle?.lineHeight)};
    color: ${(placeholderStyle) =>
      placeholderStyle?.color ? placeholderStyle?.color : "#bbc3cd"};
  }
`;
