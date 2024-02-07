import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Notice.styled';
import Main from '../../../MainComponents/Main';
import axios from 'axios';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(timestamp).toLocaleString('ko-KR', options);
};

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    const pageSize = 10;
    const apiUrl = `https://eb-umust.umust302.shop/api/articles/NOTICE?page=${currentPage}&size=${pageSize}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.content)) {
          setNotices(data.content);
        } else {
          console.error('API 응답의 content 속성이 배열이 아닙니다:', data);
        }
      })
      .catch(error => console.error('게시글을 불러오는 중 오류 발생:', error));
  }, [currentPage]);

  return (
    <S.Container>
      <Main />
      <S.NoticeHeader>
        <S.PostListLabel>번호</S.PostListLabel>
        <S.PostListLabel>제목</S.PostListLabel>
        <S.PostListLabel>작성자</S.PostListLabel>
        <S.PostListLabel>작성일</S.PostListLabel>
      </S.NoticeHeader>

      <S.NoticeContent>
  {Array.isArray(notices) && notices.map((notice, index) => (
    <Link key={notice.id} to={`/Board/notices/${notice.id}`}>
      <S.EventItem>
        <S.NoticeId>{index + 1 + currentPage * pageSize}</S.NoticeId>
        <S.ItemContent>{notice.title.length > 13 ? `${notice.title.substring(0, 13)}...` : notice.title}</S.ItemContent>
        <S.Create><span>{notice.createdBy}</span></S.Create>
        <S.Date><span>{formatDate(notice.createdAt)}</span></S.Date>
      </S.EventItem>
    </Link>
  ))}
</S.NoticeContent>

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

export default NoticeBoard;
