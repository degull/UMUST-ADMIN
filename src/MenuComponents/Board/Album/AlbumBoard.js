import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../../MainComponents/Main';
import * as S from './Album.styled';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(timestamp).toLocaleString('en-US', options);
};

const AlbumBoard = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://eb-umust.umust302.shop/api/articles/ALBUM")
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => console.error("앨범 데이터 로딩 에러", error));
  }, []);

  const handleEditAlbum = (albumId) => {
    console.log(`Editing Album with ID: ${albumId}`);
  };

  const handleDeleteAlbum = (albumId) => {
    console.log(`Deleting Album with ID: ${albumId}`);
  };

  return (
    <S.Container>
      <Main />
      <S.AlbumGrid>
        {albums.map(album => (
          <Link key={album.id} to={`/Board/albums/${album.id}`}>
            <S.AlbumItem>
              <S.Thumbnail>
                {/* 이미지와 관련된 데이터가 있는 경우에만 표시 */}
                {album.files && album.files.length > 0 && album.files[0].fileURL && (
                  <img src={album.files[0].fileURL} alt={`Thumbnail for ${album.title}`} />
                )}
              </S.Thumbnail>
              <S.AlbumTitle>{album.title}</S.AlbumTitle>
              <S.CreateDate>{formatDate(album.createdAt)}</S.CreateDate>
              {/* 나머지 버튼 등을 추가하세요. */}
            </S.AlbumItem>
          </Link>
        ))}
      </S.AlbumGrid>
    </S.Container>
  );
};

export default AlbumBoard;
