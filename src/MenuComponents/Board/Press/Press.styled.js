// Press.styled.js
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

export const PressDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const PressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;


export const DetailContainer = styled.div`
width: 800px;
margin: 30px auto;
background-color: #fff;
padding: 20px;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;


export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const PressDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: #777;
  font-size: 14px;
`;

export const PressTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
`;

export const FormTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const File = styled.div`
  margin-top: 50px;
`;

export const FormContainer = styled.div`
  width: 800px;
  margin: 30px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;


export const PressForm = styled.form`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export const Formcategory = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 38px;
  padding: 8px;
  margin-bottom: 20px;
  border-radius:4px;
`;

export const PressHeader = styled.div`
   display: flex;
   background: #f5f4d3;
   padding: 8px;
   border: 1px solid #dddddd;
   width: 1200px;
`;

export const PressItem = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px 10px;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const ItemContent = styled.div`
  flex: 1;
  text-align: center;
  margin-left: 8px;
  font-size: 12px;
`;

export const Create = styled.div`
  margin-right: 200px;
  text-align: center;
  display: flex;
  font-size: 12px;

`;

export const Date = styled.div`
  margin-right: 490px;
  text-align: center;
  display: flex;
  font-size: 12px;
`;

export const View = styled.div`
  margin-left: -150px;
  text-align: center;
  display: flex;
`;


export const PressId = styled.div`
  margin-right: 30px;
  text-align: center;
  display: flex;
`;



export const PostListLabel = styled.div`
   font-size: 16px;
   font-weight: bold;
   flex: 1;
   padding: 2px;
`;

export const PressContent = styled.div`
  font-size: 16px;
  color: #555;
  padding: 30px 20px;
  text-align: center;
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

export const MarkdownPreviewContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 20px;
  border : 1px solid #ddd;
`;