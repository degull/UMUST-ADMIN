import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Main from '../../../MainComponents/Main';
import * as S from './Album.styled';
import AlbumBoard from './AlbumBoard';
import AlbumDetail from './AlbumDetail';
import AlbumForm from './AlbumForm';

const formatDate = (timestamp) => {
   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
   return new Date(timestamp).toLocaleString('en-US', options);
 };


 const Album = () => {
   const navigate = useNavigate();

   const handleDeleteAlbum = (albumId) => {
      // 삭제 로직 구현
      console.log(`Deleting album with ID: ${albumId}`);
    };
   
    const handleEditAlbum = (albumId) => {
      // 편집 로직 구현
      console.log(`Editing album with ID: ${albumId}`);
    };
   
    const handleCreateAlbum = (newAlbum) => {
      // 공지 생성 로직 구현
      console.log('Creating new album:', newAlbum);
      // 서버로 Album 생성하는 API 호출
    };
   
    const sampleAlbums = [
      // 샘플 데이터
    ];
   
     const navigateToCreateAlbum = () => {
       navigate('/Board/albums/create');
     };

   return (
      <>
         <Main />
         <S.Container>
            <S.Title>앨범</S.Title>

            <S.Category1>
               <Link to="/Board/albums/create">앨범 게시판 작성</Link>
            </S.Category1>

            <S.Category2>
               <Link to="/Board/albums">앨범 게시판</Link>
            </S.Category2>
         </S.Container>
      </>
   );
};

export default Album;