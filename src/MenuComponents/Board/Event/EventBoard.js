import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../../MainComponents/Main';
import * as S from './Event.styled';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(timestamp).toLocaleString('ko-KR', options);
};

const EventBoard = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;
  
  useEffect(() => {
    const pageSize = 10; // Adjust the page size as needed
    const apiUrl = `https://eb-umust.umust302.shop/api/articles/EVENT?page=${currentPage}&size=${pageSize}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setEvents(data.content))
      .catch(error => console.error('보도자료 로딩 에러 발생', error));
  }, [currentPage]);

  const handleEditEvent = (eventId) => {
    console.log(`Editing Event with ID : ${eventId}`);
  };

  const handleDeleteEvent = (eventId) => {
    console.log(`Deleting Event with ID : ${eventId}`);
  };

  return (
    <S.Container>
      <Main />
      <S.EventHeader>
        <S.PostListLabel>번호</S.PostListLabel>
        <S.PostListLabel>제목</S.PostListLabel>
        <S.PostListLabel>작성자</S.PostListLabel>
        <S.PostListLabel>작성일</S.PostListLabel>
      </S.EventHeader>

      <S.EventContent>
        {Array.isArray(events) && events.map((event, index) => (
          <Link key={event.id} to={`/Board/events/${event.id}`}>
            <S.EventItem>
              <S.EventId>{index + 1 + currentPage * pageSize}</S.EventId>
              <S.ItemContent>{event.title.length > 13 ? `${event.title.substring(0, 13)}...` : event.title}</S.ItemContent>
              <S.Create><span>{event.createdBy}</span></S.Create>
              <S.Date><span>{formatDate(event.createdAt)}</span></S.Date>
            </S.EventItem>
          </Link>
        ))}
      </S.EventContent>

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

export default EventBoard;
