import React, { useState, useRef } from 'react';
import { FileDrop } from 'react-file-drop';
import axios from 'axios';
import * as S from './Notice.styled';
import Main from '../../../MainComponents/Main';
import MDEditor from '@uiw/react-md-editor';

const NoticeForm = () => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [boardColor, setBoardColor] = useState(false);
  const editorRef = useRef(null);

  const handleImageUpload = (files) => {
    const formData = new FormData();
    formData.append('file', files[0]);
    const headers = { 'Content-Type': files[0].type };

    if (files[0].size >= 5000000) {
      alert('5MB 이상 파일은 업로드가 불가능합니다.');
    } else if (
      files[0].type === 'image/png' ||
      files[0].type === 'image/jpeg' ||
      files[0].type === 'image/jpg'
    ) {
      
      axios.post('http://eb-umust.umust302.shop/api/images', formData, { headers }).then(function (response) {
        let imageName = response.data;

        let newValue =
          markdownContent +
          '\n\n ![' +
          files[0].name +
          '](http://eb-umust.umust302.shop/api/images/' +
          imageName +
          ')';
        setMarkdownContent(newValue);
      });
    } else {
      alert('png, jpg, jpeg 파일이 아닙니다.');
    }

    setBoardColor(false);
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

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const titleInput = document.querySelector('input[type="text"]');
    const title = titleInput.value.trim(); 
  
    if (!title || !markdownContent.trim()) {
      alert('제목과 본문을 모두 입력해주세요.');
      return; 
    }
  
    const articleData = {
      title: title,
      content: markdownContent,
      category: 'NOTICE',
    };
  
    axios.post('http://eb-umust.umust302.shop/api/articles', articleData)
      .then(function (response) {
        console.log('Article submitted successfully:', response.data);
      })
      .catch(function (error) {
        console.error('Error submitting article:', error);
      });
  };
  

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
            onDragOver={() => {
              setBoardColor(true);
            }}
            onDragLeave={() => {
              setBoardColor(false);
            }}
            onDrop={(files, event) => {
              handleImageUpload(files);
            }}
          >
            <MDEditor
              value={markdownContent}
              onChange={handleEditorChange}
              preview="edit"
              height={500}
              onPaste={handlePaste}
              style={{
                backgroundColor: boardColor ? '#adb5bd' : null,
              }}
              ref={editorRef}
            />
          </FileDrop>

          <S.FormButton type="submit">
            작성
          </S.FormButton>
        </S.NoticeForm>

        <S.MarkdownPreviewContainer>
          <h2>Markdown Preview</h2>
          <S.NoticeContent>{markdownContent}</S.NoticeContent>
        </S.MarkdownPreviewContainer>
      </S.FormContainer>
    </S.NoticeFormContainer>
  );
};

export default NoticeForm;
