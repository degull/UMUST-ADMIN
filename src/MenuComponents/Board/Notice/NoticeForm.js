import React, { useState, useRef } from 'react';
import { FileDrop } from 'react-file-drop';
import axios from 'axios';
import * as S from './Notice.styled';
import Main from '../../../MainComponents/Main';
import MDEditor from '@uiw/react-md-editor';

const NoticeForm = () => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [boardColor, setBoardColor] = useState(false);
  const [fileToUpload, setFileToUpload] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const editorRef = useRef(null);

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

      const imageUrl = response.data.imageUrl;
      setMarkdownContent((prevContent) => prevContent + `\n\n ![Uploaded Image](${imageUrl})`);
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



  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const titleInput = document.querySelector('input[type="text"]');
    const title = titleInput.value.trim();

/*     const data = {
      "title": name,
      "content": gender,
      "category": birthday
    } */
  
    if (!title || !markdownContent.trim()) {
      alert('제목과 본문을 모두 입력해주세요.');
      return;
    }

  
    try {
      formData.append('title', title);
      formData.append('content', markdownContent);
      formData.append('category', 'NOTICE');
  
      if (fileToUpload) {
        formData.append('file', fileToUpload);
      }
  
      const uploader = { name: 'huewilliams' };
      const uploaderString = JSON.stringify(uploader);
      const uploaderBlob = new Blob([uploaderString], { type: 'application/json' });
      formData.append('uploader', uploaderBlob);
  
      for (const file of selectedFiles) {
        formData.append('files', file);
      }
  
      const response = await fetch('http://eb-umust.umust302.shop/api/articles', {
        method: 'POST',
        body: formData,
      });
  
      const responseData = await response.json();
  
      console.log('글 작성 성공:', responseData);
    } catch (error) {
      console.error('글 작성 오류:', error);
    }
  };

  const handleFileSelection = (e) => {
    e.preventDefault();
    const selectedFiles = e.target.files;
    setSelectedFiles(Array.from(selectedFiles));
    e.target.value = '';
  };

  const attachedFiles = selectedFiles.map((file) => (
    <div key={file.name}>
      {file.name}
      <button onClick={() => setSelectedFiles(selectedFiles.filter((e) => e !== file))}>
      </button>
    </div>
  ));

  return (
    <S.NoticeFormContainer>
      <Main />
      <S.FormContainer>
        <S.FormTitle>공지 작성</S.FormTitle>

        <S.NoticeForm onSubmit={handleSubmit}>
          <S.Formcategory>제목:</S.Formcategory>
          <S.FormInput type="text" placeholder="제목을 입력하세요" />

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

          <input type="file" multiple onChange={handleFileSelection} />
          <div>{attachedFiles}</div>

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
