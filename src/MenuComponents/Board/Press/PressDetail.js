import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Press.styled';
import axios from 'axios';
import Main from '../../../MainComponents/Main';
import ReactMarkdown from 'react-markdown';

const PressDetail = ({ onDelete, onEdit }) => {

  const navigate = useNavigate();
  const { pressId } = useParams();
  const [press, setPress] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchPressById = async () => {
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
    fetchPressById();
  }, [pressId]);

  if (!press) {
    return <div>로딩중,,,,</div>
  }


  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const deleteResponse = await axios.delete(`https://umust302.shop/api/articles/${pressId}`);
      if (deleteResponse.status === 200) {
        console.log('press deleted successfully.');
        onDelete(pressId);

        navigate('/Board/presses');
      } else {
        console.error('Failed to delete notice.');
      }
    } catch (error) {
      console.error('Error deleting notice:', error);
    }

    setShowConfirmation(false);
  };


  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleEdit = () => {
    onEdit(pressId);
    navigate(`/Board/presses/${pressId}/edit`);
  }
  
  return (
    <S.PressDetailContainer>
      <Main />
      <S.DetailContainer>
      <S.PressTitle>{press.title || '제목없음'}</S.PressTitle>

      <S.PressContent>
      <ReactMarkdown>{press.content}</ReactMarkdown>

      </S.PressContent>
      {press.files && press.files.length > 0 && (
          <S.PressImages>
            {press.files.map((file) => (
              <img key={file.fileId} src={file.fileURL} alt={`Attached Image ${file.fileId}`} />
            ))}
          </S.PressImages>
        )}

      <S.PressDetails>
        <span>작성자 : {press.createBy || '관리자'}</span>
        <span>작성 시간: {(new Date(press.createdAt)).toLocaleString() || '알 수 없음'}</span>
      </S.PressDetails>

      <S.Buttons>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={handleEdit}>수정</button>
      </S.Buttons>


      {showConfirmation && (
          <S.ConfirmationPopup>
            <S.ConfirmationPopupContent>
              <p>정말로 삭제하시겠습니까?</p>
              <S.ConfirmationButtons>
                <button onClick={handleConfirmDelete}>예</button>
                <button onClick={handleCancelDelete}>아니요</button>
              </S.ConfirmationButtons>
            </S.ConfirmationPopupContent>
          </S.ConfirmationPopup>
        )}
      </S.DetailContainer>

    </S.PressDetailContainer>
  );
};

export default PressDetail;