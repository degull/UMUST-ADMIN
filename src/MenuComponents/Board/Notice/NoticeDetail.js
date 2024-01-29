// NoticeDetail.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Notice.styled';

const NoticeDetail = ({ notice, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    // 부모 컴포넌트에서 전달된 onDelete 함수 호출
    onDelete(notice.id);
    // 메인 공지 페이지 또는 다른 적절한 페이지로 이동
    navigate('/notices');
  };

  const handleEdit = () => {
    // 부모 컴포넌트에서 전달된 onEdit 함수 호출
    onEdit(notice.id);
    // 편집 페이지 또는 다른 적절한 페이지로 이동
    navigate(`/notices/${notice.id}/edit`);
  };

  return (
    <div>
      <S.NoticeTitle>{notice.title}</S.NoticeTitle>
      <S.NoticeContent>{notice.content}</S.NoticeContent>
      <S.NoticeDetails>
        <span>작성자: {notice.author}</span>
        <span>작성 시간: {(notice.timestamp)}</span>
      </S.NoticeDetails>
      <S.Buttons>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={handleEdit}>수정</button>
      </S.Buttons>
    </div>
  );
};

export default NoticeDetail;
