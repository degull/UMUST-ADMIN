import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Patent.styled';
import Main from '../../../MainComponents/Main';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const PatentDetail = ({ onDelete, onEdit }) => {
   const navigate = useNavigate();
   const { patentId } = useParams(); 
   const [ Patent, setPatent ] = useState(null);
   const [showConfirmation, setShowConfirmation] = useState(false);

   useEffect(() => {
      const fetchAlbumById = async () => {
        try {
          const response = await fetch(`https://umust302.shop/api/articles/${patentId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          
          console.log('Received album data:', data);
          console.log(patentId)
          setPatent(data);
        } catch (error) {
          console.error('Error fetching notice:', error);
        }
      };
  
      // 컴포넌트가 처음 마운트될 때와 게시글 번호가 변경될 때마다 데이터를 불러옴
      fetchAlbumById();
    }, [patentId]);
  
    if (!Patent) {
      return <div>로딩 중...</div>;
    }

    const handleDelete = () => {
      setShowConfirmation(true);
    };
  
    const handleConfirmDelete = async () => {
      try {
        const deleteResponse = await axios.delete(`https://umust302.shop/api/articles/${patentId}`);
        if (deleteResponse.status === 200) {
          console.log('press deleted successfully.');
          onDelete(patentId);
  
          navigate('/Research/patents');
        } else {
          console.error('Failed to delete patent.');
        }
      } catch (error) {
        console.error('Error deleting patent:', error);
      }
  
      setShowConfirmation(false);
    };
  
  
    const handleCancelDelete = () => {
      setShowConfirmation(false);
    };
    const handleEdit = () => {
      onEdit(patentId);
      navigate(`/Research/patents/${patentId}/edit`);
    };

   return (
      <S.AlbumDetailContainer>
         <Main />
         <S.DetailContainer>
            <S.AlbumTitle1>{Patent.title || '제목 없음'}</S.AlbumTitle1>
            <ReactMarkdown
               components={{
                  img: ({ alt, src }) => (
                     <img
                        alt={alt}
                        src={src}
                        style={{ width: '500px', height: 'auto' }}
                     />
                  ),
               }}
            >
               {Patent.content}
            </ReactMarkdown>


        <S.AlbumDetails>
            <span>작성자: {Patent.createdBy || '짱구'}</span>
            <span>작성 시간: {(new Date(Patent.createdAt)).toLocaleString() || '알 수 없음'}</span>
        </S.AlbumDetails>

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
      </S.AlbumDetailContainer>
   );
};

export default PatentDetail;