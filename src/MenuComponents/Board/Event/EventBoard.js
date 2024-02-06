import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../../MainComponents/Main';
import * as S from './Event.styled';

const formatDate = (timestamp) => {
   const options = { year: 'numeric', month: 'long', day: 'numeric' };
   return new Date(timestamp).toLocaleString('en-US', options);
 };


const EventBoard = () => {

   const [events, setEvents] = useState([]);

   useEffect(()=> {
      fetch("https://eb-umust.umust302.shop/api/articles/EVENT")
      .then(response => response.json())
      .then(data => setEvents(data))
      .then(error => console.error("보도자료 에러 발생", error));
   },[])

   const handleEditEvent = (eventId) => {
      console.log( `Editing Event with ID : ${eventId}`);
   };

   const handleDeleteNews = (eventId) => {
      console.log( `Deleting Event with ID : ${eventId}`);
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
            {events.map((event, index) => (
               <Link key={event.id} to={`/Board/events/${event.id}`}>
                  <S.EventItem>
                     <S.EventId>{index + 1}</S.EventId>
                     <S.ItemContent>{event.title.length > 13 ? `${event.title.substring(0, 13)}...` : event.title}</S.ItemContent>
                     <S.Create><span>{event.createdBy}</span></S.Create>
                     <S.Date><span>{formatDate(event.createdAt)}</span></S.Date>

                  </S.EventItem>
               </Link>
            ))}
         </S.EventContent>

      </S.Container>
   );
};

export default EventBoard;