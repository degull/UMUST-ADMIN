import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Main from '../../../MainComponents/Main';
import * as S from './Paper.styled';

const PaperBoard = () => {
  const [paperDetails, setPaperDetails] = useState([]);

  useEffect(() => {
    const fetchPaperDetails = async () => {
      try {
        const response = await axios.get('https://eb-umust.umust302.shop/api/thesis');
        const paperList = response.data;

        setPaperDetails(paperList);
      } catch (error) {
        console.error('Error fetching paper details:', error);
      }
    };

    fetchPaperDetails();
  }, []);

  return (
    <S.Container>
      <Main />
      <S.BoardTitle1>논문</S.BoardTitle1>
      <S.BoardTitle2>유머스트알엔디의 연구 성과입니다.</S.BoardTitle2>
      <S.Border />

      {paperDetails.map((paper, index) => (
        <S.PaperHeader key={index}>
          <S.PaperTitle>{paper.title}</S.PaperTitle>
          <S.PaperDetail>
            <S.subPaper>Journal:<br/><S.subApi>{paper.journal}</S.subApi></S.subPaper>
          </S.PaperDetail>
          <S.PaperDetail>
            <S.subPaper>Authors:<br/><S.subApi>{paper.authors}</S.subApi></S.subPaper>
          </S.PaperDetail>
          <S.PaperDetail><S.subPaper>{paper.date}</S.subPaper></S.PaperDetail>
          <S.PaperDetail>
          <S.subPaper><a href={paper.link}>{paper.link}</a></S.subPaper>
          </S.PaperDetail>
        </S.PaperHeader>
      ))}

      {paperDetails.length === 0 && <div>Loading...</div>}
    </S.Container>
  );
};

export default PaperBoard;
