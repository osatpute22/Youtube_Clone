import React from 'react'
import { useState , useEffect } from 'react';
import {Link , useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography ,Box , Stack } from '@mui/material';
import {Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { CheckCircle } from '@mui/icons-material';


const VideoDetails = () => {
const [videoDetail , setVideoDetail]=useState(null);
const [videos ,setVideos] =useState(null);
const {id }=useParams();
useEffect(()=>{
  fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
  .then((data)=>setVideoDetail(data.items[0]));
  fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
   .then((data)=> setVideos(data.items));
},[id]);
if(!videoDetail?.snippet) return 'Loading.....';

const {snippet:{title,channelId,channelTitle} ,
statistics:{viewCount,likeCount}} =videoDetail;

  return (
    <Box minHeight="90vh">
      <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%' , position:'sticky',top:'80px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player" controls
            />
            <Typography color="white"  variant="hs" fontWeight="600"
            p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between"
            sx={{color:"white"}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography 
                variant={{sm:'subtitle1',md:'h5'}} color="white">{channelTitle}
                <CheckCircle sx={{fontSize:'10px',color:'grey',ml:'4px'}}/></Typography>
              </Link>
              <Stack direction="row" gap ="19px" alignItems="center">
                <Typography variant="body1" sx={{opacity:0.6}}>
                  {parseInt(viewCount).toLocaleString()} views
                 </Typography>
                 <Typography variant="body1" sx={{opacity:0.6}}>
                  {parseInt(likeCount).toLocaleString()} views
                 </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1 ,xs:5}}
      justifyContent="center"
      alignItems="center"><Videos videos={videos} direction="column"/>

      </Box>

      </Stack>
      

    </Box>
  )
}

export default VideoDetails