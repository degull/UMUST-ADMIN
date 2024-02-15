import { Route, Routes, Link, useNavigate } from 'react-router-dom';import Main from '../../../MainComponents/Main';
import * as S from './Patent.styled';

const formatDate = (timestamp) => {
   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
   return new Date(timestamp).toLocaleString('en-US', options);
 };


export default function Patent(){

   const navigate = useNavigate();

   const handleDeletePatent = (patentId) => {
      // 삭제 로직 구현
      console.log(`Deleting Patent with ID: ${patentId}`);
    };
   
    const handleEditPatent = (patentId) => {
      // 편집 로직 구현
      console.log(`Editing Patent with ID: ${patentId}`);
    };
   
    const handleCreatePatent = (newPatent) => {
      // 공지 생성 로직 구현
      console.log('Creating new Patent:', newPatent);
    };
   
    const samplePatent = [
      // 샘플 데이터
    ];
   
     const navigateToCreatePatent = () => {
       navigate('/Research/patents/create');
     };

   return (
      <>
         <Main />
         <S.Container>
            <S.Title>특허</S.Title>

            <S.Category1>
               <Link to="/Research/patents/create">특허 게시판 작성</Link>
            </S.Category1>

            <S.Category2>
               <Link to="/Research/patents">특허 게시판</Link>
            </S.Category2>
         </S.Container>
         
      </>
   );
};
