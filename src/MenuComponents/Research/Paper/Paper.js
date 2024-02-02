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
{/*  */}
            <S.WriteContainer>

               <S.Category1>
                  글쓰기
               </S.Category1>

            </S.WriteContainer>


            <S.ListContainer>
               <S.Category2>
                  게시판
               </S.Category2>
            </S.ListContainer>


            <S.Write>

            </S.Write>


         </S.Container>
      </>
   );
};
