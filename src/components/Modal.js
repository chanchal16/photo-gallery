import React from 'react'
import ShareImg from './shareImg';



const Modal=({selectedImg,setSelectedImg})=> {
    
     const handleClick = (e) =>{
         if(e.target.classList.contains('backdrop')){
             setSelectedImg(null);
         }
     }

     
    return (
        <div className='backdrop' onClick={handleClick}>
            
            <img src={selectedImg} alt='enlarged pic' />
            
                <ShareImg  simg={selectedImg} />
        </div>

    )
}

export default Modal;