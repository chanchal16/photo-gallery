import React, { useEffect, useState } from 'react'
import { db, increment } from '../firebase_config';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const useStyles = makeStyles((theme) => ({
    icon: {
        color: 'gray',
        padding:0
      }
    }));

export default function LikeImg({image}) {
  const [like,setLike] = useState(localStorage.getItem('liked') === 'true');
    const classes = useStyles();

    useEffect(() => {
      localStorage.setItem('imageId',image.id);
    }, [image.id])


    const handleLike = (image)=>{
        console.log('like clicked');
        localStorage.setItem('liked',like);
        
        db.collection('images').doc(image.id).update({
          likecount:increment,
           
        });

        setLike( !like );
        console.log('clicked image: ', image)
    }

      
    return (
        <div>             
            <IconButton className={classes.icon} disabled={like} onClick={()=>handleLike(image)}>
              {like ? <FavoriteIcon style={{color:'#b71c1c'}}  /> : <FavoriteBorderIcon  />} 
              <span> {image.likecount}</span></IconButton>
                    
        </div>
    )
}
