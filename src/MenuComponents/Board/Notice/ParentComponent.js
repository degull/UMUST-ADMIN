// ParentComponent.js
import React from 'react';
import NoticeDetail from './NoticeDetail';

const ParentComponent = () => {
  const handleDelete = (noticeId) => {
    // Implement the logic for deleting a notice
    console.log(`Deleting notice with ID ${noticeId}`);
  };

  // 확인용으로 로그를 찍어보기
  console.log('ParentComponent - handleDelete:', handleDelete);

  return (
    <div>
      {/* Pass the onDelete prop to the NoticeDetail component */}
      <NoticeDetail onDelete={handleDelete} />
    </div>
  );
};

export default ParentComponent;
