// NoticeDetail.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Notice.styled';

const NoticeDetail = ({ notice, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    // onDelete 함수를 호출하여 해당 공지사항 삭제
    onDelete(notice.id);
    // 메인 페이지로 이동
    navigate('/Board/notices');
  };

  const handleEdit = () => {
    // onEdit 함수를 호출하여 해당 공지사항 편집
    onEdit(notice.id);
    // 편집 페이지로 이동
    navigate(`/Board/notices/${notice.id}/edit`);
  };

  return (
    <div>
      <S.NoticeTitle>{notice.title}</S.NoticeTitle>
      <S.NoticeContent>{notice.content}</S.NoticeContent>
      <S.NoticeDetails>
        <span>작성자: {notice.createdBy}</span>
        <span>작성 시간: {(new Date(notice.createdAt)).toLocaleString()}</span>
      </S.NoticeDetails>
      <S.Buttons>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={handleEdit}>수정</button>
      </S.Buttons>
    </div>
  );
};

export default NoticeDetail;
