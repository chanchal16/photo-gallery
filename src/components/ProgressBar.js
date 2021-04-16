import React,{useEffect} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import usestorage from '../Hooks/useStorage'

export default function ProgressBar({file,setFile}) {
    const {url,progress}= usestorage(file);


    useEffect(() => {
       
        if(url){
            setFile(null);
        }
        
    }, [url,setFile])

    return (
        <div>
            <CircularProgress variant="determinate" value={progress} />  
        </div>
    )
}
