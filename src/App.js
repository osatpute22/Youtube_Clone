import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import {NavBar,Feed,VideoDetails,ChannelDetail,SearchFeed} from './Components';

function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'black'}}>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Feed />}/>
        <Route path="/video/:id" element={<VideoDetails/>}/>
        <Route path="/channel/:id" element={<ChannelDetail/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
      </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;
