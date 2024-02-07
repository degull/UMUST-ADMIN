import styled from "@emotion/styled";

export const Container = styled.div`
   width: 100%;
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

export const AlbumFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const AlbumContainer = styled.div`
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

export const File = styled.div`
  margin-top: 50px;
`;

export const AlbumForm = styled.form`
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

export const AlbumContent = styled.div`
  font-size: 16px;
  color: #555;
  padding: 30px 20px;
  text-align: center;
`;

export const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

export const AlbumItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
`;

export const Thumbnail = styled.div`
  img {
    width: 200px;
    height: 150px;
    border-radius: 4px;

  }
`;

export const AlbumTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

export const CreateDate = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
`;

export const EditButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #bd2130;
  }
`;

export const text = styled.div`
  font-size: 12px;
  padding: 0 0 15px -5px;
  padding-bottom: 10px;
`;

export const AlbumDetailContainer = styled.div`
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

export const AlbumTitle1 = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
`;

export const AlbumImages = styled.div`
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

export const AlbumDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: #777;
  font-size: 14px;
`;


export const Buttons = styled.div`
  display: flex;
  gap: 10px;
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