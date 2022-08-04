import axios from 'axios';

const baseUrl = 'https://api.coinpaprika.com/v1/';

const coinpaprika = axios.create({
  baseURL: baseUrl,
});

export default coinpaprika;
