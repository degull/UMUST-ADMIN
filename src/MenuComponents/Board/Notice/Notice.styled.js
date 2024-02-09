import styled from "@emotion/styled";
import 'react-quill/dist/quill.snow.css';


export const Container = styled.div`
  width: 1500px;
  height: 100%;
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

export const NoticeBoard = styled.div`

`;

export const NoticeHeader = styled.div`
   display: flex;
   background: #f5f4d3;
   padding: 8px;
   border: 1px solid #dddddd;
   width: 1200px;
`;

export const NoticeContent = styled.div`
  font-size: 10px;
  color: #555;
  padding: 30px 20px;
  text-align: center;
  margin-left: -20px;
  
`;

export const Create = styled.div`
  margin-right: 185px;
  text-align: center;
  display: flex;
  font-size: 12px;

`;

export const PostListLabel = styled.div`
   font-size: 12px;
   font-weight: bold;
   flex: 1;
   padding: 2px;
`;

export const NoticeItem = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  padding: 8px;
  align-items: center;
  margin-bottom: 10px;
  width: 1200px;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const NoticeId = styled.div`
  margin-right: 30px;
  font-size: 11px;
  text-align: center;
  display: flex;
`;

export const Date = styled.div`
  margin-right: 175px;
  text-align: center;
  display: flex;
  font-size: 11px;

`;

export const View = styled.div`
  margin-left: -150px;
  text-align: center;
  display: flex;
`;

export const ItemContent = styled.div`
  flex: 1;
  text-align: center;
  font-size: 12px;
  text-align: left;
  margin-left: 200px;
`;

export const ItemActions = styled.div`
  margin-left: 10px;
`;

export const NoticeTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
`;


export const NoticeDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: #777;
  font-size: 14px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  width: 300px;
  height: 35px;
  margin-top: 15px;
  border-color: aliceblue;
`;



export const NoticeFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  
  `;

export const NoticeDetailContainer = styled.div`
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


export const NoticeForm = styled.form`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export const WriteButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Formcategory = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
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

export const FormInput = styled.input`
  width: 100%;
  height: 38px;
  padding: 8px;
  margin-bottom: 20px;
  border-radius:4px;

`;

export const FormTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 8px;
  margin-bottom: 15px;
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

export const File = styled.div`
  margin-top: 50px;
`;


export const MarkdownPreviewContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 20px;
  border : 1px solid #ddd;
`;


export const NoticeImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  img {
    width: 200px;
    display: flex;
    margin:0 auto;
    height: auto;
  }
`;

export const ConfirmationPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

export const ConfirmationPopupContent = styled.div`
  text-align: center;
  p {
    margin-bottom: 20px;
  }
`;

export const ConfirmationButtons = styled.div`
  button {
    margin: 0 10px;
    padding: 8px 16px;
    cursor: pointer;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
  }
`;

export const EventItem = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px 10px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  margin-right: 150px;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationItem = styled.div`
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#ddd' : 'transparent')};
  border-radius: 4px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`;

export const NoticeFiles = styled.div`
`;

export const ViewCount = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  margin-right: 190px;
`;