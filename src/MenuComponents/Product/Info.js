import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import * as S from './Info.styled';
import Main from '../../MainComponents/Main';

export default function Info(){

   const navigate = useNavigate();

   const handleDeleteInfo = (infoId) => {
     // 삭제 로직 구현
     console.log(`Deleting notice with ID: ${infoId}`);
   };
 
   const handleEditInfo = (infoId) => {
     // 편집 로직 구현
     console.log(`Editing notice with ID: ${infoId}`);
   };
 
   const handleCreateInfo = (newInfo) => {
     // 공지 생성 로직 구현
     console.log('Creating new notice:', newInfo);
   };
 
   const sampleInfo = [
     // 샘플 데이터
   ];
 
   const navigateToCreateInfo = () => {
     navigate('/Product/infos/create');
   };
 




   return (
      <>
         <Main />
         <S.Container>
            <S.Title>관련정보</S.Title>

            <S.Category1>
               <Link to="/Product/Infos/create">관련정보 작성</Link>
            </S.Category1>

            <S.Category2>
               <Link to="/Product/Infos">게시판</Link>
            </S.Category2>

         </S.Container>
      </>
   );
};

