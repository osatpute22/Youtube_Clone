import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    
    
    params: {
        maxResults: 50,
    },
    headers: {
      'X-RapidAPI-Key': '5fc5f5612fmshf7ddc7d00b2d960p14e082jsnd9c4ce8d6bcd',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI =async (url) =>{
    const { data }= await axios.get(`${BASE_URL}/${url}`, options);
    return data;

  }