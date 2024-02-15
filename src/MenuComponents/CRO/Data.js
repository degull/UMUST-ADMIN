import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import * as S from './Data.styled';
import Main from '../../MainComponents/Main';

export default function Data(){

   const navigate = useNavigate();

   const handleDeleteData = (dataId) => {
     // 삭제 로직 구현
     console.log(`Deleting notice with ID: ${dataId}`);
   };
 
   const handleEditData = (dataId) => {
     // 편집 로직 구현
     console.log(`Editing notice with ID: ${dataId}`);
   };
 
   const handleCreateData = (newData) => {
     // 공지 생성 로직 구현
     console.log('Creating new data:', newData);
   };
 
   const sampleData = [
     // 샘플 데이터
   ];
 
   const navigateToCreateData = () => {
     navigate('/Product/datas/create');
   };
 





   return (
      <>
         <Main />
         <S.Container>
            <S.Title>자료실</S.Title>

            <S.Category1>
               <Link to="/Cro/datas/create">자료실 작성</Link>
            </S.Category1>

            <S.Category2>
               <Link to="/Cro/datas"> 자료실 게시판</Link>
            </S.Category2>

         </S.Container>
      </>
   );
};

