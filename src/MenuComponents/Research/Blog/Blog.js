import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Main from '../../../MainComponents/Main';
import * as S from './Blog.styled';

const formatDate = (timestamp) => {
   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
   return new Date(timestamp).toLocaleString('en-US', options);
 };


export default function Blog(){
   const navigate = useNavigate();
   
   const handleDeleteBlog = (blogId) => {
      // 삭제 로직 구현
      console.log(`Deleting album with ID: ${blogId}`);
    };
   
    const handleEditBlog = (blogId) => {
      // 편집 로직 구현
      console.log(`Editing album with ID: ${blogId}`);
    };
   
    const handleCreateBlog = (newBlog) => {
      // 공지 생성 로직 구현
      console.log('Creating new album:', newBlog);
      // 서버로 Blog 생성하는 API 호출
    };
   
    const sampleBlogs = [
      // 샘플 데이터
    ];
   
     const navigateToCreateBlog = () => {
       navigate('/Research/blogs/create');
     };
   return (
      <>
         <Main />
         <S.Container>
            <S.Title>연구소 이야기</S.Title>

            <S.Category1>
               <Link to="/Research/blogs/create">연구소 이야기 작성</Link>
            </S.Category1>

            <S.Category2>
               <Link to="/Research/blogs">연구소 이야기 게시판</Link>
            </S.Category2>
         </S.Container>
      </>
   );
};

