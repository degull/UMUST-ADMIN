import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Notice.styled';
import Main from '../../../MainComponents/Main';
import axios from 'axios';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(timestamp).toLocaleString('ko-KR', options);
};

const generatePageNumbers = (totalPages) => {
  return Array.from({ length: totalPages }, (_, i) => i + 1);
};

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    const apiUrl = `https://eb-umust.umust302.shop/api/articles/NOTICE?page=${currentPage}&size=${pageSize}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.content)) {
          setNotices(data.content);
          setTotalPages(data.totalPages);
        } else {
          console.error('API 응답의 content 속성이 배열이 아닙니다:', data);
        }
      })
      .catch(error => console.error('게시글을 불러오는 중 오류 발생:', error));
  }, [currentPage]);

  const handleViewCount = async (noticeId) => {
    try {
      // Update the view count for the specific notice
      await axios.put(`https://eb-umust.umust302.shop/api/articles/${noticeId}/views`);
      
      // Fetch the updated notice list after updating the view count
      const updatedNotices = await fetchNotices();
      setNotices(updatedNotices);
    } catch (error) {
      console.error('조회수 업데이트 중 오류 발생:', error);
    }
  };

  const fetchNotices = async () => {
    const response = await fetch(`https://eb-umust.umust302.shop/api/articles/NOTICE?page=${currentPage}&size=${pageSize}`);
    const data = await response.json();
    return Array.isArray(data.content) ? data.content : [];
  };
  return (
    <S.Container>
      <Main />
      <S.NoticeHeader>
        <S.PostListLabel>번호</S.PostListLabel>
        <S.PostListLabel>제목</S.PostListLabel>
        <S.PostListLabel>작성자</S.PostListLabel>
        <S.PostListLabel>작성일</S.PostListLabel>
        <S.PostListLabel>조회수</S.PostListLabel>
      </S.NoticeHeader>



      <S.NoticeContent>
  {Array.isArray(notices) && notices.map((notice, index) => (
    <Link key={notice.id} to={`/Board/notices/${notice.id}`} onClick={() => handleViewCount(notice.id)}>
      <S.NoticeItem>
        <S.NoticeId>{index + 1 + currentPage * pageSize}</S.NoticeId>
        <S.ItemContent>{notice.title.length > 13 ? `${notice.title.substring(0, 13)}...` : notice.title}</S.ItemContent>
        <S.Create>{notice.createdBy}</S.Create>
        <S.Date>{formatDate(notice.createdAt)}</S.Date>
        <S.ViewCount>조회수: {notice.view}</S.ViewCount>
      </S.NoticeItem>
    </Link>
  ))}
</S.NoticeContent>

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

export default NoticeBoard;
