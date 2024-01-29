import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Notice.styled';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  return new Date(timestamp).toLocaleString('en-US', options);
};

const NoticeBoard = ({ onCreate }) => {
  // 임시 데이터 (테스트용)
  const [notices, setNotices] = useState([
    { id: 1, title: '첫 번째 공지', content: '첫 번째 공지사항 내용입니다.', author: '관리자1', timestamp: Date.now() },
    { id: 2, title: '두 번째 공지', content: '두 번째 공지사항 내용입니다.', author: '관리자2', timestamp: Date.now() - 3600000 }, // 1시간 전
  ]);

  // 공지사항 수정 로직
  const handleEditNotice = (noticeId) => {
    console.log(`Editing notice with ID: ${noticeId}`);
    // 실제로는 서버로 공지사항 수정을 요청하는 API 호출이 여기에 들어가야 합니다.
  };

  // 공지사항 삭제 로직
  const handleDeleteNotice = (noticeId) => {
    console.log(`Deleting notice with ID: ${noticeId}`);
    // 실제로는 서버로 공지사항 삭제를 요청하는 API 호출이 여기에 들어가야 합니다.
  };

  return (
    <S.NoticeBoard>
      {notices.map(notice => (
        <div key={notice.id}>
          <Link to={`/Board/notices/${notice.id}`}>
            <S.NoticeItem>
              <S.NoticeTitle>{notice.title}</S.NoticeTitle>
              <S.NoticeContent>{notice.content}</S.NoticeContent>
              <S.NoticeDetails>
                <span>작성자: {notice.author}</span>
                <span>작성 시간: {formatDate(notice.timestamp)}</span>
              </S.NoticeDetails>
            </S.NoticeItem>
          </Link>

          {/* 상세 내용, 수정, 삭제 버튼 */}
          <div>
            <Link to={`/Board/notices/${notice.id}`}>상세 내용</Link>
            <button onClick={() => handleEditNotice(notice.id)}>수정</button>
            <button onClick={() => handleDeleteNotice(notice.id)}>삭제</button>
          </div>
        </div>
      ))}
    </S.NoticeBoard>
  );
};

export default NoticeBoard;
