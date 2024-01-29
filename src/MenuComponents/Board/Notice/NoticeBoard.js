import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Notice.styled';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  return new Date(timestamp).toLocaleString('en-US', options);
};

const NoticeBoard = ({ onSelectNotice }) => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // 실제 백엔드 API 호출
    fetch('/api/notices') // API 엔드포인트를 적절히 변경해야 합니다.
      .then(response => response.json())
      .then(data => setNotices(data))
      .catch(error => console.error('Error fetching notices:', error));
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정

  return (
    <S.NoticeBoard>
      {notices.map(notice => (
        <Link to={`/notices/${notice.id}`} key={notice.id}>
          <S.NoticeItem onClick={() => onSelectNotice(notice.id)}>
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
