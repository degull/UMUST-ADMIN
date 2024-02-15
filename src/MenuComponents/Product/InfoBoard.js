import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Info.styled';
import Main from '../../MainComponents/Main';
import axios from 'axios';

const formatDate = (timestamp) => {
   const options = { year: 'numeric', month: 'long', day: 'numeric' };
   return new Date(timestamp).toLocaleString('ko-KR', options);
 };
 
 const generatePageNumbers = (totalPages) => {
   return Array.from({ length: totalPages }, (_, i) => i + 1);
 };

const InfoBoard = () => {
   const [Infos, setInfos] = useState([]);
   const [currentPage, setCurrentPage] = useState(0);
   const [totalPages, setTotalPages] = useState(0);
   const pageSize = 10;


   useEffect(() => {
      const apiUrl = `https://eb-umust.umust302.shop/api/articles/COSINFO?page=${currentPage}&size=${pageSize}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data.content)) {
            setInfos(data.content);
            setTotalPages(data.totalPages);
          } else {
            console.error('API 응답의 content 속성이 배열이 아닙니다:', data);
          }
        })
        .catch(error => console.error('게시글을 불러오는 중 오류 발생:', error));
    }, [currentPage]);
  
    const handleViewCount = async (infoId) => {
      try {
        await axios.put(`https://eb-umust.umust302.shop/api/articles/${infoId}/views`);
        
        const updatedInfos = await fetchInfos();
        setInfos(updatedInfos);
      } catch (error) {
        console.error('조회수 업데이트 중 오류 발생:', error);
      }
    };
  
    const fetchInfos = async () => {
      const response = await fetch(`https://eb-umust.umust302.shop/api/articles/NOTICE?page=${currentPage}&size=${pageSize}`);
      const data = await response.json();
      return Array.isArray(data.content) ? data.content : [];
    };


   return (
      <S.Container>
      <Main />
      <S.InfoHeader>
        <S.PostListLabel>번호</S.PostListLabel>
        <S.PostListLabel>제목</S.PostListLabel>
        <S.PostListLabel>작성자</S.PostListLabel>
        <S.PostListLabel>작성일</S.PostListLabel>
        <S.PostListLabel>조회수</S.PostListLabel>
      </S.InfoHeader>



      <S.InfoContent>
  {Array.isArray(Infos) && Infos.map((info, index) => (
    <Link key={info.id} to={`/Product/Infos/${info.id}`} onClick={() => handleViewCount(info.id)}>
      <S.InfoItem>
        <S.InfoId>{index + 1 + currentPage * pageSize}</S.InfoId>
        <S.ItemContent>{info.title.length > 13 ? `${info.title.substring(0, 13)}...` : info.title}</S.ItemContent>
        <S.Create>{info.createdBy}</S.Create>
        <S.Date>{formatDate(info.createdAt)}</S.Date>
        <S.ViewCount>조회수: {info.view}</S.ViewCount>
      </S.InfoItem>
    </Link>
  ))}
</S.InfoContent>

      <S.PaginationContainer>
        {generatePageNumbers(totalPages).map((pageNumber) => (
          <S.PaginationItem
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber - 1)}
            active={currentPage === pageNumber - 1}
          >
            {pageNumber}
          </S.PaginationItem>
        ))}
      </S.PaginationContainer>
    </S.Container>
   );
};

export default InfoBoard;