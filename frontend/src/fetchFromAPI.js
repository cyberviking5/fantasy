import axios from 'axios'

const BASE_URL = 'https://livescore6.p.rapidapi.com/matches/v2'

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    Category: 'soccer',
    Timezone: '-7'
  },
  headers: {
    'X-RapidAPI-Key': '5a96931f16mshda9e9f1d53db236p1ac656jsnc7ddbd86dcb3',
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url)=>{

    const {data} = await axios.get(`${BASE_URL}/${url}`,options);

    return data;
  }
