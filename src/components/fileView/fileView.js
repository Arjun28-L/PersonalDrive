import React, { useEffect, useState } from 'react';
import { db, collection, onSnapshot } from '../../firebase'; 
import FileItem from './fileItem'; 
import '../../styles/FileView.css'
import FileCard from './FileCard'

const FileView = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const filesCollection = collection(db, 'myFiles');
    const unsubscribe = onSnapshot(filesCollection, snapshot => {
      setFiles(snapshot.docs.map(doc => ({
        id: doc.id,
        item: doc.data()
      })));
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <div className='fileView'>
      <div className='fileView__row'>
       {
        files.slice(0,5).map(({id, item}) => (
          <FileCard key={id} name={item.caption} fileUrl={item.fileUrl} />
        ))
       }
      </div>
      <div className='fileView__titles'>
        <div className='fileView__titles--left'>
          <p>Name</p>
        </div>
        <div className='fileView__titles--right'>
          <p>Last modified</p>
          <p>File size</p>
        </div>
      </div>
      {files.map(({ id, item }) => (
        <FileItem 
          key={id} 
          id={id} 
          caption={item.caption} 
          timestamp={item.timestamp} 
          fileUrl={item.fileUrl} 
          size={item.size} 
        />
      ))}
    </div>
  );
};

export default FileView;
