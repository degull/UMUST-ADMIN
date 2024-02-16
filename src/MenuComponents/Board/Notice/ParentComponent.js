import React from 'react';
import NoticeDetail from './NoticeDetail';

const ParentComponent = () => {
  const handleDelete = (noticeId) => {
    console.log(`Deleting notice with ID ${noticeId}`);
  };

  console.log('ParentComponent - handleDelete:', handleDelete);

  return (
    <div>
      <NoticeDetail onDelete={handleDelete} />
    </div>
  );
};

export default ParentComponent;
