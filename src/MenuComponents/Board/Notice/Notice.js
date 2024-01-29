// Notice.js
import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import NoticeDetail from './NoticeDetail';
import NoticeBoard from './NoticeBoard';
import NoticeForm from './NoticeForm';
import * as S from './Notice.styled';
import Main from '../../../MainComponents/Main';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  return new Date(timestamp).toLocaleString('en-US', options);
};

const Notice = () => {
  const navigate = useNavigate();

  const handleDeleteNotice = (noticeId) => {
    // 삭제 로직 구현
    console.log(`Deleting notice with ID: ${noticeId}`);
  };

  const handleEditNotice = (noticeId) => {
    // 편집 로직 구현
    console.log(`Editing notice with ID: ${noticeId}`);
  };

  const handleCreateNotice = (newNotice) => {
    // 공지 생성 로직 구현
    console.log('Creating new notice:', newNotice);
    // 실제로는 여기서 서버로 Notice를 생성하는 API 호출이 필요합니다.
  };

  const sampleNotices = [
    // 샘플 데이터
  ];

  const navigateToCreateNotice = () => {
    navigate('/Board/notices/create');
  };

  return (
    <>
      <Main />
      <S.Container>
        <S.Title>공지사항</S.Title>

        <S.Category1>
          <Link to="/Board/notices/create">글쓰기</Link>
        </S.Category1>

        <S.Category2>
          게시판
        </S.Category2>

        <Routes>
          <Route
            path="/Board/notices/:id"
            element={<NoticeDetail onDelete={handleDeleteNotice} onEdit={handleEditNotice} />}
          />
          <Route
            path="/Board/notices"
            element={<NoticeBoard notices={sampleNotices} onSelectNotice={(noticeId) => navigate(`/Board/notices/${noticeId}`)} />}
          />
          <Route
            path="/Board/notices/create"
            element={<NoticeForm onCreate={handleCreateNotice} />}
          />
        </Routes>
      </S.Container>
    </>
  );
};

export default Notice;
