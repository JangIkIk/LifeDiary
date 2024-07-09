import styled from "styled-components";

const HeaderAndAsideLayout = styled.div`
  width: 1080px;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-rows: 80px;
  grid-template-columns: 150px;
  grid-template-areas:
    "header header header"
    "aside main main"
    "aside main main"
    "aside main main";
    
`;

const header = styled.div`
  width: 100%;
  height: 80px;
  grid-area: header;
`;

const aside = styled.div`
  width: 150px;
  grid-area: aside;
`;

const main = styled.div`
  grid-area: main;
`;

export const S = {
  HeaderAndAsideLayout,
  header,
  aside,
  main,
};
