import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Data.styled';
import Main from '../../MainComponents/Main';
import axios from 'axios';

const formatDate = (timestamp) => {
   const options = { year: 'numeric', month: 'long', day: 'numeric' };
   return new Date(timestamp).toLocaleString('ko-KR', options);
 };
 
 const generatePageNumbers = (totalPages) => {
   return Array.from({ length: totalPages }, (_, i) => i + 1);
 };


const DataBoard = () => {
   const [data, setdata] = useState([]);
   const [currentPage, setCurrentPage] = useState(0);
   const [totalPages, setTotalPages] = useState(0);
   const pageSize = 10;


   
   useEffect(() => {
      const apiUrl = `https://eb-umust.umust302.shop/api/articles/REFERENCE?page=${currentPage}&size=${pageSize}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data.content)) {
            setdata(data.content);
            setTotalPages(data.totalPages);
          } else {
            console.error('API 응답의 content 속성이 배열이 아닙니다:', data);
          }
        })
        .catch(error => console.error('게시글을 불러오는 중 오류 발생:', error));
    }, [currentPage]);
  
    const handleViewCount = async (dataId) => {
      try {
        await axios.put(`https://eb-umust.umust302.shop/api/articles/${dataId}/views`);
        
        const updatedDatas = await fetchDatas();
        setdata(updatedDatas);
      } catch (error) {
        console.error('조회수 업데이트 중 오류 발생:', error);
      }
    };
  
    const fetchDatas = async () => {
      const response = await fetch(`https://eb-umust.umust302.shop/api/articles/REFERENCE?page=${currentPage}&size=${pageSize}`);
      const data = await response.json();
      return Array.isArray(data.content) ? data.content : [];
    };

   return (
      <S.Container>
      <Main />
      <S.DataHeader>
        <S.PostListLabel>번호</S.PostListLabel>
        <S.PostListLabel>제목</S.PostListLabel>
        <S.PostListLabel>작성자</S.PostListLabel>
        <S.PostListLabel>작성일</S.PostListLabel>
        <S.PostListLabel>조회수</S.PostListLabel>
      </S.DataHeader>



      <S.DataContent>
  {Array.isArray(data) && data.map((data, index) => (
    <Link key={data.id} to={`/CRO/Datas/${data.id}`} onClick={() => handleViewCount(data.id)}>
      <S.DataItem>
        <S.DataId>{index + 1 + currentPage * pageSize}</S.DataId>
        <S.ItemContent>{data.title.length > 13 ? `${data.title.substring(0, 13)}...` : data.title}</S.ItemContent>
        <S.Create>{data.createdBy}</S.Create>
        <S.Date>{formatDate(data.createdAt)}</S.Date>
        <S.ViewCount>조회수: {data.view}</S.ViewCount>
      </S.DataItem>
    </Link>
  ))}
</S.DataContent>

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

export default DataBoard;