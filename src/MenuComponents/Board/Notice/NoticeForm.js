import React, { useState, useRef } from 'react';
import { FileDrop } from 'react-file-drop';
import axios from 'axios';
import * as S from './Notice.styled';
import Main from '../../../MainComponents/Main';
import MDEditor from '@uiw/react-md-editor';
import { useNavigate } from 'react-router-dom';

const NoticeForm = () => {
  const navigate = useNavigate();
  const [markdownContent, setMarkdownContent] = useState('');
  const [boardColor, setBoardColor] = useState(false);
  const [fileToUpload, setFileToUpload] = useState(null);
  const [attachedFiles, setAttachedFiles] = useState([]);
  const editorRef = useRef(null);
  const titleRef = useRef(null);
  const formData = new FormData();


  const handleFileUpload = async (file) => {
    const allowedFileTypes = ['pdf', 'ppt', 'pptx', 'hwp'];

    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (!allowedFileTypes.includes(fileExtension)) {
      alert('pdf, ppt, pptx, hwp 파일만 업로드 가능합니다.');
      return;
    }

    setFileToUpload(file);
    setBoardColor(false);

    try {
      const fileData = await readFileAsBlob(file);
      formData.append('files', fileData, file.name);
    } catch (error) {
      console.error('파일 처리 오류:', error);
      setBoardColor(false);
    }
  };

  const readFileAsBlob = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const blob = new Blob([reader.result], { type: file.type });
        resolve(blob);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const handleImageUpload = async (files) => {
    const formData = new FormData();
    formData.append('file', files[0]);

    try {
      const response = await axios.post('http://eb-umust.umust302.shop/api/images', formData, {
        headers: { 'Content-Type': files[0].type },
      });

      const fileURL = response.data.fileURL;
      setMarkdownContent((prevContent) => prevContent + `\n\n ![Uploaded Image](${fileURL})`);
      setBoardColor(false);
    } catch (error) {
      console.error('이미지 업로드 오류:', error);
      setBoardColor(false);
    }
  };

  const handlePaste = (event) => {
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const blob = items[i].getAsFile();
        handleImageUpload([blob]);
        event.preventDefault();
        break;
      }
    }
  };

  const handleEditorChange = (value) => {
    setMarkdownContent(value);
  };

  const handleFileSelection = (e) => {
    e.preventDefault();
    const selectedFiles = e.target.files;
    setAttachedFiles([...attachedFiles, ...Array.from(selectedFiles)]);
    e.target.value = '';
  };

  const attachedFilesList = attachedFiles.map((file, index) => (
    <div key={index}>
      {file.name}
      <button onClick={() => handleRemoveFile(index)}>삭제</button>
    </div>
  ));

  const handleRemoveFile = (index) => {
    const updatedFiles = [...attachedFiles];
    updatedFiles.splice(index, 1);
    setAttachedFiles(updatedFiles);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      const data = {
        title: titleRef.current.value,
        content: markdownContent,
        category: "NOTICE",
      };

      formData.append("article", new Blob([JSON.stringify(data)], { type: "application/json" }));

      attachedFiles.forEach((file) => {
        formData.append("file", file);
      });

      const response = await axios.post(
        'https://eb-umust.umust302.shop/api/articles',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      console.log(response.data);
      navigate('/Board/notices');
    } catch (error) {
      console.error('글 작성 오류:', error);
    }
  };

  return (
    <S.NoticeFormContainer>
      <Main />
      <S.FormContainer>
        <S.FormTitle>공지 작성</S.FormTitle>

        <S.NoticeForm onSubmit={handleSubmit}>
          <S.Formcategory>제목:</S.Formcategory>
          <S.FormInput 
            type="text"
            placeholder="제목을 입력하세요"
            ref={titleRef} 
          />
          
          <S.Formcategory>본문</S.Formcategory>
          <FileDrop
            onDragOver={() => setBoardColor(true)}
            onDragLeave={() => setBoardColor(false)}
            onDrop={(files) => {
              if (files.length === 1) {
                handleFileUpload(files[0]);
              } else {
                alert('이미지는 한 개씩 업로드해주세요.');
              }
            }}
          >
            <MDEditor
              value={markdownContent}
              onChange={handleEditorChange}
              preview="edit"
              height={500}
              onPaste={handlePaste}
              style={{ backgroundColor: boardColor ? '#adb5bd' : null }}
              ref={editorRef}
            />
          </FileDrop>
          
          <S.File>
          <input type="file" multiple onChange={handleFileSelection} />
          <div>{attachedFilesList}</div>
          </S.File>

          <S.FormButton type="submit">작성</S.FormButton>
        </S.NoticeForm>

        <S.MarkdownPreviewContainer>
          <h2>Markdown 미리보기</h2>
          <S.NoticeContent>{markdownContent}</S.NoticeContent>
        </S.MarkdownPreviewContainer>
      </S.FormContainer>
    </S.NoticeFormContainer>
  );
};

export default NoticeForm;