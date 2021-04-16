import React from 'react'
import useFirestore from '../Hooks/useFirestore'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import { db } from '../firebase_config';
// import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
// import {db} from '../firebase_config'
// import firebase from 'firebase'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 980,
      height: 500,
      
    },
    titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

export default function Imagegrid({ setSelectedImg, likes,doc }) {
    const {docs} = useFirestore('images');
    console.log(docs);
    const classes = useStyles();

    /* var [liked, setLiked] = useState(false);
    
    const handleLike =async (type)=>{
      let likecount =doc.likes; 

      if(type === 'liked'){
        likecount++;
      }

      await db.collection('images').doc(doc.id).set({
        likecount
      })
      // liked++;
      // setLiked(liked)
      
    }*/
   

    return (
      
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList} cols={3} spacing={5}>
                
                {docs && docs.map((doc) => (
                <GridListTile key={doc.id} >
                    
                    <img src={doc.url} alt='uploaded pic' onClick={()=>setSelectedImg(doc.url)} />
                    <GridListTileBar className={classes.titleBar}
                    actionIcon={
                        <IconButton className={classes.icon}>
                          
                          {/* liked ? (<FavoriteIcon onClick={(e)=> setLiked(false)} />) */}
                          {/* :(<FavoriteBorderIcon onClick={(e)=> setLiked(true)} />) */}
                        {/* <p>{liked ? likes + 1 : likes}</p> */}
                        
                        {/* <FavoriteBorderIcon  /> */}
                        </IconButton>
                    }
                    />
                </GridListTile>
                ))}
            </GridList>
    </div>
    )
}








