// NoticeBoard.js

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

  useEffect(() => {
    fetch('https://eb-umust.umust302.shop/api/articles/NOTICE')
      .then(response => response.json())
      .then(data => setNotices(data))
      .catch(error => console.error('Error fetching notices:', error));
  }, []);

  const handleEditNotice = (noticeId) => {
    console.log(`Editing notice with ID: ${noticeId}`);
  };

  const handleDeleteNotice = async (noticeId) => {
    try {
      const deleteResponse = await axios.delete(`https://umust302.shop/api/articles/${noticeId}`);

      if (deleteResponse.status === 200) {
        console.log('Notice deleted successfully.');
        setNotices(prevNotices => prevNotices.filter(notice => notice.id !== noticeId));
      } else {
        console.error('Failed to delete notice.');
      }
    } catch (error) {
      console.error('Error deleting notice:', error);
    }
  };

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
        {notices.map((notice, index) => (
          <Link key={notice.id} to={`/Board/notices/${notice.id}`}>

            <S.EventItem>
              <S.NoticeId>{index + 1 }</S.NoticeId>
              <S.ItemContent>{notice.title.length > 13 ? `${notice.title.substring(0, 13)}...` : notice.title}</S.ItemContent>
              <S.Create><span>{notice.createdBy}</span></S.Create>
              <S.Date><span>{formatDate(notice.createdAt)}</span></S.Date>
            </S.EventItem>

          </Link>
        ))}
      </S.NoticeContent>
    </S.Container>
  );
};

export default NoticeBoard;
