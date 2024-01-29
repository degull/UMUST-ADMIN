// NoticeBoard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Notice.styled';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  return new Date(timestamp).toLocaleString('en-US', options);
};

const NoticeBoard = ({ onCreate }) => {
  // 가짜 데이터 (테스트용)
  const [notices, setNotices] = useState([
    { id: 1, title: '첫 번째 공지', content: '첫 번째 공지사항 내용입니다.', author: '관리자1', timestamp: Date.now() },
    { id: 2, title: '두 번째 공지', content: '두 번째 공지사항 내용입니다.', author: '관리자2', timestamp: Date.now() - 3600000 }, // 1시간 전
    // ... 더 많은 가짜 데이터 추가 가능
  ]);

  // 가짜 데이터로 공지사항 목록 표시
  return (
    <S.NoticeBoard>
      {notices.map(notice => (
        <Link to={`/Board/notices/${notice.id}`} key={notice.id}>
          <S.NoticeItem>
            <S.NoticeTitle>{notice.title}</S.NoticeTitle>
            <S.NoticeContent>{notice.content}</S.NoticeContent>
            <S.NoticeDetails>
              <span>작성자: {notice.author}</span>
              <span>작성 시간: {formatDate(notice.timestamp)}</span>
            </S.NoticeDetails>
          </S.NoticeItem>
        </Link>
      ))}
    </S.NoticeBoard>
  );
};

export default NoticeBoard;
