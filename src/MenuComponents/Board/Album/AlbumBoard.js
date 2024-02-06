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

   useEffect(()=> {
      fetch("https://eb-umust.umust302.shop/api/articles/ALBUM")
      .then(response => response.json())
      .then(data => setAlbums(data))
      .then(error => console.error("보도자료 에러 발생", error));
   },[])

   const handleEditAlbum = (albumId) => {
      console.log( `Editing Album with ID : ${albumId}`);
   };

   const handleDeleteAlbum = (albumId) => {
      console.log( `Deleting Album with ID : ${albumId}`);
   };

   return (
      <S.Container>
         <Main />

         {/* 앨범 레이아웃 작성 */}
      </S.Container>
   );
};

export default AlbumBoard;