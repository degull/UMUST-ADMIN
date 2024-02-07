import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Event.styled';
import axios from 'axios';
import Main from '../../../MainComponents/Main';
import ReactMarkdown from 'react-markdown';


const EventDetail = ({ onDelete, onEdit }) => {

   const navigate = useNavigate();
   const { eventId } = useParams();
   const [ event, setEvent ] = useState(null);



   useEffect(() => {
      const fetchEventById = async () => {
        try {
          const response = await fetch(`https://umust302.shop/api/articles/${eventId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          
          console.log('Received press data:', data);
          console.log(eventId)
          setEvent(data);
        } catch (error) {
          console.error('Error fetching notice:', error);
        }
      };
  
      // 컴포넌트가 처음 마운트될 때와 게시글 번호가 변경될 때마다 데이터를 불러옴
      fetchEventById();
    }, [eventId]);
  
    if (!event) {
      return <div>로딩중,,,,</div>
    }
  

    const handleDelete = () => {
      onDelete(eventId);
      navigate('/Board/events');
    }
  
    const handleEdit = () => {
      onEdit(eventId);
      navigate(`/Board/events/${eventId}/edit`);
    }

   return (
      <S.EventDetailContainer>
         <Main />
         <S.DetailContainer>
         <S.EventTitle>{event.title || '제목없음'}</S.EventTitle>

         <ReactMarkdown>{event.content}</ReactMarkdown>

         {event.files && event.files.length > 0 && (
          <S.EventImages>
            {event.files.map((file) => (
              <img key={file.fileId} src={file.fileURL} alt={`Attached Image ${file.fileId}`} />
            ))}
          </S.EventImages>
        )}

      <S.EventDetails>
        <span>작성자 : {event.createBy || '알수없음'}</span>
        <span>작성시간 : {(new Date(event.createBy)).toLocaleString() || '알수없음'}</span>
      </S.EventDetails>

      <S.Buttons>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={handleEdit}>수정</button>
      </S.Buttons>

      </S.DetailContainer>
      </S.EventDetailContainer>
   );
};

export default EventDetail;