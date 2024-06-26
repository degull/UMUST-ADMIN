import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import * as S from './Press.styled';
import Main from '../../../MainComponents/Main';
import PressDetail from './PressDetail';
import PressBoard from './PressBoard';
import PressForm from './PressForm';


const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  return new Date(timestamp).toLocaleString('en-US', options);
};




const Press = () => {
  const navigate = useNavigate();

  const handleDeletePress = (pressId) => {
    // 삭제 로직 구현
    console.log(`Deleting evnet with ID: ${pressId}`);
  };
 
  const handleEditPress = (pressId) => {
    // 편집 로직 구현
    console.log(`Editing evnet with ID: ${pressId}`);
  };
 
  const handleCreatePress = (newPress) => {
    // 공지 생성 로직 구현
    console.log('Creating new evnet:', newPress);
    // 서버로 Press 생성하는 API 호출
  };
 
  const samplePresses = [
    // 샘플 데이터
  ];
 
   const navigateToCreatePress = () => {
     navigate('/Board/presses/create');
   };

  return (
    <>
      <Main />
      <S.Container>
        <S.Title>보도자료</S.Title>

        <S.Category1>
          <Link to="/Board/presses/create">보도자료 작성</Link>
        </S.Category1>

        <S.Category2>
          <Link to="/Board/presses">보도자료 게시판</Link>
        </S.Category2>
      </S.Container>
    </>

  );
};

export default Press;