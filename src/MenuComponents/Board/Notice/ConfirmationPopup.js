// ConfirmationPopup.js
import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Notice.styled'; // Import your styled components

const ConfirmationPopup = ({ onConfirm, onCancel }) => {
  return (
    <S.ConfirmationPopup>
      <p>삭제하시겠습니까?</p>
      <S.Buttons>
        <button onClick={onConfirm}>예</button>
        <button onClick={onCancel}>아니요</button>
      </S.Buttons>
    </S.ConfirmationPopup>
  );
};

ConfirmationPopup.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConfirmationPopup;
