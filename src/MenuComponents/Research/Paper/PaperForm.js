import React from 'react';
import * as S from './Paper.styled';
import Main from '../../../MainComponents/Main';


const PaperForm = () => {
   return (
      <S.PaperFormContainer>
         <Main />
         <S.FormContainer>
            <S.FormTitle>논문정보 작성</S.FormTitle>

            <S.PaperForm>
               <S.Formcategory>제목:</S.Formcategory>
               <S.FormInput 
               type='text'
               placeholder='제목을 입력하세요'
               />

               <S.Formcategory>Journal</S.Formcategory>
               <S.FormInput 
               type='text'
               placeholder='예 : Bioorg Med Chem'
               />
               <S.Formcategory>Authors</S.Formcategory>
               <S.FormInput 
               type='text'
               placeholder='예: Baek S, Choi NH, Lee KP, Jhun H, Kim J.'
               />
               <S.Formcategory>Date</S.Formcategory>
               <S.FormInput 
               type='text'
               placeholder='예 : OCT 2023'
               />


            </S.PaperForm>
            


            
         </S.FormContainer>
      </S.PaperFormContainer>
   );
};

export default PaperForm;