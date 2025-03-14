// 키워드 태그
import styled from "styled-components";

const TagWrapper = styled.div`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: ${(props) => props.fontSize || "1rem"};
  border: solid 1.5px rgb(138, 192, 56, 0.7);
  line-height: 1.5;
  font-weight: 600;
  color: ${(props) => props.color || "rgba(138, 192, 56, 0.7)"};
  background: ${(props) => props.$background || "white"};
  cursor: pointer;

  &:hover {
    background: rgb(138, 192, 56, 0.7);
    color: white;
    transition: 0.5s;
  }
`;

export default function Tag({
  children,
  color,
  $background,
  onClick,
  fontSize,
}) {
  return (
    <TagWrapper
      color={color}
      fontSize={fontSize}
      $background={$background}
      onClick={onClick}
    >
      {children}
    </TagWrapper>
  );
}
