import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import * as S from './Notice.styled';
import Main from '../../../MainComponents/Main';

Quill.register('modules/imageResize', ImageResize);

const BackendUrl = "http://eb-umust.umust302.shop";

const NoticeForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);
  const inputFileRef = useRef(null);
  const quillRef = useRef();

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(BackendUrl + '/api/images', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const imageURL = await response.json();
        return imageURL;
      } else {
        console.error('이미지 업로드 실패:', response.status);
        return null;
      }
    } catch (error) {
      console.error('이미지 업로드 중 오류:', error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 작성해주세요');
      return;
    }

    const noticeData = {
      title,
      content,
      category: "NOTICE", // 카테고리를 프로젝트에 맞게 수정
    };

    try {
      const contentWithImages = await insertImagesIntoContent(content);
      noticeData.content = contentWithImages;

      const response = await fetch(BackendUrl + '/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noticeData),
      });

      if (response.ok) {
        alert('게시글이 성공적으로 작성되었습니다.');
        setTitle('');
        setContent('');
        setFiles([]);
        // 페이지 이동 또는 다른 작업 수행
        // navigate('/Board/notices');
      } else {
        console.error('게시글 작성 중 오류:', response.status);
      }
    } catch (error) {
      console.error('게시글 작성 중 오류:', error);
    }
  };

  const insertImagesIntoContent = async (originalContent) => {
    const quill = quillRef.current.getEditor();
    const contentDelta = quill.clipboard.convert(originalContent);
    const ops = contentDelta.ops;

    for (const op of ops) {
      if (op.insert && typeof op.insert === 'object' && op.insert.image) {
        const file = op.insert.image;
        const imageUrl = await uploadImage(file);

        if (imageUrl) {
          op.insert.image = imageUrl;
          const range = quill.getSelection();
          quill.updateContents({ ops });
          quill.setSelection(range.index + 1);
        }
      }
    }

    const updatedContent = quill.root.innerHTML;
    return updatedContent;
  };

  const handleImage = async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      const range = quillRef.current.getEditor().getSelection(true);
      quillRef.current.getEditor().insertEmbed(range.index, 'image', '/images/loading.gif');

      try {
        const url = await uploadImage(file);
        quillRef.current.getEditor().deleteText(range.index, 1);

        if (url) {
          quillRef.current.getEditor().insertEmbed(range.index, 'image', url);
          quillRef.current.getEditor().setSelection(range.index + 1);
        }
      } catch (e) {
        quillRef.current.getEditor().deleteText(range.index, 1);
      }
    };
  };

  const modules = useMemo(() => {
    const customToolbar = [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ align: [] }],
      [{ 'image': 'customImage' }],
      [{ color: [] }, { background: [] }],
      ['table'],
      ['clean'],
    ];

    return {
      toolbar: customToolbar,
      imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize', 'Toolbar'],
      },
    };
  }, [handleImage]);

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'script',
    'blockquote',
    'code-block',
    'align',
    'image',
    'table',
    'color',
    'background',
  ];

  const handleImageClick = async () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />

          <S.Formcategory>본문</S.Formcategory>
          <ReactQuill
            ref={quillRef}
            style={{ height: '400px' }}
            value={content}
            onChange={(value) => setContent(value)}
            placeholder="내용을 입력하세요"
            modules={modules}
            formats={formats}
          />

          <label>파일 선택</label>
          <input
            ref={inputFileRef}
            type="file"
            accept="application/pdf, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.wordprocessingml.document, image/*"
            multiple
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />

          <S.FormButton type="submit">작성</S.FormButton>
        </S.NoticeForm>
      </S.FormContainer>
    </S.NoticeFormContainer>
  );
};

export default NoticeForm;
