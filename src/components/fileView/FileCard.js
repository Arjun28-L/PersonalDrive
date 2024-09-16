import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import React from 'react';
import '../../styles/FileCard.css';

const FileCard = ({ name, fileUrl }) => {
  const openFile = () => {
    window.open(fileUrl, '_blank'); // Opens the file in a new tab
  };

  return (
    <div className='fileCard' onClick={openFile}>
      <div className='fileCard--top'>
        <InsertDriveFileIcon style={{ fontSize: 130 }} />
      </div>
      <p className='fileCard__name'>{name}</p>
    </div>
  );
};

export default FileCard;
