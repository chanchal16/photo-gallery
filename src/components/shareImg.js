
import React from 'react'

import { FacebookShareButton,EmailShareButton, PinterestShareButton,WhatsappShareButton,TwitterShareButton,
FacebookIcon,PinterestIcon,WhatsappIcon,EmailIcon,TwitterIcon } from "react-share";



export default function ShareImg(selectedImg) {
    
    return (
  
        <div className='social-links'  >
                
                   
            <FacebookShareButton url={'https://efecto.netlify.app'} media={selectedImg.url}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton url={'https://efecto.netlify.app'} media={selectedImg.url}>
                <TwitterIcon size={32} round />
            </TwitterShareButton>

            <WhatsappShareButton url={'https://efecto.netlify.app'} media={selectedImg.url}>
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <EmailShareButton url={'https://efecto.netlify.app'} media={selectedImg.url}>
                <EmailIcon size={32} round />
            </EmailShareButton>
         
        </div>

    )
}
