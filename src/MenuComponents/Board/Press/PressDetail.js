import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Press.styled';
import axios from 'axios';
import Main from '../../../MainComponents/Main';

const PressDetail = ({ onDelete, onEdit }) => {

  const navigate = useNavigate();
  const { id } = useParams();
  const { press, setPress } = useState(null);


  useEffect(() => {
    const fetchNoticeById = async () => {
      try {
        const response = await fetch(`https://eb-umust.umust302.shop/api/articles/${id}`);
        const data = await response.json();

        // Logging the received data
        console.log('Received notice data:', data);

        setPress(data);
      } catch (error) {
        console.error('Error fetching notice:', error);
      }
    };

    fetchNoticeById();
  }, [id]);

  if (!press) {
    return <div>로딩중,,,,</div>
  }

  const handleDelete = () => {
    onDelete(id);
    navigate('/Board/Presses');
  }

  const handleEdit = () => {
    onEdit(id);
    navigate(`/Board/presses/${id}/edit`);

  }
  return (
    <S.PressDetailContainer>
      <Main />
      <S.PressTitle>{press.title || '제목없음'}</S.PressTitle>
      <S.PressContent>{press.content}내용내용</S.PressContent>
      <S.PressDetails>
        <span>작성자 : {press.createBy || '알수없음'}</span>
        <span>작성시간 : {(new Date(press.createBy)).toLocaleString() || '알수없음'}</span>
      </S.PressDetails>

      <S.Buttons>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={handleEdit}>수정</button>
      </S.Buttons>
    </S.PressDetailContainer>
  );
};

export default PressDetail;