// Header.js

import React from 'react';
import * as S from './Header.styled';
import Menu from './Menu';

export default function Header() {
   return (
      <S.FlexContainer>
         <S.Container>
            <S.Logo src='/img/logo.png' />
            <Menu />
         </S.Container>
      </S.FlexContainer>
   );
};
