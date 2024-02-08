import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../../MainComponents/Main';
import * as S from './Press.styled';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(timestamp).toLocaleString('en-US', options);
};


const generatePageNumbers = (totalPages) => {
   return Array.from({ length: totalPages }, (_, i) => i + 1);
 };

const PressBoard = () => {
  const [presses, setPresses] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;

  useEffect(() => {
   const pageSize = 10; 
   const apiUrl = `https://eb-umust.umust302.shop/api/articles/NEWS?page=${currentPage}&size=${pageSize}`;

   fetch(apiUrl)
     .then(response => response.json())
     .then(data => {
       if (Array.isArray(data.content)) {
         setPresses(data.content);
         setTotalPages(data.totalPages);
       } else {
         console.error('API 응답의 content 속성이 배열이 아닙니다:', data);
       }
     })
     .catch(error => console.error('게시글을 불러오는 중 오류 발생:', error));
 }, [currentPage]);

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
        {Array.isArray(presses) && presses.map((press, index) => (
          <Link key={press.id} to={`/Board/presses/${press.id}`}>
            <S.PressItem>
              <S.PressId>{index + 1 + currentPage * pageSize}</S.PressId>
              <S.ItemContent>{press.title.length > 13 ? `${press.title.substring(0, 13)}...` : press.title}</S.ItemContent>
              <S.Create><span>{press.createdBy}</span></S.Create>
              <S.Date><span>{formatDate(press.createdAt)}</span></S.Date>
              {/* Add other components as needed */}
            </S.PressItem>
          </Link>
        ))}
      </S.PressContent>

      <S.PaginationContainer>
        {generatePageNumbers(totalPages).map((pageNumber) => (
          <S.PaginationItem
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber - 1)}
            active={currentPage === pageNumber - 1}
          >
            {pageNumber}
          </S.PaginationItem>
        ))}
      </S.PaginationContainer>
    </S.Container>
  );
};

export default PressBoard;
