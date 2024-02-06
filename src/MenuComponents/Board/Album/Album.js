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

 
export default function Album(){
   return (
      <>
         <Main />
         <S.Container>
            <S.Title>앨범</S.Title>
         </S.Container>
      </>
   );
};

