import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../../MainComponents/Main';
import * as S from './Event.styled';
import axios from 'axios';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(timestamp).toLocaleString('ko-KR', options);
};

const generatePageNumbers = (totalPages) => {
   return Array.from({ length: totalPages }, (_, i) => i + 1);
 };
 

const EventBoard = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;

  useEffect(() => {
   const pageSize = 10; 
   const apiUrl = `https://eb-umust.umust302.shop/api/articles/EVENT?page=${currentPage}&size=${pageSize}`;

   fetch(apiUrl)
     .then(response => response.json())
     .then(data => {
       if (Array.isArray(data.content)) {
         setEvents(data.content);
         setTotalPages(data.totalPages);
       } else {
         console.error('API 응답의 content 속성이 배열이 아닙니다:', data);
       }
     })
     .catch(error => console.error('게시글을 불러오는 중 오류 발생:', error));
 }, [currentPage]);


 const handleViewCount = async (eventId) => {
   try {
     // Update the view count for the specific notice
     await axios.put(`https://eb-umust.umust302.shop/api/articles/${eventId}/views`);
     
     // Fetch the updated notice list after updating the view count
     const updatedEvents = await fetchEvents();
     setEvents(updatedEvents);
   } catch (error) {
     console.error('조회수 업데이트 중 오류 발생:', error);
   }
 };

 const fetchEvents = async () => {
   const response = await fetch(`https://eb-umust.umust302.shop/api/articles/EVENT?page=${currentPage}&size=${pageSize}`);
   const data = await response.json();
   return Array.isArray(data.content) ? data.content : [];
 };

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
        <S.PostListLabel>조회수</S.PostListLabel>
      </S.EventHeader>

      <S.EventContent>
        {Array.isArray(events) && events.map((event, index) => (
          <Link key={event.id} to={`/Board/events/${event.id}`} onClick={() => handleViewCount(event.id)}>
            <S.EventItem>
              <S.EventId>{index + 1 + currentPage * pageSize}</S.EventId>
              <S.ItemContent>{event.title.length > 13 ? `${event.title.substring(0, 13)}...` : event.title}</S.ItemContent>
              <S.Create><span>{event.createdBy}</span></S.Create>
              <S.Date><span>{formatDate(event.createdAt)}</span></S.Date>
              <S.ViewCount>조회수: {event.view}</S.ViewCount>
            </S.EventItem>
          </Link>
        ))}
      </S.EventContent>

      <S.PaginationContainer>
        {generatePageNumbers(totalPages).map((pageNumber) => (
          <S.PaginationItem
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber - 1)}
            active={currentPage === pageNumber - 1}
          >
            {pageNumber}
          </S.PaginationItem>
        ))}
      </S.PaginationContainer>
    </S.Container>
  );
};

export default EventBoard;
