// 키워드 태그
import styled from 'styled-components'

const TagWrapper = styled.div`
  display: inline-block;
  padding: 1px 5px;
  border-radius: 20px;
  font-size: ${(props) => props.fontSize || "10px"};
  line-height: 1.5;

  color: ${(props) => props.color || "white"};
  background: ${(props) => props.$background || "lightgray"};

`

export default function SmallTag({ children, color, $background, onClick, fontSize }) {
  return (
    <TagWrapper 
      color={color} 
      fontSize={fontSize}
      $background={$background}
      onClick={onClick}
      >
      {children}
    </TagWrapper>
  )
}