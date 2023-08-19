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
    'X-RapidAPI-Key': 'a2ae15490emshba7b6e76542bba6p18d8c1jsn3ec151da107f',
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url)=>{

    const {data} = await axios.get(`${BASE_URL}/${url}`,options);

    return data;
  }
