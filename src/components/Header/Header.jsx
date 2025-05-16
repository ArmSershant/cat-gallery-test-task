import styled from "styled-components";

const Wrapper = styled.header`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

export default function Header() {
  return <Wrapper>Cat Viewer | Test Task</Wrapper>;
}
