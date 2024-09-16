import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import '../../styles/newfile.css';
import { storage, db } from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function getModalStyle(){
  return {
    top: `50%`,
    left:`50%`,
    transform: `translate(-50%, -50%)`, // Corrected here
  };
}

const userStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const NewFile = () => {
  const classes = userStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;

    setUploading(true);

    const fileRef = storageRef(storage, `files/${file.name}`);

    uploadBytes(fileRef, file).then(() => {
      getDownloadURL(fileRef).then(url => {
        addDoc(collection(db, 'myFiles'), {
          timestamp: serverTimestamp(),
          caption: file.name,
          fileUrl: url,
          size: file.size,
        }).then(() => {
          setUploading(false);
          setOpen(false);
          setFile(null);
        });
      });
    }).catch(error => {
      console.error(error);
      setUploading(false);
    });
  };

  return (
    <div className='newFile'>
      <div className='newFile__container' onClick={handleOpen}>
        <AddIcon />
        <p>New</p>
      </div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <p>Select files you want to upload!</p>
          {
            uploading ? (
              <p>Uploading...</p>
            ) : (
              <>
                <input type="file" onChange={handleChange} />
                <button onClick={handleUpload}>Upload</button>
              </>
            )
          }
        </div>
      </Modal>
    </div>
  );
};

export default NewFile;
