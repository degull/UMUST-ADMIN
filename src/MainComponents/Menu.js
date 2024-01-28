import React from 'react';
import * as S from './Menu.styled';
import { Link } from 'react-router-dom';

export default function Menu(){
   return (
      <S.FlexContainer>
         <S.Navigation>
            <S.Research>연구개발</S.Research>
               <S.Paper>
                  <Link to="/research/paper"> - 논문</Link>
               </S.Paper>
               <S.Patent>
                  <Link to="/research/Patent"> - 특허</Link>
               </S.Patent>
               <S.Certification>
                  <Link to="/research/Certification"> - 인증현황</Link>
               </S.Certification>
               <S.Blog>
                  <Link to="/research/Blog"> - 연구소 블로그</Link>
               </S.Blog>
               
            <S.Product>제품</S.Product>
               <S.Info>
                  <Link to="/product/Info"> - 관련정보</Link>
               </S.Info>


            <S.CRO>CRO 서비스</S.CRO>     
               <S.Data>
                  <Link to="/cro/Data"> - 자료실</Link>
               </S.Data>    

            
            <S.Board>알림마당</S.Board>    
               <S.Notice>
                  <Link to="/board/Notice"> - 공지사항</Link>
               </S.Notice> 
               <S.Press>
                  <Link to="/board/Notice"> - 공지사항</Link>
               </S.Press> 
               <S.Event>
                  <Link to="/board/Evnet"> - 행사정보</Link>
               </S.Event>
               <S.Album>
                  <Link to="/board/Album"> - 앨범</Link>
               </S.Album>


         </S.Navigation>
      </S.FlexContainer>
   );
};

