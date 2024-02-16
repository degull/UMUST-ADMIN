import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Data.styled';
import axios from 'axios';
import Main from '../../MainComponents/Main';
import ReactMarkdown from 'react-markdown';
import DataForm from './DataForm';

const DataDetail = ({ onDelete }) => {
   const navigate = useNavigate();
   const { dataId } = useParams();
   const [data, setdata] = useState(null);
   const [editMode, setEditMode] = useState(false);
   const [showConfirmation, setShowConfirmation] = useState(false);

   const fetchDataById = async () => {
      try {
        const response = await fetch(`https://umust302.shop/api/articles/${dataId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'apdplication/json',
          },
        });
        const data = await response.json();
        
        console.log('Received press data:', data);
        console.log(dataId);
        setdata(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    useEffect(() => {
      // 컴포넌트가 처음 마운트될 때와 게시글 번호가 변경될 때마다 데이터를 불러옴
      fetchDataById();
    }, [dataId]);
   
    if (!data) {
      return <div>로딩 중...</div>;
    }
   
    const handleDelete = () => {
      setShowConfirmation(true);
    };

    const handleConfirmDelete = async () => {
      try {
        const deleteResponse = await axios.delete(`https://umust302.shop/api/articles/${dataId}`);
        if (deleteResponse.status === 200) {
          console.log('data deleted successfully.');
          if (typeof onDelete === 'function') {
            onDelete(dataId);
          }
   
          window.location.reload();
   
          setTimeout(() => {
            alert('게시물이 삭제되었습니다.');
            navigate('/Cro/Datas');
          }, 1000);
        } else {
          console.error('Failed to delete data.');
        }
      } catch (error) {
        console.error('Error deleting data:', error);
      }
   
      setShowConfirmation(false);
    };
   
    const handleCancelDelete = () => {
      setShowConfirmation(false);
    };

   return (
      <S.DataDetailContainer>
      <Main />
      <S.DetailContainer>
      {editMode ? (
          <DataForm
            DataData={data}
            onEditComplete={() => {
              setEditMode(false);
              fetchDataById();
            }}
          />
        ) : (
          <>
            <S.DataTitle>{data.title || '제목 없음'}</S.DataTitle>
            <ReactMarkdown>{data.content}</ReactMarkdown>

            {data.files && data.files.length > 0 && (
              <S.DataImages>
                {data.files.map((file) => (
                  <img key={file.fileId} src={file.fileURL} alt={`Attached Image ${file.fileId}`} />
                ))}
              </S.DataImages>
            )}

            <S.DataDetails>
              <span>작성자: {data.createdBy || '관리자'}</span>
              <span>작성 시간: {(new Date(data.createdAt)).toLocaleString() || '알 수 없음'}</span>
            </S.DataDetails>
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

            {data.files && data.files.length > 0 && (
              <S.DataFiles>
                <span>첨부파일:</span>
                {data.files.map((file) => (
                  <div key={file.fileId}>
                    <a href={file.fileURL} download>{file.originalFileName}</a>
                  </div>
                ))}
              </S.DataFiles>
            )}
          </>
        )}
      </S.DetailContainer>
    </S.DataDetailContainer>
   );
};

export default DataDetail;