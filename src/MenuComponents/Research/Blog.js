import React from 'react';
import Main from '../../MainComponents/Main';
import * as S from './Blog.styled';


export default function Blog(){
   return (
      <>
         <Main />
         <S.Container>
            <S.Title>연구소 이야기</S.Title>
         </S.Container>
      </>
   );
};

