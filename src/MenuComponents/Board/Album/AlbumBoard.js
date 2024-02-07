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
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const pageSize = 12;
    const apiUrl = `https://eb-umust.umust302.shop/api/articles/ALBUM?page=${currentPage}&size=${pageSize}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setAlbums(data.content))
      .catch(error => console.error('앨범 데이터 로딩 에러', error));
  }, [currentPage]);

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
        {Array.isArray(albums) && albums.map(album => (
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
            </S.AlbumItem>
          </Link>
        ))}
      </S.AlbumGrid>
      <div>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>
          이전 페이지
        </button>
        <span>페이지 {currentPage + 1}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)}>다음 페이지</button>
      </div>
    </S.Container>
  );
};

export default AlbumBoard;
