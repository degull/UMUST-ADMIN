// PressList.js
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Press.styled';

const PressList = ({ pressList }) => {
  return (
    <S.PressListContainer>
      <S.Title>보도자료 목록</S.Title>
      <ul>
        {pressList.map(press => (
          <li key={press.id}>
            <Link to={`/press/${press.id}`}>{press.title}</Link>
          </li>
        ))}
      </ul>
    </S.PressListContainer>
  );
};

export default PressList;
