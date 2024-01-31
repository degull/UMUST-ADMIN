// NoticeBoard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Notice.styled';
import Main from '../../../MainComponents/Main';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  return new Date(timestamp).toLocaleString('en-US', options);
};

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch('/api/notices')
      .then(response => response.json())
      .then(data => setNotices(data))
      .catch(error => console.error('Error fetching notices:', error));
  }, []);

  const handleEditNotice = (noticeId) => {
    console.log(`Editing notice with ID: ${noticeId}`);
  };

  const handleDeleteNotice = (noticeId) => {
    console.log(`Deleting notice with ID: ${noticeId}`);
  };

  return (
    <S.NoticeBoard>
      <Main />
      <S.NoticeHeader>
        <S.PostListLabel>글번호</S.PostListLabel>
        <S.PostListLabel>제목</S.PostListLabel>
        <S.PostListLabel>작성자</S.PostListLabel>
        <S.PostListLabel>작성일</S.PostListLabel>
        <S.PostListLabel>조회수</S.PostListLabel>
      </S.NoticeHeader>
      {notices.map(notice => (
        <div key={notice.id}>
          <Link to={`/Board/notices/${notice.id}`}>
            <S.NoticeItem>
              <span>{notice.id}</span>
              <S.ItemContent>{notice.title}</S.ItemContent>
              <span>{notice.author}</span>
              <span>{formatDate(notice.timestamp)}</span>
              <span>{notice.views}</span>
              <S.ItemActions>
                <Link to={`/Board/notices/${notice.id}`}>상세 내용</Link>
                <button onClick={() => handleEditNotice(notice.id)}>수정</button>
                <button onClick={() => handleDeleteNotice(notice.id)}>삭제</button>
              </S.ItemActions>
            </S.NoticeItem>
          </Link>
        </div>
      ))}
    </S.NoticeBoard>
  );
};

export default NoticeBoard;