import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Album.styled';
import Main from '../../../MainComponents/Main';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const AlbumDetail = ({ onDelete, onEdit }) => {
   const navigate = useNavigate();
   const { albumId } = useParams(); 
   const [ album, setAlbum] = useState(null);
   const [showConfirmation, setShowConfirmation] = useState(false);


   useEffect(() => {
      const fetchNoticeById = async () => {
        try {
          const response = await fetch(`https://umust302.shop/api/articles/${albumId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          
          console.log('Received album data:', data);
          console.log(albumId)
          setAlbum(data);
        } catch (error) {
          console.error('Error fetching notice:', error);
        }
      };
  
      // 컴포넌트가 처음 마운트될 때와 게시글 번호가 변경될 때마다 데이터를 불러옴
      fetchNoticeById();
    }, [albumId]);
  
    if (!album) {
      return <div>로딩 중...</div>;
    }

    const handleDelete = () => {
      setShowConfirmation(true);
    };
  
    const handleConfirmDelete = async () => {
      try {
        const deleteResponse = await axios.delete(`https://umust302.shop/api/articles/${albumId}`);
        if (deleteResponse.status === 200) {
          console.log('press deleted successfully.');
          onDelete(albumId);
  
          navigate('/Board/albums');
        } else {
          console.error('Failed to delete album.');
        }
      } catch (error) {
        console.error('Error deleting album:', error);
      }
  
      setShowConfirmation(false);
    };
  
  
    const handleCancelDelete = () => {
      setShowConfirmation(false);
    };
    const handleEdit = () => {
      onEdit(albumId);
      navigate(`/Board/albums/${albumId}/edit`);
    };

   return (
      <S.AlbumDetailContainer>
         <Main />
         <S.DetailContainer>
            <S.AlbumTitle1>{album.title || '제목 없음'}</S.AlbumTitle1>
            <ReactMarkdown>{album.content}</ReactMarkdown>

            {album.files && album.files.length > 0 && (
          <S.AlbumImages>
            {album.files.map((file) => (
              <img key={file.fileId} src={file.fileURL} alt={`Attached Image ${file.fileId}`} />
            ))}
          </S.AlbumImages>
        )}

        <S.AlbumDetails>
            <span>작성자: {album.createdBy || '짱구'}</span>
            <span>작성 시간: {(new Date(album.createdAt)).toLocaleString() || '알 수 없음'}</span>
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

export default AlbumDetail;