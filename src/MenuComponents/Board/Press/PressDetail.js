import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Press.styled';
import axios from 'axios';
import Main from '../../../MainComponents/Main';
import ReactMarkdown from 'react-markdown';

const PressDetail = ({ onDelete, onEdit }) => {

  const navigate = useNavigate();
  const { pressId } = useParams();
  const { press, setPress } = useState(null);


  useEffect(() => {
    const fetchNoticeById = async () => {
      try {
        const response = await fetch(`https://umust302.shop/api/articles/${pressId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        
        console.log('Received press data:', data);
        console.log(pressId)
        setPress(data);
      } catch (error) {
        console.error('Error fetching notice:', error);
      }
    };

    // 컴포넌트가 처음 마운트될 때와 게시글 번호가 변경될 때마다 데이터를 불러옴
    fetchNoticeById();
  }, [pressId]);

  if (!press) {
    return <div>로딩중,,,,</div>
  }

  const handleDelete = () => {
    onDelete(pressId);
    navigate('/Board/Presses');
  }

  const handleEdit = () => {
    onEdit(pressId);
    navigate(`/Board/presses/${pressId}/edit`);

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