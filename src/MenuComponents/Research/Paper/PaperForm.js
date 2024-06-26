// PaperForm.js
import React, { useState } from 'react';
import axios from 'axios';
import * as S from './Paper.styled';
import Main from '../../../MainComponents/Main';
import { useNavigate } from 'react-router-dom';

const PaperForm = ({ onPaperSubmit }) => {
  const [title, setTitle] = useState('');
  const [journal, setJournal] = useState('');
  const [authors, setAuthors] = useState('');
  const [date, setDate] = useState('');
  const [link, setLink] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paperData = {
      title,
      journal,
      authors,
      date,
      link,
    };

    try {
      const response = await axios.post('http://eb-umust.umust302.shop/api/thesis', paperData);

      console.log('논문이 성공적으로 작성되었습니다.', response.data);

      // 부모 컴포넌트로 새로운 논문 정보를 전달
      onPaperSubmit(response.data);

      // 폼 초기화
      setTitle('');
      setJournal('');
      setAuthors('');
      setDate('');
      setLink('');

      // Open the modal
      setModalOpen(true);

      // Delay the navigation after showing the modal
      setTimeout(() => {
        navigate('/Research/papers');
      }, 3000); // Adjust the delay time as needed

    } catch (error) {
      console.error('논문 작성 중 오류 발생:', error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handlePaperSubmit = (data) => {
    console.log('Paper submitted:', data);
  };

  return (
    <S.PaperFormContainer>
      <Main />
      <S.FormContainer>
        <S.FormTitle>논문정보 작성</S.FormTitle>

        <S.PaperForm onSubmit={handleSubmit}>
          <S.Formcategory>Title</S.Formcategory>
          <S.FormInput
            type='text'
            placeholder='제목을 입력하세요'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <S.Formcategory>Journal</S.Formcategory>
          <S.FormInput
            type='text'
            placeholder='예 : Bioorg Med Chem'
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
          />

          <S.Formcategory>Authors</S.Formcategory>
          <S.FormInput
            type='text'
            placeholder='예: Baek S, Choi NH, Lee KP, Jhun H, Kim J.'
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
          />

          <S.Formcategory>Date</S.Formcategory>
          <S.FormInput
            type='text'
            placeholder='예 : 2023-10-10'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <S.Formcategory>Link</S.Formcategory>
          <S.FormInput
            type='text'
            placeholder='예 : https://pubmed.ncbi.nlm.nih.gov/'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <S.FormButton type="submit">
            작성
          </S.FormButton>
        </S.PaperForm>
      </S.FormContainer>

      {/* Modal for "등록이 완료되었습니다" */}
      {isModalOpen && (
        <S.Modal>
          <S.ModalContent>
            <p>등록이 완료되었습니다.</p>
            <button onClick={closeModal}>확인</button>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.PaperFormContainer>
  );
};

export default PaperForm;
