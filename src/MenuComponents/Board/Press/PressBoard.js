import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../../MainComponents/Main';
import * as S from './Press.styled';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(timestamp).toLocaleString('en-US', options);
};

const PressBoard = () => {
  const [presses, setPresses] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    const pageSize = 10; 
    const apiUrl = `https://eb-umust.umust302.shop/api/articles/NEWS?page=${currentPage}&size=${pageSize}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setPresses(data.content))
      .catch(error => console.error('보도자료 로딩 에러 발생', error));
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

      <div>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>
          이전 페이지
        </button>
        <span>페이지 {currentPage + 1}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)}>다음 페이지</button>
      </div>
    </S.Container>
  );
};

export default PressBoard;
