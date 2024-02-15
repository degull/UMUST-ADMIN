import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Main from '../../../MainComponents/Main';
import * as S from './Certification.styled';

const formatDate = (timestamp) => {
   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
   return new Date(timestamp).toLocaleString('en-US', options);
 };

export default function Certification(){
   const navigate = useNavigate();

   const handleDeleteCertification = (certificationId) => {
      // 삭제 로직 구현
      console.log(`Deleting album with ID: ${certificationId}`);
    };
   
    const handleEditCertification = (certificationId) => {
      // 편집 로직 구현
      console.log(`Editing album with ID: ${certificationId}`);
    };
   
    const handleCreateCertification = (newCertification) => {
      // 공지 생성 로직 구현
      console.log('Creating new album:', newCertification);
    };
   
    const sampleCertification = [
      // 샘플 데이터
    ];
   
     const navigateToCreateCertification = () => {
       navigate('/Research/Certifications/create');
     };

     
   return (
      <>
         <Main />
         <S.Container>
            <S.Title>인증현황</S.Title>

            <S.Category1>
               <Link to="/Research/certifications/create">앨범 게시판 작성</Link>
            </S.Category1>

            <S.Category2>
               <Link to="/Research/certifications">앨범 게시판</Link>
            </S.Category2>

         </S.Container>
      </>
   );
};

