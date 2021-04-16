import React, { useState } from 'react';
import './App.css';
import Imagegrid from './components/Imagegrid';
import Modal from './components/Modal';
import UploadForm from './components/UploadForm';



function App({likes}) {
  const [selectedImg,setSelectedImg] = useState(false);
  
  return (
    <div className="App">
      <nav>
        <span>efecto</span>
      </nav>

      <UploadForm />
      <Imagegrid likes={likes} setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
