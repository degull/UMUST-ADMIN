// PressForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Press.styled';

const PressForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 보도 자료를 생성할 때 날짜를 포함하려면
    const currentDate = new Date().toLocaleDateString('en-US');
    // 날짜 형식을 필요에 따라 조정하고 추가적인 유효성 검사를 수행할 수 있습니다.
    onSubmit({ title, content, date: currentDate });
    // 제출 후 목록 페이지로 이동
    navigate('/press');
  };

  return (
    <S.FormContainer>
      <S.FormTitle>보도자료 작성</S.FormTitle>
      <form onSubmit={handleSubmit}>
        <label>
          제목:
          <S.FormInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          내용:
          <S.FormTextarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        {/* 사용자가 날짜를 지정할 수 있도록 하려면 여기에 날짜 입력을 추가할 수 있습니다. */}
        <S.FormButton type="submit">작성</S.FormButton>
      </form>
    </S.FormContainer>
  );
};

export default PressForm;
