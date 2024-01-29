// Paper.styled.js

import styled from "@emotion/styled";

export const Container = styled.div`
   width: 1500px;
   height: 500px;
   margin-left: 300px;
   display: flex; /* Add display: flex */
   justify-content: space-between; /* Add space between children */
`;

export const Title = styled.div`
   font-size: 25px;
   font-weight: bold;
   cursor: default;
`;

export const WriteContainer = styled.div`
   background: #9c9;
   width: 600px;
`;

export const ListContainer = styled.div`
   background: #9c9;
   width: 600px;
`;

export const Category1 = styled.div`
   width: 150px;
   height: 50px;
   background: #D9D9D9;
   margin: 30px 30px;
   text-align: center;
   align-items: center;
   justify-content: center;
   font-size: 15px;
   font-weight: 800;
   padding-top: 15px;
   cursor: pointer;
`;

export const Category2 = styled.div`
   width: 150px;
   height: 50px;
   background: #D9D9D9;
   margin: 30px 30px;
   font-size: 15px;
   text-align: center;
   align-items: center;
   justify-content: center;
   padding-top: 15px;
   font-weight: 800;
   cursor: pointer;
`;

export const Write = styled.div``;

export const List = styled.div``;
