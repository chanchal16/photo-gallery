import React from 'react'
// import useFirestore from '../Hooks/useFirestore'
// import { GetAppOutlined } from '@material-ui/icons';
// import { saveAs,FileSaver } from 'file-saver';
// import Axios from 'axios'





export default function DownloadImg(image) {
    
    /*function downloadFile(absoluteUrl) {
        var link = document.createElement('a');
        link.href = absoluteUrl;
        link.download = 'Download.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
     };

     let btnDownload = document.querySelector('button');
     let img = document.querySelector('img');
      
      
     // Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
     if(btnDownload){
        btnDownload.addEventListener('click', () => {
            let imagePath = img.getAttribute('src');
            let fileName = getFileName(imagePath);
            saveAs(imagePath, fileName);
        });
     }
    
      
     function getFileName(str) {
         return str.substring(str.lastIndexOf('/') + 1)
     }*/

     const download = () => {
        let element = document.createElement("a");
        let file = new Blob(
          [
            image.url
          ],
          { type: "image/*" }
        );
        element.href = URL.createObjectURL(file);
        element.download = "image.jpg";
        element.click();
    }

      // const formatBytes = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
      // console.log(formatBytes);



    
    return (
      
        <div>
          

            <a
            href={image.url}
            download
            onClick={(e) => download(e)}
            >download</a>

        </div>
    )
}
