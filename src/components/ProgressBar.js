import React,{useEffect} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import usestorage from '../Hooks/useStorage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ProgressBar({file,setFile}) {
    
    const {url,progress}= usestorage(file);

    useEffect(() => {
       
        if(url){
            setFile(null);
            toast.success('Pic uploaded successfully!',{autoClose:3000})
        }
        
    }, [url,setFile])

    

    return (
        <div>
            <ToastContainer />
            <CircularProgress variant="determinate" value={progress} /> 
        </div>
    )
}
