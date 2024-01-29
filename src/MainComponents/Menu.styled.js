import styled from "@emotion/styled";

export const FlexContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start; 
   height: 100vh;
`;


export const Navigation = styled.nav`
   width: 200px;
   height: 100%;
   position: absolute;
   display: flex;
   flex-direction: column;
   left: 0;
   margin-top: 50px;
   margin-left: 30px;
   padding-bottom: 40px;
   border-right: 1px solid #999;
`;
/* 연구개발 */
export const Research = styled.div`
   margin-top: 25px;

   font-size: 13px;
   font-weight: bold;
   padding :10px;
   cursor: pointer;
   margin-bottom: 10px;
   border-bottom: 1px solid #ddd;
   &:hover {
      background: #ddd;
   }
`;

// 논문
export const Paper = styled.div`
   font-size: 11px;
   padding: 10px 0 10px 10px;
   cursor: pointer;
`;

// 글쓰기
export const Write = styled.div`
   font-size: 11px;
   margin: 15px 0 0 10px;
`;

// 게시판
export const List = styled.div`

`;

// 특허
export const Patent = styled.div`
   font-size: 11px;
   padding: 10px 0 10px 10px;
   cursor: pointer;
`;

// 인증현황
export const Certification = styled.div`
   font-size: 11px;
   padding: 10px 0 10px 10px;
   cursor: pointer;
`;

// 연구소 블로그
export const Blog = styled.div`
   font-size: 11px;
   padding: 10px 0 10px 10px;
   cursor: pointer;
`;

/* 연구개발 */
export const Product = styled.div`
   margin-top: 25px;
   font-size: 13px;
   font-weight: bold;
   padding: 10px;
   cursor: pointer;
   border-bottom: 1px solid #ddd; /* 메뉴 간에 구분선 추가 */
   &:hover {
      background: #ddd;
   }
`;

// 관련정보
export const Info = styled.div`
   font-size: 11px;
   padding: 10px 0 10px 10px;
   cursor: pointer;
`;


/* CRO 서비스 */
export const CRO = styled.div`
  font-size: 13px;
  margin-top: 25px;

   font-weight: bold;
   padding: 10px;
   cursor: pointer;
   border-bottom: 1px solid #ddd; /* 메뉴 간에 구분선 추가 */
   &:hover {
      background: #ddd;
   }
`;


// 자료실
export const Data = styled.div`
   font-size: 11px;
   padding: 10px 0 10px 10px;
   cursor: pointer;
`;

/* 알림마당 */
export const Board = styled.div`
  font-size: 13px;
   font-weight: bold;
   margin-top: 25px;
   padding: 10px;
   cursor: pointer;
   border-bottom: 1px solid #ddd; /* 메뉴 간에 구분선 추가 */
   &:hover {
      background: #ddd;
   }
`;


// 공지사항
export const Notice = styled.div`
   font-size: 11px;
   padding: 10px 0 10px 10px;
   cursor: pointer;
`;


// 보도자료
export const Press = styled.div`
   font-size: 11px;
   padding: 10px 0 10px 10px;
   cursor: pointer;
`;


// 행사정보
export const Event = styled.div`
   font-size: 11px;
   padding: 10px 0 10px 10px;
   cursor: pointer;
`;


// 앨범
export const Album = styled.div`
   font-size: 11px;
   padding: 10px 0 10px 10px;
   cursor: pointer;
`;


export const NavItem = styled.div`
   padding: 10px;
   cursor: pointer;
   border-bottom: 1px solid #ddd; /* 메뉴 간에 구분선 추가 */
   &:hover {
      background: #ddd;
   }
`;

