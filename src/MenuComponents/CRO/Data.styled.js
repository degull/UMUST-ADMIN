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

/* form */
export const DataFormContainer = styled.div`
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

export const DataForm = styled.form`
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

export const File = styled.div`
  margin-top: 50px;
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

export const DataContent = styled.div`
  font-size: 10px;
  color: #555;
  padding: 30px 20px;
  text-align: center;
  margin-left: -20px;
  
`;

/* Board */
export const InfoHeader = styled.div`
   display: flex;
   background: #f5f4d3;
   padding: 8px;
   border: 1px solid #dddddd;
   width: 1200px;
`;

export const PostListLabel = styled.div`
   font-size: 12px;
   font-weight: bold;
   flex: 1;
   padding: 2px;
`;

export const InfoItem = styled.div`
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

export const InfoId = styled.div`
  margin-right: 30px;
  font-size: 11px;
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


export const Date = styled.div`
  margin-right: 175px;
  text-align: center;
  display: flex;
  font-size: 11px;

`;

export const Create = styled.div`
  margin-right: 185px;
  text-align: center;
  display: flex;
  font-size: 12px;

`;

export const View = styled.div`
  margin-left: -150px;
  text-align: center;
  display: flex;
`;

export const ViewCount = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  margin-right: 190px;
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

/* Detail */

export const InfoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  `;

export const DetailContainer = styled.div`
width: 1000px;
margin: 30px auto;
margin-right: 150px;
background-color: #fff;
padding: 20px;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const InfoTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
`;

export const InfoImages = styled.div`
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


export const InfoDetails = styled.div`
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



export const InfoFiles = styled.div`
`;

