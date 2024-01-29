import React from 'react';
import Main from '../../MainComponents/Main';
import * as S from './Info.styled';

export default function Info(){
   return (
      <>
         <Main />
         <S.Container>
            <S.Title>관련정보</S.Title>
         </S.Container>
      </>
   );
};

