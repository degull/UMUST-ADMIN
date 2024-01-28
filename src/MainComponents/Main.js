import React from 'react';
import * as S from './Main.styled';
import Header from './Header';

export default function Main(){
   return (
      <S.Wrapper>
         <S.Container>
            <Header />
         </S.Container>
      </S.Wrapper>        
      
   );
};

