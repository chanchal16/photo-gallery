import React from 'react'

export default function DownloadImg(image) {
    

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
