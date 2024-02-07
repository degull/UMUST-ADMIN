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
      onDelete(albumId);
      navigate('/Board/albums');
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
            <span>작성자: {album.createdBy || '알 수 없음'}</span>
            <span>작성 시간: {(new Date(album.createdAt)).toLocaleString() || '알 수 없음'}</span>
        </S.AlbumDetails>

        <S.Buttons>

        </S.Buttons>

         </S.DetailContainer>
      </S.AlbumDetailContainer>
   );
};

export default AlbumDetail;