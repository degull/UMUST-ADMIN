import styled from "@emotion/styled";

export const FlexContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start; /* 왼쪽 정렬 */
   height: 100%;
`;

export const Container = styled.div`
   width: 100%;
   height: 50px;
   display: flex;
   padding: 0 20px; /* 좌우 패딩 추가 */
   border-bottom: 1px solid #999;
`;

export const Logo = styled.img`
   width: 150px;
   height: 30px;
   margin-top: 10px;
`;
