import React from 'react';
import Main from '../../../MainComponents/Main';
import * as S from './Paper.styled';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';


export default function Paper(){
   return (
      <>
         <Main />
         <S.Container>
            <S.Title>논문</S.Title>


               <S.Category1>
                  <Link to="/Research/papers/create">글쓰기</Link>
               </S.Category1>


               <S.Category2>
                  <Link to="/Research/papers">논문 게시판</Link>
               </S.Category2>



         </S.Container>
      </>
   );
};

