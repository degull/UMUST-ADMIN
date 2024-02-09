import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Notice.styled';
import axios from 'axios';
import Main from '../../../MainComponents/Main';
import ReactMarkdown from 'react-markdown';


const NoticeDetail = ({ onDelete, onEdit }) => {
  const navigate = useNavigate();
  const { noticeId } = useParams(); 
  const [notice, setNotice] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);


  useEffect(() => {
    const fetchNoticeById = async () => {
      try {
        const response = await fetch(`https://umust302.shop/api/articles/${noticeId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        
        console.log('Received press data:', data);
        console.log(noticeId)
        setNotice(data);
      } catch (error) {
        console.error('Error fetching notice:', error);
      }
    };

    // 컴포넌트가 처음 마운트될 때와 게시글 번호가 변경될 때마다 데이터를 불러옴
    fetchNoticeById();
  }, [noticeId]);

  if (!notice) {
    return <div>로딩 중...</div>;
  }

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const deleteResponse = await axios.delete(`https://umust302.shop/api/articles/${noticeId}`);
      if (deleteResponse.status === 200) {
        console.log('Notice deleted successfully.');
        onDelete(noticeId);
  
        // Automatically refresh the page
        window.location.reload();
  
        // Automatically navigate to the notice board after a short delay (e.g., 1 second)
        setTimeout(() => {
          navigate('/Board/notices');
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

  const handleEdit = () => {
    onEdit(noticeId);
    navigate(`/Board/notices/${noticeId}/edit`);
  };



  return (
    <S.NoticeDetailContainer>
      <Main />
      <S.DetailContainer>
        <S.NoticeTitle>{notice.title || '제목 없음'}</S.NoticeTitle>
        <ReactMarkdown>{notice.content}</ReactMarkdown>

        {notice.files && notice.files.length > 0 && (
          <S.NoticeImages>
            {notice.files.map((file) => (
              <img key={file.fileId} src={file.fileURL} alt={`Attached Image ${file.fileId}`} />
            ))}
          </S.NoticeImages>
        )}

        <S.NoticeDetails>
          <span>작성자: {notice.createdBy || '관리자'}</span>
          <span>작성 시간: {(new Date(notice.createdAt)).toLocaleString() || '알 수 없음'}</span>
        </S.NoticeDetails>
        <S.Buttons>
          {/* 삭제 및 수정 버튼 */}
          <button onClick={handleDelete}>삭제</button>
          <button onClick={handleEdit}>수정</button>
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

        {notice.files && notice.files.length > 0 && (
          <S.NoticeFiles>
            <span>첨부파일:</span>
            {notice.files.map((file) => (
              <div key={file.fileId}>
                <a href={file.fileURL} download>{file.originalFileName}</a>
              </div>
            ))}
          </S.NoticeFiles>
        )}
      </S.DetailContainer>
    </S.NoticeDetailContainer>
  );
};


export default NoticeDetail;
