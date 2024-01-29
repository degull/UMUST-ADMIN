// Press.js
import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Main from '../../../MainComponents/Main';
import PressList from './PressList';
import PressDetail from './PressDetail';
import PressForm from './PressForm';
import * as S from './Press.styled';

const initialPressList = [
  { id: 1, title: '보도자료 1', content: '보도자료 1 내용', date: '2024-01-30' },
  { id: 2, title: '보도자료 2', content: '보도자료 2 내용', date: '2024-01-31' },
  // 필요에 따라 더 많은 샘플 보도자료를 추가하세요
];

const Press = () => {
  const navigate = useNavigate();
  const [pressList, setPressList] = useState(initialPressList);

  const handleCreatePress = (newPress) => {
    setPressList((prevPressList) => [
      ...prevPressList,
      { id: prevPressList.length + 1, ...newPress },
    ]);
  };

  return (
    <>
      <Main />
      <S.Container>
        <S.Title>보도자료</S.Title>

        {/* 버튼을 통한 페이지 이동 */}
        <Link to="/press">보도자료 목록</Link>
        <Link to="/press/create">보도자료 작성</Link>

        <Routes>
          <Route path="/press" element={<PressList pressList={pressList} />} />
          <Route path="/press/:id" element={<PressDetail pressList={pressList} />} />
          <Route path="/press/create" element={<PressForm onSubmit={handleCreatePress} />} />
        </Routes>
      </S.Container>
    </>
  );
};

export default Press;
