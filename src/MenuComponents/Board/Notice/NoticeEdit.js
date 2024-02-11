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

        // 게시물 데이터를 받아와서 해당 컴포넌트의 state에 설정
        setTitle(data.title);
        setMarkdownContent(data.content);
        setAttachedFiles(data.files || []);
      } catch (error) {
        console.error('Error fetching notice:', error);
      }
    };

    // 게시글 번호가 변경될 때마다 데이터를 불러옴
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

  const handleRemoveFile = (index) => {
    const updatedFiles = [...attachedFiles];
    updatedFiles.splice(index, 1);
    setAttachedFiles(updatedFiles);
  };

  const handleSave = async (event) => {
    event.preventDefault();

    try {
      const data = {
        title: title,
        content: markdownContent,
      };

      formData.append('article', new Blob([JSON.stringify(data)], { type: 'application/json' }));

      attachedFiles.forEach((file) => {
        formData.append('file', file);
      });

      const response = await axios.put(
        `https://umust302.shop/api/articles/${noticeId}`,
        formData,
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
