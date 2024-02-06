import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Press.styled';
import Main from '../../../MainComponents/Main';


const formatDate = (timestamp) => {
   const options = { year: 'numeric', month: 'long', day: 'numeric' };
   return new Date(timestamp).toLocaleString('en-US', options);
 };
 


const PressBoard = () => {
   const [presses, setPresses] = useState([]);

   useEffect(() => {
      fetch("https://eb-umust.umust302.shop/api/articles/NEWS")
      .then(response => response.json())
      .then(data => setPresses(data))
      .then(error => console.error("보도자료 에러 발생", error));
   }, []);

   const handleEditNews = (pressId) => {
      console.log(`Editing News with ID : ${pressId}`);
   };

   const handleDeleteNews = (pressId) => {
      console.log(`Deleting News with ID : ${pressId}`);
   };

   return (
      <S.Container>
         <Main />
         <S.PressHeader>
            <S.PostListLabel>번호</S.PostListLabel>
            <S.PostListLabel>제목</S.PostListLabel>
            <S.PostListLabel>작성자</S.PostListLabel>
            <S.PostListLabel>작성일</S.PostListLabel>
         </S.PressHeader>

         <S.PressContent>
         {presses.map((press, index) => (
            <Link key={press.id} to={`/Board/presses/${press.id}`}>
               <S.PressItem>
                  <S.PressId>{index + 1}</S.PressId>
                  <S.ItemContent>{press.title.length > 13 ? `${press.title.substring(0, 13)}...` : press.title}</S.ItemContent>
                  <S.Create><span>{press.createdBy}</span></S.Create>
                  <S.Date><span>{formatDate(press.createdAt)}</span></S.Date>
                  {/* <S.View><span>{notice.view}</span></S.View> */}
               </S.PressItem>
            </Link>
        
      ))}
         </S.PressContent>
      </S.Container>
   );
};

export default PressBoard;