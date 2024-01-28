import React from 'react';
import * as S from './Menu.styled';

export default function Menu(){
   return (
      <S.FlexContainer>
         <S.Navigation>
            <S.Research>연구개발</S.Research>
               <S.Paper> - 논문</S.Paper>
               <S.Patent> - 특허</S.Patent>
               <S.Certification> - 인증현황</S.Certification>
               <S.Blog> - 연구소 블로그</S.Blog>
               
            <S.Product>제품</S.Product>
               <S.Info> - 관련정보</S.Info>


            <S.CRO>CRO 서비스</S.CRO>     
               <S.Data> - 자료실</S.Data>    

            
            <S.Board>알림마당</S.Board>    
               <S.Notice> - 공지사항</S.Notice> 
               <S.Press> - 보도자료</S.Press> 
               <S.Event> - 행사정보</S.Event>
               <S.Album> - 앨범</S.Album>


         </S.Navigation>
      </S.FlexContainer>
   );
};

