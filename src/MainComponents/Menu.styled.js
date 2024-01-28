import styled from "@emotion/styled";

export const FlexContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start; 
   height: 100vh;
`;


export const Navigation = styled.nav`
   position: absolute;
   display: flex;
   flex-direction: column;
/*    background: #8c8;
 */   left: 0;
   margin-top: 80px;
   margin-left: 30px;

`;

export const NavItem = styled.div`
   padding: 10px;
   cursor: pointer;
   border-bottom: 1px solid #ddd; /* 메뉴 간에 구분선 추가 */
   &:hover {
      background: #ddd;
   }
`;
