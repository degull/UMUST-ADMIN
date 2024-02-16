import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as S from './Header.styled';
import Menu from './Menu';

export default function Header() {
   return (
      <S.FlexContainer>
         <S.Container>
            <Link to="/">
               <S.Logo src='/img/logo.png' />
            </Link>
            <Link to="https://www.naver.com" target="_blank">
               <S.HomePage src='/img/homepage.png' />
            </Link>
            <Menu />
         </S.Container>
      </S.FlexContainer>
   );
};
