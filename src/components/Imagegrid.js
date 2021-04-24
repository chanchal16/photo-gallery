import React from 'react';
import useFirestore from '../Hooks/useFirestore'
import LikeImg from './LikeImg';



export default function Imagegrid({ setSelectedImg}) {
    const {docs} = useFirestore('images');
    console.log('all images: ', docs);


    return (
      <div className='img-container'>
        
          {docs && docs.map((image) =>{
            return(
              <div className='card' key={image.id}>
                <div className='img-wrap' key={image.id}>
                  <img src={image.url} alt='uploaded pic' onClick={()=>setSelectedImg(image.url)} />
                </div>
                  <LikeImg image={image}  />   
                
              </div>
            );
            
          })}
      </div>

    )
}








