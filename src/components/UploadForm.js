import React, { useState } from "react"
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProgressBar from './ProgressBar'


export default function UploadForm() {
    
    const [file, setFile] = useState(null);
    const types = ['image/png','image/jpeg'];
    const [error, setError] =  useState(null);

    function changeHandler(e){
        let selected = e.target.files[0];
        console.log(e.target.files);
        
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
            
            
        }else{
            setFile(null);
            setError(toast.error('Please select an image file(jpeg or png)',{autoClose:3000}));
        }
    }

   

    return (
        <div className='upload-container' style={{textAlign:'center'}}>
            <h1 className='heading'>A Click Of Artistic Joy!</h1>
            <h3> Click below to upload a pic </h3>
            <ToastContainer />
            <form className='upload-form'>
                <label>
                    <input type='file' style={{display:'none'}} onChange={changeHandler} />
                    {/* <span>+</span> */}
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera fontSize='large' />
                    </IconButton>
                  
                </label>
                <div className='output' >
                    {error }  
                    {file && <div>{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
                    
                </div>
            </form>
        </div>
    )
}


