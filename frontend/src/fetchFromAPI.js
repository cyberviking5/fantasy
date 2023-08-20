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
    'X-RapidAPI-Key': 'a88a06cba5msh31241e23363be54p1e6570jsn3cd8eefc8da1',
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url)=>{

    const {data} = await axios.get(`${BASE_URL}/${url}`,options);

    return data;
  }
