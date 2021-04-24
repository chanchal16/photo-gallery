import { useState, useEffect } from "react"
import {projstorage, db,timestamp} from '../firebase_config'

const useStorage=(file)=> {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //create a ref to store the file inside firebase storage,when uploading the file shud have name 
        const storageRef = projstorage.ref(file.name)
        const collectionRef = db.collection('images');
        //put the file in the storage,async h isliye listner liya which will fire fun when state changes
        storageRef.put(file).on('state_changed',(snapshot)=>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        },(err)=>{
            setError(err);
        }, async ()=>{      //fires when upload is complete
            const URL = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            let name = 'image'
            let likecount=0;
            let liked=false;
            console.log(liked);

            collectionRef.add({url:URL,createdAt, name,likecount,liked});
            setUrl(URL);

        })
        

    }, [file])

    return {progress, error, url} 
    
}



export default useStorage
