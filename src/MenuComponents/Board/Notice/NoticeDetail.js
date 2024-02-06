import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Notice.styled';
import axios from 'axios';
import Main from '../../../MainComponents/Main';

const NoticeDetail = ({ onDelete, onEdit }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const fetchNoticeById = async () => {
      try {
        const response = await fetch(`https://eb-umust.umust302.shop/api/articles/${id}`);
        const data = await response.json();

        // Logging the received data
        console.log('Received notice data:', data);

        setNotice(data);
      } catch (error) {
        console.error('Error fetching notice:', error);
      }
    };

    fetchNoticeById();
  }, [id]);

  if (!notice) {
    return <div>로딩 중...</div>;
  }

  const handleDelete = () => {
    onDelete(id);
    navigate('/Board/notices');
  };

  const handleEdit = () => {
    onEdit(id);
    navigate(`/Board/notices/${id}/edit`);
  };

  return (
    <S.NoticeDetailContainer>
      <Main />
      <S.DetailContainer>
        <S.NoticeTitle>{notice.title || '제목 없음'}</S.NoticeTitle>
        <S.NoticeContent>{notice.content}내용내용~~~</S.NoticeContent>
        <S.NoticeDetails>
          <span>작성자: {notice.createdBy || '알 수 없음'}</span>
          <span>작성 시간: {(new Date(notice.createdAt)).toLocaleString() || '알 수 없음'}</span>
        </S.NoticeDetails>
        <S.Buttons>
          <button onClick={handleDelete}>삭제</button>
          <button onClick={handleEdit}>수정</button>
        </S.Buttons>
      </S.DetailContainer>
    </S.NoticeDetailContainer>
  );
};

export default NoticeDetail;
