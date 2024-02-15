import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Notice.styled';
import axios from 'axios';
import Main from '../../../MainComponents/Main';
import MDEditor from '@uiw/react-md-editor';

const NoticeEdit = ({ onSave }) => {
  const navigate = useNavigate();
  const { noticeId } = useParams();
  const [markdownContent, setMarkdownContent] = useState('');
  const [title, setTitle] = useState('');
  const [attachedFiles, setAttachedFiles] = useState([]);
  const editorRef = useRef(null);
  const formData = new FormData();

  useEffect(() => {
   const fetchNoticeById = async () => {
     try {
       const response = await axios.get(`https://umust302.shop/api/articles/${noticeId}`);
       const data = response.data;
 
       setTitle(data.title);
       setMarkdownContent(data.content);
       setAttachedFiles(data.files || []);
     } catch (error) {
       console.error('Error fetching notice:', error);
     }
   };
 
   fetchNoticeById();
 }, [noticeId]);
 

  const handleFileSelection = (e) => {
    e.preventDefault();
    const selectedFiles = e.target.files;
    setAttachedFiles([...attachedFiles, ...Array.from(selectedFiles)]);
    e.target.value = '';
  };

  const attachedFilesList = attachedFiles.map((file, index) => (
    <div key={index}>
      {file.originalFileName}
    </div>
  ));

  const handleSave = async (event) => {
   event.preventDefault();
 
   try {
     const data = {
       title: title,
       content: markdownContent,
     };
 
     const newFormData = new FormData();
 
     newFormData.append('article', new Blob([JSON.stringify(data)], { type: 'application/json' }));
 
     attachedFiles.forEach((file) => {
       newFormData.append('file', file);
     });
 
     const response = await axios.put(
       `https://umust302.shop/api/articles/${noticeId}`,
       newFormData,
       {
         headers: {
           'Content-Type': 'multipart/form-data',
         },
       }
     );
 
     console.log(response.data);
 
     // 저장 후 필요한 동작 수행
     onSave();
     navigate(`/Board/notices/${noticeId}`);
   } catch (error) {
     console.error('글 수정 오류:', error);
   }
 };
 

  return (
    <S.NoticeEditContainer>
      <Main />
      <S.FormContainer>
        <S.FormTitle>공지 수정</S.FormTitle>

        <S.NoticeForm onSubmit={handleSave}>
          <S.Formcategory>제목:</S.Formcategory>
          <S.FormInput
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <S.Formcategory>본문</S.Formcategory>
          <MDEditor
            value={markdownContent}
            onChange={setMarkdownContent}
            preview="edit"
            height={500}
            ref={editorRef}
          />

          <S.File>
            <input type="file" multiple onChange={handleFileSelection} />
            <div>{attachedFilesList}</div>
          </S.File>

          <S.FormButton type="submit">수정 완료</S.FormButton>
        </S.NoticeForm>
      </S.FormContainer>
    </S.NoticeEditContainer>
  );
};

export default NoticeEdit;
