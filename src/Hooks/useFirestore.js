import { useEffect, useState } from 'react'
import {db} from '../firebase_config'


export default function useFirestore(collection) {
    const [docs,setDocs] = useState([]);

    useEffect(() => {
        const unsub = db.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((snapshot)=>{
            let documents = [];
            snapshot.forEach(doc =>{
                documents.push({...doc.data(),id:doc.id,likes:doc.likes});
                
            });
            setDocs(documents);
        });
        return () => unsub();
    }, [collection])

    
    return {docs};
}
