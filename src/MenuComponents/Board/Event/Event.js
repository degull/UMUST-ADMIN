import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import EventBoard from './EventBoard';
import EventForm from './EventForm';
import EventDetail from './EventDetail';
import * as S from './Event.styled';
import Main from '../../../MainComponents/Main';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  return new Date(timestamp).toLocaleString('en-US', options);
};
const Event = () => {
  const navigate = useNavigate();

  const handleDeleteEvent = (evnetId) => {
   // 삭제 로직 구현
   console.log(`Deleting evnet with ID: ${evnetId}`);
 };

 const handleEditEvent = (evnetId) => {
   // 편집 로직 구현
   console.log(`Editing evnet with ID: ${evnetId}`);
 };

 const handleCreateEvent = (newEvent) => {
   // 공지 생성 로직 구현
   console.log('Creating new evnet:', newEvent);
   // 서버로 Event를 생성하는 API 호출
 };

 const sampleEvents = [
   // 샘플 데이터
 ];

  const navigateToCreateEvent = () => {
    navigate('/Board/events/create');
  };

  return (
    <>
      <Main />
      <S.Container>
        <S.Title>이벤트</S.Title>

        <S.Category1>
          <Link to="/Board/events/create">이벤트 작성</Link>
        </S.Category1>

        <S.Category2>
          <Link to="/Board/events">이벤트 게시판</Link>
        </S.Category2>

      </S.Container>
    </>
  );
};

export default Event;
