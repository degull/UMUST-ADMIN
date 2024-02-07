import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Notice.styled';
import axios from 'axios';
import Main from '../../../MainComponents/Main';
import Notice from './Notice';
import ReactMarkdown from 'react-markdown';

const NoticeDetail = ({ onDelete, onEdit }) => {
  const navigate = useNavigate();
  const { noticeId } = useParams(); 
  const [notice, setNotice] = useState(null);

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
        
        console.log('Received notice data:', data);
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

/*   const handleDelete = () => {
    onDelete(id);
    navigate('/Board/notices');
  };

  const handleEdit = () => {
    onEdit(id);
    navigate(`/Board/notices/${id}/edit`);
  }; */

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
          <span>작성자: {notice.createdBy || '알 수 없음'}</span>
          <span>작성 시간: {(new Date(notice.createdAt)).toLocaleString() || '알 수 없음'}</span>
        </S.NoticeDetails>
        <S.Buttons>
          {/* 삭제 및 수정 버튼 등의 작업을 수행 */}
        </S.Buttons>
      </S.DetailContainer>
    </S.NoticeDetailContainer>
  );
};

export default NoticeDetail;
