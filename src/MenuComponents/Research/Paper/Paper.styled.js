// Paper.styled.js

import styled from "@emotion/styled";

export const Container = styled.div`
   width: 1500px;
   height: 500px;
   margin-left: 300px;
`;

export const Title = styled.div`
   font-size: 25px;
   font-weight: bold;
   cursor: default;
`;


export const Category1 = styled.div`
   width: 150px;
   height: 50px;
   background: #D9D9D9;
   margin: 30px 30px;
   text-align: center;
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
   text-align: center;
   font-size: 15px;
   font-weight: 800;
   padding-top: 15px;
   cursor: pointer;
`;

export const PaperFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const FormContainer = styled.div`
  width: 800px;
  margin: 30px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;


export const FormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  margin-top: 80px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Formcategory = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;


export const PaperForm = styled.form`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
export const FormInput = styled.input`
  width: 100%;
  height: 38px;
  padding: 8px;
  margin-bottom: 20px;
  border-radius:4px;
  &::placeholder{
   color: #999;
  }
`;

export const PostListLabel = styled.div`
   font-size: 16px;
   font-weight: bold;
   flex: 1;
   padding: 2px;
`;

export const Border = styled.div`
   border: 3px solid #033788;
   width: 1200px;
`;

export const PaperHeader = styled.div`
   display: flex;
   margin-top: 20px;
   padding: 8px;
   border: 1px solid #dddddd;
   width: 1200px;
`;


export const BoardTitle1 = styled.div`
   font-size:22px;
   font-weight: 900;
   margin-bottom: 17px;
`;

export const BoardTitle2 = styled.div`
   font-size: 11px;
   margin-bottom: 11px;
`;

export const PaperTitle = styled.h1`
  font-size: 16px;
  font-weight: 700;
  width: 650px;
  `;

export const subPaper = styled.div`
font-size: 9px;
font-weight: bold;
`;

export const PaperDetail = styled.p`
  // your styles for PaperDetail
`;
