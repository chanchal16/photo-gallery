import React, { useState } from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Switch, FormControlLabel, Paper } from "@material-ui/core";
import './App.css';
import Imagegrid from './components/Imagegrid';
import Modal from './components/Modal';
import UploadForm from './components/UploadForm';
import Footer from './components/Footer';



const themeObject = {
 
  palette: {
      primary: { main: "#3f51b5" },
      secondary: { main: "#c78118" },
      type: "light"
    }
    
};

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject);

  const {
    palette: { type }
  } = theme;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? "dark" : "light"
      }
    };
    setTheme(updatedTheme);
  };
  return [theme, toggleDarkMode];
};

  

 

function App() {
  const [selectedImg,setSelectedImg] = useState(false);
  const [theme, toggleDarkMode] = useDarkMode();
  //const [liked, setLiked] = useState(false);

  const themeConfig = createMuiTheme(theme);
  console.log(themeConfig);
  
  

  
  return (
    <MuiThemeProvider theme={themeConfig}>
      <Paper>
       <div className="App">
        <nav>
          <span>efecto</span>
        </nav>
        <main className='main-content'>
          <FormControlLabel
            control={
              <Switch onChange={toggleDarkMode} label={`Toggle Dark Mode`} />
            }
          />

          <UploadForm />
          <Imagegrid  setSelectedImg={setSelectedImg}/>
          {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
        </main>
        
            
        <Footer />
      </div>
      </Paper>
    </MuiThemeProvider>
        
  );
}

export default App;
