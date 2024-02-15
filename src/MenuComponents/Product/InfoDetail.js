import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Info.styled';
import axios from 'axios';
import Main from '../../MainComponents/Main';
import ReactMarkdown from 'react-markdown';
import InfoForm from './InfoForm';

const InfoDetail = ({ onDelete }) => {
   const navigate = useNavigate();
   const { infoId } = useParams();
   const [Info, setInfo] = useState(null);
   const [editMode, setEditMode] = useState(false);
   const [showConfirmation, setShowConfirmation] = useState(false);

     // fetchNoticeById 함수 추가
  const fetchInfoById = async () => {
   try {
     const response = await fetch(`https://umust302.shop/api/articles/${infoId}`, {
       method: 'PATCH',
       headers: {
         'Content-Type': 'application/json',
       },
     });
     const data = await response.json();
     
     console.log('Received press data:', data);
     console.log(infoId);
     setInfo(data);
   } catch (error) {
     console.error('Error fetching notice:', error);
   }
 };

 useEffect(() => {
   // 컴포넌트가 처음 마운트될 때와 게시글 번호가 변경될 때마다 데이터를 불러옴
   fetchInfoById();
 }, [infoId]);

 if (!Info) {
   return <div>로딩 중...</div>;
 }

 const handleDelete = () => {
   setShowConfirmation(true);
 };

 const handleConfirmDelete = async () => {
   try {
     const deleteResponse = await axios.delete(`https://umust302.shop/api/articles/${infoId}`);
     if (deleteResponse.status === 200) {
       console.log('Info deleted successfully.');
       if (typeof onDelete === 'function') {
         onDelete(infoId);
       }

       window.location.reload();

       setTimeout(() => {
         alert('게시물이 삭제되었습니다.');
         navigate('/Product/Infos');
       }, 1000);
     } else {
       console.error('Failed to delete notice.');
     }
   } catch (error) {
     console.error('Error deleting notice:', error);
   }

   setShowConfirmation(false);
 };

 const handleCancelDelete = () => {
   setShowConfirmation(false);
 };
 
   return (
      <S.InfoDetailContainer>
      <Main />
      <S.DetailContainer>
      {editMode ? (
          <InfoForm
            InfoData={Info}
            onEditComplete={() => {
              setEditMode(false);
              fetchInfoById();
            }}
          />
        ) : (
          <>
            <S.InfoTitle>{Info.title || '제목 없음'}</S.InfoTitle>
            <ReactMarkdown>{Info.content}</ReactMarkdown>

            {Info.files && Info.files.length > 0 && (
              <S.InfoImages>
                {Info.files.map((file) => (
                  <img key={file.fileId} src={file.fileURL} alt={`Attached Image ${file.fileId}`} />
                ))}
              </S.InfoImages>
            )}

            <S.InfoDetails>
              <span>작성자: {Info.createdBy || '관리자'}</span>
              <span>작성 시간: {(new Date(Info.createdAt)).toLocaleString() || '알 수 없음'}</span>
            </S.InfoDetails>
            <S.Buttons>
              <button onClick={handleDelete}>삭제</button>
              <button onClick={() => setEditMode(true)}>수정</button>
            </S.Buttons>

            {showConfirmation && (
              <S.ConfirmationPopup>
                <S.ConfirmationPopupContent>
                  <p>정말로 삭제하시겠습니까?</p>
                  <S.ConfirmationButtons>
                    <button onClick={handleConfirmDelete}>예</button>
                    <button onClick={handleCancelDelete}>아니요</button>
                  </S.ConfirmationButtons>
                </S.ConfirmationPopupContent>
              </S.ConfirmationPopup>
            )}

            {Info.files && Info.files.length > 0 && (
              <S.InfoFiles>
                <span>첨부파일:</span>
                {Info.files.map((file) => (
                  <div key={file.fileId}>
                    <a href={file.fileURL} download>{file.originalFileName}</a>
                  </div>
                ))}
              </S.InfoFiles>
            )}
          </>
        )}
      </S.DetailContainer>
    </S.InfoDetailContainer>
   );
};

export default InfoDetail;