import React from 'react';
import Main from '../../MainComponents/Main';
import * as S from './Info.styled';
import { Link } from 'react-router-dom';

export default function Info(){
   return (
      <>
         <Main />
         <S.Container>
            <S.Title>관련정보</S.Title>

            <S.Category1>
               <Link to="/Product/Infos/create">관련정보 작성</Link>
            </S.Category1>
         </S.Container>
      </>
   );
};

