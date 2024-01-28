import React from 'react';
import * as S from './Menu.styled';

export default function Menu(){
   return (
      <S.FlexContainer>
         <S.Navigation>
            <S.NavItem>Home</S.NavItem>
            <S.NavItem>About</S.NavItem>
            <S.NavItem>Contact</S.NavItem>         
         </S.Navigation>
      </S.FlexContainer>
   );
};

