// PressDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from './Press.styled';

const PressDetail = ({ pressList }) => {
  const { id } = useParams();
  const press = pressList.find(item => item.id === Number(id));

  if (!press) {
    return <div>보도자료를 찾을 수 없습니다.</div>;
  }

  return (
    <S.PressDetailContainer>
      <S.Title>{press.title}</S.Title>
      <S.Content>{press.content}</S.Content>
      <S.Date>{`작성일: ${press.date}`}</S.Date>
      {/* 필요한 다른 세부 정보를 표시할 수 있도록 추가 */}
    </S.PressDetailContainer>
  );
};

export default PressDetail;
